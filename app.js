function encriptar() {
    let text = document.getElementById("container__text").value;
    let container_text = document.getElementById("container__text__copy");
    let image = document.getElementById("img__main");

    let textCrifrado = minusText(text)
        .replace(/a/gi, "ai")
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (text.length != 0) {
        container_text.textContent = textCrifrado;
        document.getElementById("text_hidden").style.opacity = "1";
        document.getElementById("container__text").value = "";
    } else {
        document.getElementById("text_hidden").style.opacity = "0";
        document.getElementById("danger__text").innerHTML = "Debes ingresar algun texto";
    }
}

function desencriptar() {
    let text = document.getElementById("container__text").value;
    let container_text = document.getElementById("container__text__copy");
    let image = document.getElementById("img__main");

    let textCrifrado = text
        .replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (text.length != 0) {
        container_text.textContent = textCrifrado;
        document.getElementById("text_hidden").style.opacity = "1";
        document.getElementById("desencriptado").innerHTML = "El texto se desencripto correctamente.";
        image.src = "./images/descansando.avif";
        document.getElementById("container__text").value = "";
    } else {
        image.src = "./images/error.png";
        document.getElementById("danger__text").innerHTML = "Debes ingresar algun texto";
        document.getElementById("text_hidden").style.opacity = "0";
    }
}

function minusText(text){
    textMinus = text.toLowerCase();
    return textMinus
}

function copiar() {
    let text = document.getElementById("container__text__copy").value;
    let image = document.getElementById("img__main");

    if (text.length != 0) {
        navigator.clipboard.writeText(text);
        console.log('Contenido copiado al portapapeles');
        document.getElementById("text_hidden").style.opacity = "0";
        document.getElementById("danger__text").innerHTML = "El texto no tiene que contener números.";
    } else {
        console.error('Error al copiar: ', err);
        document.getElementById("danger__text").innerHTML = "Debes ingresar algun texto";
    }
}