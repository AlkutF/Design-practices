const split1 = document.getElementById("split1");
const split2 = document.getElementById("split2");
const container = document.getElementById("container");

split1.addEventListener("mouseenter", () => {

    container.classList.add("izquierda");
});

split1.addEventListener("mouseleave", () => {
    container.classList.remove("izquierda");
});

split2.addEventListener("mouseenter", () => {
    container.classList.add("derecha");
});

split2.addEventListener("mouseleave", () => {
    container.classList.remove("derecha");
});
