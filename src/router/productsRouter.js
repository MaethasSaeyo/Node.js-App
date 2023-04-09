const express = require('express');
const productsRouter = express.Router();
const products = require("../Data/products.json");


productsRouter.route("/").get((req, res) => {
    res.render('products.ejs', {
      products,
    }
    )
  })
  
  productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id
    res.render('product.ejs',{
      product:products[id]
    })
  })
  
  module.exports = productsRouter;