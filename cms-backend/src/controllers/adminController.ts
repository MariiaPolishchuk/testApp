import { Request, Response } from 'express';
import User from '../models/userModel';


export const setAdmin = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.isAdmin = true;
    await user.save();

    res.json({ message: 'User updated to admin' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
