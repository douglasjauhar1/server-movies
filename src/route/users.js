const express = require('express')
const router = express.Router()

const {
    userStatus,
    logoutUser
} =require('../controller/users')

router
    .put('/', userStatus)
    // .delete('/', logoutUser)
module.exports = router