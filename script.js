let clicks = localStorage.getItem("clicks");
let x2clicks;

x2clicks = localStorage.getItem("x2clicks");

// Buttons, divs
const button = document.querySelector('#button'); // кнопка click me
const counter = document.querySelector('#counter'); // счетчик
const reset = document.querySelector("#reset"); // ресет
const yesreset = document.querySelector("#yesreset"); // потверждения обнуления счета
const backFromResetMenu = document.querySelector("#No"); // Закрыть reset menu
const backFromShop = document.querySelector("#back"); // Закрыть магазин
const shop = document.querySelector("#shop"); // Магазин
const x2clicksBtn = document.querySelector("#x2clicks"); // x2 coins btn
let author = document.querySelector(".author");
let shopmenu = document.querySelector(".shopmenu"); // Меню магазина
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
    if(x2clicks) {
        clicks++;
        clicks++;
    } else {
        clicks++;
    }

    counter.innerHTML = `Your score: ${clicks}`;

    localStorage.setItem("clicks", JSON.stringify(clicks));
    clicks = JSON.parse(localStorage.getItem("clicks"));

    reload_func();
}

// Покупка x2 coins
function buyX2clicks() {
    if(clicks >= 1000 && x2clicks == null) {
        localStorage.setItem("x2clicks", true);
        localStorage.setItem("clicks", clicks-1000);
        x2coins = true;
        clicks = clicks - 1000;
        location.reload();
    } else if(x2clicks != null) {
        alert("ERR 1000-7");
    }

    reload_func();
}

// Открыть меню обнуления
function reset_menu() {
    updates.style = "display: none;";
    display.style = "display: none;";
    shopmenu.style = "display: none;";
    resetmenu.style = "display: block;";
    author.style = "display: none;";
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
    shopmenu.style = "display: none;";
    resetmenu.style = "display: none;";
    author.style = "display: block;";
}

function open_shop() {
    updates.style = "display: none;";
    display.style = "display: none;";
    shopmenu.style = "display: block;";
    author.style = "display: none;";
}

reset.addEventListener("click", reset_menu);
button.addEventListener("click", click);
yesreset.addEventListener("click", reset_counter);
backFromResetMenu.addEventListener("click", back_to_main);
backFromShop.addEventListener("click", back_to_main);
shop.addEventListener("click", open_shop);
x2clicksBtn.addEventListener("click", buyX2clicks);
updates.addEventListener("click", () => {window.location = "updates/updates.html"});