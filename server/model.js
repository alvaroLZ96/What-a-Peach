const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'you must have a name'],
    },
    age: {
      type: Number,
      min: 19,
      max: [65, 'You must be retired'],
      required: true,
    },
    status: { type: String, enum: ['active', 'retired'], default: 'active' },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'teams' },
    favDrink: {
      type: String,
      enum: {
        values: ['water', 'milk'],
        message: '{VALUE} is not allowed',
      },
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('players', playerSchema);
