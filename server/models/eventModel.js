const mongoose = require("mongoose");

const event = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A event must have a title"],
  },
  coverImg: {
    type: String,
    //required: [true, "A event must have a cover image"],
  },
  registerLink: {
    type: String,
  },
  description: {
    type: String,
    //required: [true, "A event must have a description"],
  },
  dateOfEvent:{
    type: Date,
    //required: [true, "A event must have a date"],
  },
  
});
