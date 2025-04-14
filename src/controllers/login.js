import path from "path";

export default function Login(req, res) {
  const loginPath = path.resolve("src", "views", "login.html");
  res.sendFile(loginPath, (err) => {
    if (err) {
      console.error("Error sending login page:", err);
      res.status(500).send("Error loading login page");
    }
  });
}
