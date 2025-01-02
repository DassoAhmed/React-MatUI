const express = require("express");
const Product = require("../model/Product");
const { default: Products } = require("../../frontend-app/src/Products");
const router = express.Router();

router.get("/", async(req,res,next) =>{
    let products = await Product.find();

    if(!products){
        return res.status(404).json({message:'No products'})
    }
    res.status(200).json({Products})
});

module.exports = router;