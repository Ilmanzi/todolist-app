const { signToken } = require("../middleware/jwt")
const { user } = require("../models")
const bcrypt = require("bcrypt")

class UserController {
    static async register(req,res,next) {
        try {
            const {
                username,
                email,
                password,
                country
            } = req.body

            const newUser = await user.create({
                username,
                email,
                password,
                country
            })

            res.status(200).json(newUser)
        } catch (err) {
            next(err)
        }
    }

    static async login(req,res,next) {
        try {
            const { email, password } = req.body;
            const findUser = await user.findOne({where: {email}})
            if (!user) {
                throw { name: "InvalidEmail"}
            }
            const comparePassword = bcrypt.compareSync(password, findUser.password)
            if (!comparePassword) {
                throw { name: "InvalidPassword"}
            }

            const accessToken = signToken({
                id: findUser.id,
                username: findUser.username,
                email: findUser.email
            })

            res.status(200).json({
                id: findUser.id,
                access_token: accessToken,
                username: findUser.username,
                email: findUser.email
            })

        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController