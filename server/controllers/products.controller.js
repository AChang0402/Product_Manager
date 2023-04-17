const {Products} = require('../models/products.model')

const handleCreateProduct = (req,res) => {
    Products.create(req.body)
        .then((product)=>{
            return res.json(product);
        })
        .catch((error) => {
            return res.status(400).json({ ...error, message: error.message })
        });
}

const handleGetAllProducts = (req, res) => {
    Products.find()
        .then((products) => {
            return res.json(products)
        })
        .catch((error) => {
            return res.status(400).json({...error, message: error.message})
        })
}

const handleGetProductById = (req, res) => {
    Products.findById(req.params.id)
        .then((product) => {
            return res.json(product)
        })
        .catch((error) => {
            return res.status(400).json({...error, message: error.message})
        })
}

const handleGetProductRandom = (req, res) => {
    Products.aggregate([{ $sample: { size: 1 } }])
        .then ((product) => {
            return res.json(product)
        })
        .catch((error) => {
            return res.status(400).json({...error, message: error.message})
        })
}

const handleDeleteProductById = (req, res) => {
    Products.findByIdAndDelete(req.params.id)
        .then((product) => {
            return res.json(product)
        })
        .catch((error) => {
            return res.status(400).json({...error, message: error.message})
        })
}

const handleUpdateProductById = (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
        .then ((product) => {
            return res.json(product)
        })
        .catch((error) => {
            return res.status(400).json({...error, message: error.message})
        })
}


module.exports = {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetProductById,
    handleDeleteProductById,
    handleUpdateProductById
}