import express from "express";
import { signup, login, userName } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user/:id", userName);

export default router;

