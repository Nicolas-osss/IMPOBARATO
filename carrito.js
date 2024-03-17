let productoEnCarrito = localStorage.getItem("productos-en-carrito");
productoEnCarrito = JSON.parse(productoEnCarrito);



const contenedorProductos = document.querySelector("#carrito-producto1");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoAcciones = document.querySelector("#carrito-acciones");
let botonEliminar = document.querySelectorAll(".basura");
const total = document.querySelector("#total");
const vaciar = document.querySelector("#vaciar-carrito");

function cargarProductosAlCarrito(){
    if (productoEnCarrito && productoEnCarrito.length>0 ) {

        carritoVacio.classList.add("disabled");
        contenedorProductos.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
    
        contenedorProductos.innerHTML = "";
    
        productoEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <div class="carrito-producto">
            <img class="carrito-productoImagen" src="${producto.imagen}" alt="">
            <div class="carrito-nombreProducto">
                <h5>${producto.modelo}</h5>
            </div>
            <div class="carrito-precio">
                <h4>${producto.precio}</h4>
            </div>
            <div class="carrito-cantidad">
               <h4 id="cantidad" >${producto.cantidad}</h4>
            </div>
            <div class="carrito-subPrecio">
                <h4 id="subtotal">${producto.precio}</h4>
            </div>
            <div>
                <a href="#" class="basura" ><i class="fa-solid fa-trash " id="${producto.id}"></i></a>
            </div>
            </div>
            `;
    
            contenedorProductos.append(div);

            
            const botonEliminar = div.querySelector(".basura");
            botonEliminar.addEventListener("click", (event) => {
                event.preventDefault();
                eliminarDelCarrito(producto.id);
            });
             
        });

    
    
    } else {
        carritoVacio.classList.remove("disabled");
        contenedorProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
    }
    actualizarTotal();
    //eliminar();

}
cargarProductosAlCarrito();



function eliminar() {
    botonEliminar = document.querySelectorAll(".basura");
    botonEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);

    });
}

function eliminarDelCarrito(idProducto){
    
    const index = productoEnCarrito.findIndex(producto => producto.id === idProducto);

    productoEnCarrito.splice(index, 1);
    cargarProductosAlCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productoEnCarrito) );
}















/*
function eliminarDelCarrito(e){
    e.preventDefault();
    const idboton = e.currentTarget.id;
    const index = productoEnCarrito.findIndex(producto => producto.id === idboton);

    productoEnCarrito.splice(index, 1);
    cargarProductosAlCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productoEnCarrito) );

}
*/












vaciar.addEventListener("click",vaciarCarro);


function vaciarCarro () {
     productoEnCarrito.length = 0;
     localStorage.setItem("productos-en-carrito", JSON.stringify(productoEnCarrito) );
     cargarProductosAlCarrito();
 
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => {
        // Extraer solo los dígitos del precio
        const precioNumerico = parseFloat(producto.precio.replace(/[^\d.]/g, ''));
        // Sumar al acumulador el precio multiplicado por la cantidad
        return acc + (precioNumerico * producto.cantidad);
    }, 0);
    // Asignar el total calculado al elemento HTML correspondiente
    total.innerText = `  $${totalCalculado.toFixed(2)}`; // Asegurar que el total tenga 2 decimales
}
