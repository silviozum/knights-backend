const knightsService = require('../services/knightsService')

async function createKnights(req, res) {
    try {
        const knight = await knightsService.createKnights(req.body)
        res.status(201).send(knight)
    } catch (error) {
        console.error('Error creating knight:', error)
        res.status(400).send({ error: error.message })
    }
}

async function editKnight(req, res) {
    const data = { $set: req.body }
    try {
        const knight = await knightsService.editKnights(data, req.params.id)
        res.status(201).send(knight)
    } catch (error) {
        console.error('Error updating knight:', error)
        res.status(400).send({ error: error.message })
    }
}

async function deleteKnight(req, res) {
    const data = {heroe: true, deletedAt: new Date()}
    console.log(data)
    try {
        const deleted = await knightsService.editKnights(data, req.params.id)
        res.status(201).send(deleted)
    } catch (error) {
        console.error('Error deleting knight:', error)
        res.status(400).send({ error: error.message })
    }
}

async function getKnight(req, res) {
    try {
        const getOne = await knightsService.getKnight(req.params.id)
        res.status(201).send(getOne)
    } catch (error) {
        console.error('Error to get knight:', error)
        res.status(400).send({ error: error.message })
    }
}

async function getAllKnights(req, res) {
    const filters = req.query.filter
    try {
        const getAll = await knightsService.getAllKnight(filters)
        res.status(201).send(getAll)
    } catch (error) {
        console.error('Error to get knight:', error)
        res.status(400).send({ error: error.message })
    }
}

module.exports = {
    getAllKnights,
    createKnights,
    editKnight,
    deleteKnight,
    getKnight
} 