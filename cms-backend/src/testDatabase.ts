import mongoose, { ConnectOptions } from 'mongoose';
import User from './models/userModel'; // Убедитесь, что путь правильный
import dotenv from 'dotenv';
dotenv.config(); // Загружаем переменные окружения

const testDatabase = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined');
    }

    await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
    } as ConnectOptions);

    // Создайте нового пользователя
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      email: 'testuser@example.com',
      name: 'Test User',
      password: 'securepassword',
      isAdmin: false
    });

    await newUser.save();
    console.log('User created:', newUser);

    // Найдите пользователя
    const user = await User.findOne({ email: 'testuser@example.com' }).exec();
    console.log('User found:', user);

    // Удалите пользователя
    await User.deleteOne({ email: 'testuser@example.com' });
    console.log('User deleted');

  } catch (err) {
    console.error('Database operation failed', err);
  } finally {
    await mongoose.disconnect();
  }
};

testDatabase();

