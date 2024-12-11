import express from 'express';
import { StudentController } from './studentController';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudents);

router.get('/:studentId', StudentController.getSingleStudents);

export const StudentRoutes = router;
