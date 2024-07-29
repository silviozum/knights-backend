const mongoose = require('mongoose');

const knightSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  nickname: {
    type: String,
    required: true,
    trim: true,
    unique:true
  },
  weapons: [{
    name: {type: String, required:true},
    mod: {type: Number, required: true},
    attr: {type: String, required: true},
    equipped: {type: Boolean, required: true}
  }],
  deletedAt: {type: Date},
  attributes: {
    strength: {type: Number, required: true},
    dexterity: {type: Number, required: true},
    constitution: {type: Number, required: true},
    intelligence: {type: Number, required: true},
    wisdom: {type: Number, required: true},
    charisma: {type: Number, required: true}
  },
  keyAttribute: {type: String, required: true},
  image: {type: String}
}, {
  timestamps: true
});

knightSchema.index({ name: 1});

const knightsModel = mongoose.model('knights', knightSchema)

module.exports = knightsModel