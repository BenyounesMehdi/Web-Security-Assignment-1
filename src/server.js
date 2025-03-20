import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser"; // ✅ Import cookie-parser
import dotenv from "dotenv";
import router from "./routes/route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // ✅ Use cookie-parser

app.use(
  session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Change to true if using HTTPS
      httpOnly: true,
      sameSite: "lax",
      maxAge: 600000, // ✅ Set session lifetime (10 minutes)
    },
  })
);

app.use(router);

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
