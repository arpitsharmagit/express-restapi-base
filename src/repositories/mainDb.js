const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const MainDBConnection = DB_URL => {
  try {
    const db = mongoose.createConnection(DB_URL, {
      socketTimeoutMS: 30000,
      keepAlive: true,
      poolSize: 5,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
s
    db.on("connected", () => {
      console.log("Mongoose default connection open");
    });

    db.on("disconnected", () => {
      console.log("Mongoose default connection disconnected");
    });

    db.on(
      "error",
      console.error.bind(
        console,
        "MainDBConnection MongoDB Connection Error>> : "
      )
    );
    db.once("open", () => {
      console.log("MainDBConnection client MongoDB Connection ok!");
    });

    require("./models/customer");
    return db;
  } catch (error) {
    console.log("MainDBConnection error", error);
  }
};

module.exports = { MainDBConnection };