const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const News = new Schema({
    name: String,
    email: String,
    schedule: [{
        type: Schema.Types.ObjectId,
        ref: 'Schedule'
    }]
})

module.exports = mongoose.model("News", News)