let menu = document.querySelector(".menu");
let toggle = document.querySelector(".menu .toggle");

toggle.onclick = function () {
    menu.classList.toggle("show");
};

document.addEventListener("click", (e) => {
    if (e.target !== menu) {
        menu.classList.remove("show");
    };
});

menu.onclick = function (e) {
    e.stopPropagation();
};
