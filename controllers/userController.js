const User = require("../models/User")
const Schedule = require("../models/Schedule")
const Event = require("../models/Event")
const MasterSchedule = require("../models/MasterSchedule")

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
        res.render("user/new")
    },
    create: (req, res) => {
        const newSchedule = new Schedule({
            name: req.body.name + "'s Schedule"
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
        const daySort = function (day) {
            day.sort((a, b) => {
                return a.position - b.position
            })
        }
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
                console.log(user.schedule.day1)
                daySort(user.schedule.day1)
                console.log(user.schedule.day1)
                // daySort(user.day2)
                // daySort(user.day3)
                res.render("user/show", { user })
            })
    }
}

module.exports = userController