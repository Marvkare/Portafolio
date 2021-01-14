
console.log('hola')
let box = getE('box') 
let contenedor = getE('contenedorId')
console.log(box.Id)

function getE(e) {
    return document.getElementById(e)
}

box.onmouseover = ()=>{
    contenedor.setAttribute('class', 'contenedor1')
}

box.onmouseleave = ()=>{
    contenedor.setAttribute('class', 'contenedor')

    
}