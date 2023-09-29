const enviar = document.getElementById("botao-enviar");
const texto = document.querySelectorAll(".caixa-de-texto");
const ocultar = document.querySelectorAll(".esconder");

enviar.addEventListener("click", () => {
    texto.forEach(function(input, indice){

        if(input.value !== ""){
            input.classList.add("preenchido")
            input.classList.remove("vazio");
            ocultar[indice].classList.add("esconder")

        } else if (input.value === ""){
            input.classList.add("vazio");
            input.classList.remove("preenchido")
            ocultar[indice].classList.remove("esconder")
        }
    })
})