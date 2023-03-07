const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    nickname: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },

    provider_id: { type: String },
    provider: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'basic'], default: 'basic' },
    fullname: { type: String },
    age: { type: Number },
    height: { type: Number },
    weight: { type: Number },
    diet: {
      type: String,
      enum: ['vegetariana', 'vegana', 'omnívora'],
    },
    status: {
      type: String,
      enum: ['baja forma', 'buena forma', 'muy buena forma'],
    },
    target: {
      type: String,
      enum: ['perder peso', 'musculación', 'definición'],
    },
    equipment: { type: Boolean },
    favRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'recipes' }],
    favWorkouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'workouts' }],
    toDoRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'recipes' }],
    toDoWorkouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'workouts' }],
    completedWorkouts: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'workouts' },
    ],
    completedRecipes: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'recipes' },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model('users', userSchema);
