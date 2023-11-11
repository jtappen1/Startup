let usersGlobal;
let userRowFormat = "<tr><td>Template Name</td><td>Template Points</td><td>Template NumTricks</td></tr>";
let noUserRowFormat = "<tr><td>Sign-in to track your tricks!</td><td>0</td><td>0</td></tr>"
let userName;


class usersClass {
    async setUpLeaderBoards(){
        let users;
        if(localStorage.getItem('users') == null){
            users  = new Map();
            usersGlobal = users;
            try {
                const response = await fetch('/api/user', {
                  method: 'POST',
                  headers: {'content-type': 'application/json'},
                  body: JSON.stringify(Array.from(users.entries())),
                });
                console.log("Posted Sucessfully")
            }
            catch{
                console.log("Error Setup Leaderboards")
            }
            localStorage.setItem('users', JSON.stringify(Array.from(users.entries())));
        }
        else{
            users = await fetch('/api/users');
            users = new Map(JSON.parse(localStorage.getItem('users')));
            usersGlobal = users;
        }
    
        if(localStorage.getItem('username') != null){
            userName = JSON.parse(localStorage.getItem('username'));
        }
        else{
            userName = null;
        }
        await this.setTrickInfo(users);
    }
    
     async setTrickInfo(users){
        let tricks = this.getTricks();
        let trickScore = 0;
        const numTricks = tricks.length;
    
        for(let i = 0; i < tricks.length; i++){
            let specificTrick = tricks[i];
            if (specificTrick.difficulty == 'Easy'){
                trickScore += 5;
            }
            else if(specificTrick.difficulty == 'Medium'){
                trickScore +=15;
            }
            else{
                trickScore += 25;
            }
        }
    
        if(users.get(userName) == null && userName != null){
            const newUser = {name: "", username: userName, trickScore: trickScore, numTricks:numTricks};
            users.set(userName, newUser);
        }
        else if(users.get(userName)!= null){
            let editUser = users.get(userName);
            editUser.trickScore = trickScore;
            editUser.numTricks = numTricks;
            //MAY NEED TO REMOVE AND RE ADD
        }
        localStorage.setItem('users', JSON.stringify(Array.from(users.entries())));
        try {
            const response = await fetch('/api/user', {
              method: 'POST',
              headers: {'content-type': 'application/json'},
              body: JSON.stringify(Array.from(users.entries())),
            });
            console.log("Posted Sucessfully")
        }
        catch{
            console.log("Error Setup Leaderboards")
        }
        this.updateUsers(users);
    }

    updateUsers(users){
        const usersTableBodyEl = document.querySelector('#users');
        let usersArray = Array.from(users.entries());
        usersTableBodyEl.innerHTML = "";
        if(usersArray.length ==0){
            usersTableBodyEl.innerHTML += noUserRowFormat;
        }
        else{
            for(let i = 0; i< usersArray.length; i++){
                let specificUser = usersArray[i];
                let template = userRowFormat.slice()
                template = template.replace('Template Name', specificUser[1].username);
                template = template.replace('Template Points', specificUser[1].trickScore);
                template = template.replace('Template NumTricks', specificUser[1].numTricks);
                usersTableBodyEl.innerHTML += template;
            }
        }
    }
    
    
    getTricks(){
        return JSON.parse(localStorage.getItem('tricks'));
    }
    
    //////// Start of Profile Functions
}
const classVar = new usersClass();
classVar.setUpLeaderBoards();
