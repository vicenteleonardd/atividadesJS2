
let idade = prompt("Por favor, informe sua idade:");


idade = parseInt(idade);


if (idade < 18) {
    console.log("Você é menor de idade.");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso.");
}
