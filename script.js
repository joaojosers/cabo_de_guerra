let personagens = [];
let viloes = [];
let forcaPersonagem = 0;
let forcaViloes = 0;

const viloesPossiveis = ["Nazare Tedesco", "Odete Roitman", "Carminha", "Laura Prudente da Costa"];

for (let i = 0; i < 3; i++) {
  // Cadastro dos personagens
  personagens[i] = prompt(`Digite o nome do personagem ${i + 1}:`);
  forcaPersonagem += Math.floor(Math.random() * 10) + 1;

  // Cadastro dos vilões
  let indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length);
  viloes[i] = viloesPossiveis[indiceAleatorio];
  forcaViloes += Math.floor(Math.random() * 10) + 1;
}

console.log(`Personagens: ${personagens}`);
console.log(`Vilões: ${viloes}`);

if (forcaPersonagem > forcaViloes) {
  alert(`Seu time é muito forte! Você ganhou! com força: ${forcaPersonagem}`);
} else if (forcaPersonagem < forcaViloes) {
  alert(`Seu time perdeu! O computador venceu com força: ${forcaViloes}`);
} else {
  alert(`Houve um empate! Ambos têm força: ${forcaViloes}`);
}
