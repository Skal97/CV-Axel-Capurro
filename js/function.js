console.log("hola");
let numer1 = 3;
let numer2 = 4;
let resultado = numer1 + numer2;
console.log("La suma de 1 y 2 es"+ resultado );

document.getElementById("boton").onclick = function(){
    console.log("capturamos clik");
    document.getElementById("demo").innerHTML="probando";
    
}

document.getElementById("header").addEventListener("click", function(){
    document.header.style.backgroundColor = "000000";
    
    
});

document.getElementById("boton_color2").addEventListener("click", function(){
    document.body.style.backgroundColor = "#fff";
    
    
});
