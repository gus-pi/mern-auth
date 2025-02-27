import asyncHandler from 'express-async-handler';

export const authUser = asyncHandler(async (req, res) => {
  res.json({ message: 'success' });
});
