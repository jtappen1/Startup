function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("username", JSON.stringify(nameEl.value));
    console.log(nameEl.value);
    window.location.href = "home.html";
  }


