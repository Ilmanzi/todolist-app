const { todoList } = require("../models")

class TodoList {
    static async createTodoList(req,res,next) {
        try {
            const { title, titleList_id } = req.body

            const newTodoList = await todoList.create({
                title,
                status: true,
                titleList_id
            })

            res.status(200).json(newTodoList)
        } catch (err) {
            next(err)
        }
    }
    static async updateTodoList(req,res,next) {
        try {
            const {id, title, status} = req.body

            const newTodoList = await todoList.update({
                title,
                status
            }, { where : { id }})

            res.status(200).json({message: "todo updated!"})
        } catch (err) {
            next(err)
        }
    }
    static async deleteTodoList(req,res,next) {
        try {
            const { id } = req.body

            const removeTodo = await todoList.destroy({
                where: { id }
            })

            res.status(200).json({message: "Todolist deleted"})
        } catch (err) {
            next(err)
        }
    }
    static async getTodoList(req,res,next) {
        try {
            const { id } = req.body

            const getTodoList = await todoList.findOne({
                where: { id }
            })

            res.status(200).json(getTodoList)
        } catch (err) {
            next(err)
        }
    }
    static async getTodoLists(req,res,next) {
        try {
            const getTodoLists = await todoList.findAll()

            res.status(200).json(getTodoLists)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = TodoList