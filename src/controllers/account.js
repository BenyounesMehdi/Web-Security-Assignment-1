import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function account(req, res) {
  const accountPath = path.join(__dirname, "../views/account.html");

  res.sendFile(accountPath, (err) => {
    if (err) {
      console.error("Error sending account page:", err);
      res.status(err.statusCode || 500).send("Error loading account page");
    }
  });
}
