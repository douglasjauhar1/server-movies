const express = require('express')
const router = express.Router()
const users = require('./users')

router.use('/users', users)
router.get('/', (req, res)=>{
    res.send('Hai Dunia')
})

module.exports = router