const path = require('path');

const fastify = require('fastify')({ logger: true })
const autoload = require('fastify-autoload');

fastify.register(autoload, {
  dir: path.join(__dirname, 'plugins'),
  maxDepth: 2,
});

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
