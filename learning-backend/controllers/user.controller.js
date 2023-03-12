import Users from '../models/users.model.js';
import jwt from 'jsonwebtoken'

const generateJWT = async (userid) => {
    const user = await Users.findById(userid)
    return {
        access_token: jwt.sign({
            sub: userid,
            username: user.username,
        },"Test123")
    }
}

const createUser = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const user = new Users({
            username, email
        });
        await user.savePassword(password);
        await user.save();
        const token = generateJWT(user._id)
        res.json({
            access_token: token
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await  Users.findOne({ username: username})
        if(!user){
            throw new Error("User not found")
        }
        else {
            const isPasswordValid = Users.validatePassword(password, user.salt, user.hash)
            if(isPasswordValid){
                const token = await generateJWT(user._id)
                res.json({
                    token
                }); 
            }
            else {
                throw new Error("Password is not valid")
            }
        }
    }
    catch (err){
        console.log(err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
}

const whoAmI = async (req, res) => {
    try {
        console.log(req.user)
        res.send(`Hello, ${req.user.username}`)
    }
    catch(err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
}

export {
    createUser,
    loginUser,
    whoAmI
}