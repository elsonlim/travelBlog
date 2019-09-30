import cors from "cors";
import express from "express";
import morgan from "morgan";
import winston from "winston";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/health", (req, res) => res.json({ status: "up" }));

export default app;
