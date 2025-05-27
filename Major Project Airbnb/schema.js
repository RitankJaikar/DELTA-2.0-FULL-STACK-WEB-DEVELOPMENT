const Joi = require('joi');
const categories = require("./utils/categories");
const categoryNames = categories.map(c => c.category);

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null),
        categories: Joi.array().items(Joi.string().valid(...categoryNames)).max(3)
    }).required()
});

const reviewSchema = Joi.object({
    review: Joi.object({
        comment: Joi.string().required(),
        rating: Joi.number().required().min(1).max(5)
    }).required()
});

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
})

module.exports = {listingSchema, reviewSchema, userSchema};