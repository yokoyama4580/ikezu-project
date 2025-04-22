import express from 'express';
import cors from 'cors';
import ikezuRoutes from './routes/ikezuRoutes';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', ikezuRoutes);

export default app;
