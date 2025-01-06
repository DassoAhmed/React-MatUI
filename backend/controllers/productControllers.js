import mongoose from 'mongoose'
import { ProductSchema } from '../model/Product'

const Product = mongoose.model('Product', ProductSchema)

export const addNewProduct = async (req, res) => {
    let newProduct = new Product(req.body)
    try{
        const product = await newProduct.save()
        res.json(product)
    }catch (err){
        res.send(err)
    }
}

export const getProducts = async (req,res) => {
    try{
        const product = await Product.find({})
        res.json(product)
    }catch (err) {
        res.send(err)
    }
}

export const getProductWithId = async (req,res) => {
    try{ 
        const product = await Product.findById(req.params.ProductId)
        res.json(product)
    }catch (err) {
        res.send(err)
    }
}

export const updateProduct = async (req,res) => {
    try{
        const product = await Product.findOneAndUpdate(
                { _id: req.params.ProductId },
                req.body,
                { new: true }           
        )
        res.json(product)
    }catch (err) {
        res.send(err)
    }
}

export const deleteProduct = async (req, res) => {
    try{
        await Product.deleteOne({ _id: req.params.ProductId})
        res.json({ message: 'Successfully deleted Product'})
    }catch (err) {
        res.send(err)
    }
}
