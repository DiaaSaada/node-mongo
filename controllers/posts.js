const expres = require('express')
const Post = require('./../Post')
const router = expres.Router()

/**
 * CRUD for posts
 */

router.get('/', async(req, res) => {

    try {
        const posts = await Post.find()
        res.json(posts)

    } catch (err) {
        res.json({ message: err })
    }
})

//specific post
router.get('/:postId', async(req, res) => {

    const postId = req.params.postId;
    try {
        const posts = await Post.findById(postId)
        res.json(posts)

    } catch (err) {
        res.json({ message: err })
    }
})
router.delete('/:postId', async(req, res) => {

    const postId = req.params.postId;
    try {
        const removedPost = await Post.remove({ _id: postId })

        res.json(removedPost)

    } catch (err) {
        res.json({ message: err })
    }
})
router.patch('/:postId', async(req, res) => {

    const postId = req.params.postId;

    try {
        const updatedPOst = await Post.updateOne({ _id: postId }, { $set: { title: "updated title" } })

        res.json(updatedPOst)

    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/', async(req, res) => {
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

module.exports = router