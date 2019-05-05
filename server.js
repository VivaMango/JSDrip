const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/jsdriplocal";
const log = require("./routes/api/log");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false });

app.use("/api/log", log);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const mongo = mongoose.connection;
mongo.on('error', console.error.bind(console, 'connection error:'));
mongo.once('open', function() {
    console.log(`Mongoose Connected to DB Succesfully using ${MONGODB_URI}`);
    app.listen(PORT, function() {
      console.log(`🌎 ==> Express Server now listening on port ${PORT}!`);
  });
});
