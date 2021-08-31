import pino from "pino";
import dayjs from "dayjs";

const log = pino({
  prettyPrint: { colorize: true },
  timestamp: () => `,"time":"${dayjs().format('YYYY/MM/DD HH:mm:ss A')}"`,
});

export default log;
