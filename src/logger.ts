import { existsSync, mkdirSync } from 'fs';
import { createLogger, format, transports,  } from 'winston';
import { LOGS_DIR } from './constants.js';

if (!existsSync(LOGS_DIR)) {
  mkdirSync(LOGS_DIR);
}

export const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.File({ filename: `${LOGS_DIR}/error.log`, level: 'error' }),
    new transports.File({ filename: `${LOGS_DIR}/combined.log` }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple(),
  }));
}