const knightsRepository = require('../repositories/knightsRepository')

async function createKnights (knight) {
  return await knightsRepository.create(knight)
}

async function editKnights (data, id) {
  return await knightsRepository.findByIdAndUpdate(data, id)
}

async function deleteKnights (id) {
  return await knightsRepository.findByIdAndDelete(id)
}

module.exports = {
  createKnights,
  editKnights,
  deleteKnights
}
