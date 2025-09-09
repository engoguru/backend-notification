import express from 'express';
import notificationController from '../controllers/notificationController.js';

const notifyRoutes=express.Router();

routes.post('/Notify',notificationController.sendNotification)

export default notifyRoutes;