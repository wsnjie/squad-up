const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Day = new Schema({
    name: String,
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }]
})

module.exports = mongoose.model("Day", Day)