const mongoose = require("mongoose");

const newAdminDataSchema = mongoose.Schema({
    
    name: {
        type: String,
    },
    id: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    
    submitDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = newAdminDataSchema;