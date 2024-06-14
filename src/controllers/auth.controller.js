import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUserService } from '../services/users.service.js';

const secretJWT = process.env.SECRET_JWT || "eNbnClWA~c$~DI7X8fJ";

export const login = async (req, res) => {
    const { email, password } = req.body;

    const userFound = await getUserService(email);
    
    if (!userFound) {
        return res.status(401).json({
            message: "Incorrect username or password"
        });
    }

    const isCorrectPass = bcrypt.compareSync(password, userFound.password)

    if (!isCorrectPass) {
        return res.status(401).json({
            message: "Incorrect username or password"
        });
    }

    console.log("Password is correct");

    const payload = {
        user: {
            _id: userFound._id
        }
    }

    const token = jwt.sign(payload, secretJWT, { expiresIn: '3h' });

    return res.status(200).json({
        message: "Access granted",
        token: token
    });
}
