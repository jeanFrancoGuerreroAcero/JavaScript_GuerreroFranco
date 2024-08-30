function products(){
    const tableBody = document.querySelector("#secion1 tbody")
    fetch("farmacia.json")
    .then(res=> res.json())
    .then(data =>{
        data.products.forEach(products => {
        const row = document.createElement(`tr`);
        row.innerHTML += `
        <td>${products.id}</td>
        <td>${products.name}</td>
        <td>${products.price}</td>
        <td>${products.category}</td>
        <td>${products.quantityInStock}</td>
        <td>${products.supplierId}</td>
        `
        tableBody.appendChild(row)
        });
    })
}
products();

function supplier(){
    const tableBody = document.querySelector("#seccion2 tbody")
    fetch("farmacia.json")
    .then(res=> res.json())
    .then(data =>{
        data.suppliers.forEach(provee =>{
            
            const row = document.createElement(`tr`);
            row.innerHTML += `
            <td>${provee.id}</td>
            <td>${provee.name}</td>
            <td>${provee.contactInfo.phone}</td>
            <td>${provee.contactInfo.email}</td>
            <td>${provee.contactInfo.address}</td>
            `
            tableBody.appendChild(row)
            })
        })
}
supplier();

function orders(){
    const tableBody = document.querySelector("#seccion3 tbody")
    fetch("farmacia.json")
    .then(res=> res.json())
    .then(data =>{
        data.orders.forEach(orde =>{
            const row = document.createElement(`tr`);
            row.innerHTML += `
            <td>${orde.orderId}</td>
            <td>${orde.productId}</td>
            <td>${orde.quantity}</td>
            <td>${orde.orderDate}</td>
            <td>${orde.status}</td>
            `
            tableBody.appendChild(row)
            })
        })
}
orders();

function crearProduct(){
    document.getElementById("productos").addEventListener("submit",)
    var nombre = document.getElementById('inputNOMBRE').value;
    var categoria = document.getElementById('inputCATEGORIA').value;
    var precio = document.getElementById('inputPRECIO').value;
    var cantidad = document.getElementById('inputCANTIDAD').value;
    var idProveedor = document.getElementById('inputPROVEEDOR').value;

    data["products"].push(guardado={
                "name": nombre,
                "category": categoria,
                "price": precio,
                "quantityInStock": cantidad,
                "supplierId": idProveedor
    } );
    products();
}
crearProduct()