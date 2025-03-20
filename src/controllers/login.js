import path from "path";

export default function Login(req, res) {
  const loginPath = path.resolve("src", "views", "login.html");
  res.sendFile(loginPath);
}
