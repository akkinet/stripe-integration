import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    features: [String],
    price: Number,
    group: String
})

export default mongoose.models.Product || mongoose.model("Product", productSchema);