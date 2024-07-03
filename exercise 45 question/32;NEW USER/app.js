"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["saba", "admin", "kareem", "babar", "altaf"];
let new_users = ["fawad", "faheed", "omar", "hussain", "aftab"];
new_users.forEach((newuser) => {
    if (current_users.some((currentusers) => currentusers.toLowerCase() === newuser.toLowerCase())) {
        console.log(`${newuser} will need to enter a new username.`);
    }
    else {
        console.log(`${newuser} is available.`);
    }
});
