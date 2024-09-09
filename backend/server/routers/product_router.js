const express = require("express")
const router = express.Router()
const product_controller = require("../controller/product_controller")

router.route("/").
    get(product_controller.getAllProducts).
    patch(product_controller.updateProducts).
    post(product_controller.createProducts)

router.get("/single", product_controller.getOneProduct)

router.delete("/", product_controller.deleteProduct)


module.exports = router