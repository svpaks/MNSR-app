import express, { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";

const auth_router = express.Router();

auth_router.post("/register", register);
auth_router.post("/login", login);
auth_router.post("/logout", logout);

export default auth_router;