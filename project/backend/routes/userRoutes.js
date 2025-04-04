import { Router } from "express";

import { UserController } from "../controllers/userController.js";
import { UserVerifyController } from "../controllers/userVerifyController.js";
import { authenticate } from "../middleware/authToken.js";

const router = Router();

// Cadastrar usuário
const regNewUser = new UserController()
router.post("/register",(req, res) => regNewUser.handle(req, res));

const authUser = new UserVerifyController()
router.post("/login", (req, res) => authUser.login(req, res));

router.get("/profile", authenticate, (req, res) => {
    res.json({ message: "Acesso concedido", userId: req.user.userId });
});

export { router }
