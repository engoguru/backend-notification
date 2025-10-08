import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db/connectDB.js';
import cors from 'cors';
const PORT = process.env.PORT || 5004;
import cookieParser from 'cookie-parser';
import notifyRoutes from './routes/notificationRoutes.js';
// import { notFound, errorHandler } from '@your-scope/common/src/errors.js';

const app = express();
 app.use(cookieParser());
//  db connect
connectDB()
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));

 app.use(express.json());


app.get('/notifyhealth', (_,res)=>res.json({ok:true, service:'notify-service'}));
app.use('/notification', notifyRoutes);


app.listen(PORT, ()=> console.log(`notify-service :${PORT}`));


