const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

//Importing API ROUTES
const register = require("./routes/api/register");

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Require mongoose key
const db = require("./config/keys").mongoURI;

//Database connection
mongoose
  .connect(db)
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log(err));

/*app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);*/
//Use Routes
app.use("/api/register", register);

// Serve static assets if in prod
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
