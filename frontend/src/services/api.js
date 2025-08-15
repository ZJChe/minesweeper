const BASE = 'http://localhost:8080'

async function post(path, body) {
  const url = `${BASE}${path}`
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res.json()
  } catch (err) {
    // swallow errors for local-first dev; caller may handle
    console.warn('API error', err.message)
    throw err
  }
}

export default {
  newGame: (opts) => post('/game/new', opts),
  reveal: (opts) => post('/game/reveal', opts),
  flag: (opts) => post('/game/flag', opts)
}
