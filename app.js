const expres = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Post = require('./Post')
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

app.get('/', async(req, res) => {

    try {
        const posts = await Post.find()
        res.json(posts)

    } catch (err) {
        res.json({ message: err })
    }
})

//specific post
app.get('/posts/:postId', async(req, res) => {

    const postId = req.params.postId;
    try {
        const posts = await Post.findById(postId)
        res.json(posts)

    } catch (err) {
        res.json({ message: err })
    }
})
app.delete('/posts/:postId', async(req, res) => {

    const postId = req.params.postId;
    try {
        const removedPost = await Post.remove({ _id: postId })

        res.json(removedPost)

    } catch (err) {
        res.json({ message: err })
    }
})
app.patch('/posts/:postId', async(req, res) => {

    const postId = req.params.postId;

    try {
        const updatedPOst = await Post.updateOne({ _id: postId }, { $set: { title: "updated title" } })

        res.json(updatedPOst)

    } catch (err) {
        res.json({ message: err })
    }
})
app.post('/posts', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

app.listen(3000)
    //mongodb+srv://diaa:lWKNSBiLhRkCa8KQ@cluster0.cqyqa.mongodb.net/cluster0?retryWrites=true&w=majority