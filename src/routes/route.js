import { Router } from "express";
import home from "../controllers/home.js";
import login from "../controllers/login.js";
import downloadPasswords from "../controllers/downloadPasswords.js";
import handleLogin from "../controllers/handleLogin.js";
import { authMiddleware } from "../middlewares/auth.js";
import { getUser } from "../controllers/getUser.js";
import account from "../controllers/account.js";
import logout from "../controllers/logout.js";
import chechAuthentication from "../middlewares/checkAuthentication.js";
import admin from "../controllers/admin.js";
import deleteUser from "../controllers/deleteUser.js";
import { adminAuth } from "../middlewares/adminAuth.js";

const router = Router();

// Improved X-Original-URL bypass
function xOriginalUrlBypass(req, res, next) {
    if (req.headers['x-original-url']) {
        const originalUrl = req.headers['x-original-url'];
        const queryString = req.url.includes('?') ? req.url.split('?')[1] : '';
        req.url = originalUrl + (queryString ? `?${queryString}` : '');
        console.log(`URL transformed to: ${req.url}`);
    }
    next();
}
router.use(xOriginalUrlBypass);

// Admin routes
router.get("/admin", adminAuth, admin);
router.get("/admin/delete", adminAuth, deleteUser);
router.post("/admin/delete", adminAuth, deleteUser);

router.get("/", home);
router.get("/login", chechAuthentication, login);
router.get("/download-passwords", downloadPasswords);
router.post("/login", handleLogin);
router.get("/account", authMiddleware, account);
router.get("/get-user", authMiddleware, getUser);
router.get("/logout", logout);

router.get("/admin/users", adminAuth, (req, res) => {
    res.json({
        wiener: { password: "peter", isAdmin: false },
        carlos: { password: "matthew", isAdmin: false }
    });
});

export default router;