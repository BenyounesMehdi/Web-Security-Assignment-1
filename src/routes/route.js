import { Router } from "express";
import home from "../controllers/home.js";
import login from "../controllers/login.js";
import downloadPasswords from "../controllers/downloadPasswords.js";
import handleLogin from "../controllers/handleLogin.js";
import { authMiddleware } from "../middlewares/auth.js";
import { getUser } from "../controllers/getUser.js";
import account from "../controllers/account.js";
import logout from "../controllers/logout.js";

const router = Router();

router.get("/", home);

router.get("/login", login);

router.get("/download-passwords", downloadPasswords);

router.post("/login", handleLogin);

router.get("/account", authMiddleware, account);

router.get("/get-user", getUser);

router.get("/logout", logout);

export default router;
