const form = document.querySelector("#formulario")
const textarea = document.querySelector("textarea")
const tagResultado = document.querySelector(".resultado p")
const popUpResultado = document.querySelector(".resultado")
const botaoFechar = document.querySelector("#botao-fechar")

function pegarDadosDoFormulario() {
  const valorCampo = textarea.value
  const listaNomes = valorCampo.split(",")
  const tamanhoArray = listaNomes.length
  const posicaoNome = gerarNumeroAleatorio(tamanhoArray)
  const nome = listaNomes[posicaoNome]
  mostrarResultado(nome)

  textarea.value = ""
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  pegarDadosDoFormulario()
})

function gerarNumeroAleatorio(tamanhoArray) {
  return Math.floor(Math.random() * (tamanhoArray - 0) + 0)
}

function mostrarResultado(nome) {
  tagResultado.innerText = `Resultado: ${nome}`
  popUpResultado.classList.add("mostrarResultado")
}

function fecharPopUp() {
  popUpResultado.classList.remove("mostrarResultado")
}

botaoFechar.addEventListener("click", fecharPopUp)
