const { Schema, model } = require("mongoose");

const GameSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

GameSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model("Game", GameSchema);
