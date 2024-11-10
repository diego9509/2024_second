document.addEventListener("DOMContentLoaded", () => {
    
});

function menuToggle(){
    var menu = document.getElementsByClassName('menu-wrapper')[0];
    menu.classList.toggle('is-active');
}

function menuClose(){
    var menu = document.getElementsByClassName('menu-wrapper')[0];
    menu.classList.remove('is-active');
}