const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/survivalist');

const PlayerSchema = new mongoose.Schema({
  wallet: String,
  gold: { type: Number, default: 0 },
  inventory: []
});

module.exports = mongoose.model('Player', PlayerSchema);