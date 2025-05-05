import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../Model/Schema.js";
import { authenticate } from "../Middleware/auth.js";
const userauth = Router();

userauth.post("/signup", async (req, res) => {
  try {
    const {  name,email,password} = req.body;
    

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
        role:"user"
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
          {  UserId: result._id,
            role:result.role},
          process.env.SECRET_KEY,
          { expiresIn: "24h" }
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



// Route to check if the user is logged in and get their role
userauth.get('/check-auth', authenticate, (req, res) => {
  try {
    // The authenticate middleware will set `req.user` and `req.role`
    return res.status(200).json({ role: req.role });
  } catch (error) {
    console.error('Error checking auth status:', error);
    return res.status(500).send('Internal Server Error');
  }
});

// Logout route to clear the auth cookie
userauth.post('/logout', (req, res) => {
  res.clearCookie('authToken', { httpOnly: true });
  res.status(200).send('Logged out successfully');
});

export { userauth };
