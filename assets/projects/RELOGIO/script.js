const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

//arrow function = função anonima
const relogio = setInterval(() => {
    let dateToday = new Date();
    let hours = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    horas.textContent = hours.toString().padStart(2, "0");
    minutos.textContent = minutes.toString().padStart(2, "0");
    segundos.textContent = seconds.toString().padStart(2, "0");
});