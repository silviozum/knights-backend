const { redisClient } = require('../config')
const knightsRepository = require('../repositories/knightsRepository')
const { createQueryByFilters } = require('../utils/filter')
const { formatedKnight } = require('../utils/formatedKnight')

async function createKnights (knight) {
  const results = await knightsRepository.create(knight)
  await redisClient.flushDb()
  return formatedKnight(results)
}

async function editKnights (data, id) {
  await redisClient.flushDb()
  return await knightsRepository.findByIdAndUpdate(data, id)
}

async function deleteKnights (id) {
  return await knightsRepository.findByIdAndDelete(id)
}

async function getKnight (id) {
  return await knightsRepository.findById(id)
}

async function getAllKnight (filters) {
  // cache validate
  const cacheKey = filters ? `kinightsKey - ${filters}` : 'kinightsKey - default'
  const cachedData = await redisClient.get(cacheKey)
  if (cachedData) {
    console.log('cached! 🛢️🛢️')
    return JSON.parse(cachedData)
  }
 
  const query = createQueryByFilters(filters)
  const result = await knightsRepository.find(query)

  resultFormated = []

  result.forEach(knight => {
    resultFormated.push(formatedKnight(knight))
  })

  await redisClient.set(cacheKey, JSON.stringify(resultFormated), {
    EX: 3600
  })
  return resultFormated
}

module.exports = {
  createKnights,
  editKnights,
  deleteKnights,
  getKnight,
  getAllKnight
}
