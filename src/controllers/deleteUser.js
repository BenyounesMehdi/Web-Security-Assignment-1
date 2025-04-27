// controllers/deleteUser.js
import { deleteUser as deleteUserFromDB } from "./users.js";

export default function deleteUser(req, res) {
    // Support both POST (body) and GET (query) parameters
    const username = req.body?.username || req.query?.username;
    
    if (!username) {
        return res.status(400).json({ error: "Username is required" });
    }

    if (deleteUserFromDB(username)) {
        return res.json({ 
            message: `User ${username} deleted successfully`,
            vulnerable: true // Flag for the lab
        });
    }
    
    res.status(404).json({ error: "User not found" });
}