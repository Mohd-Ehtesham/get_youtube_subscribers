const fs = require("fs");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const Subscriber = require("./modals/getSubscribersSchema");

const app = express();
app.use(express.json());

// Load subscriber data from file
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
);

const insertDefaultData = async () => {
  try {
    const existingSubscribers = await Subscriber.find();
    if (existingSubscribers.length === 0) {
      // Insert data from JSON file into MongoDB Atlas
      await Subscriber.insertMany(data);
      console.log("Default data inserted successfully!");
    } else {
      console.log("Database already contains data. No insertion needed.");
    }
  } catch (err) {
    console.error("Error inserting default data:", err);
  }
};

// Root route
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./index.html"));
});

//  GET /subscribers - Responds with an array of all subscribers
app.get("/subscribers", async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find(); // Fetch all subscribers from the database
    res.status(200).json({
      status: "success",
      results: subscribers.length,
      data: subscribers,
    });
  } catch (err) {
    next(err);
  }
});

//  GET /subscribers/names - Responds with an array of subscribers with only `name` and `subscribedChannel`
app.get("/subscribers/names", async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
    res.status(200).json({
      status: "success",
      data: subscribers,
    });
  } catch (err) {
    next(err);
  }
});

//  GET /subscribers/:id - Responds with a specific subscriber by id
app.get("/subscribers/:id", async (req, res, next) => {
  const id = req.params.id; // Keep ID as a string to match MongoDB's ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "fail",
      message: `Invalid ID format: "${id}".`,
    });
  }
  try {
    // Use Mongoose to find the subscriber by MongoDB's ObjectId
    const subscriber = await Subscriber.findById(id);
    if (!subscriber) {
      return res.status(404).json({
        status: "fail",
        message: `Subscriber with ID "${id}" not found.`,
      });
    }
    res.status(200).json({
      status: "success",
      data: subscriber,
    });
  } catch (err) {
    next(err);
  }
});

//  POST /subscribers - Create a new subscriber
app.post("/subscribers", async (req, res, next) => {
  try {
    const newSubscriber = await Subscriber.create(req.body); // Create a new subscriber in the database
    res.status(201).json({
      status: "success",
      data: newSubscriber,
    });
  } catch (err) {
    next(err);
  }
});

//  PUT /subscribers/:id - Update a subscriber by ID
app.put("/subscribers/:id", async (req, res, next) => {
  try {
    const updatedSubscriber = await Subscriber.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedSubscriber) {
      return res.status(404).json({
        status: "fail",
        message: `Subscriber with ID ${req.params.id} not found.`,
      });
    }
    res.status(200).json({
      status: "success",
      data: updatedSubscriber,
    });
  } catch (err) {
    next(err);
  }
});

//  DELETE /subscribers/:id - Delete a subscriber by ID
app.delete("/subscribers/:id", async (req, res) => {
  try {
    const deletedSubscriber = await Subscriber.findByIdAndDelete(req.params.id);
    if (!deletedSubscriber) {
      return res.status(404).json({
        status: "fail",
        message: `Subscriber with ID ${req.params.id} not found.`,
      });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    next(err);
  }
});

app.use((error, request, response, next) => {
  const status = error.status || 500; // Default to 500 if error doesn't have a status code
  response.status(status).json({
    status: "error",
    message: error.message,
  });
});

module.exports = { app, insertDefaultData };
