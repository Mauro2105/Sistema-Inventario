// Creamos una variable inventario donde se va almacenar la información
let inventario = [];

// Funcion agregar productos
function agregarProductos(){
    let nombre = document.getElementById("nombre").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    // Convertimos los datos ingresados en minuscula
    nombre = nombre.toLowerCase();

    if(cantidad <= 0){
        Swal.fire({
            icon: 'error',
            title: 'Cantidad inválidad',
            text: 'La cantidad debe ser mayor a 0.'
        });
        return;
    }

    // Me va devolver el indice del producto que cumpla con la condición sino me devuelve -1
    let productoIndex = inventario.findIndex(producto => producto.nombre === nombre);

    if(productoIndex!==-1){
        alert("El producto ya Existe");
        return;
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Producto Agregado Correctamente'
        });
        inventario.push({nombre: nombre, cantidad: cantidad});
        document.getElementById("tablaBody").innerHTML += `<tr><td>${nombre}</td><td>${cantidad}</td></tr>`;
    }
}

// Funcion mostrar los productos
function mostrarProductos(){
    let tablaBody = document.getElementById("tablaBody");
    tablaBody.innerHTML = "";
    // Itera sobre los productos del inventario y los va añadiendo en la tabla
    inventario.forEach(producto => {
        tablaBody.innerHTML += `<tr><td>${producto.nombre}</td><td>${producto.cantidad}</td></tr>`
    });
}

// Funcion actualizar la cantidad de un producto
function actualizarCantidad(){
    let nombre = document.getElementById("nombre").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    nombre = nombre.toLowerCase();

    let productoIndex = inventario.findIndex(producto => producto.nombre === nombre);

    if(productoIndex!==-1){
        inventario[productoIndex].cantidad = cantidad;
        Swal.fire({
            icon: 'success',
            title: 'Cantidad actualizada'
        });
        mostrarProductos();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Producto no encontrado',
            text: 'El producto no existe en el inventario.'
        });
    }
}

// Funcion eliminar productos sin stock
function eliminarProductos(){
    inventario = inventario.filter(producto => producto.cantidad > 0);
    Swal.fire({
        icon: 'success',
        title: 'Productos sin stock eliminados'
    });
    mostrarProductos();
}