function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("username", JSON.stringify(nameEl.value));
    console.log(nameEl.value);
    setUpLeaderBoards();
    window.location.href = "home.html";
  }

  function setUpLeaderBoards(){
    let users;
    if(localStorage.getItem('users') == null){
        users  = new Map();
        localStorage.setItem('users', JSON.stringify(Array.from(users.entries())));
    }
    else{
        users = new Map(JSON.parse(localStorage.getItem('users')));
    }
}


