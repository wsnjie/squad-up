const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Schedule = new Schema({
    name: String,
    day1: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],
    day2: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],
    day3: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }]
})

module.exports = mongoose.model("Schedule", Schedule)