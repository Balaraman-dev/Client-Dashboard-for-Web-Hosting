import express from "express";
import cors from "cors";
import User from "./mongodb/models/register.js";
import connectDB from "./mongodb/connection.js";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/register", async (req, res) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id },"secret", {
      expiresIn: "30d",
    });

    res.status(200).json({ success: true, data: { user, token } });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

app.use("/api/login", async (req, res) => {
    console.log(req.body);
    try{
      const user=await User.findOne({email: req.body.email});
      if(!user){
        return res.status(401).json({success:false,message:"Invalid credentials"});
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
          return res.status(400).json({success:false, message: "Incorrect Password" });
        }
        return res.status(200).json({success:true, message: "LoggedIn" });

    }catch(e){
      res.status(400).json({message:"error"});
    }
  });

app.use("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

app.use("/", (req, res) => {
  res.send("Hello this is the backend");
});

const startServer = async () => {
  try {
    connectDB("mongodb://127.0.0.1:27017/dashboard");
    app.listen(5000, () => {
      console.log("Server is listening on port 5000");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
