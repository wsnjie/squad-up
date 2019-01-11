const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const scheduleController = require('../controllers/scheduleController')
const compareController = require('../controllers/compareController')

router.get("/", userController.index)
router.get("/new", userController.new)
router.post("/", userController.create)
router.get("/:id", userController.show)

router.get("/:id/edit", scheduleController.edit)
router.put("/:scheduleId/:eventId/:day/:userId", scheduleController.addEvent)
router.patch("/:scheduleId/:eventId/:day/:userId", scheduleController.removeEvent)

router.get("/:id/compare", compareController.compareForm)
router.get("/:userA/compare/:userB", compareController.results)

module.exports = router
