const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Schedule = new Schema({
    name: String,
    days: [{
        type: Schema.Types.ObjectId,
        ref: 'Day'
    }]
})

module.exports = mongoose.model("Schedule", Schedule)