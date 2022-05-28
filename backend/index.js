const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
require('dotenv').config()
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const User = require("./models/User")
const email = require("./models/Email")
const contact = require('./models/Contact')


const auth = require("./routes/AuthRoutes ")
app.use(auth)




mongoose.connect(process.env.MONGO_URL,
    err => {
        if(err) throw err
        console.log('database connected')
    }
    )
    

PORT  = 2000
app.listen(PORT, () => {
    console.log(`server run in ${PORT}`)
})