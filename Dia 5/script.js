document.getElementById("boton").addEventListener("click",obtenerJson);

function obtenerJson(){
    fetch("farmacia.json")
    .then(res=> res.json())
    .then(data=>{
        for(var i of data){
            console.log("categoria:",i["category"])
        }
    })
}
obtenerJson()

function guardarProducto(){
    
}