let cond = prompt(`Digite alguma dessas expressões para fazer o calculo (+ - / *):`);
let num1 = parseFloat(prompt(`Digite um número:`));
let num2 = parseFloat(prompt(`Digite sua número:`));;
let result


parseInt;

switch (cond) {
  case '+':
    result = num1 + num2;
    alert(`Resultado: ${num1} + ${num2} = ${result}`);
    break;

  case '-':
    result = num1 - num2;
    alert(`Resultado: ${num1} - ${num2} = ${result}`);
    break;

  case '/':
    result = num1 / num2;
    alert(`Resultado: ${num1} / ${num2} = ${result}`);
    break;

    case '*':
    result = num1 * num2
    alert(`Resultado: ${num1} * ${num2} = ${result}`);
    break;

    default:
    alert(`Digite um expressão valida`);
}