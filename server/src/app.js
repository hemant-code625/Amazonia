import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

// Routes imports
import userRoutes from "./routes/user.routes.js";

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World 🚀");
});

export { app };
