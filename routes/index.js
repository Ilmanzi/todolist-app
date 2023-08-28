const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const titleListRouter = require("./titleList")
const todoListRouter = require("./todoList")
const  authentication = require("../middleware/auth")

router.use("/api/users", userRouter);

router.use(authentication);
router.use("/api/title", titleListRouter)
router.use("/api/todo", todoListRouter)

module.exports = router;
