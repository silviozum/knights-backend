const express = require('express')
const knightsRoutes = require('./knightsRoutes')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Knights Challenge');
});

// Rotas de usuários
router.use('/knights', knightsRoutes);

module.exports = router;