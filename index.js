const linkRoutes = require("./routes/links");
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const dbConnect = require("./config/database");
dbConnect();

app.use(express.json());
const cors = require("cors");

let origin = process.env.CLIENT_URL;

// if (process.env.NODE_ENV?.trim() === "development") {
//   origin = "http://localhost:3000";
// }
app.use(
  cors({
    credentials: true,
    origin,
  })
);

app.use("/api/", linkRoutes);
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE</h1>`);
});
