const User = require("../models/User")
const Schedule = require("../models/Schedule")
const Event = require("../models/Event")
const MasterSchedule = require("../models/MasterSchedule")
const moment = require("moment")


//Day 1
const galantis = new Event({
    performer: "Galantis",
    time: moment("15:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 1,
    isScheduled: ""
})

const bearGrillz = new Event({
    performer: "Bear Grillz",
    time: moment("16:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 2,
    isScheduled: ""
})

const alesso = new Event({
    performer: "Alesso",
    time: moment("17:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 3,
    isScheduled: ""
})

const rlGrime = new Event({
    performer: "RL Grime",
    time: moment("18:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 4,
    isScheduled: ""
})

const kaskade = new Event({
    performer: "Kaskade",
    time: moment("19:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 5,
    isScheduled: ""
})

const griz = new Event({
    performer: "Griz",
    time: moment("20:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 6,
    isScheduled: ""
})

const mantis = new Event({
    performer: "Zedd",
    time: moment("21:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 7,
    isScheduled: ""
})

const armin = new Event({
    performer: "Armin Van Buren",
    time: moment("22:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 8,
    isScheduled: ""
})

const aAndB = new Event({
    performer: "Above and Beyond",
    time: moment("23:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 9,
    isScheduled: ""
})

//Day 2

const chainsmokers = new Event({
    performer: "The Chainsmokers",
    time: moment("15:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 1,
    isScheduled: ""
})

const marshmello = new Event({
    performer: "Marshmello",
    time: moment("16:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 2,
    isScheduled: ""
})

const allison = new Event({
    performer: "Allison Wonderland",
    time: moment("17:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 3,
    isScheduled: ""
})

const snails = new Event({
    performer: "Snails",
    time: moment("18:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 4,
    isScheduled: ""
})

const boombox = new Event({
    performer: "Boombox Cartel",
    time: moment("19:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 5,
    isScheduled: ""
})

const gramatik = new Event({
    performer: "Gramatik",
    time: moment("20:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 6,
    isScheduled: ""
})

const atrak = new Event({
    performer: "A Trak",
    time: moment("21:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 7,
    isScheduled: ""
})

const bassnectar = new Event({
    performer: "Bassnectar",
    time: moment("22:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 8,
    isScheduled: ""
})

const bigG = new Event({
    performer: "Big Gigantic",
    time: moment("23:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 9,
    isScheduled: ""
})

//Day 3

const zedd = new Event({
    performer: "Zedd",
    time: moment("15:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 1,
    isScheduled: ""
})
const sevenLions = new Event({
    performer: "Seven Lions",
    time: moment("16:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 2,
    isScheduled: ""
})
const zedsDead = new Event({
    performer: "Zed's Dead",
    time: moment("17:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 3,
    isScheduled: ""
})
const glitchMob = new Event({
    performer: "Glitch Mob",
    time: moment("18:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 4,
    isScheduled: ""
})
const illenium = new Event({
    performer: "Illenium",
    time: moment("19:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 5,
    isScheduled: ""
})
const excision = new Event({
    performer: "Excision",
    time: moment("20:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 6,
    isScheduled: ""
})
const porterRobinson = new Event({
    performer: "Porter Robinson",
    time: moment("21:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 7,
    isScheduled: ""
})
const killTheNoise = new Event({
    performer: "Kill The Noise",
    time: moment("22:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 8,
    isScheduled: ""
})
const zomboy = new Event({
    performer: "Zomboy",
    time: moment("23:00", "HH:mm").format("HH:mm"),
    stage: "Main Stage",
    position: 9,
    isScheduled: ""
})


const scheduleW = new Schedule({
    name: "William's Schedule",
    day1: [rlGrime, mantis, armin, aAndB],
    day2: [chainsmokers.marshmello, boombox, bigG],
    day3: [zedd, sevenLions, illenium, excision, zomboy]
})
const scheduleJ = new Schedule({
    name: "James's Schedule",
    day1: [griz, kaskade, rlGrime, alesso],
    day2: [snails, gramatik, bassnectar, atrak],
    day3: [sevenLions, glitchMob, zedd, zedsDead, illenium]
})
const scheduleMaster = new Schedule({
    name: "Master Schedule",
    day1: [galantis, bearGrillz, alesso, rlGrime, kaskade, griz, mantis, armin, aAndB],
    day2: [chainsmokers, marshmello, allison, snails, boombox, gramatik, atrak, bassnectar, bigG],
    day3: [zedd, sevenLions, zedsDead, glitchMob, illenium, excision, porterRobinson, killTheNoise, zomboy]
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
    .then(() => Event.insertMany([chainsmokers, marshmello, allison, snails, boombox, gramatik, atrak, bassnectar, bigG, galantis, bearGrillz, alesso, rlGrime, kaskade, griz, mantis, armin, aAndB, excision, zomboy, zedd, sevenLions, glitchMob, killTheNoise, zedsDead, illenium, porterRobinson]))
    .then(() => Schedule.insertMany([scheduleW, scheduleJ, scheduleMaster]))
    .then(() => will.save())
    .then(() => james.save())
    .then(() => master.save())
