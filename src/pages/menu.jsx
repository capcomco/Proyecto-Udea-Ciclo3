import React from 'react'

const menu = () => {
    return <div><center><h2>Menú de Ingreso</h2></center>
        <body class="contenedor" >
                <div >
            
                    <a href="admin/productos" class="btn btn-primary">Crear Producto</a>
                    <a href="maestroproductos" class="btn btn-primary"
                    >Listar Productos</a
                    >
                    <a href="ingresarVenta" class="btn btn-primary">Crear Venta</a>
                    <a href="maestroventas" class="btn btn-primary">Listado Ventas</a>
                    <a href="/gestionUsuario" class="btn btn-primary">Usuarios</a>
                    <a href="index" class="btn btn-primary">Salir</a>
                
                </div>
            </body>
        </div>
    
};

export default menu;