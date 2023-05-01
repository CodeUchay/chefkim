const {model, Schema, models} = require("mongoose");

const ProductSchema = new Schema({
    title: {type: String, required:true},
    description: {type: String},
    price1kg: {type: Number, required: true},
    price2kg: {type: Number, required: true},
    price3kg: {type: Number, required: true},
    price5kg: {type: Number, required: true},
    price10kg: {type: Number, required: true},
});

export const Product = models.Product || model('Product', ProductSchema);
