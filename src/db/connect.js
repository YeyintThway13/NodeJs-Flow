import mongoose from "mongoose";
import log from "../logger/index.js";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log.info("Database Connected");
  } catch (error) {
    log.error("Something wrong with connecting database" + error.message);
  }
};

export default connect;
