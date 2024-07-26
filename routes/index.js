const express = require('express')
const knightsRoutes = require('./knightsRoutes')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('API Home');
});

// Rotas de usuários
router.use('/knights', knightsRoutes);

module.exports = router;