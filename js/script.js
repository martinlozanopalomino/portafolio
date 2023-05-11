const textoIngresado = document.querySelector("#texto");
textoIngresado.focus();

const textoResultado = document.querySelector("#textoResultado");

const btnEncriptar = document.querySelector("#encri");
const btnDesencriptar = document.querySelector("#desencri");
const btnCopiar = document.querySelector("#copiar");

function encriptar (){
  let texto = textoIngresado.value.trim(); // Quitamos los espacios en blanco al inicio y al final del texto
  if (texto.length === 0){
    alert('Ingrese texto.');
    return false;
  } else if (!/^[a-zñ]+$/.test(texto)) { // Validamos que solo contenga letras minúsculas sin tildes ni otros caracteres
    alert('El texto solo puede contener letras minúsculas sin tildes ni otros caracteres.');
    return false;
  } else {
    let textoEncriptado = texto
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("o", "ober")
      .replaceAll("a", "ai")
      .replaceAll("u", "ufat");

    document.getElementById("noResuelto").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";

    textoResultado.value = textoEncriptado;

    document.getElementById("texto").value = '';

    textoIngresado.focus();
  }
}



function desencriptar (){
  let textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = textoEncriptado
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = texto;

  document.getElementById("texto").value = '';
    
  textoIngresado.focus();

}

function copiar () {
  let textoEncriptado = textoResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;






