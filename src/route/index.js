const express = require('express')
const router = express.Router()
const users = require('./users')
const share = require('./share')

router.use('/users', users)
router.use('/share', share)
router.get('/', (req, res)=>{
    res.send('Hai Dunia')
})

module.exports = router