const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = require("dotenv");
const Subscriber = require("./modals/getSubscribersSchema");

// Load environment variables from config file
dotenv.config({ path: "./config.env" });

// Load subscriber data from file
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
);

// MongoDB connection to local instance
const DB_LOCAL = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to local MongoDB database.");
    insertDefaultData(); // Insert default data after successful connection
  })
  .catch((err) => {
    console.error("Error connecting to local MongoDB:", err);
  });

// Function to insert default data if the collection is empty
const insertDefaultData = async () => {
  try {
    const existingSubscribers = await Subscriber.find();
    if (existingSubscribers.length === 0) {
      await Subscriber.insertMany(data); // Insert data from JSON file
      console.log("Default data inserted successfully!");
    } else {
      console.log("Database already contains data. No insertion needed.");
    }
    process.exit(); // Close the process once data is inserted
  } catch (err) {
    console.error("Error inserting default data:", err);
    process.exit(1); // Exit with failure status code
  }
};
