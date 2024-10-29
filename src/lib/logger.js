// src/lib/logger.js
import winston from 'winston';
import 'winston-daily-rotate-file';
import path from 'path';

// Pastikan folder 'logs' ada di root proyek
const logDirectory = path.join(process.cwd(), 'src/logs');

// Setup Daily Rotate File transport
const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
  filename: `${logDirectory}/application-%DATE%.log`,
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
    dailyRotateFileTransport,
  ],
});

export default logger;
