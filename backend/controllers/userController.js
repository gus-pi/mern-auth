import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

//auth user/set token
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  res.status(200).json({ message: 'success' });
});

//register a user
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user');
  }

  res.status(200).json({ message: 'register user' });
});

//logout a user
export const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'logout user' });
});

//get user profile
export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'user profile' });
});

//update user profile
export const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'update user profile' });
});
