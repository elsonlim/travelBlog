import mongoose from "mongoose";
import logger from "./winston";
const mongoOptions = {
  useNewUrlParser: true,
};

logger.debug("DB_URL:" + process.env.DB_URL);
mongoose.connect(`${process.env.DB_URL}`, mongoOptions);
const db = mongoose.connection;

db.on("error", err => logger.error("error connecting to db:" + err));
db.once("open", () => {
  logger.info("connected to mongodb");
});
