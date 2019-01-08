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

    }
}

module.exports = userController