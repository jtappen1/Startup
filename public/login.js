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
function displayQuote(data) {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });

    }
