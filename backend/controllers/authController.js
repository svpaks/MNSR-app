import { db } from "../db.js"
import bcrypt from "bcryptjs"

export const register = (req, res) => {
    
    // I am checking if user exist
    const q = "SELECT * FROM users WHERE phonenumber = ? OR username = ?"

    db.query(q, [req.body.username, req.body.phonenumber], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("User already exists!")

        if (!/^[a-zA-Z]+$/.test(req.body.username)) {
            return res.status(400).json({ error: 'Invalid username. Use only English characters.' });
        }

        if (!/^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test(req.body.password)) {
            return res.status(400).json({ error: 'Invalid password. Must have at least 8 characters with at least one number and one letter.' });
        }

        if (!/^05\d{8}$/.test(req.body.phonenumber)) {
            return res.status(400).json({ error: 'Invalid phone number format. It must start with 05 and include another 8 digits.' });
        }

        // I am hashing password and creating a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`name`, `username`, `phonenumber`, `password`) VALUES (?)";
        const values = [
            req.body.name,
            req.body.username,
            req.body.phonenumber,
            hash,
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created.");
        })
    })
}

export const login = (req, res) => {

}

export const logout = (req, res) => {

}