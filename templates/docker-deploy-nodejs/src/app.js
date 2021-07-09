import Fastify from 'fastify'

const fastify = Fastify({
  // logger: true,
})
fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world' }
})

fastify.listen(8080, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})
