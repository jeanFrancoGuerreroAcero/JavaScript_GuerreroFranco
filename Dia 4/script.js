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

//funcion para agregar productos
function addProduct(){
    guardado={
        "id": id,
        "name":name,
        "category":category,
        "price":price,
        "quantityInStock":quantityInStock,
        "supplierId":supplierId
    };
    arr["products"].push(guardado);
};

//funcion de mostrar los productos
function viewProducts(){
    let contador=1
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
    console.log("5. INFORMES");
    console.log("6. SALIR DEL PROGRAMA");





    var booleanito=false;
};