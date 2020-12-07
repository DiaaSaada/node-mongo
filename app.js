//const dotenv = require('dotenv')
const expres = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const PostController = require('./controllers/posts')
const UserController = require('./controllers/users')
const app = expres()
const router = expres.Router()

const dotenv = require('dotenv').config().parsed


mongoose.connect(dotenv.DB_CONNECT, {
    useNewUrlParser: true
}, (r) => {
    console.log('Connected')

})

// midlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', PostController)
app.use('/auth', UserController)

app.listen(3000)