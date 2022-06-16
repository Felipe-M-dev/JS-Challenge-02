const imgBoder = document.getElementById("nvidia")

imgBoder.addEventListener('click', () => {
    imgBoder.classList.toggle("border-img");
})

(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
}(" Desafio 2 | Parte 1 "));