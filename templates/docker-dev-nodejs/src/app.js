import http from 'http'

const { NODE_ENV, PORT } = process.env

console.log(`\n[NODE_ENV] ${NODE_ENV}`)
console.log('debug... \n')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ Hello: 'world!' }))
})

server.listen(PORT, () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`)
})
