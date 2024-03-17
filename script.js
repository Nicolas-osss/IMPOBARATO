//cuando se activa el respoNsivo
const hamburguesa = document.getElementById("hamburguesa");
const cerrar = document.getElementById("cerrar");
const navbar = document.getElementById("navbar")

if (hamburguesa) {
    hamburguesa.addEventListener("click", () => { navbar.classList.add("activar") })
}
if (cerrar) {
    cerrar.addEventListener("click", () => { navbar.classList.remove("activar") })
}




const productos = [
    {
        id: "cafe",
        imagen: "img/cafe.jpg",
        titulo: "Ufesa",
        modelo: "Cafetera Express Ufesa Ce7240",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 321 + ".00",
    },
    {
        id: "horno",
        imagen: "img/hornoFoto.jpg",
        titulo: "Bosch",
        modelo: "Horno Empotrable Eléctrico 4 Series Hba5740s0 71l-Acero Inoxidable 220v-240v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 1209 + ".95",

    },
    {
        id: "cafe1",
        imagen: "img/cafeSingle1.jpg",
        titulo: "Cuori",
        modelo: "Cafetera Aroma Automática Negra Y Plateada Expreso 230v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 95 + ".00",

    },
    {
        id: "singer",
        imagen: "img/singerFoto.jpg",
        titulo: "Singer",
        modelo: "Maquina De Coser Heavy Duty 25 Op",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 321 + ".00",

    },

    {
        id: "horno1",
        imagen: "img/horno2Foto.jpg",
        titulo: "Bosh",
        modelo: "Horno Empotrable Eléctrico 6 Series Hba5360 71l-Blanco 220v-240v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 995 + ".95",
    },
    {
        id: "anafe",
        imagen: "img/anafeFoto.jpg",
        titulo: "Bosh",
        modelo: "Anafe A Gas Serie 4 Acero 220v - 240v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 398 + ".85",
    },
    {
        id: "mantenimiento",
        imagen: "img/cafe.jpg",
        titulo: "Ufesa",
        modelo: "Cafetera Express Ufesa Ce7240",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 321 + ".00",
    },
    {
        id: "mantenimiento2",
        imagen: "img/cafe.jpg",
        titulo: "Ufesa",
        modelo: "Cafetera Express Ufesa Ce7240",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 321 + ".00",
    }

];



const currentPage = window.location.pathname; // Obtiene la ruta de la página actual
let numerito;

if (currentPage.includes('index.html')) {
    const contenedorProductos = document.querySelector("#pro-container");
    const botonAgregar = document.querySelectorAll(".cart");
    numerito = document.querySelector("#numerito");

    if (contenedorProductos) {
        cargarProductos();
    } else {
        console.error('El elemento con clase "pro-container" no existe en el DOM.');
    }

    function cargarProductos() {
        productos.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = ` 
                <img class="imagenProdu" src= "${producto.imagen}" alt="">
                <div class="descripcion">
                     <span class="tituloProdu">${producto.titulo}</span>
                     <h5 class="productoProdu">${producto.modelo}</h5>
                     <div  <i class="${producto.iconoEstrella} star"></i></div>
                     <div  <i class="${producto.iconoEstrella} star"></i></div>
                     <div  <i class="${producto.iconoEstrella} star"></i></div>
                     <div  <i class="${producto.iconoEstrella} star"></i></div>
                     <div  <i class="${producto.iconoEstrella} star"></i></div>
                     <h4 class="precioProdu">${producto.precio}</h4>
               </div>
               <a href="#"><i class="fa-solid fa-cart-shopping cart"  id="${producto.id}"></i></a>
                `;
            contenedorProductos.append(div);
        });
        actualizarBotones(productos);

    }
}




function actualizarBotones() {
    botonAgregar = document.querySelectorAll(".cart");
    botonAgregar.forEach(boton => {
        boton.addEventListener("click", function (e) {
            e.preventDefault();
            agregarAlCarrito(e);
        });

    });

}


let productosEnCarrito;
let productosEnCarritols = localStorage.getItem("productos-en-carrito");

