let timer = document.getElementById("timer");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let counter = 0;

function startFun() {
    timer.textContent = counter;
    counter++;
}

start.addEventListener ("click", function () {
    var interval = setInterval (startFun, 1000);
})
reset.addEventListener ("click", function () {
    counter = 0;
})