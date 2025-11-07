const mongoose = require('mongoose');

const alienDB = new mongoose.Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    planet: { type: String, required: true },
    abilities: { type: [String], required: true },
    meetingDate: { type: Date, required: true }
});

module.exports = mongoose.model("Aliens", alienDB);