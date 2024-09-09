const Product = require("../models/Product")

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.json(product)
    } catch (error) {
        console.log(error);
    }
}
const getOneProduct = async (req, res) => {
    const id = req.query.id
    try {
        const product = await Product.findById(id)
        res.json(product)
    } catch (error) {
        console.log(error);
    }
}
const createProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.json(product)
    } catch (error) {
        console.log(error)
    }
}
const updateProducts = async (req, res) => {
    const { id, addToCart, rate, numRate, curentProduct, numAdd } = req.body
    try {
        const product = await Product.findByIdAndUpdate(id, { addToCart, rate, numRate, curentProduct, numAdd })
        res.json(product)
    } catch (error) {
        console.log(error)
    }
}
const deleteProduct = async (req, res) => {
    const id = req.query.id
    try {
        const product = await Product.findByIdAndDelete(id)
        res.json(product)
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getAllProducts,
    getOneProduct,
    createProducts,
    updateProducts,
    deleteProduct
}