let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let loginButton = document.getElementById("loginButton");
let createButton = document.getElementById("createButton");

let root = document.getElementById("root");
let background = document.getElementById("background");

let logoutButton = document.getElementById("logoutButton");
let admin = document.getElementById("admin");
let basic = document.getElementById("basic");
let dea = document.getElementById("Dea");

admin.style.display = "none";
basic.style.display = "none";
dea.style.display = "none";
logoutButton.style.display = "none";

function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  logoutButton.style.display = "block";
  location.reload();

  if (usernameInput.value == "admin" && passwordInput.value == "123") {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    login.style.display = "none";
    createButton.style.display = "none";

    localStorage.setItem("role", "admin");
    admin.style.display = "block";
    basic.style.display = "none";
    dea.style.display = "none";
  } else if (
    usernameInput.value == "@Dea" &&
    passwordInput.value == "AFRIZAL"
  ) {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    login.style.display = "none";
    createButton.style.display = "none";

    localStorage.setItem("role", "dea");
    admin.style.display = "none";
    basic.style.display = "none";
    dea.style.display = "block";
  } else if (usernameInput.value == "") {
    alert("Username Can't Blank!");
  } else {
    localStorage.clear();
    location.reload();
    alert("Account Not Registered");
  }
}

if (localStorage.getItem("username")) {
  usernameInput.style.display = "none";
  passwordInput.style.display = "none";
  loginButton.style.display = "none";
  logoutButton.style.display = "block";
  login.style.display = "none";
  createButton.style.display = "none";

  root.style.width = "230vh";
  root.style.justifyContent = "start";
  root.style.height = "150vh";
  background.style.display = "none";

  if (localStorage.getItem("role") == "admin") {
    admin.style.display = "block";
    basic.style.display = "none";
    dea.style.display = "none";
  } else if (localStorage.getItem("role") == "dea") {
    admin.style.display = "none";
    basic.style.display = "none";
    dea.style.display = "block";
  } else {
    basic.style.display = "block";
    admin.style.display = "none";
    dea.style.display = "none";
  }
}

function onLogout() {
  localStorage.clear();
  location.reload();
}

function onCreate() {
  if (usernameInput.value == "admin" && passwordInput.value == "123") {
    alert("Failed Make Account");
  } else if (
    usernameInput.value == "@Dea" &&
    passwordInput.value == "AFRIZAL"
  ) {
    alert("Failed Make Account!");
  } else if (usernameInput.value == "") {
    alert("Username Cant Blank");
  } else {
    alert("Account Created");
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("password", passwordInput.value);
    localStorage.setItem("role", "basic");
    location.reload();
  }
}
