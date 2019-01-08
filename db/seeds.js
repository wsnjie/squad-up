const User = require("../models/User")
const Schedule = require("../models/Schedule")
const Day = require("../models/Day")
const Event = require("../models/Event")
const MasterSchedule = require("../models/MasterSchedule")
const moment = require("moment")

const zedd = new Event({
    performer: "Zedd",
    time: moment("13:00", "HH:mm").format(),
    stage: "Main Stage"
})
const sevenLions = new Event({
    performer: "Seven Lions",
    time: moment("18:00", "HH:mm").format(),
    stage: "Main Stage"
})
const zedsDead = new Event({
    performer: "Zed's Dead",
    time: moment("14:00", "HH:mm").format(),
    stage: "Main Stage"
})
const glitchMob = new Event({
    performer: "Glitch Mob",
    time: moment("16:00", "HH:mm").format(),
    stage: "Main Stage"
})
const illenium = new Event({
    performer: "Illenium",
    time: moment("20:00", "HH:mm").format(),
    stage: "Main Stage"
})
const excision = new Event({
    performer: "Excision",
    time: moment("19:00", "HH:mm").format(),
    stage: "Main Stage"
})
const porterRobinson = new Event({
    performer: "Porter Robinson",
    time: moment("22:00", "HH:mm").format(),
    stage: "Main Stage"
})
const killTheNoise = new Event({
    performer: "Kill The Noise",
    time: moment("23:00", "HH:mm").format(),
    stage: "Main Stage"
})
const zomboy = new Event({
    performer: "Zomboy",
    time: moment("15:00", "HH:mm").format(),
    stage: "Main Stage"
})

const day1W = new Day({
    name: "Day 1",
    events: [zedd, excision]
})
const day1J = new Day({
    name: "Day 1",
    events: [zedd, zomboy]
})

const day2W = new Day({
    name: "Day 2",
    events: [sevenLions, glitchMob]
})
const day2J = new Day({
    name: "Day 2",
    events: [sevenLions, killTheNoise]
})
const day3W = new Day({
    name: "Day 3",
    events: [zedsDead, illenium]
})
const day3J = new Day({
    name: "Day 3",
    events: [porterRobinson, illenium]
})
const day1M = new Day({
    name: "Day 1",
    events: [zedd, excision, zomboy]
})
const day2M = new Day({
    name: "Day 1",
    events: [sevenLions, glitchMob, killTheNoise]
})
const day3M = new Day({
    name: "Day 1",
    events: [zedsDead, illenium, porterRobinson]
})


const scheduleW = new Schedule({
    name: "William's Schedule",
    days: [day1W, day2W, day3W]
})
const scheduleJ = new Schedule({
    name: "James's Schedule",
    days: [day1J, day2J, day3J]
})
const scheduleMaster = new Schedule({
    name: "Master Schedule",
    days: [day1M, day2M, day3M]
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
    .then(() => Day.remove({}))
    .then(() => Event.remove({}))
    .then(() => MasterSchedule.remove({}))
    .then(() => Event.insertMany([excision, zomboy, zedd, sevenLions, glitchMob, killTheNoise, zedsDead, illenium, porterRobinson]))
    .then(() => Day.insertMany([day1W, day1J, day1M, day2W, day2J, day2M, day3W, day3J, day3M]))
    .then(() => Schedule.insertMany([scheduleW, scheduleJ, scheduleMaster]))
    .then(() => will.save())
    .then(() => james.save())
    .then(() => master.save())
