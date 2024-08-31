
// src/config/db.ts

// import mongoose from 'mongoose';
// import { MONGO_URI } from './env';

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

// export default connectDB;

// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const connectDB = async () => {
//   try {
//     const mongoURI = process.env.MONGO_URI;
//     if (!mongoURI) {
//       throw new Error('MONGO_URI is not defined');
//     }
//     await mongoose.connect(mongoURI);
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

// export default connectDB;
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      ssl: true, // Добавьте или удалите в зависимости от вашей конфигурации
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Завершает процесс с ошибкой
  }
};

export default connectDB;

// import mongoose, { ConnectOptions } from 'mongoose';

// export const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI!, {
//       useUnifiedTopology: true,
//     } as ConnectOptions);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${(error as Error).message}`);
//     process.exit(1);
//   }
// };
