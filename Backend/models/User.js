//user info taken page as a input .
const mongoose = require("mongoose"); // importing mongoose for coonnecting our database 
const { Schema } = mongoose; // we are here creating our users data or saving our data in databse using schema and mongoose 

const userSchema = new Schema({ // as a userSchema we are creating a new schemas here 
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date, // this a type of date means int so taken it as a date normally 
    default: Date.now// storing current date and exact time when user save there data  
  }
});

module.exports = mongoose.model("user", userSchema); /* this is must required line of code
                  means here we are exporting data to the index.js file and as 
                  mongoose  with userSchema and userfiles */ 
  
