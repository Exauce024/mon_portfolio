import { Router } from 'express';
import { ContactController } from '../controllers/contact.controller.js';

const router = Router();

router.get('/', ContactController.getContactInfo);

export default router;
