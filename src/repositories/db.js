const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const MainDbConnection = DB_URL => {
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
        "DbConnection MongoDB Connection Error>> : "
      )
    );
    db.once("open", () => {
      console.log("DbConnection client MongoDB Connection ok!");
    });

    require("./models/user");
    return db;
  } catch (error) {
    console.log("MainDbConnection error", error);
  }
};

module.exports = { DbConnection };