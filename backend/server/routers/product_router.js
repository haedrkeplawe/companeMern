const express = require("express")
const router = express.Router()
const product_controller = require("../controller/product_controller")

router.route("/").
    get(product_controller.getAllProducts).
    patch(product_controller.updateProducts)
router.get("/single", product_controller.getOneProduct)

module.exports = router