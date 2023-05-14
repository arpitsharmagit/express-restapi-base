const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    dbURI: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    domain: {
      type: String,
      unique: true,
      required: true,
    }
  },
  {
    timestamps: true
  }
);

customerSchema.index({
  CustomerId: 1
});

module.exports = mongoose.model("Customer", customerSchema);