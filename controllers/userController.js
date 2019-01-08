const User = require("../models/User")
const Schedule = require("../models/Schedule")
const Day = require("../models/Day")
const Event = require("../models/Event")
const MasterSchedule = require("../models/MasterSchedule")

const userController = {
    index: (req, res) => {
        User.find({})
            .populate({
                path: 'schedule',
                populate: {
                    path: "days",
                    populate: { path: "events" }
                }
            })
            .then(users => {
                res.render("user/index", { users })
            })

    },
    new: (req, res) => {
        res.render("user/new")
    },
    create: (req, res) => {
        User.create({
            name: req.body.name,
            email: req.body.email
        }).then(newUser => {
            newUser.schedule = Schedule.create({
                name: newUser.name + "'s Schedule"
            }).then(schedule => {
                const day1 = Day.create({
                    name: "Day 1"
                }).then(day => {
                    schedule.days.push(day)
                })
                const day2 = Day.create({
                    name: "Day 2"
                }).then(day => {
                    schedule.days.push(day)
                })
                const day3 = Day.create({
                    name: "Day 3"
                }).then(day => {
                    schedule.days.push(day)
                })

                Promise.all([day1, day2, day3]).then(() => {
                    schedule.save()
                })

            }).then(() =>
                newUser.save())
        }).then(() => {
            res.redirect("/")
        })
    }
}

module.exports = userController