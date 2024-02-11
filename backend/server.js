import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import databaseMongoDb from './db/database.js';


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000
dotenv.config();


app.use('/api/auth', authRoutes)



app.listen(PORT, () => {
    databaseMongoDb();
    console.log(`server running on port ${PORT}`);
});