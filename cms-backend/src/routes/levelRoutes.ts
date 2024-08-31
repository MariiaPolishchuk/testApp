// import express from 'express';
// import { addLevel, getLevels } from '../controllers/levelController';

// const router = express.Router();

// router.post('/levels', addLevel);
// router.get('/levels', getLevels);

// export default router;



// import express from 'express';
// import { getLevels, addLevel, getLevelById, updateLevel, deleteLevel } from '../controllers/levelController';

// const router = express.Router();

// router.get('/', getLevels);
// router.post('/', addLevel);
// router.get('/:id', getLevelById);
// router.put('/:id', updateLevel);
// router.delete('/:id', deleteLevel);

// export default router;
// import express from 'express';
// import { getLevels, addLevel } from '../controllers/levelController';

// const router = express.Router();

// router.get('/', getLevels);
// router.post('/', addLevel);

// export default router;

// import express from 'express';
// import { getLevels, addLevel, getLevelById, updateLevel, deleteLevel } from '../controllers/levelController';

// const router = express.Router();

// router.get('/', getLevels);
// router.post('/', addLevel);
// router.get('/:id', getLevelById);
// router.put('/:id', updateLevel);
// router.delete('/:id', deleteLevel);

// export default router;

// import express from 'express';
// import { getLevels, addLevel, getLevelById, updateLevel, deleteLevel } from '../controllers/levelController';

// const router = express.Router();

// // Маршрут для получения всех уровней
// router.get('/', getLevels);

// // Маршрут для добавления нового уровня
// router.post('/', addLevel);

// // Маршрут для получения уровня по ID
// router.get('/:id', getLevelById);

// // Маршрут для обновления уровня
// router.put('/:id', updateLevel);

// // Маршрут для удаления уровня
// router.delete('/:id', deleteLevel);

// export default router;
import express from 'express';
import { 
  addLevel, 
  getLevels, 
  getLevelById, 
  updateLevel, 
  deleteLevel 
} from '../controllers/levelController';
import { getLessonsByLevel } from '../controllers/lessonController';

const router = express.Router();

router.route('/')
  .post(addLevel)       // Добавление нового уровня
  .get(getLevels);      // Получение списка всех уровней

router.route('/:id')
  .get(getLevelById)    // Получение уровня по ID
  .put(updateLevel)     // Обновление уровня
  .delete(deleteLevel); // Удаление уровня

// Получение уроков по уровню
router.get('/:levelId/lessons', getLessonsByLevel);

export default router;






