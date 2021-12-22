let clicks = 0;

clicks = localStorage.getItem("clicks");

// Buttons, divs
const button = document.querySelector('#button'); // кнопка click me
const counter = document.querySelector('#counter'); // счетчик
const reset = document.querySelector("#reset"); // ресет
const yesreset = document.querySelector("#yesreset"); // потверждения обнуления счета
const back = document.querySelector("#back"); // Назад
let display = document.querySelector(".display"); // click me, ресет, счетчик
let resetmenu = document.querySelector(".resetmenu"); // ресет меню
let updates = document.querySelector(".updates"); // Обновления и новости btn

// Отображение кликов на странице
if(clicks === null) {
    counter.innerHTML = `Your score: 0`;
} else {
    counter.innerHTML = `Your score: ${clicks}`;
}

// reload функция
function reload_func() {
    location.reload();
}

// Подсчет кликов
function click() {
    clicks++;
    counter.innerHTML = `Your score: ${clicks}`;

    localStorage.setItem("clicks", JSON.stringify(clicks));
    clicks = JSON.parse(localStorage.getItem("clicks"));

    reload_func();
}

// Открыть меню обнуления
function reset_menu() {
    updates.style = "display: none;";
    display.style = "display: none;";
    resetmenu.style = "display: block;";
}

// Обнуление счетчика
function reset_counter() {
    localStorage.clear();
    location.reload();
}

// Назад
function back_to_main() {
    updates.style = "display: block;";
    display.style = "display: block;";
    resetmenu.style = "display: none;";
}

reset.addEventListener("click", reset_menu);
button.addEventListener("click", click);
yesreset.addEventListener("click", reset_counter);
back.addEventListener("click", back_to_main);
updates.addEventListener("click", function() {window.location = "updates/updates.html"});