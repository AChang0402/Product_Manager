const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Required field.'],
            minlength: [2, 'Minimum length is {MINLENGTH}.']
        },
        price: {
            type: Number,
            required: [true, 'Required field.'],
            min: [0, 'Price can not be negative']
        },
        description: {
            type: String,
            required: [true, 'Required field.'],
            minlength: [10, 'Minimum length is {MINLENGTH}.']
        },
    },
    { timestamps: true }
);

const Products = mongoose.model('Products', ProductsSchema)

module.exports = {Products:Products}