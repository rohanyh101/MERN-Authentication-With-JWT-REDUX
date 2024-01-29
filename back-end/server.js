import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'

connectDB();

const app = express();

// help us to parse the raw json data...
app.use(express.json());

// this will allow us to send the form data...
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is upp and running...'));


// if these weren't here then as the error the whole html body is being displayed in the postman...
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

// Routing's to create...

// POST /api/users -> Register a user
// POST /api/users/auth -> Authenticate a user and get token
// POST /api/users/logout -> Logout user and clear cookie..
// GET /api/users/profile -> Get user profile
// PUT /api/users/profile -> Update profile