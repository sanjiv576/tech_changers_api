//Importing mongoose module.
const mongoose = require("mongoose");

//Importing the join model between user and request.
const waterRequestSchema = require("./water-request");

//Creating schema for user.
const userSchema = new mongoose.Schema({
  //Required fields.
  contactNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 7,
    required: true,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "supplier"],
    default: "user",
  },

  fullName: {
    type: String,
  },

  userPhoto: {
    type: String,
    default: "mountain.jpeg"
  },

  //Embedded document.
  waterRequest: [waterRequestSchema],

  satisfied: {
    type: Boolean
  }
});

//Making sure password is not exposed.
userSchema.set("toJSON", {
  transform: (document, returnedDocument) => {
    returnedDocument.id = document._id.toString();
    delete returnedDocument._id;
    delete returnedDocument.password;
    delete returnedDocument.__v;
  },
});

//Exporting the mongoose model.
module.exports = mongoose.model("User", userSchema);
