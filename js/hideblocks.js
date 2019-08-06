var about = document.getElementById("aboutme");
var goback_btn = document.getElementById("goback");
var about_btn = document.querySelector(".getInfo");
var orbit = document.getElementById("orbit_container");
var nav = document.getElementById("navbar-mine");

about.style.display = "none";

about_btn.addEventListener("click", () => {
    orbit.style.animation = "disappear 1s";
    nav.style.animation = "disappear 1s";
    setTimeout(() => {
        orbit.style.display = "none";
        nav.style.display = "none";

        //animation for the div to show
        about.style.display = "block";
        about.style.animation = "move-in 1s";
    }, 800);
    
});

goback_btn.addEventListener("click", () => {
    about.style.animation = "move-out 1s";
    setTimeout(() => {
        orbit.style.animation = "reappear 1s";
        nav.style.animation = "reappear 1s";
        about.style.display = "none";
        orbit.style.display = "block";
        nav.style.display = "block";
    }, 800);
});