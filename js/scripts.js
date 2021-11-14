let laucher = "#open-menu";

let dropdown = "#menu";

let displayClass = "menu-displayed";

function nav() {
  let lanz = document.querySelector(laucher);
  lanz.addEventListener("click", displayMenu, false);
}

function displayMenu(e) {
  e.preventDefault();
  let deploy = document.querySelector(dropdown);
  deploy.classList.toggle(displayClass);
}

document.querySelector("html").classList.add("js");

nav();

// 14-11-2021 New Feature Call API REST Contacts

const form = document.getElementById("formContact");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  savePost()
});

async function saveContact() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value, 
            email: email.value,
            mesages: [{text: message.value}]
        })
      }).then (function (data) {
        alert ("Muchas gracias por escribirnos." +
        "Hemos recibido tu correspondencia con Éxito.");
        name.value = ''; 
        email.value = ''; 
        message.value = '';
      });
}