const { redisClient } = require('../config')
const knightsRepository = require('../repositories/knightsRepository')
const { createQueryByFilters } = require('../utils/filter')
const { calculateAge } = require('../utils/calculateAge')

async function createKnights (knight) {
  await redisClient.flushDb()
  return await knightsRepository.create(knight)
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
  const cacheKey = filters ? `kinightsKey - ${filters}` : 'kinightsKey - nofilter'
  const cachedData = await redisClient.get(cacheKey)
  if (cachedData) {
    console.log('cached! 🛢️🛢️')
    return JSON.parse(cachedData)
  }
  // filter query
  const query = createQueryByFilters(filters)
  const result = await knightsRepository.find(query, cacheKey)

  const formated = result.map((item) => {
    const age = calculateAge(item.createdAt)
    return {
      name: item.name,
      age: age,
      weapons: item.weapons.length,
      attribute: item.keyAttribute,
      attack: 'wip',
      exp: Math.floor((age - 7) * Math.pow(22, 1.45))
    }
  })

  console.log(formated)
    // set cache
  await redisClient.set(cacheKey, JSON.stringify(formated), {
    EX: 3600
  })
  return formated
}

module.exports = {
  createKnights,
  editKnights,
  deleteKnights,
  getKnight,
  getAllKnight
}
