import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory (__dirname equivalent for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve Home Page
export default function home(req, res) {
  const homePath = path.join(__dirname, "../views/home.html"); // Ensure correct path

  fs.readFile(homePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error loading home page:", err); // Log for debugging
      return res.status(500).send("Error loading home page");
    }
    res.send(data);
  });
}
