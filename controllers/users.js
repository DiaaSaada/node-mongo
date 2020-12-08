const expres = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Post = require('../models/Post')
const router = expres.Router()
const { registerValidation, loginValidation } = require('./../validations/authValidations')



router.post('/register', async(req, res) => {


    const { error } = registerValidation(req.body)
    if (error)
        return res.status(400).send(error)


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // create user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    user.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router