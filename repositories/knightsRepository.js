const Knights = require('../models/knights')

async function create (knightData) {
  const knight = new Knights(knightData)
  return await knight.save()
};

async function findByIdAndUpdate (data, id) {
  const updatedata = await Knights.findByIdAndUpdate(id, { $set: data }, { new: true })
  return updatedata
}

async function findByIdAndDelete (id) {
  const deleted = await Knights.findByIdAndDelete(id)
  return deleted
}

module.exports = {
  create,
  findByIdAndUpdate,
  findByIdAndDelete
}