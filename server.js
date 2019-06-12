const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// heroku can use any port it wants else we use port 3001
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku) for the production environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB or mlab on heroku
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user:Password123@ds259154.mlab.com:59154/heroku_tmnvmhc0",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);