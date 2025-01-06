import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    imgURL:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    isFeatured:{
        type: Boolean,
    },
});

module.exports = mongoose.model("Product", ProductSchema);

