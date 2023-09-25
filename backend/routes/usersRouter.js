import express from "express";
import { getAllUsers } from "../controllers/usersController.js"

const u_router = express.Router();


u_router.get("/all_users", getAllUsers);


export default u_router;