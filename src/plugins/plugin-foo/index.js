const fp = require('fastify-plugin');
const { FastifyPluginAsync } = require('fastify')

const plugin = async(server) => {
  server.log.info('registering my-plugin-with-dependency')

  server.decorateRequest('my-plugin-with-dependency', () => {
    console.log('test');
  });


}

module.exports = fp(plugin, { name: 'my-plugin-with-dependency',
dependencies: ['my-plugin'], })
