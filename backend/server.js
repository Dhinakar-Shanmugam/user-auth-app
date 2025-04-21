import express from "express";
import connectDB from "../config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import cors from 'cors'

const app = express();
app.use(cors())
dotenv.config();
app.use(express.json());
app.use("/api/users", userRoutes);


app.get("/", (req, res) => {
    res.send("Hello King!");
})

app.listen(3000,() => {
    connectDB();
    console.log("Server is running on port 3000");
})