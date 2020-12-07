const expres = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Post = require('./Post')
const PostController = require('./controllers/posts')
const app = expres()
const router = expres.Router()
mongoose.connect('mongodb+srv://diaa:lWKNSBiLhRkCa8KQ@cluster0.cqyqa.mongodb.net/cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true
}, (r) => {
    console.log('Connected')

})

// midlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', PostController)

app.listen(3000)