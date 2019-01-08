const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const scheduleController = require('../controllers/scheduleController')

router.get("/", userController.index)
router.get("/new", userController.new)
router.post("/", userController.create)
router.get("/:id", userController.show)

module.exports = router