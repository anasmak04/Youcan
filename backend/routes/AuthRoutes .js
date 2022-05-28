const express = require('express')
const router = express.Router()
const {register,login,myEmail,mycontact} = require('../controllers/auth')
const User = require('../models/User')
const email = require('../models/Email')
const contact = require('../models/Contact')

router.post('/register', register)
router.post('/login', login)
router.post('/myEmail',myEmail)
router.post('/Contact',mycontact)
module.exports = router