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
  console.log(event);
  event.preventDefault();
  event.cancelable = true;
  alert("Se dectecto el envio del formulario.");
  savePost ();
});


async function savePost() {
    await axios({
        method: "post",
        url: "http://localhost:3000/api/users",
        data: {
          name: "Carlos Tovar",
          email: "carlos@correo.com",
          mesages: [
            { text: "Prueba de envio de un mensaje de contacto desde mi fronted." },
          ],
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
}


//let btnSendContact = document.getElementById("send-contact"); // Encuentra el elemento "p" en el sitio
//btnSendContact.onclick = savePost; // Agrega función onclick al elemento
