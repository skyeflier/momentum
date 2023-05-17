const mongoose = require('mongoose');

const { Schema } = mongoose;

const subscriptionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 39.99
  }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
