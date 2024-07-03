let current_users: string[] = ["saba", "admin", "kareem", "babar", "altaf"];
let new_users: string[] = ["fawad", "faheed", "omar", "hussain", "aftab"];

new_users.forEach((newuser) => {
    if (
        current_users.some(
            (currentusers)=> currentusers.toLowerCase() === newuser.toLowerCase()
        )
    ){
        console.log(`${newuser} will need to enter a new username.`);
        
    } else{
        console.log(`${newuser} is available.`);
        
    }
});