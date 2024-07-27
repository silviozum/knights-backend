const express = require('express')
const knightsController = require('../controllers/knightsController')

const router = express.Router()

router.post('/', knightsController.createKnights)
router.patch('/:id', knightsController.editKnight)
router.delete('/:id', knightsController.deleteKnight)
router.get('/:id', knightsController.getKnight)
router.get('/', knightsController.getAllKnights)

module.exports = router;