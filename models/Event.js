const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Event = new Schema({
    performer: String,
    time: String,
    stage: String
})

module.exports = mongoose.model("Event", Event)