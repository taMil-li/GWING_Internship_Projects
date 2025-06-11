let menuIcon = document.getElementById('menuIcon');
let menuItems = document.getElementById('navLinks');
if(window.innerWidth <= 768)
menuItems.style.display = "none";

function displayLinks() {

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-close");
    if (menuItems.style.display === "none")
        menuItems.style.display = "block";
    else
        menuItems.style.display = "none";
}

menuIcon.addEventListener('click', displayLinks);