
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {

    // Previne o comportamento padrão do evento do submit do js, ou seja, impede o recarregamento da página.
    event.preventDefault();

    const peso = document.getElementById("weight").value;
    const altura = document.getElementById("height").value;
    const imc = peso / (altura * altura);

    document.getElementById("infos").classList.remove("hidden");

    const campoImc = document.getElementById("imc-field");
    let descricao;

    campoImc.classList.add("attention");
    // campoImc.style.color = "red";


    //condições do IMC
    if (imc < 17) {
        descricao = "Você está MUITO ABAIXO DO PESO.";
        campoImc.style.color = "#0082C7";
        
    } else if ((imc >= 17) && (imc < 18.5)) {
        descricao = "Você está ABAIXO DO PESO.";
        campoImc.style.color = "#59C9F3";

    } else if ((imc >= 18.5) && (imc < 25)) {
        descricao = "Você está com o PESO IDEAL.";
        campoImc.classList.remove("attention");
        campoImc.classList.add("normal");
        // campoImc.style.color = "#2CB507";

    } else if ((imc >= 25) && (imc < 30)) {
        descricao = "Você está com SOBREPESO.";
        campoImc.style.color = "#FAC90D";

    } else if ((imc >= 30) && (imc < 35)) {
        descricao = "Você está com OBESIDADE.";
        campoImc.style.color = "#F38B2F";

    } else if ((imc >= 35) && (imc < 40)) {
        descricao = "Você está com OBESIDADE SEVERA.";
        campoImc.style.color = "#ED1F27";

    } else if (imc >= 40) {
        descricao = "Você está com OBESIDADE MORBIDA.";
        campoImc.style.color = "#933DBC";

    } else {
    }


    campoImc.textContent = imc.toFixed(1);
    document.getElementById("description").textContent = descricao;



});

