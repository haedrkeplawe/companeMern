const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const ProductSchema = new Schema({
  num_product: Number,
  image: Array,
  imagecolor: Array,
  type: String,
  gen: String,
  priceafter: Array,
  pricebefore: Number,
  rate: Number,
  addToCart: Boolean,
  curentProduct: Number,
  numAdd: Number,
});

// Create a model based on that schema
const Product = mongoose.model("products", ProductSchema);

// export the model
module.exports = Product;
