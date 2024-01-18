alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log = (numeroSecreto);
let selectedNumber;
let tentativas = 1;

while (selectedNumber != numeroSecreto){
    selectedNumber = prompt('Escolha um número enre 1 e 10');

    if (selectedNumber == numeroSecreto){
        alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (selectedNumber > numeroSecreto) {
            alert(`O número secreto é menor que ${selectedNumber}`);
        } else {
            alert(`O número secreto é maior que ${selectedNumber}`);
        }
        tentativas++;
    }
}