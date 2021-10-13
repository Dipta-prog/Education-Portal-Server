const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
    },
    eventId: {
        type: Number,
    },
    eventDetails: {
        type: String
    },
    eventDate: {
        type: Date,
    },
});

module.exports = eventSchema;