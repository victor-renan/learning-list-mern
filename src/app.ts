import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import subjectRoutes from "./routes"

// Chama o express
const app: Express = express();

// Define a porta como 8000
const PORT: string | number = process.env.PORT || 8000;

//
app.use(cors());
app.use(subjectRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:
${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}.gjwmny8.mongodb.net/?retryWrites=true&w=majority`;


mongoose.set('strictQuery', true);

mongoose.connect(uri, {serverSelectionTimeoutMS: 5000})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    throw err;
});
        