/* Variables iniciales */
const precios={
    vestido: 1000, 
    pollera: 600, 
    top: 500}
let total=0

/* Visualización información incial en consola*/
console.log(sessionStorage)
carritoSeparado=sessionStorage["carrito"].split(",")
console.log(carritoSeparado)

/* Obtencion del bloque principal de la pagina */
let principal=document.getElementById("carrito");

/* Visualizacion prendas seleccionadas en la pagina carrito */ 
for (var i=0; i<carritoSeparado.length; i++){
    prendaNueva=carritoSeparado[i]
    console.log(prendaNueva)
    let bloque=document.createElement("br")

    /* Funcion para procesar la foto de las prendas */
    let fotoPrenda=document.createElement("img")
    fotoPrenda.src="../img/"+prendaNueva+".jpeg"
    fotoPrenda.classList.add("fotoPrenda")
    fotoPrenda.alt=prendaNueva
    fotoPrenda.style.display="block"
    fotoPrenda.style.marginLeft="auto"
    fotoPrenda.style.marginRight="auto"
    
    /* Funcion para procesar el precio de las prendas */
    total+=precios[prendaNueva.slice(0,-1)]
    frasePrecio="Ha seleccionado una prenda de "+precios[prendaNueva.slice(0,-1)]+" pesos"
    console.log("Usted ha seleccionado: "+prendaNueva)
    console.log(frasePrecio)
    console.log("El total resultante es de "+total+" pesos")
    let descripcion=document.createElement("h4")
    descripcion.innerHTML=frasePrecio
    descripcion.style.textAlign="center"
    
    /* Agregar todo a la estructura HTML */
    principal.appendChild(fotoPrenda);
    principal.appendChild(bloque);
    principal.appendChild(descripcion)
    principal.appendChild(bloque)
}

/* Visualizacion del precio total en la pagina carrito */
let tituloTotal=document.createElement("h3")
tituloTotal.innerHTML="TOTAL: "+ total+ " pesos"
let fraseTotal=document.createElement("h4")
principal.appendChild(tituloTotal)
