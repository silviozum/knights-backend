const express = require('express')
const knightsController = require('../controllers/knightsController')

const router = express.Router()

router.get('/', knightsController.getAllKnights)
router.post('/', knightsController.createKnights)
router.patch('/:id', knightsController.editKnight)
router.delete('/:id', knightsController.deleteKnight)

module.exports = router;