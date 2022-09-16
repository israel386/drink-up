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
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280
  },
});

const Drinks = mongoose.model('Drinks', drinkschema);

module.exports = Drinks;
