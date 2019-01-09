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
                        res.render("user/edit",
                            {
                                masterSched: masterSched,
                                currentUser: currentUser

                            })
                    })
            })

    },

    update: (req, res) => {
        User.findById(req.params.id).populate({
            path: 'schedule'
        }).then(user => {

            if (typeof req.body.delete1 == 'array') {
                req.body.delete1.forEach(del => {
                    Schedule.findByIdAndUpdate(user.schedule._id, { $pull: { day1: del } }).then(() => {
                        console.log("Deleted" + del)
                    })
                })
            } else if (typeof req.body.delete1 == 'string') {
                Schedule.findByIdAndUpdate(user.schedule._id, { $pull: { day1: req.body.delete1 } }).then(() => {
                    console.log("Deleted")
                })
            } else if (typeof req.body.delete1 == 'undefined') {
                console.log("nothing to delete")
            }

            if (typeof req.body.delete2 == 'array') {
                req.body.delete2.forEach(del => {
                    Schedule.findByIdAndUpdate(user.schedule._id, { $pull: { day2: del } }).then(() => {
                        console.log("Deleted" + del)
                    })
                })
            } else if (typeof req.body.delete2 == 'string') {
                Schedule.findByIdAndUpdate(user.schedule._id, { $pull: { day2: req.body.delete2 } }).then(() => {
                    console.log("Deleted")
                })
            } else if (typeof req.body.delete2 == 'undefined') {
                console.log("nothing to delete")

            } if (typeof req.body.delete3 == 'array') {
                req.body.delete3.forEach(del => {
                    Schedule.findByIdAndUpdate(user.schedule._id, { $pull: { day3: del } }).then(() => {
                        console.log("Deleted" + del)
                    })
                })
            } else if (typeof req.body.delete3 == 'string') {
                Schedule.findByIdAndUpdate(user.schedule._id, { $pull: { day3: req.body.delete3 } }).then(() => {
                    console.log("Deleted")
                })
            } else if (typeof req.body.delete3 == 'undefined') {
                console.log("nothing to delete")
            }
        }).then(() => {
            User.findById(req.params.id).populate({
                path: 'schedule'
            }).then(user => {
                if (typeof req.body.add1 == 'array') {
                    req.body.add1.forEach(add => {
                        Schedule.findByIdAndUpdate(user.schedule._id, { $push: { day1: add } }).then(() => {
                            console.log("Added" + add)
                        })
                    })
                } else if (typeof req.body.add1 == 'string') {
                    Schedule.findByIdAndUpdate(user.schedule._id, { $push: { day1: req.body.add1 } }).then(() => {
                        console.log("Added")
                    })
                } else if (typeof req.body.add1 == 'undefined') {
                    console.log("nothing to add")
                }

                if (typeof req.body.add2 == 'array') {
                    req.body.add2.forEach(add => {
                        Schedule.findByIdAndUpdate(user.schedule._id, { $push: { day2: add } }).then(() => {
                            console.log("Added" + add)
                        })
                    })
                } else if (typeof req.body.add2 == 'string') {
                    Schedule.findByIdAndUpdate(user.schedule._id, { $push: { day2: req.body.add2 } }).then(() => {
                        console.log("Added")
                    })
                } else if (typeof req.body.add2 == 'undefined') {
                    console.log("nothing to add")
                }

                if (typeof req.body.add3 == 'array') {
                    req.body.add3.forEach(add => {
                        Schedule.findByIdAndUpdate(user.schedule._id, { $push: { day3: add } }).then(() => {
                            console.log("Added" + add)
                        })
                    })
                } else if (typeof req.body.add3 == 'string') {
                    Schedule.findByIdAndUpdate(user.schedule._id, { $push: { day3: req.body.add3 } }).then(() => {
                        console.log("Added")
                    })
                } else if (typeof req.body.add3 == 'undefined') {
                    console.log("nothing to add")
                }
            })
        }).then(() => {
            res.redirect("/" + req.params.id)
        })
    }
}
module.exports = scheduleController