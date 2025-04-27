// File: controllers/users.js
const users = {
    wiener: { password: "peter", isAdmin: false },
    carlos: { password: "matthew", isAdmin: false }
};

export function deleteUser(username) {
    if (users[username]) {
        delete users[username];
        return true;
    }
    return false;
}

export function getUsers() {
    return users;
}