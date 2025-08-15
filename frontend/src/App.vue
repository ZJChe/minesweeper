<template>
  <div id="app">
    <h1>Minesweeper</h1>
    <Board />
  </div>
</template>

<script>
import Board from './components/Board.vue'
export default {
  name: 'App',
  components: { Board }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 20px;
}
</style>
