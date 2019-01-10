const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const scheduleController = require('../controllers/scheduleController')

router.get("/", userController.index)
router.get("/new", userController.new)
router.post("/", userController.create)
router.get("/:id", userController.show)

router.get("/:id/edit", scheduleController.edit)
router.put("/:scheduleId/:eventId/:day/:userId", scheduleController.addEvent)
router.patch("/:scheduleId/:eventId/:day/:userId", scheduleController.removeEvent)

module.exports = router
