import { Router } from 'express';
import { ProjectController } from '../controllers/project.controller.js';

const router = Router();

router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getProjectById);

export default router;
