import path from "path";
import { fileURLToPath } from "url";

// Convert __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve account.html only if authenticated
export default function account(req, res) {
  res.sendFile(path.join(__dirname, "../views/account.html"));
}
