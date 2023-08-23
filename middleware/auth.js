const { verifyToken } = require("../helpers/jwt");
const { user } = require("../models");

async function authentication(req,res,next) {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token){
            throw { name: "MissingToken" }
        }
        
        const data = verifyToken(token)
        const { email } = data
        const foundUser = await user.findOne({where: { email }})
        if (!foundUser) {
            throw { name: "UserNotFound"}
        } else {
            req.loggedUser = {
                id: foundUser.id,
                username: foundUser.username,
                email: foundUser.email
            }
            next()
        }

    } catch (err) {
        next(err)
    }
}

module.exports = authentication