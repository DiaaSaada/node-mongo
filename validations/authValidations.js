const Joi = require('@hapi/joi')


const registerValidation = data => {
    // Validation before registeration
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(5).max(10).required(),
        name: Joi.string().trim().min(5).max(10).required(),
    })
    return schema.validate(data);
}


const loginValidation = data => {
    // Validation before login
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(5).max(10).required()
    })
    return schema.validate(data);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;