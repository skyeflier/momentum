const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  subscriptions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Subscription'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
