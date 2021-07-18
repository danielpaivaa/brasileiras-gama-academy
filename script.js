// SCRIPT CADASTRO
function cadastroEmail(){
  var dadoNome = document.getElementById("campoNome");
  var dadoEmail = document.getElementById("campoEmail");

  var dados = JSON.parse(localStorage.getItem("dadosCadastro"));

  if(dados == null){
    localStorage.setItem("dadosCadastro", "[]");
    dados = [];
  }

  var auxRegistro = {
    nome: dadoNome.value,
    email: dadoEmail.value
  }
  
  dados.push(auxRegistro);

  localStorage.setItem("dadosCadastro", JSON.stringify(dados));
  alert("Cadastro realizado com sucesso. Obrigado!");

  dadoNome.value = "";
  dadoEmail.value = "";
}

// SCRIPIT BANNER
let timeBanner = 5000,
currentImageIndex = 0,
  images = document.querySelectorAll("#slider img")
  max = images.length;

function nextImage() {

  images[currentImageIndex]
      .classList.remove("selected")

  currentImageIndex++

  if(currentImageIndex >= max)
      currentImageIndex = 0

  images[currentImageIndex]
      .classList.add("selected")
}

function start() {
  setInterval(() => {
      // troca de image
      nextImage()
  }, timeBanner)
}

window.addEventListener("load", start)



