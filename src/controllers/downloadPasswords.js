import fs from "fs";
import path from "path";

export default function downloadPasswords(req, res) {
  const filePath = path.resolve("src", "assets", "candidate-passwords.txt");

  // Check if the file exists before attempting to download
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }

  res.download(filePath, "candidate-passwords.txt", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Error downloading file");
    }
  });
}
