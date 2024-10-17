let desc = prompt(`Digite o codigo do cupom:`);
let preco = 1000;
let precofinal;

switch (desc) {
  case "DESC1":
    precofinal = preco - preco * 0.05;
    alert(`5% Desconto`);
    alert(`Preço sem desconto: R$${preco}\nPreço com desconto: R$${precofinal}`);
    break;

  case "DESC2":
    precofinal = preco - preco * 0.10;
    alert(`10% Desconto`);
    alert(`Preço sem desconto: R$${preco}\nPreço com desconto: R$${precofinal}`);
    break;

  case "DESC3":
    precofinal = preco - preco * 0.15;
    alert(`15% Desconto`);
    alert(`Preço sem desconto: R$${preco}\nPreço com desconto: R$${precofinal}`);
    break;

  case "DESC4":
    precofinal = preco - preco * 0.20;
    alert(`20% Desconto`);
    alert(`Preço sem desconto: R$${preco}\nPreço com desconto: R$${precofinal}`);
    break;

  case "DESC5":
    precofinal = preco - preco * 0.25;
    alert(`25% Desconto`);
    alert(`Preço sem desconto: R$${preco}\nPreço com desconto: R$${precofinal}`);
    break;

    default:
    alert(`Não é valido esse cupom`)
}