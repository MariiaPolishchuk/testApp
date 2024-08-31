import { Request, Response } from 'express';
import Level from '../models/level';

// Добавление нового уровня
export const addLevel = async (req: Request, res: Response): Promise<Response> => {
  try {
    const newLevel = new Level(req.body);
    await newLevel.save();
    return res.status(201).json(newLevel);
  } catch (error) {
    console.error('Error adding level:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Получение всех уровней
export const getLevels = async (req: Request, res: Response): Promise<Response> => {
  try {
    const levels = await Level.find();
    return res.json(levels);
  } catch (error) {
    console.error('Error fetching levels:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Получение уровня по ID
export const getLevelById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const level = await Level.findById(req.params.id);
    if (!level) {
      return res.status(404).json({ message: 'Level not found' });
    }
    return res.json(level);
  } catch (error) {
    console.error('Error fetching level:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Обновление уровня по ID
export const updateLevel = async (req: Request, res: Response): Promise<Response> => {
  try {
    const level = await Level.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!level) {
      return res.status(404).json({ message: 'Level not found' });
    }
    return res.json(level);
  } catch (error) {
    console.error('Error updating level:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Удаление уровня по ID
export const deleteLevel = async (req: Request, res: Response): Promise<Response> => {
  try {
    const level = await Level.findByIdAndDelete(req.params.id);
    if (!level) {
      return res.status(404).json({ message: 'Level not found' });
    }
    return res.json({ message: 'Level deleted successfully' });
  } catch (error) {
    console.error('Error deleting level:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};
