import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shippingAddress: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  goods: [{
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    product_price: { type: Number },
    quantity: { type: Number },
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
})

export const Order = mongoose.model('Order', orderSchema)
export default Order