if (productosEnCarritols) {
    productosEnCarrito = JSON.parse(productosEnCarritols);
    actualizarNumeri();

} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    e.preventDefault();

    const idboton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idboton);

    if (productosEnCarrito.some(producto => producto.id === idboton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idboton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    console.log(productosEnCarrito);
    actualizarNumeri();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));


}

function actualizarNumeri() {
    if (numerito) { // Verificar si numerito existe
        let newNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        numerito.innerText = newNumero;
    }
}



/*CODIGO ANTERIOR*/
//let botonAgregar = document.querySelectorAll(".cart");
//const numerito = document.querySelector("#numerito");
//const contenedorProductos = document.querySelector("#pro-container");

/*
function cargarProductos() {


    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="imagenProdu" src= "${producto.imagen}" alt="">
        <div class="descripcion">
             <span class="tituloProdu">${producto.titulo}</span>
             <h5 class="productoProdu">${producto.modelo}</h5>
             <div  <i class="${producto.iconoEstrella} star"></i></div>
             <div  <i class="${producto.iconoEstrella} star"></i></div>
             <div  <i class="${producto.iconoEstrella} star"></i></div>
             <div  <i class="${producto.iconoEstrella} star"></i></div>
             <div  <i class="${producto.iconoEstrella} star"></i></div>
             <h4 class="precioProdu">${producto.precio}</h4>
       </div>
       <a href="#"><i class="fa-solid fa-cart-shopping cart"  id="${producto.id}"></i></a>
        `;
        contenedorProductos.append(div);
    });
   // actualizarBotones(productos);

}
*/


//QUE ME LLEVE A SINGULAR DINAMICAMENTE DESDE SHOP
/*
//estando en la pestaña shop me manda al singular del producto en otra pestaña
var singular = document.getElementById('idHaciaSingular');
singular.addEventListener('click', function() {
    window.location.href = 'singularProduct.html';
});
*/


//HACER QUE EL CURSOR SE CONVIERTA EN LUPA
/*
document.querySelector('.cursor-lupa').addEventListener('click', function() {
    if (this.style.transform === 'scale(1.5)') {
        this.style.transform = ''; // Elimina la transformación de zoom si ya está aplicada
    } else {
        this.style.transform = 'scale(1.5)'; // Aplica un zoom al elemento si no está aplicado
    }
});
*/


//CARGA DE PRODUCTOS PARA AMBAS SECCIONES
/*
function cargarProductos(contenedor, productos) {
    const contenedorProductos = document.querySelector(contenedor);
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="imagenProdu" src= "${producto.imagen}" alt="">
        <div class="descripcion">
             <span class="tituloProdu">${producto.titulo}</span>
             <h5 class="productoProdu">${producto.modelo}</h5>
             <div  <i class="${producto.iconoEstrella} star"</i></div>
             <div  <i class="${producto.iconoEstrella} star"</i></div>
             <div  <i class="${producto.iconoEstrella} star"</i></div>
             <div  <i class="${producto.iconoEstrella} star"</i></div>
             <div  <i class="${producto.iconoEstrella} star"</i></div>
             <h4 class="precioProdu">${producto.precio}</h4>
       </div>
       <a href="#"><i id="${producto.id}" class="fa-solid fa-cart-shopping cart"></i></a>
        `;
        contenedorProductos.appendChild(div);
    });
    actualizarBotones();
}

cargarProductos(".pro-container", productosSeccion1); // Cargar productos en la sección de mejores productos
cargarProductos(".pro-container-seccionSegunda", productosSeccion2); // Cargar productos en la sección de productos más recientes
*/


