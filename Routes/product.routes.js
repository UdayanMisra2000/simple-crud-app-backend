const express = require('express');
const router = express.Router();
const { del, put, post, getById, get } = require('../Controllers/product.controller');

router.get('/', get)

router.get('/:id', getById);

router.post('/', post);
router.put('/:id', put)

router.delete('/:id', del)

module.exports = router; 