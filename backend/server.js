import  express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import path from "path";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import {app ,server} from "./socket/socket.js"


dotenv.config();
const PORT =process.env.PORT;

const __dirname= path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/user",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/build")));
app.use("*",(req,res)=>{
    res.sendFile(path.join("__dirname","frontend","build","index.html"))
})



server.listen(PORT,() => {
    connectToMongoDB()
    
    console.log(`server is runing on ${PORT}`)});