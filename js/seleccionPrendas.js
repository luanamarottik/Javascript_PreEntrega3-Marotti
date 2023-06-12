
prendasElegidas=[]

/* Funcion para agregar prendas al carrito */
function respuestaClick(btn){
    let confirmacion=confirm("Desea agregar esta prenda a su carrito?")
    if (confirmacion){
        alert("La prenda seleccionada ha sido agregada al carrito")
        let prendaElegida=btn.id.slice(3).toLowerCase()
        console.log("Se agregó al carrito la siguiente prenda: " + prendaElegida)
        prendasElegidas.push(prendaElegida)
        sessionStorage.setItem("carrito",prendasElegidas)
        console.log(sessionStorage)
    }
}

/* Definción de los botones de acuerdo a la prenda */
/* Vestidos */
let botonVestido1=document.getElementById("btnVestido1")
botonVestido1.onclick= () => respuestaClick(btnVestido1)

let botonVestido2=document.getElementById("btnVestido2")
botonVestido2.onclick= () => respuestaClick(btnVestido2)

let botonVestido3=document.getElementById("btnVestido3")
botonVestido3.onclick= () => respuestaClick(btnVestido3)

let botonVestido4=document.getElementById("btnVestido4")
botonVestido4.onclick= () => respuestaClick(btnVestido4)

let botonVestido5=document.getElementById("btnVestido5")
botonVestido5.onclick= () => respuestaClick(btnVestido5)

/* Tops */
let botonTop1=document.getElementById("btnTop1")
botonTop1.onclick= () => respuestaClick(btnTop1)

let botonTop2=document.getElementById("btnTop2")
botonTop2.onclick= () => respuestaClick(btnTop2)

let botonTop3=document.getElementById("btnTop3")
botonTop3.onclick= () => respuestaClick(btnTop3)

let botonTop4=document.getElementById("btnTop4")
botonTop4.onclick= () => respuestaClick(btnTop4)

let botonTop5=document.getElementById("btnTop5")
botonTop5.onclick= () => respuestaClick(btnTop5)

/* Polleras */
let botonPollera1=document.getElementById("btnPollera1")
botonPollera1.onclick= () => respuestaClick(btnPollera1)

let botonPollera2=document.getElementById("btnPollera2")
botonPollera2.onclick= () => respuestaClick(btnPollera2)

let botonPollera3=document.getElementById("btnPollera3")
botonPollera3.onclick= () => respuestaClick(btnPollera3)

let botonPollera4=document.getElementById("btnPollera4")
botonPollera4.onclick= () => respuestaClick(btnPollera4)

let botonPollera5=document.getElementById("btnPollera5")
botonPollera5.onclick= () => respuestaClick(btnPollera5)