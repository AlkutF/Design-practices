var open = document.getElementById("open");
var close = document.getElementById("close");
var container = document.querySelector(".container");

open.addEventListener("click", () => {
    container.classList.add("show-options");
});

close.addEventListener("click", () => {
    container.classList.remove("show-options");
});
