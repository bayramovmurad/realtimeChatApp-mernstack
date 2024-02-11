import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'


dotenv.config();

const app = express();
dotenv.config();



app.get('/', (req, res) => {
    res.send("hello world")
});

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
   
    console.log(`server running on port ${PORT}`);
});