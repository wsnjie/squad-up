const User = require("../models/User")
const Schedule = require("../models/Schedule")
const Event = require("../models/Event")
const MasterSchedule = require("../models/MasterSchedule")

const daySort = function (day) {
    day.sort((a, b) => {
        return a.position - b.position
    })
}

const userController = {
    index: (req, res) => {
        User.find({})
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
            .then(users => {
                res.render("user/index", { users })
            })

    },
    new: (req, res) => {
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
                res.render("user/new", { master })
            })
    },
    create: (req, res) => {
        const newSchedule = new Schedule({
            name: req.body.name + "'s Schedule",
            day1: req.body.going1,
            day2: req.body.going2,
            day3: req.body.going3

        })
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            schedule: newSchedule
        })

        Schedule.insertMany([newSchedule])
            .then(() => newUser.save())
            .then(() => {
                res.redirect("/")
            })
    },
    show: (req, res) => {
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
            })
            .then(user => {
                daySort(user.schedule.day1)
                daySort(user.schedule.day2)
                daySort(user.schedule.day3)
                res.render("user/show", { user })
            })
    }
}

module.exports = userController