//CUANDO NO HABIA HECHO 2 SECCIONES DINAMICAS Y ESTABA SOLO PRODUCTO
/*
const productos = [
    {
        id: "cafe",
        imagen: "img/cafe.jpg",
        titulo: "Ufesa",
        modelo: "Cafetera Express Ufesa Ce7240",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$"+321+".00",
    },
    {
        id: "horno",
        imagen: "img/hornoFoto.jpg",
        titulo: "Bosch",
        modelo: "Horno Empotrable Eléctrico 4 Series Hba5740s0 71l-Acero Inoxidable 220v-240v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$"+1209+".95",
    },
    {
        id: "cafe1",
        imagen: "img/cafeSingle1.jpg",
        titulo: "Cuori",
        modelo: "Cafetera Aroma Automática Negra Y Plateada Expreso 230v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$"+95+".00",
    },
    {
        id: "horno1",
        imagen: "img/hornoFoto.jpg",
        titulo: "Bosh",
        modelo: "Horno Empotrable Eléctrico 6 Series Hba5360 71l-Blanco 220v-240v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$"+995+".95",
    },
    {
        id: "singer",
        imagen: "img/singerFoto.jpg",
        titulo: "Singer",
        modelo: "Maquina De Coser Heavy Duty 25 Op",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$"+321+".00",
    },
    {
        id: "anafe",
        imagen: "img/anafeFoto.jpg",
        titulo: "Bosh",
        modelo: "Anafe A Gas Serie 4 Acero 220v - 240v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$"+398+".85",
    },
    {
        id: "cafe",
        imagen: "img/cafe.jpg",
        titulo: "Ufesa",
        modelo: "Cafetera Express Ufesa Ce7240",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$"+321+".00",
    },
    {
        id: "cafe",
        imagen: "img/cafe.jpg",
        titulo: "Ufesa",
        modelo: "Cafetera Express Ufesa Ce7240",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$"+321+".00",
    }
]

const contenedorProductos = document.querySelector("#pro-container")


function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="imagenProdu" src= "${producto.imagen}" alt="">
        <div class="descripcion">
             <span class="tituloProdu">${producto.titulo}</span>
             <h5 class="productoProdu">${producto.modelo}</h5>
             <div  <i class="${producto.iconoEstrella} star"</i></div>
             <div  <i class="${producto.iconoEstrella} star"</i></div>
             <div  <i class="${producto.iconoEstrella} star"</i></div>
             <div  <i class="${producto.iconoEstrella} star"</i></div>
             <div  <i class="${producto.iconoEstrella} star"</i></div>
             <h4 class="precioProdu">${producto.precio}</h4>
       </div>
       <a href="#"><i class="${producto.iconoCarrito} cart"></i></a>
        `;
        contenedorProductos.append(div);
    });
}
cargarProductos();
*/


//PRODUCTOS DE SECCION 2 DE PRIMERA PAGINA
/*
const productosSeccion2 = [
    {
        id: "cafeSec2",
        imagen: "img/hornoFoto.jpg",
        titulo: "Ufesa",
        modelo: "Cafetera Express Ufesa Ce7240",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 321 + ".00",
    },
    {
        id: "hornoSec2",
        imagen: "img/cafe.jpg",
        titulo: "Bosch",
        modelo: "Horno Empotrable Eléctrico 4 Series Hba5740s0 71l-Acero Inoxidable 220v-240v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 1209 + ".95",
    },
    {
        id: "cafe1Sec2",
        imagen: "img/singerFoto.jpg",
        titulo: "Cuori",
        modelo: "Cafetera Aroma Automática Negra Y Plateada Expreso 230v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 95 + ".00",
    },
    {
        id: "anafeSec2",
        imagen: "img/anafeFoto.jpg",
        titulo: "Bosh",
        modelo: "Anafe A Gas Serie 4 Acero 220v - 240v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 398 + ".85",
    },

    {
        id: "horno1",
        imagen: "img/hornoFoto.jpg",
        titulo: "Bosh",
        modelo: "Horno Empotrable Eléctrico 6 Series Hba5360 71l-Blanco 220v-240v",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 995 + ".95",
    },

    {
        id: "singer",
        imagen: "img/cafeSingle1.jpg",
        titulo: "Singer",
        modelo: "Maquina De Coser Heavy Duty 25 Op",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 321 + ".00",
    },
    {
        id: "mantenimiento",
        imagen: "img/cafe.jpg",
        titulo: "Ufesa",
        modelo: "Cafetera Express Ufesa Ce7240",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 321 + ".00",
    },
    {
        id: "mantenimiento",
        imagen: "img/cafe.jpg",
        titulo: "Ufesa",
        modelo: "Cafetera Express Ufesa Ce7240",
        iconoEstrella: "fas fa-star",
        iconoCarrito: "fa-solid fa-cart-shopping",
        precio: "$" + 321 + ".00",
    }

];
*/


