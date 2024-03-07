import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import databaseMongoDb from './db/database.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import {app,server} from './socket/socket.js'

app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 8000
dotenv.config();


app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, () => {
    databaseMongoDb();
    console.log(`server running on port ${PORT}`);
});