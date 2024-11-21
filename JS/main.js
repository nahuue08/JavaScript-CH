
//Carrito

let arrayProductos = [];

let opcion;

function agregarProducto() {
    let nuevoProducto = prompt("Ingrese el producto a agregar");
    arrayProductos.push(nuevoProducto);
};

function mostrarProductos() {
    let listaDeProductos = arrayProductos.join("\n");
    alert(listaDeProductos);
};

do {

    opcion = parseInt(prompt("Ingrese la opción deseada. 1 para agregar producto, 2 para ver los productos. Para salir ingrese 0"));

    if (opcion === 0) {
        alert("Gracias, vuelva pronto!");
    } else if (opcion ===1) {
        agregarProducto;
    }
    else if (opcion === 2) {
        if (arrayProductos.length > 0) {
            mostrarProductos();
        } else {
            alert("No hay productos");
        }
    } else {
        alert ("Opción incorrecta");
    }
} while (opcion !== 0);


