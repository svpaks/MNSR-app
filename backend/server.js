import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import auth_router from "./routes/authRouter.js";
import u_router from "./routes/usersRouter.js";


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api/auth", auth_router)
app.use("/api/users", u_router)

app.listen(3030, () => {
    console.log("Connected on port 3030");
})