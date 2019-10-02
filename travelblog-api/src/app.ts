import cors from "cors";
import express from "express";
import morgan from "morgan";
import userRouter from "./routes/user.routes";
import logger, { stream } from "./utils/winston";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("combined", { stream }));

app.use("/users", userRouter);

app.get("/health", (req, res) => {
  res.json({ status: "up" });
});

/* istanbul ignore next */
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    logger.error(err.message);
    res.status(500).send("Please try again later.");
  },
);

export default app;
