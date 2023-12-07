const visor = document.getElementById("resultado");

const icone = document.querySelector(".hidden");



function insert(num) {

    if (visor.innerHTML === '0') {
        visor.innerHTML = '';
    }

    visor.innerHTML += num;
}

function clean() {

    visor.innerHTML = "0";

}

function back() {

    let result = visor.innerHTML;
    visor.innerHTML = result.substring(0, result.length - 1);
}

function calculate() {

    let result = visor.innerHTML;
    visor.innerHTML = eval(result);


    if (result.length > 2) {
        visor.innerHTML = eval(result);

    } else {

        visor.innerHTML = "Error";
        icone.style.opacity = '1';

        const timeOut = setTimeout(clean, 2000);

    }

}