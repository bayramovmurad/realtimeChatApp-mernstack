import mongoose from "mongoose";

const databaseMongoDb = async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_DB_URL);
        console.log('connected to mongodb');
    } catch (error) {
        console.log("Error connecting to mongoDB", error.message);
    }
}

export default databaseMongoDb