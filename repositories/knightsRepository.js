const Knights = require('../models/knights')

async function create (knightData) {
  const knight = new Knights(knightData)
  return await knight.save()
};

async function findByIdAndUpdate (data, id) {
  const updatedata = await Knights.findByIdAndUpdate(id, data, { new: true })
  return updatedata
}

async function findByIdAndDelete (id) {
  const deleted = await Knights.findByIdAndDelete(id)
  return deleted
}
async function findById (id) {
  const getOne = await Knights.findById(id)
  return getOne
}

async function find (query) {
  const getAll = await Knights.find(query)
  return getAll
}

module.exports = {
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
  findById,
  find
}