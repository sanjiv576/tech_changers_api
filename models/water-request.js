//Importing mongoose module.
const mongoose = require("mongoose");

//Relationship: User to RequestWater. One to Many
const requestSchema = new mongoose.Schema({
  //Storing objectid of user. (Foreign Key)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  contactNumber: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  accept: {
    type: String,
    default: false,
  },

  status: {
    type: String,
  }
});

// __v is to be ignored.
requestSchema.set("toJSON", {
  transform: (document, returnDocument) => {
    returnDocument.id = document._id.toString();
    delete returnDocument._id;
    delete returnDocument.__v;
  },
});

//Exporting the mongoose schema.
module.exports = requestSchema;
