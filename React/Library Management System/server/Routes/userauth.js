import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../Model/Schema.js";
const userauth = Router();

userauth.post("/signup", async (req, res) => {
  try {
    const {  name,email,password,role} = req.body;
    

    const existingUser = await User.findOne({ email });
    console.log('Existing User :',existingUser);
    
    if (existingUser) {
        console.log("User  already exist");
        return res.status(401).json({ msg: "User already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10); //encrypting password

      const NewUser = new User({
        name,
        email,
        password:hashedPassword,
        role
      });
      await NewUser.save();
      console.log("---------sign up----------");
      res.status(201).send("signed up");
    }
  } catch {
    res.status(500).send("Internal Server Error");
  }
});

// login page

userauth.post("/login", async (req, res) => {
  try {
    console.log("------LogIn Page ------");
    const { email,password } = req.body;
    const result = await User.findOne({ email });

    if (!result) {
      res.status(400).send("Enter valid Username");
    } else {
      console.log(result.password);
      const valid = await bcrypt.compare(password, result.password); //comparing login password and sign up password
      console.log(valid);

      if (valid) {
        const token = jwt.sign(
          { email:email},
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );
        console.log(token);
        res.cookie("authToken", token, {
          httpOnly: true,
        });

        res.status(200).send("Logged in Successfully");
        console.log("Logged in Successfully");
      } else {
        res.status(401).send("Unauthorised Access");
      }
    }
  } catch {
    res.status(500).send("Internal Server Error");
  }
});

export { userauth };
