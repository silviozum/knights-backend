const knightsRepository = require('../repositories/knightsRepository')
const { createQueryByFilters } = require('../utils/filter')

async function createKnights (knight) {
  return await knightsRepository.create(knight)
}

async function editKnights (data, id) {
  return await knightsRepository.findByIdAndUpdate(data, id)
}

async function deleteKnights (id) {
  return await knightsRepository.findByIdAndDelete(id)
}

async function getKnight (id) {
  return await knightsRepository.findById(id)
}

async function getAllKnight (filters) {
  const query = createQueryByFilters(filters)
  return await knightsRepository.find(query)
}

module.exports = {
  createKnights,
  editKnights,
  deleteKnights,
  getKnight,
  getAllKnight
}
