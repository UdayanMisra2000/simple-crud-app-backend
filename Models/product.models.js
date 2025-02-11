const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity cannot be negative']
    },
    category: {
        type: String,
        lowercase: true,
        enum: {
            values: ['fruit', 'vegetable', 'dairy', 'meat', 'seafood'],
            message: 'Category must be either fruit, vegetable, meat, seafood or dairy'
        }
    },
    isOrganic: {
        type: Boolean,
        default: false
    },
    imageUrl: {
        type: String,
        default: 'https://example.com/default-product-image.jpg' // Replace with a valid image URL
    }
}, {
    timestamps: true
});

// Add indexing to optimize searches
productSchema.index({ name: 1 });
productSchema.index({ category: 1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
