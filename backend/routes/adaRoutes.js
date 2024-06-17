const express = require('express');
const { getADABalance, convertADAToUSD } = require('../controllers/adaController');
const router = express.Router();

router.get('/balance/:walletAddress', getADABalance);
router.get('/convert', convertADAToUSD);

module.exports = router;
