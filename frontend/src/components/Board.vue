<template>
  <div class="board">
    <div class="controls">
      <label>Rows: <input type="number" v-model.number="rows" min="1" /></label>
      <label>Cols: <input type="number" v-model.number="cols" min="1" /></label>
      <label>Mines: <input type="number" v-model.number="mines" min="0" /></label>
      <button @click="newGame">New Game</button>
    </div>

    <div class="grid" :style="gridStyle">
      <div
        v-for="cell in flatCells"
        :key="cell.id"
        class="cell"
        :class="{ revealed: cell.revealed, flagged: cell.flagged, mine: cell.isMine && cell.revealed }"
        @click.left="reveal(cell.x, cell.y)"
        @click.right.prevent="toggleFlag(cell.x, cell.y)"
      >
        <span v-if="cell.revealed">
          <template v-if="cell.isMine">💣</template>
          <template v-else-if="cell.adjacent>0">{{ cell.adjacent }}</template>
          <template v-else>&nbsp;</template>
        </span>
        <span v-else-if="cell.flagged">🚩</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import api from '../services/api'

export default {
  name: 'Board',
  setup () {
    const rows = ref(9)
    const cols = ref(9)
    const mines = ref(10)

    // simple local state for initial demo; will be replaced by backend calls
    const cells = ref([])

    function makeId(x, y) { return `${x}-${y}` }

    function initLocalBoard() {
      const arr = []
      for (let y = 0; y < rows.value; y++) {
        const row = []
        for (let x = 0; x < cols.value; x++) {
          row.push({ id: makeId(x, y), x, y, isMine: false, revealed: false, flagged: false, adjacent: 0 })
        }
        arr.push(row)
      }
      cells.value = arr
    }

    function newGame() {
      initLocalBoard()
      // try to create game on backend; if backend not available, fallback to local
      api.newGame({ width: cols.value, height: rows.value, mines: mines.value }).catch(() => {
        // backend not available — keep local board
      })
    }

    function reveal(x, y) {
      const c = cells.value[y][x]
      c.revealed = true
      // call backend reveal if available
      api.reveal({ x, y }).catch(() => {})
    }

    function toggleFlag(x, y) {
      const c = cells.value[y][x]
      c.flagged = !c.flagged
      api.flag({ x, y }).catch(() => {})
    }

    const flatCells = computed(() => cells.value.flat())
    const gridStyle = computed(() => ({
      gridTemplateColumns: `repeat(${cols.value}, 36px)`
    }))

    // initialize
    initLocalBoard()

    return { rows, cols, mines, cells, flatCells, gridStyle, newGame, reveal, toggleFlag }
  }
}
</script>

<style scoped>
.board {
  display: inline-block;
  text-align: left;
}
.controls {
  margin-bottom: 12px;
}
.grid {
  display: grid;
  gap: 4px;
}
.cell {
  width: 36px;
  height: 36px;
  background: #c0c0c0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}
.cell.revealed { background: #e8e8e8; cursor: default; }
.cell.flagged { background: #ffd; }
.cell.mine { background: #f88; }
</style>
