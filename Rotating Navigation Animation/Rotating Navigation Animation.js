var open = document.getElementById("open");
var close = document.getElementById("close");
var container = document.querySelector(".container");
var databasic = document.querySelector(".databasic");

open.addEventListener("click", () => {
    container.classList.add("show-options");
    databasic.style.zIndex = "-1";  
});

close.addEventListener("click", () => {
    container.classList.remove("show-options");
    databasic.style.zIndex = "1";  
});
