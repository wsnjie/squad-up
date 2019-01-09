const User = require("../models/User")
const Schedule = require("../models/Schedule")
const Event = require("../models/Event")
const MasterSchedule = require("../models/MasterSchedule")
const moment = require("moment")

const zedd = new Event({
    performer: "Zedd",
    time: moment("13:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 1,
    isScheduled: ""
})
const sevenLions = new Event({
    performer: "Seven Lions",
    time: moment("18:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 2,
    isScheduled: ""
})
const zedsDead = new Event({
    performer: "Zed's Dead",
    time: moment("14:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 1,
    isScheduled: ""
})
const glitchMob = new Event({
    performer: "Glitch Mob",
    time: moment("16:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 1,
    isScheduled: ""
})
const illenium = new Event({
    performer: "Illenium",
    time: moment("20:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 2,
    isScheduled: ""
})
const excision = new Event({
    performer: "Excision",
    time: moment("19:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 3,
    isScheduled: ""
})
const porterRobinson = new Event({
    performer: "Porter Robinson",
    time: moment("22:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 3,
    isScheduled: ""
})
const killTheNoise = new Event({
    performer: "Kill The Noise",
    time: moment("23:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 3,
    isScheduled: ""
})
const zomboy = new Event({
    performer: "Zomboy",
    time: moment("15:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 2,
    isScheduled: ""
})


const scheduleW = new Schedule({
    name: "William's Schedule",
    day1: [zedd, excision],
    day2: [sevenLions, glitchMob],
    day3: [zedsDead, illenium]
})
const scheduleJ = new Schedule({
    name: "James's Schedule",
    day1: [zedd, zomboy],
    day2: [sevenLions, killTheNoise],
    day3: [porterRobinson, illenium]
})
const scheduleMaster = new Schedule({
    name: "Master Schedule",
    day1: [zedd, excision, zomboy],
    day2: [sevenLions, glitchMob, killTheNoise],
    day3: [zedsDead, illenium, porterRobinson]
})

const will = new User({
    name: "William",
    email: "123@aol.com",
    schedule: scheduleW
})
const james = new User({
    name: "James",
    email: "456@aol.com",
    schedule: scheduleJ
})
const master = new MasterSchedule({
    name: "Master Schedule",
    schedule: scheduleMaster
})

User.remove({})
    .then(() => Schedule.remove({}))
    .then(() => Event.remove({}))
    .then(() => MasterSchedule.remove({}))
    .then(() => Event.insertMany([excision, zomboy, zedd, sevenLions, glitchMob, killTheNoise, zedsDead, illenium, porterRobinson]))
    .then(() => Schedule.insertMany([scheduleW, scheduleJ, scheduleMaster]))
    .then(() => will.save())
    .then(() => james.save())
    .then(() => master.save())
