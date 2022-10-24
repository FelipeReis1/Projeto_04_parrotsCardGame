let quantidadeCartasSelecionada;
let numeroJogadas = 0;
let primeiraCarta = "";
let segundaCarta = "";
let bloquearClique;
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

iniciar();
function iniciar() {
  while (
    quantidadeCartasSelecionada < 4 ||
    quantidadeCartasSelecionada > 14 ||
    quantidadeCartasSelecionada % 2 !== 0
  ) {
    quantidadeCartasSelecionada = Number(
      prompt("Qual a quantidade de cartas?")
    );
  }

  function comparador() {
    return Math.random() - 0.5;
  }

  meusGifs.sort(comparador);

  let gifsIguais = meusGifs.slice(0, quantidadeCartasSelecionada / 2);
  gifsIguais = gifsIguais.concat(gifsIguais);
  gifsIguais.sort(comparador);
  for (let i = 0; i < quantidadeCartasSelecionada; i++) {
    meuContainerCartas.innerHTML += `<ul class="card" onclick ="virarCarta(this)">
    <li class = "cartaFrente face"><img src="./imagens/front.png" /></li>
    <li class="cartaVirada face"><img src="${gifsIguais[i]}" /></li>  
    </ul>
    `;
  }
}

function virarCarta(elemento) {
  bloquearClique = document.querySelector(".containerCartas");
  if (bloquearClique.classList.contains("bloquear")) {
    return;
  }
  if (primeiraCarta === "") {
    primeiraCarta = elemento;
    elemento.classList.add("virar");
    numeroJogadas++;
  } else {
    segundaCarta = elemento;
    elemento.classList.add("virar");
    numeroJogadas++;
    if (primeiraCarta.innerHTML === segundaCarta.innerHTML) {
      primeiraCarta = "";
      segundaCarta = "";
      if (
        document.querySelectorAll(".virar").length ===
        quantidadeCartasSelecionada
      )
        setTimeout(finalizaJogo, 1000);
    } else {
      bloquearClique.classList.add("bloquear");
      setTimeout(comparaCartas, 1000);
    }
  }
}

function comparaCartas() {
  bloquearClique.classList.remove("bloquear");
  primeiraCarta.classList.remove("virar");
  segundaCarta.classList.remove("virar");
  primeiraCarta = "";
  segundaCarta = "";
}

function finalizaJogo() {
  alert(`Parabéns, você ganhou o jogo com: ${numeroJogadas} jogadas!`);
  quantidadeCartasSelecionada = 0;
  window.location.reload();
}
