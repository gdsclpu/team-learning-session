import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './helpers/db.js'

import userRoutes from './routers/user.route.js'

const app = express();

connectDB()

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use("/user", userRoutes)

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})