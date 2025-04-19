import {User} from "../models/User.js"

export const findUsers = async (req, res) => {
    try {
        const books = await User.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while retrieving users." });
    }
};
