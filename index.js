const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { app } = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("Cloud DB connection successfull");
  })
  .catch((err) => {
    console.error("Cloud DB connection error :", err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
