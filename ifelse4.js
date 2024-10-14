let altura = Number(prompt("Digite sua altura em metros: "));
let peso = Number(prompt("Digite seu peso em KG: "));

let imc = peso / (altura * altura);


alert(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc >= 18.5 || imc <= 24.9) {
    alert("Seu IMC está dentro do intervalo saudável.");
} 
else {
    alert("Seu IMC NÃO está dentro do intervalo saudável.");
}
