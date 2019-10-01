import appRoot from "app-root-path";
import { createLogger, format, transports } from "winston";

const env = process.env.NODE_ENV || "development";

const consoleConfig = {
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
};

const outputFileConfig = {
  filename: `${appRoot}/logs/app.log`,
  maxsize: 5242880,
  maxFiles: 5,
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
};

const logger = createLogger({
  level: env === "development" ? "silly" : "verbose",
  transports: [
    new transports.Console(consoleConfig),
    new transports.File(outputFileConfig),
  ],
});

export const stream = {
  write: (message: string): void => {
    logger.info(message);
  },
};

export default logger;
