import mongoose from 'mongoose'

const featureSchema = new mongoose.Schema({
  name: String,
  value: String
})

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortDescription: String,
  longDescription: String,
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  Article: String,
  image_url: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  features: [featureSchema],
  isNewProduct: { type: Boolean, default: false }
})

export const Product = mongoose.model('Product', productSchema)
export default Product