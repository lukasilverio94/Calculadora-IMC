const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

// Selecao de elementos
const imcTable = document.querySelector("#imc-table");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");

// funcoes:
function createTable(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("table-data");
    // criando os 3 parágrafos da div
    const classification = document.createElement("p");
    classification.innerText = item.classification;

    const info = document.createElement("p");
    info.innerText = item.info;

    const obesity = document.createElement("p");
    obesity.innerText = item.obesity;

    //incluir paragrafos na div
    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);

    // colocar na tabela cada uma delas:
    imcTable.appendChild(div);
  });
}

// limpar inputs
function cleanInputs() {
  heightInput.value = "";
  weightInput.value = "";
}

// LIMITAR CARACTERES PARA NUMEROS
function validDigits(text) {
  return text.replace(/[^0-9,]/g, "");
}
//inicializacao do meu projeto
createTable(data);

// Eventos
[heightInput, weightInput].forEach((el) => {
  el.addEventListener("input", (e) => {
    const updatedValue = validDigits(e.target.value);

    e.target.value = updatedValue;
  });
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault(); // pra parar de carregar a pagina ao clicar em Limpar, adicionar o preventDefault() em qualquer evento
  cleanInputs(); //chama funcao pra limpar imputs, acima.
});
