//dummy user info here for saving it into our database .
const express = require("express"); // we are write or creating  our dummy user here to save in our databse using expressjs
const router = express.Router(); // for this we require express router here to save our data
const User = require("../models/User"); // retrieving data from user.js file to save this dumy data in that format to our mongodb databse and save there like a schema for more look at user.js file .
const { body, validationResult } = require("express-validator");
const jwt =require("jsonwebtoken"); //for webtoken authorization 
const bcrypt = require("bcryptjs"); //this require for password encryption using salt
const jwtSecret = "ThisIsMySigntaureForHungerGo$159"; //signature for jwt token authorization
//from line 8-32 this is route request in backend  for sigup ,as a createuser we are here creating a new user and filling their data in our database as a new user .
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name", "enter full name").isLength({ min: 5, max: 15 }),
    body("password", "Invalid password").isLength({ min: 5, max: 10 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10); // here we are creating salt as object and genrating it with $10 and all the functions in bcryptjs are asynchronous
    let secPassword = await bcrypt.hash(req.body.password, salt); // here we are creating set password as a variable and in this we are store it in as password+salt wahich is encrypted

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

//from line 35-   this is route request in backend here for login page ,as a loginuser  checking users email id and password whether it is correct or not

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Invalid password").isLength({ min: 5, max: 10 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email }); //findone parameter is use for finding the email in our saved databse
      if (!userData) {
        return res.status(400).json({ errors: "Email id not found" });
      }
      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      ); // comparing our encrypted password with the users login password means in database it is stored in encypted format and user login with numeric password so it compare that users password with databse saved password here
      if (pwdCompare) {
        return res.status(400).json({ errors: "user not found" });
      }

      const data = {
        user: {
          id: userData.id, //here this is our users database unique Id
        },
      };

      const authToken = jwt.sign(data, jwtSecret); // stores usersid and signature in authtoken and header is different
      return res.json({ success: true, authToken: authToken  }); /// with success we are printing our authtoken for user
    } catch (error) {
      console.log(error);
    }
  }
);
module.exports = router;
