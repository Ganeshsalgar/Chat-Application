import express from "express";
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import connectDB from "./config/database.js";


dotenv.config({});

const app = express();

const PORT= process.env.PORT  || 5000;

//middlerware

app.use(express.json());

// routes

app.use("/api/v1/user" , userRoutes)

app.listen(PORT , () =>{
    connectDB();
    console.log(`Server is running at this port ${PORT}`);
    
})