//ELIMINAR FILA EN LA PESTAÑA DE CARRITO
/*
//eliminar cart
var sacar = document.querySelectorAll(".fa-x"); //selecciono todos mis iconos x

sacar.forEach(function (elementoIcono) {
    elementoIcono.addEventListener("click", function (alHacerClick) {
        alHacerClick.preventDefault();
        var fila = this.closest("tr"); //busca al ancestro mas cercano del icono, en este caso la fila (tr)
        fila.remove();
    });
});
*/



//CODIGO PREVIO A HACER EL PROYECTO DINAMICO
/*

// Función para agregar un producto al carrito y guardarlo en localStorage
    function agregarAlCarrito(icon) {
        var productContainer = icon.closest(".pro");
        var productImage = productContainer.querySelector(".imagenProdu").src;
        var productName = productContainer.querySelector(".productoProdu").textContent;
        var productPrice = productContainer.querySelector(".precioProdu").textContent;

        console.log("Imagen del producto:", productImage);
        console.log("Nombre del producto:", productName);
        console.log("Precio del producto:", productPrice);

        // Crear un objeto para almacenar los datos del producto
        var producto = {
            imagen: productImage,
            nombre: productName,
            precio: productPrice
        };
console
        // Convertir el objeto a una cadena JSON y almacenarlo en localStorage
        localStorage.setItem('productoEnCarrito', JSON.stringify(producto));

        console.log(localStorage.getItem('productoEnCarrito'));

        // Luego, agregar el producto a la tabla del carrito
        var divContainer = document.getElementById("b");
        if (divContainer) {
            var cartTable = divContainer.querySelector("table tbody");
            if (cartTable) {
                // El tbody de la tabla fue encontrado y almacenado en cartTable
                var newRow = cartTable.insertRow();
                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);
                var cell6 = newRow.insertCell(5);
        
                cell1.innerHTML = '<a href="#"><i class="fa-solid fa-x"></i></a>';
                cell2.innerHTML = '<img class="imagenProdu" src="' + productImage + '" alt="">';
                cell3.textContent = productName;
                cell4.textContent = productPrice;
                cell5.innerHTML = '<input type="number" min="1" value="1">';
                cell6.textContent = productPrice;
            } else {
                console.error("No se encontró tbody dentro de la tabla");
            }
        } else {
            console.error("No se encontró el contenedor div");
        }
        

       
    }

    // Agregar evento clic a los íconos de carrito
    var cartIcons = document.querySelectorAll(".cart");

    cartIcons.forEach(function (icon) {
        icon.addEventListener("click", function (event) {
            console.log("holaa")
            alert("hola");
            event.preventDefault();
            agregarAlCarrito(icon);
        });
    });



/*
// Obtener los elementos HTML que quieres guardar
var textoProducto = document.getElementById('productoP').textContent;
var textoPrecio = document.getElementById('precioP').textContent;
var imagenSrc = document.getElementById('imagenP').src;

// Crear un objeto para almacenar los datos
var datos = {
    producto: textoProducto,
    precio: textoPrecio,
    imagen: imagenSrc
};

// Convertir el objeto a una cadena JSON
var datosJSON = JSON.stringify(datos);

// Almacenar los datos en el almacenamiento local del navegador
localStorage.setItem('datosTransferir', datosJSON);


//agregar al carrito


    var cartIcons = document.querySelectorAll(".cart");

    cartIcons.forEach(function(icon) {
        icon.addEventListener("click", function(event) {
            alert("hola");
            event.preventDefault();
            
            var productContainer = icon.closest(".pro");
            var productImage = productContainer.querySelector("#imagenP").src;
            var productName = productContainer.querySelector("#productoP").textContent;
            var productPrice = productContainer.querySelector("#precioP").textContent;

            var cartTable = document.getElementById("cart").querySelector("tbody");

           
           

            var newRow = cartTable.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);

            cell1.innerHTML = '<a href="#"><i class="fa-solid fa-x"></i></a>';
            cell2.innerHTML = '<img class="imagenP" src="' + productImage + '" alt="">';
            cell3.textContent = productName;
            cell4.textContent = productPrice;
            cell5.innerHTML = '<input type="number" min="1" value="1">';
            cell6.textContent = productPrice;

        });
    });

*/
