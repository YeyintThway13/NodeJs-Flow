import app from "./app.js";
import connect from "./db/connect.js";
import log from "./logger/index.js";

app.listen(process.env.PORT, () => {
  log.info(`App is up and running on ${process.env.PORT}`);
  connect();
});
