let laucher = "#open-menu";

let dropdown = "#menu";

let displayClass = "menu-displayed";

function nav() {
    let lanz = document.querySelector (laucher);
    lanz.addEventListener ("click", displayMenu, false);
}

function displayMenu (e){
    e.preventDefault();
    let deploy = document.querySelector (dropdown);
    deploy.classList.toggle (displayClass);
}

document.querySelector ("html").classList.add("js");

nav();