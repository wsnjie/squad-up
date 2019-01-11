const User = require("../models/User")
const Schedule = require("../models/Schedule")
const Event = require("../models/Event")
const MasterSchedule = require("../models/MasterSchedule")

let userA = 0
let userB = 0
let compResults = {
    day1: [],
    day2: [],
    day3: []
}

const dayCompare = function (userA, userB, results) {

    userA.forEach((aEvent) => {
        userB.forEach((bEvent) => {
            if (aEvent.performer === bEvent.performer) {
                aEvent.isScheduled = "scheduled"
                results.push(aEvent)
            }
        })
    })
}

const compareController = {
    compareForm: (req, res) => {
        User.find({ _id: { '$ne': req.params.id } }).populate({
            path: 'schedule',
            populate: [{
                path: "day1",
            }, {
                path: "day2"
            }, {
                path: "day3"
            }]
        }).then(users => {
            const userId = req.params.id
            res.render("compare/compare", {
                users: users,
                userId: userId
            })
        })
    },
    results: async function (req, res) {

        userA = await User.findById(req.params.userA).populate({
            path: 'schedule',
            populate: [{
                path: "day1",
            }, {
                path: "day2"
            }, {
                path: "day3"
            }]
        })
        console.log("User A " + userA.name)
        userB = await User.findById(req.params.userB).populate({
            path: 'schedule',
            populate: [{
                path: "day1",
            }, {
                path: "day2"
            }, {
                path: "day3"
            }]
        })
        console.log("User B " + userB.name)
        compResults.day1 = []
        compResults.day2 = []
        compResults.day3 = []
        dayCompare(userA.schedule.day1, userB.schedule.day1, compResults.day1)
        dayCompare(userA.schedule.day2, userB.schedule.day2, compResults.day2)
        dayCompare(userA.schedule.day3, userB.schedule.day3, compResults.day3)
        res.render("compare/results", {
            userA: userA,
            userB: userB,
            compResults: compResults
        })

    }
}

module.exports = compareController