import express from 'express';
import notificationController from '../controllers/notificationController.js';
import { authenticate } from '../middleware/authenticate.js';

const notifyRoutes=express.Router();

notifyRoutes.post('/Notify',authenticate, notificationController.sendNotification)

export default notifyRoutes;