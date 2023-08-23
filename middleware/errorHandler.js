function errorHandler(err, req, res, next) {
    console.log(err)
    if (err.name === "InvalidEmail") {
        res.status(404).json({ message: "Email not found" })
    } else if (err.name === "InvalidPassword") {
        res.status(404).json({ message: "Wrong password" })
    } else if (err.name === "MissingToken") {
        res.status(404).json({ message: "Token is missing / Unauthenticated" })
    } else if (err.name === "UserNotFound") {
        res.status(404).json({ message: "User is not found" })
    }
}

module.exports = errorHandler