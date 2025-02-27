import asyncHandler from 'express-async-handler';

//auth user/set token
export const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'success' });
});

//register a user
export const registerUser = asyncHandler(async (req, res) => {
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
