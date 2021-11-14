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

// Send a POST request
const form = document.getElementById("formContact");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  savePost()
});


async function savePost() {
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
            mesages: [{"text": message.value}]
        })
      }).then (function (data) {
        alert ("Muchas gracias por escribirnos. Hemos recibido tu correspondencia con exito.");
        name.value = ''
        email.value = ''
        message.value = ''
      });
}


//let btnSendContact = document.getElementById("send-contact"); // Encuentra el elemento "p" en el sitio
//btnSendContact.onclick = savePost; // Agrega función onclick al elemento
