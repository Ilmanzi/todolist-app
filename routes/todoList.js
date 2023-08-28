const express = require("express")
const router = express.Router()
const TodoList = require("../controller/todoList")

router.post("/create", TodoList.createTodoList)
router.put("/update", TodoList.updateTodoList)
router.delete("/delete", TodoList.deleteTodoList)
router.get("/get", TodoList.getTodoList)
router.get("/getall", TodoList.getTodoLists)

module.exports = router