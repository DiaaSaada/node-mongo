const expres = require('express')
const User = require('../models/User')
const Post = require('../models/Post')
const router = expres.Router()


const Joi = require('@hapi/joi')

router.post('/register', async(req, res) => {

    // Validation before registeration
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(5).max(10).required(),
        name: Joi.string().trim().min(5).max(10).required(),
    })
    const { error } = schema.validate(req.body);

    if (error)
        return res.status(400).send(error)


    // create user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    user.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router