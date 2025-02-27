import userRoutes from './routes/userRoutes.js';
import express from 'express';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => res.send('API running'));

app.listen(port, () => console.log(`server listening to port ${port}`));
