const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;

    db
      .on("error", console.error.bind(console, "connection error:"))
      .once("open", ()=>{
          console.log("Database connected!");
      });
}
