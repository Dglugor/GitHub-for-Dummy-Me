//  Input
let name = document.getElementById ("exampleInputName");
let adress= document.getElementById ("exampleInputAdd1");
let Check1 = document.getElementById ("exampleCheck1");
let Check2 = document.getElementById ("exampleCheck2");
// Etiquetas P
let textoNombre = document.getElementById ("textNombre");
let textoDireccion = document.getElementById ("textDirección");
let ClickCheck1 = document.getElementById ("textCheck1");
let ClickCheck2 = document.getElementById ("textCheck2");
// Boton
let boton  = document.getElementById ("boton");


const enviar = () => {

textoNombre.innerText = name.value; 
textoDireccion.innerText = adress.value;
// let resultCheck2 = Check2.value;
// let resultCheck1 = Check1.value;

// if(resultCheck2 chec{
//     textFood.innerHTML = ":("
// }else if (resultFood === "SIN"){
//     textFood.innerHTML = ":)"
// }else{
//     textFood.innerHTML = "No te entendí";
// }
// }
}

boton.addEventListener("click", enviar);
