/* eslint-disable no-undef */
// import express from 'express';
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// const app = express();

const express = require("express");
const moment = require("moment/moment");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const schema = require("./schema");
// Create an Express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "*",
  })
);
// const port = process.env.PORT || 3000;

// Connect to MongoDB (replace 'your_database_url' with your MongoDB URL)
// mongoose.connect('mongodb+srv://aeromodellingnitkkrdatabase:b4NAfRGGziJSdCM7@auth.4juroxh.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

const User = mongoose.model('User', {
  email: String,
  password: String,
});

app.use(express.json());

// Signup endpoint
app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Create and send a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
