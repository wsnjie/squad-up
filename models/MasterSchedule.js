const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const MasterSchedule = new Schema({
    name: String,
    schedule: {
        type: Schema.Types.ObjectId,
        ref: 'Schedule'
    }
})

module.exports = mongoose.model("MasterSchedule", MasterSchedule)