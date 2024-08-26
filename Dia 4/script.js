var arr={
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "category": "Electronics",
      "price": 999.99,
      "quantityInStock": 50,
      "supplierId": 101
    }
  ],
  "suppliers": [
    {
      "id": 101,
      "name": "Tech Supplies Inc.",
      "contactInfo": {
        "phone": "123-456-7890",
        "email": "sales@techsupplies.com",
        "address": "123 Tech Lane, Silicon Valley, CA"
      }
    }
  ],
  "orders": [
    {
      "orderId": 1001,
      "productId": 1,
      "quantity": 5,
      "orderDate": "2024-08-23",
      "status": "Delivered"
    }
  ]
};

var booleanito=true;

while(booleanito){
  console.log("-----------------------------------");
  console.log("BIENVENIDO A SISTEMA DE GESTION DE INVENTARIOS");
  console.log("-----------------------------------");
  console.log("");
  console.log("A QUE SECCION DESEA INGRESAR");
  console.log("1. PRODUCTOS");
  console.log("2. PROVEEDORES");
  console.log("3. PEDIDOS");
  console.log("4. SALIR DEL PROGRAMA");
  var QueDesea = prompt("")

  if (QueDesea=="1"){
    console.clear();
    console.log("----------------------------");
    console.log("BIENVENIDO A LA SECCION DE PRODUCTOS");
    console.log("----------------------------");
    console.log("");

    console.log("QUE DESEA REALIZAR");
    console.log("1. AÑADIR UN PRODUCTO");
    console.log("2. ELIMINAR UN PRODUCTO");
    console.log("3. ACTUALIZAR UN PRODUCTO");
    console.log("4. REVISAR PRODUCTOS");
    var DeseaProducto=prompt("");

    if (DeseaProducto=="1"){
      console.clear();
      console.log("----------------");
      console.log("AÑADIR PRODUCTOS");
      console.log("----------------");
      console.log("INGRESE EL ID");
      var idProducto= prompt("");
      console.log("INGRESE EL NOMBRE DE EL PRODUCTO");
      var nombreProducto= prompt("");
      console.log("INGRESE LA CATEGORIA DEL PRODUCTO");
      var categoriaProducto= prompt("");
      console.log("INGRESE EL PRECIO DEL PRODUCTO");
      var precioProducto=prompt("");
      console.log("INGRESE LA CANTIDAD DE UNIDADES DEL PRODUCTO");
      var cantidadProducto=prompt("");
      console.log("INGRESE EL ID DE EL PROVEEDOR");
      var idProveedor=prompt("");
      guardado={
        "id": idProducto,
        "name":nombreProducto,
        "category":categoriaProducto,
        "price":precioProducto,
        "quantityInStock":cantidadProducto,
        "supplierId":idProveedor
      };
      arr["products"].push(guardado);
      var contador=0
      for (var i of arr["products"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID:",i["id"]);
        console.log("NOMBRE:",i["name"]);
        console.log("CATEGORIA:",i["category"]);
        console.log("PRECIO:",i["price"]);
        console.log("CANTIDAD EN STOCK:",i["quantityInStock"]);
        console.log("ID DEL PROVEEDOR:",i["supplierId"]);
        console.log("");
      };
    };
    if(DeseaProducto=="2"){
      console.clear();
      console.log("----------------");
      console.log("ELIMINAR PRODUCTOS");
      console.log("----------------");
      console.log("");
      
      var contador=0
      for (var i of arr["products"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID:",i["id"]);
        console.log("NOMBRE:",i["name"]);
        console.log("CATEGORIA:",i["category"]);
        console.log("PRECIO:",i["price"]);
        console.log("CANTIDAD EN STOCK:",i["quantityInStock"]);
        console.log("ID DEL PROVEEDOR:",i["supplierId"]);
        console.log("");
      };
      console.log("INGRESE EL ID DE EL PRODUCTO QUED DESEA ELIMINAR");
      var DeseaEliminar=prompt("");
      arr["products"].splice(DeseaEliminar-1,1);
      for (var i of arr["products"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID:",i["id"]);
        console.log("NOMBRE:",i["name"]);
        console.log("CATEGORIA:",i["category"]);
        console.log("PRECIO:",i["price"]);
        console.log("CANTIDAD EN STOCK:",i["quantityInStock"]);
        console.log("ID DEL PROVEEDOR:",i["supplierId"]);
        console.log("");
      };
    };
    if(DeseaProducto=="3"){
      console.clear();
      console.log("----------------");
      console.log("ACTUALIZAR PRODUCTOS");
      console.log("----------------");
      console.log("");

      console.log("QUE VAS A ACTUALIZAR");
      console.log("1. NOMBRE");
      console.log("2. CATEGORIA");
      console.log("3. PRECIO");
      console.log("4. CANTIDAN EN STOCK");
      var DeseaActualizarProducto= prompt("");

      if(DeseaActualizarProducto=="1"){
        console.clear();
        console.log("-----------------");
        console.log("ACTUALIZAR NOMBRE");
        console.log("-----------------");
        console.log("");

        console.log("INGRESE EL NUEVO NOMBRE");
        var nuevoNombre=prompt("");
        arr["products"]["name"]=nuevoNombre;
      };
      if (DeseaActualizarProducto=="2"){
        console.clear();
        console.log("--------------------");
        console.log("ACTUALIZAR CATEGORIA");
        console.log("--------------------");
        console.log("");

        console.log("INGRESE LA NUEVA CATEGORIA");
        var nuevaCategoria=prompt("");
        arr["products"]["category"]=nuevaCategoria;
      };
      if (DeseaActualizarProducto=="3"){
        console.clear();
        console.log("--------------------");
        console.log("ACTUALIZAR PRECIO");
        console.log("--------------------");
        console.log("");

        console.log("INGRESE EL NUEVO PRECIO");
        var nuevoPrecio=prompt("");
        arr["products"]["price"]=nuevoPrecio;
      };
      if (DeseaActualizarProducto=="4"){
        console.clear();
        console.log("----------------------------");
        console.log("ACTUALIZAR CANTIDAD EN STOCK");
        console.log("----------------------------");
        console.log("");

        console.log("INGRESE LA NUEVA CANTIDAD EN STOCK");
        var nuevoStock=prompt("");
        arr["products"]["quantityInStock"]=nuevoStock;
      };
    };
    if(DeseaProducto=="4"){
      console.clear();
      console.log("-----------------");
      console.log("REVISAR PRODUCTOS");
      console.log("-----------------");
      console.log("");

      for (var i of arr["products"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID:",i["id"]);
        console.log("NOMBRE:",i["name"]);
        console.log("CATEGORIA:",i["category"]);
        console.log("PRECIO:",i["price"]);
        console.log("CANTIDAD EN STOCK:",i["quantityInStock"]);
        console.log("ID DEL PROVEEDOR:",i["supplierId"]);
        console.log("");
      };
    };
  };
  if (QueDesea=="2"){
    console.clear();
    console.log("--------------------------------------");
    console.log("BIENVENIDO A LA SECCION DE PROVEEDORES");
    console.log("--------------------------------------");
    console.log("");

    console.log("QUE DESEA REALIZAR");
    console.log("1. AÑADIR UN PROVEEDOR");
    console.log("2. ELIMINAR UN PROVEEDOR");
    console.log("3. ACTUALIZAR UN PROVEEDOR");
    console.log("4. REVISAR PROVEEDORES");
    var DeseaProveedor=prompt("");

    if (DeseaProveedor=="1"){
      console.clear();
      console.log("----------------");
      console.log("AÑADIR PROVEEDOR");
      console.log("----------------");
      console.log("INGRESE EL ID");
      var idProveedor= prompt("");
      console.log("INGRESE EL NOMBRE DE EL PROVEEDOR");
      var nombreProveedor= prompt("");
      console.log("INGRESE EL EMAIL DEL PROVEEDOR");
      var emailProveedor= prompt("");
      console.log("INGRESE EL NUMERO DEL PROVEEDOR");
      var numeroProveedor=prompt("");
      console.log("INGRESE EL ADRES DE EL PROVEEDOR");
      var adresProveedor=prompt("");
      guardado={
        "id": idProveedor,
        "name":nombreProveedor,
        "contactInfo":"",
          "phone":numeroProveedor,
          "email":emailProveedor,
          "address":adresProveedor
      };
      arr["suppliers"].push(guardado);
      var contador=0
      for (var i of arr["suppliers"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID:",i["id"]);
        console.log("NOMBRE:",i["name"]);
        console.log("INFORMACION DE CONTACTO:",i["contactInfo"]);
        console.log("");
      };
    };
    if(DeseaProveedor=="2"){
      console.clear();
      console.log("----------------");
      console.log("ELIMINAR PRODUCTOS");
      console.log("----------------");
      console.log("");
      
      var contador=0
      for (var i of arr["suppliers"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID:",i["id"]);
        console.log("NOMBRE:",i["name"]);
        console.log("INFORMACION DE CONTACTO:",i["contactInfo"]);
        console.log("");
      };
      console.log("INGRESE EL ID DE EL PRODUCTO QUED DESEA ELIMINAR");
      var DeseaEliminarProveedor=prompt("");
      arr["suppliers"].splice(DeseaEliminarProveedor-1,1);
      for (var i of arr["suppliers"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID:",i["id"]);
        console.log("NOMBRE:",i["name"]);
        console.log("INFORMACION DE CONTACTO:",i["contactInfo"]);
        console.log("");
      };
    };
    if(DeseaProveedor=="3"){
      console.clear();
      console.log("----------------");
      console.log("ACTUALIZAR PROVEEDOR");
      console.log("----------------");
      console.log("");

      console.log("QUE VAS A ACTUALIZAR");
      console.log("1. ID");
      console.log("2. NOMBRE");
      var DeseaActualizarProveedor= prompt("");

      if(DeseaActualizarProveedor=="1"){
        console.clear();
        console.log("-------------");
        console.log("ACTUALIZAR ID");
        console.log("-------------");
        console.log("");

        console.log("INGRESE EL NUEVO ID");
        var nuevoIdProveedor=prompt("");
        arr["suppliers"]["id"]=nuevoIdProveedor;
      };
      if (DeseaActualizarProveedor=="2"){
        console.clear();
        console.log("-----------------");
        console.log("ACTUALIZAR NOMBRE");
        console.log("-----------------");
        console.log("");

        console.log("INGRESE EL NUEVO NOMBRE");
        var nuevoNombreProveedor=prompt("");
        arr["suppliers"]["category"]=nuevoNombreProveedor;
      };
    };
    if(DeseaProveedor=="4"){
      console.clear();
      console.log("-----------------");
      console.log("REVISAR PROVEEDOR");
      console.log("-----------------");
      console.log("");

      for (var i of arr["suppliers"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID:",i["id"]);
        console.log("NOMBRE:",i["name"]);
        console.log("INFORMACION DE CONTACTO:",i["contactInfo"]);
        console.log("");
      };
    };
  };
  if (QueDesea=="3"){
    console.clear();
    console.log("----------------------------------");
    console.log("BIENVENIDO A LA SECCION DE PEDIDOS");
    console.log("----------------------------------");
    console.log("");

    console.log("QUE DESEA REALIZAR");
    console.log("1. AÑADIR UN PEDIDO");
    console.log("2. ELIMINAR UN PEDIDO");
    console.log("3. ACTUALIZAR UN PEDIDO");
    console.log("4. REVISAR PEDIDOS");
    var DeseaPedido=prompt("");
    if (DeseaPedido=="1"){
      console.clear();
      console.log("-------------");
      console.log("AÑADIR PEDIDO");
      console.log("-------------");
      console.log("INGRESE EL ID");
      var idPedido= prompt("");
      console.log("INGRESE EL ID DEL PRODUCTO");
      var idPedidoProducto= prompt("");
      console.log("INGRESE LA CANTIDAD DE PEDIDOS");
      var catidadPedidos= prompt("");
      console.log("INGRESE LA FECHA DEL PEDIDO");
      var fechaPedido=prompt("");
      console.log("INGRESE EL ESTADO DEL PEDIDO");
      var estadoPedido=prompt("");
      guardadoPedido={
        "orderId": idPedido,
        "productId":idPedidoProducto,
        "quantity":catidadPedidos,
        "orderDate":fechaPedido,
        "status":estadoPedido
      };
      arr["orders"].push(guardadoPedido);
      var contador=0
      for (var i of arr["orders"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID DEL PEDIDO:",i["orderId"]);
        console.log("ID DEL PRODUCTO:",i["productId"]);
        console.log("CANTIDAD DE PEDIDOS:",i["quantity"]);
        console.log("FECHA DEL PEDIDO:",i["orderDate"]);
        console.log("ESTADO DEL PEDIDO:",i["status"]);
        console.log("");
      };
    };
    if(DeseaPedido=="2"){
      console.clear();
      console.log("------------------");
      console.log("ELIMINAR PRODUCTOS");
      console.log("------------------");
      console.log("");
      
      var contador=0
      for (var i of arr["orders"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID DEL PEDIDO:",i["orderId"]);
        console.log("ID DEL PRODUCTO:",i["productId"]);
        console.log("CANTIDAD DE PEDIDOS:",i["quantity"]);
        console.log("FECHA DEL PEDIDO:",i["orderDate"]);
        console.log("ESTADO DEL PEDIDO:",i["status"]);
        console.log("");
      };
      console.log("INGRESE EL ID DE EL PEDIDO QUE DESEA ELIMINAR");
      var DeseaEliminarPedido=prompt("");
      arr["orders"].splice(DeseaEliminarPedido-1,1);
      for (var i of arr["orders"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID DEL PEDIDO:",i["orderId"]);
        console.log("ID DEL PRODUCTO:",i["productId"]);
        console.log("CANTIDAD DE PEDIDOS:",i["quantity"]);
        console.log("FECHA DEL PEDIDO:",i["orderDate"]);
        console.log("ESTADO DEL PEDIDO:",i["status"]);
        console.log("");
      };
    };
    if(DeseaPedido=="3"){
      console.clear();
      console.log("-----------------");
      console.log("ACTUALIZAR PEDIDO");
      console.log("-----------------");
      console.log("");

      console.log("QUE VAS A ACTUALIZAR");
      console.log("1. ID PEDIDO");
      console.log("2. ID PRODUCTO");
      console.log("3. FECHA");
      console.log("4. ESTADO");
      var DeseaActualizarPedido= prompt("");

      if(DeseaActualizarPedido=="1"){
        console.clear();
        console.log("-------------");
        console.log("ACTUALIZAR ID DEL PEDIDO");
        console.log("-------------");
        console.log("");

        console.log("INGRESE EL NUEVO ID DEL PEDIDO");
        var nuevoIdPedido=prompt("");
        arr["orders"]["orderId"]=nuevoIdPedido;
      };
      if (DeseaActualizarPedido=="2"){
        console.clear();
        console.log("-----------------");
        console.log("ACTUALIZAR EL ID DEL PRODUCTO");
        console.log("-----------------");
        console.log("");

        console.log("INGRESE EL NUEVO ID DEL PRODUCTO");
        var nuevoIdProducto=prompt("");
        arr["orders"]["category"]=nuevoIdProducto;
      };
      if (DeseaActualizarPedido=="3"){
        console.clear();
        console.log("-----------------");
        console.log("ACTUALIZAR LA CANTIDAD DE PEDIDOS");
        console.log("-----------------");
        console.log("");

        console.log("INGRESE LA NUEVA CANTIDAD DE PEDIDOS");
        var cantidadPedidos=prompt("");
        arr["orders"]["quantity"]=cantidadPedidos;
      };
      if (DeseaActualizarPedido=="4"){
        console.clear();
        console.log("-----------------");
        console.log("ACTUALIZAR LA FECHA DEL PEDIDO");
        console.log("-----------------");
        console.log("");

        console.log("INGRESE LA NUEVA FECHA DEL PEDIDO");
        var fechaPedido=prompt("");
        arr["orders"]["orderDate"]=fechaPedido;
      };
      if (DeseaActualizarPedido=="5"){
        console.clear();
        console.log("-------------------------------");
        console.log("ACTUALIZAR EL ESTADO DEL PEDIDO");
        console.log("-------------------------------");
        console.log("");

        console.log("INGRESE EL NUEVO ESTADO");
        var nuevoEstado=prompt("");
        arr["orders"]["status"]=nuevoEstado;
      };
    };
    if(DeseaPedido=="4"){
      console.clear();
      console.log("-----------------");
      console.log("REVISAR PEDIDOS");
      console.log("-----------------");
      console.log("");

      for (var i of arr["orders"]){
        contador=contador+1;
        console.log(contador);
        console.log("ID DEL PEDIDO:",i["orderId"]);
        console.log("ID DEL PRODUCTO:",i["productId"]);
        console.log("CANTIDAD DE PEDIDOS:",i["quantity"]);
        console.log("FECHA DEL PEDIDO:",i["orderDate"]);
        console.log("ESTADO DEL PEDIDO:",i["status"]);
        console.log("");
      };
    };
  };
  if (QueDesea=="4"){
    console.log("PROGRAMA FINALIZADO");
    var booleanito=false;
  }
  
  var booleanito=false;
};