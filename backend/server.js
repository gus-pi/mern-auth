import userRoutes from './routes/userRoutes.js';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('API running'));

app.listen(port, () => console.log(`server listening to port ${port}`));
