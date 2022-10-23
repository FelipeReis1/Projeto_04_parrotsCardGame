let quantidadeCartasSelecionada;
//let numeroJogadas = 0;
let meuContainerCartas = document.querySelector(".containerCartas");
let meusGifs = [
  "./imagens/bobrossparrot.gif",
  "./imagens/explodyparrot.gif",
  "./imagens/fiestaparrot.gif",
  "./imagens/metalparrot.gif",
  "./imagens/revertitparrot.gif",
  "./imagens/tripletsparrot.gif",
  "./imagens/unicornparrot.gif",
];

while (
  quantidadeCartasSelecionada < 4 ||
  quantidadeCartasSelecionada > 14 ||
  quantidadeCartasSelecionada % 2 !== 0
) {
  quantidadeCartasSelecionada = Number(prompt("Qual a quantidade de cartas?"));
}

function comparador() {
  return Math.random() - 0.5;
}

meusGifs.sort(comparador);

let gifsIguais = meusGifs.slice(0, quantidadeCartasSelecionada / 2);
gifsIguais = gifsIguais.concat(gifsIguais);
gifsIguais.sort(comparador);
for (let i = 0; i < quantidadeCartasSelecionada; i++) {
  meuContainerCartas.innerHTML += `<div class="card">
  <div class = "cartaFrente face"><img src="./imagens/front.png" /></div>
  <div class="cartaVirada face"><img src="${gifsIguais[i]}" /></div>  
  </div>
  `;
}
