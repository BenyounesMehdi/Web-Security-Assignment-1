import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function admin(req, res) {
    const adminPath = path.join(__dirname, "../views/admin.html");
    res.sendFile(adminPath);
}