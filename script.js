let numero = 0

function aumentar(){
    numero = numero + 1
    mostrarnatela()
}

function diminuir(){
    numero = numero -1
    mostrarnatela()
}

function mostrarnatela(){
    const p = document.querySelector("p")
    p.innerText = numero
}
