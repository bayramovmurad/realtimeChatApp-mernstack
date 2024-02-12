import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import databaseMongoDb from './db/database.js';
import messageRoutes from './routes/messageRoutes.js';
import cookieParser from 'cookie-parser';


const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 8000
dotenv.config();


app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);


app.listen(PORT, () => {
    databaseMongoDb();
    console.log(`server running on port ${PORT}`);
});