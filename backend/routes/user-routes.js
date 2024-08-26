import express from 'express';
import { getAllUser, signup, login } from "../controllers/user-controller.js";

const router = express.Router();

// access information from server
router.get("/", getAllUser)

// add information to the server 
router.post("/signup", signup);
router.post("/login", login);

export default router