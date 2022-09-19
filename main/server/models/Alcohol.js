const mongoose = require('mongoose');

const { Schema } = mongoose;

const alcoholSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Alcohol = mongoose.model('Alcohol', alcoholSchema);

module.exports = Alcohol;