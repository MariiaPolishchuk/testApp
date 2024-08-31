// import { Request, Response } from 'express';
// import User, { IUser } from '../models/userModel';
// import { generateToken } from '../utils/authUtils';
// import bcrypt from 'bcryptjs';

// // Регистрация пользователя
// export const registerUser = async (req: Request, res: Response) => {
//   const { email, name, password, isAdmin } = req.body;

//   if (!email || !name || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const userExists = await User.findOne({ email }) as IUser | null;

//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({
//       email,
//       name,
//       password: hashedPassword,
//       isAdmin: isAdmin || false,
//     });
//     await user.save();

//     res.status(201).json({
//       _id: user._id.toString(),
//       email: user.email,
//       name: user.name,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id.toString()),
//     });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Логин пользователя
// export const loginUser = async (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required' });
//   }

//   try {
//     const user = await User.findOne({ email }) as IUser | null;

//     if (!user) {
//       return res.status(404).json({ message: 'Invalid email' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }

//     res.json({
//       _id: user._id.toString(),
//       email: user.email,
//       name: user.name,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id.toString()),
//     });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };



// import { Request, Response } from 'express';
// import User from '../models/userModel';
// import { generateToken } from '../utils/authUtils';
// import bcrypt from 'bcryptjs';

// export const registerUser = async (req: Request, res: Response) => {
//   const { email, name, password, isAdmin } = req.body;

//   if (!email || !name || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({
//       email,
//       name,
//       password: hashedPassword,
//       isAdmin: isAdmin || false,
//     });
//     await user.save();

//     res.status(201).json({
//       _id: user._id.toString(),
//       email: user.email,
//       name: user.name,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id.toString()),
//     });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// export const loginUser = async (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required' });
//   }

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: 'Invalid email' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password || '');

//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }

//     res.json({
//       _id: user._id.toString(),
//       email: user.email,
//       name: user.name,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id.toString()),
//     });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
// src/controllers/userController.ts
// src/controllers/userController.ts
// src/controllers/userController.ts
import { Request, Response } from 'express';
import User, { IUser } from '../models/userModel';
import bcrypt from 'bcryptjs';

// Регистрация пользователя
export const registerUser = async (req: Request, res: Response) => {
  const { email, name, password, isAdmin } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const userExists = await User.findOne({ email }).exec();

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      name,
      password: hashedPassword,
      isAdmin: isAdmin || false,
    });
    await user.save();

    res.status(201).json({
      _id: user._id.toString(),
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Получение всех пользователей (для администраторов)
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
