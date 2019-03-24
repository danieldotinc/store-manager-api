const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: String,
  imgs: [String],
  category: "",
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories"
  },
  proCode: String,
  diverseCode: String,
  name: String,
  brand: String,
  buyPrice: String,
  refPrice: String,
  breakEvenPrice: String,
  wholePrice: String,
  retailPrice: String,
  marketPlacePrice: String,
  retailStoreStock: String,
  wholeStoreStock: String,
  virtualStoreStock: String,
  boxQuantity: String
});

const Product = mongoose.model("Product", productSchema);

function validateProduct(product) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(255)
      .required()
  };
  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;