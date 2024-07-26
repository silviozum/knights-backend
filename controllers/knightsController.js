const knightsService = require('../services/knightsService')

function getAllKnights (req, res) {
    return res.send('something in the way')
}

async function createKnights(req, res) {
    // validate attributes
    const { attributes } = req.body;
    if (attributes) {
        const hasAttributesValues = Object.values(attributes).some(value => value > 0)
        if (hasAttributesValues) {
            return res.status(400).send({ error: 'Initial knights attributes must be greater than 0' })
        }
    } else {
        return res.status(400).send({ error: 'Attributes are required' })
    }

    try {
        const knight = await knightsService.createKnights(req.body)
        res.status(201).send(knight)
    } catch (error) {
        console.error('Error creating knight:', error)
        res.status(400).send({ error: error.message })
    }
}

async function editKnight(req, res) {
    try {
        const knight = await knightsService.editKnights(req.body, req.params.id)
        res.status(201).send(knight)
    } catch (error) {
        console.error('Error updating knight:', error)
        res.status(400).send({ error: error.message })
    }
}

async function deleteKnight(req, res) {
    try {
        const deleted = await knightsService.deleteKnights(req.params.id)
        res.status(201).send(deleted)
    } catch (error) {
        console.error('Error deleting knight:', error)
        res.status(400).send({ error: error.message })
    }
}

module.exports = {
    getAllKnights,
    createKnights,
    editKnight,
    deleteKnight
} 