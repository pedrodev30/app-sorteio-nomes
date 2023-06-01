const form = document.querySelector("#formulario")
const textarea = document.querySelector("textarea")
const tagResultado = document.querySelector(".resultado p")
const popUpResultado = document.querySelector(".resultado")
const botaoFechar = document.querySelector("#botao-fechar")
const botaoCancelarModal = document.querySelector("#botao-cancelar")
const fade = document.querySelector(".fade")
const modal = document.querySelector(".modal")
const textoAlerta = document.querySelector("#texto-alerta")

function pegarDadosDoFormulario() {
  const valorCampo = textarea.value
  
  if(valorCampo == "") {
    fade.classList.remove("hide")
    modal.classList.remove("hide")
    textoAlerta.innerText = "Por favor preencha algum nome para sortear!"
    return
  }

  const listaNomes = valorCampo.split(",")
  const tamanhoArray = listaNomes.length

  if(tamanhoArray < 3) {
    fade.classList.remove("hide")
    modal.classList.remove("hide")
    textoAlerta.innerText = "Por favor digite pelo menos três nomes para sortear!"
    return
  }

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
