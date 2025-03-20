import { Router } from "express";
import home from "../controllers/home.js";
import login from "../controllers/login.js";
import downloadPasswords from "../controllers/downloadPasswords.js";

const router = Router();

router.get("/", home);

router.get("/login", login);

router.get("/download-passwords", downloadPasswords);

export default router;
