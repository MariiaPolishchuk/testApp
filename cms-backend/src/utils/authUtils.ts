// import jwt from 'jsonwebtoken';
// import { IUser } from '../models/userModel';
// import { JWT_SECRET } from '../config/env';

// export const generateToken = (user: IUser): string => {
//   return jwt.sign(
//     { id: user._id, isAdmin: user.isAdmin },
//     JWT_SECRET,
//     { expiresIn: '1h' }
//   );
// };

// export const verifyToken = (token: string): any => {
//   try {
//     return jwt.verify(token, JWT_SECRET);
//   } catch (error) {
//     return null;
//   }
// };
// src/utils/authUtils.ts
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env';

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};
