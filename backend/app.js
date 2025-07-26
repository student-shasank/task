const express = require("express")
const app = express()
const port = 8080;
const User = require("./model/user")
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors())
app.use(express.json())
try {
    mongoose.connect("mongodb://localhost:27017/task")
    console.log("Connected to MongoDB")
} catch (error) {
    console.log("failed", error)
}
// register user route 
app.post("/register",async(req,res)=>{
    try {

const newuser = await new User({...req.body})
console.log(newuser)
 const registeredUser =  await  newuser.save()
 console.log(registeredUser)
    } catch (error) {
   console.log(error)
 }
})
// admin route 
app.post("/admin", async (req, res) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "admin@123") {
    try {
      console.log("Admin login successful");
      const usersData = await User.find({});
      res.status(200).json(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Server error while retrieving users" });
    }
  } else {
    res.status(401).json({ message: "Invalid admin credentials" });
  }
});


app.listen(port,()=>{
    console.log("http://localhost:8080")
})