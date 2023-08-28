const { titleList } = require("../models")

class TitleList {
    static async createTitleList(req,res,next) {
        try {
            const { title } = req.body
            const { id } = req.loggedUser

            const newTitleList = await titleList.create({
                title,
                user_id: id 
            })

            res.status(200).json(newTitleList)
        } catch (err) {
            next(err)
        }
    }
    static async updateTitleList(req,res,next) {
        try {
            const { id, title } = req.body

            const newTitleList = await titleList.update({
                title
            }, { where: { id }})

            res.status(200).json({message: "Title updated!"})
        } catch (err) {
            next(err)
        }
    }
    static async deleteTitleList(req,res,next) {
        try {
            const { id } = req.body

            const deleteTitleList = await titleList.destroy({ where:  { id } })

            res.status(200).json({message: "Title deleted!"})
        } catch (err) {
            next(err)
        }
    }
    static async getTitleList(req,res,next) {
        try {
            const { id } = req.body

            const oneTitleList = await titleList.findOne({where: {id}})

            res.status(200).json(oneTitleList)
        } catch (err) {
            next(err)
        }
    }
    static async getTitleLists(req,res,next) {
        try {
            const getAll = await titleList.findAll()

            res.status(200).json(getAll)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = TitleList