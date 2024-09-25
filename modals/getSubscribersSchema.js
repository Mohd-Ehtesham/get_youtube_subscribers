const mongoose = require("mongoose");

const getSusbcriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "a subscriber must have a name"],
    unique: true,
  },
  subscribedChannel: {
    type: String,
    required: [true, "a subscriber must subscribed a channel"],
  },
  subscribedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const getSubscriberModel = mongoose.model("Subscriber", getSusbcriberSchema);
module.exports = getSubscriberModel;
