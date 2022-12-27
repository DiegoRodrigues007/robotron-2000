const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
  bracos: {
    forca: 17,
    poder: 55,
    energia: 54,
    velocidade: 15,
  },
  blindagem: {
    forca: 17,
    poder: 55,
    energia: 54,
    velocidade: 15,
  },
  nucleos: {
    forca: 17,
    poder: 55,
    energia: 54,
    velocidade: 15,
  },
  pernas: {
    forca: 17,
    poder: 55,
    energia: 54,
    velocidade: 15,
  },
  foguetes: {
    forca: 17,
    poder: 55,
    energia: 54,
    velocidade: 15,
  },
};

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.pecas);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatisticas(peca) {
  estatisticas.forEach((elemento) => {
    elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[peca][elemento.dataset.estatistica];
  });
}
