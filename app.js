alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log = (numeroSecreto);
let selectedNumber;
let tentativas = 1;

while (selectedNumber != numeroSecreto){
    selectedNumber = prompt(`Escolha um número enre 1 e ${numeroMaximo}`);

    if (selectedNumber == numeroSecreto){
        break;
    } else {
        if (selectedNumber > numeroSecreto) {
            alert(`O número secreto é menor que ${selectedNumber}`);
        } else {
            alert(`O número secreto é maior que ${selectedNumber}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${palavraTentativa} tentativas`);

// if (tentativas > 1){
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }

