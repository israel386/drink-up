const mongoose = require('mongoose');

const { Schema } = mongoose;

const drinkschema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  ingredients: {
    type: String,
    required: 'You need to add the ingredients',
    minlength: 1,
    maxlength: 280
  },
  image: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Alcohol',
    required: true
  }
});

const Drinks = mongoose.model('Drinks', drinkschema);

module.exports = Drinks;
