const redis = require('redis')

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

redisClient.on('error', (err) => {
  console.error('Erro ao conectar ao Redis', err);
});

redisClient.connect().catch(console.error)
module.exports = { redisClient};