import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes';

dotenv.config();

const app= express();

app.use(express.json());
app.use("/events", eventRoutes);

const PORT=process.env.PORT;

mongoose.connect(process.env.MONGO_URL as string).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch((error) => console.log(error.message));