const User = require("../models/User")
const Schedule = require("../models/Schedule")
const Event = require("../models/Event")
const MasterSchedule = require("../models/MasterSchedule")
let masterSched = 0
let currentUser = 0

const daySort = function (day) {
    day.sort((a, b) => {
        return a.position - b.position
    })
}


const dayCompare = function (master, user) {
    master.forEach((mEvent) => {
        user.forEach((uEvent) => {
            if (mEvent.performer === uEvent.performer) {
                mEvent.isScheduled = "scheduled"
            }
        })
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
            }).then(master => {
                masterSched = master
            }).then(() => {
                User.findById(req.params.id)
                    .populate({
                        path: 'schedule',
                        populate: [{
                            path: "day1",
                        }, {
                            path: "day2"
                        }, {
                            path: "day3"
                        }]
                    }).then(user => {
                        currentUser = user
                        dayCompare(masterSched.schedule.day1, user.schedule.day1)
                        dayCompare(masterSched.schedule.day2, user.schedule.day2)
                        dayCompare(masterSched.schedule.day3, user.schedule.day3)
                    }).then(() => {
                        daySort(masterSched.schedule.day1)
                        daySort(masterSched.schedule.day2)
                        daySort(masterSched.schedule.day3)

                    }).then(() => {
                        console.log(currentUser.name)
                        res.render("user/edit",
                            {
                                masterSched: masterSched,
                                currentUser: currentUser

                            })
                    })
            })

    }
}

module.exports = scheduleController