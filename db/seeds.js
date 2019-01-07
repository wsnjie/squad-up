const User = require("../models/User")
const Schedule = require("../models/Schedule")
const Day = require("../models/Day")
const Event = require("../models/Event")
const MasterSchedule = require("../models/MasterSchedule")

User.deleteMany({}).then(() => {
    Schedule.deleteMany({}).then(() => {
        Day.deleteMany({}).then(() => {
            Event.deleteMany({}).then(() => {
                MasterSchedule.deleteMany({}).then(() => {

                })
            })
        })
    })
}