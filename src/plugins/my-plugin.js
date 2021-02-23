const fp = require('fastify-plugin');
const { FastifyPluginAsync } = require('fastify')

const plugin = async(server) => {
  server.log.info('registering my-plugin')

  server.decorateRequest('my-plugin', () => {
    console.log('test');
  });


}

module.exports = fp(plugin, { name: 'my-plugin' })
