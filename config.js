const redis = require('redis')

const redisClient = redis.createClient({
  host: '127.0.0.1', // ou o endereço do seu servidor Redis
  port: 6379,        // porta padrão do Redis
});

redisClient.on('error', (err) => {
  console.error('Erro ao conectar ao Redis', err);
});

redisClient.connect().catch(console.error)
module.exports = { redisClient};