let idade = Number(prompt('Digite a sua idade'))

switch (true) {
    case idade <= 12:
        alert(`Criança`)
        break;
    case idade <= 17:
        alert(`Adolescente`)
        break;
    case idade <= 50:
        alert(`Adulto`)
        break;
    case idade >= 60:
        alert(`Idoso`)
        break;

    default:
        alert("Invalido")
        break;
}