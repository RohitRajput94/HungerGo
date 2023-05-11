//main file where we are taking our subfile code
const express = require("express");
const app = express();
const port = 8000; // using our own port
const mongoDB = require("./db"); // importing data from database file .

app.use((req,res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with,Content-Type,Accept"
  );
  next();
});

app.use(express.json()); // \\from createuserfile and using there router\\ require for executions when we are using expressjs as a json format
app.use("/api", require("./Routes/CreateUser")); // api request for the directory to create a user details here using routes
app.use("/api", require("./Routes/DisplayData")); // api for display data from backend 
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


