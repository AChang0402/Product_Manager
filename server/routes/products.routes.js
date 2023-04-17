const {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetProductById,
    handleDeleteProductById,
    handleUpdateProductById
}
= require('../controllers/products.controller')

module.exports = (app) => {
    app.post('/api/products', handleCreateProduct)
    app.get('/api/products', handleGetAllProducts)
    app.get('/api/products/:id', handleGetProductById)
    app.delete('/api/products/:id', handleDeleteProductById)
    app.put('/api/products/:id', handleUpdateProductById)
}