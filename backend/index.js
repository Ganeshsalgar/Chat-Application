import express from "express";
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import connectDB from "./config/database.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.routes.js";
import cors from 'cors'


dotenv.config({});

const app = express();

const PORT= process.env.PORT  || 5000;

//middlerware
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}

app.use(cors(corsOptions))

// routes

app.use("/api/v1/user" , userRoutes);
app.use("/api/v1/message" , messageRoute)

app.listen(PORT , () =>{
    connectDB();
    console.log(`Server is running at this port ${PORT}`);
    
})


