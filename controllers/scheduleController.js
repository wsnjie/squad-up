const User = require("../models/User")
const Schedule = require("../models/Schedule")
const Event = require("../models/Event")
const MasterSchedule = require("../models/MasterSchedule")

const daySort = function (day) {
    day.sort((a, b) => {
        return a.position - b.position
    })
}

const scheduleController = {
    edit: (req, res) => {


        MasterSchedule.findOne({ name: "Master Schedule" })
            .populate({
                path: 'schedule',
                populate: [{
                    path: "day1",
                }, {
                    path: "day2"
                }, {
                    path: "day3"
                }]
            })
            .then(master => {
                daySort(master.schedule.day1)
                daySort(master.schedule.day2)
                daySort(master.schedule.day3)
                res.render("user/edit", { master })
            })
    }
}

module.exports = scheduleController