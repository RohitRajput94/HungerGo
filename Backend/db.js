//databse connection page to mongodb here using mongoose 
const mongoose = require("mongoose"); // importing mongoose here for setting up database in mongodb
const mongoURI =
  "mongodb://HungerGo:mern123@ac-hhkbdcu-shard-00-00.b0fmvcl.mongodb.net:27017,ac-hhkbdcu-shard-00-01.b0fmvcl.mongodb.net:27017,ac-hhkbdcu-shard-00-02.b0fmvcl.mongodb.net:27017/hungergomern?ssl=true&replicaSet=atlas-cq20vz-shard-0&authSource=admin&retryWrites=true&w=majority"; // my app url to make connections with mongodb database 

mongoose.set("strictQuery", true); // this query is required for mongoose version 6.10.0 here as 'true' validation and 'false' for 7.0 version 
const mongoDB = async () => { // creating mongoDB as a function here using async and await
  await mongoose.connect(mongoURI,{useNewUrlParser: true}, async (err,result) => { // connecting database with our url 
    if(err) console.log("---",err)
    else {
    console.log("Connected"); // for printing connected
    const fetched_data = await mongoose.connection.db.collection("food_items"); // this code or the function we are creating here 'fetched_data' is for taking or read a data from our mongodb database and here food_items is a our database list where we have stored our data 
    fetched_data.find({}).toArray( async function(err,data){
      const food_Category = await mongoose.connection.db.collection("food_Category");
          food_Category.find({}).toArray(function(err,catData){
           
            if(err) console.log(err); // if error then print error 
          else { 
                  global.food_items=data; // else here we are reading our data means our fetched data from database is print here 
                  global.food_Category=catData; 
                 }

          })
        
  })
  }
  });
}


module.exports = mongoDB(); // this codeline is required because here we are exporting this all file data as a mongoDB to the main file which is index.js and this is module . 
