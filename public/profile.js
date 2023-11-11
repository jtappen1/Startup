let usersGlobal;
let userName;

function setName(){
    setUpLeaderBoards();
    if(userName != null){
        let specificUser = usersGlobal.get(userName);
        const nameEle = document.querySelector('#nameTextfield')
        specificUser.name = nameEle.value;
    }
    console.log('freak');
}
function setUpLeaderBoards(){

    let users;
    if(localStorage.getItem('users') == null){
        users  = new Map();
        usersGlobal = users;
        localStorage.setItem('users', JSON.stringify(Array.from(users.entries())));
    }
    else{
        users = new Map(JSON.parse(localStorage.getItem('users')));
        usersGlobal = users;
    }

    if(localStorage.getItem('username') != null){
        userName = JSON.parse(localStorage.getItem('username'));
    }
    else{
        userName = null;
    }
}