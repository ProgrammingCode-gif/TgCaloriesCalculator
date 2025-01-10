const api = require("../services/api")

class ProductController {
    async getProducts(req, res) {
        const productName = req.query.name
        const product = await api.getProductByName(productName)
        res.json(product)
    }
    async getProduct(req, res) {
        const id = req.params.id
        const product = await api.getProductById(id)

        res.json(product)
    }
}

module.exports = new ProductController()