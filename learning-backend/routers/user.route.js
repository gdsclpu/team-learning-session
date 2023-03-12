import { validateToken } from "../middlewares/user.middleware.js"
import { createUser, loginUser, whoAmI } from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/me", validateToken, whoAmI)

export default router;