const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String  // New field for the image URL
});

module.exports = mongoose.model('Product', productSchema);
