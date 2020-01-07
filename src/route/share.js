const express = require('express')
const router = express.Router()

const {
    readMovie,
    addMovie,
    updateMovie
} =require('../controller/share')

router
    .get('/', readMovie)
    .post('/', addMovie)
    .put('/', updateMovie)
module.exports = router