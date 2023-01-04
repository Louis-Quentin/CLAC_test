const express = require('express')
var chicken = express()
const create = require('../controller/controller')
const get = require("../controller/controller")
const update = require("../controller/controller")
const erase = require("../controller/controller")
const run = require("../controller/controller")
const bodyparser = require('body-parser')
chicken.use(bodyparser.json())

chicken.post('/chicken',create.create_chicken)
chicken.get("/chicken", get.get_chicken)
chicken.patch("/chicken", update.update_chicken)
chicken.delete("/chicken", erase.delete_chicken)
chicken.put("/chicken", update.update_chicken)
chicken.patch("/chicken/run", run.chicken_run)

module.exports = chicken