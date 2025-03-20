import express from "express";
import dotenv from "dotenv";
import baseRouter from "./routes/route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", baseRouter);

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
