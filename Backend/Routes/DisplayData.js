//this file is for displaying our mongo backend data in frontend .
const express = require("express"); // we are write or creating  our dummy user here to save in our databse using expressjs
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    console.log(global.food_items);
    res.send([global.food_items,global.food_Category]);
  
  } catch (error) {
    console.error(error.message);
    res.send("server error");
  }
});

module.exports = router;
