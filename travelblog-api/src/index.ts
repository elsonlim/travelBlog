import dotenv from "dotenv";
dotenv.config();
import "./utils/db";
import logger from "./utils/winston";

import app from "./app";
const port = process.env.PORT;

app.listen(port, () => logger.info(`Example app listening on port ${port}!`));
