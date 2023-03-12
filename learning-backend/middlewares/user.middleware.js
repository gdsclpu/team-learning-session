import Users from "../models/users.model.js"
import jwt from "jsonwebtoken"

const validateToken = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1]
        const isTokenValid = jwt.verify(token, "Test123")
        if(!!isTokenValid){
            const user = await Users.findById(isTokenValid.sub)
            if(!user){
                throw new Error("User does not exist")
            }
            else {
                req.user = user
            }
        }
        else {
            console.log("Token is not valid")
        }
        next()
    }
    catch(err) {
        res.status(401).json({message: "Token is not valid"})
    }
}

export {
    validateToken
}