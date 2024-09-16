class crearBarra extends HTMLElement {
    constructor(){
        super();
        this.innerHTML =`
        <div class="barraArriba">
            <div id="info">
                <p id="Live">Live user Filter</p>
                <p id="search">search by mi name and/or location</p>
                <input id="input1" type="text" placeholder="search">
            </div>
        </div>
        <div class="jjj">
        </div>
        `
    }
}

customElements.define('la-barra',crearBarra)



let obtener = "https://66e45ac5d2405277ed14047d.mockapi.io/Users"
ddd(obtener)
const per = document.getElementById("ll")

document.addEventListener("keyup", e=>{

    if(e.target.matches("#input1")){

        document.querySelectorAll(".contenedor").forEach(nombre =>{
            nombre.textContent.includes(e.target.value)
            ?nombre.classList.remove("filtro")
            :nombre.classList.add("filtro")
        })
    }
})


function ddd(obtener){
    fetch(obtener)
    .then(res =>res.json())
    .then(Data => {

        for(var i of Data){
            console.log(i)
            document.querySelector(".jjj").innerHTML += `
            <div class="contenedor">
                <div class="foto">
                    <img id="imagen" src="${i.avatar}" alt="">
                    <div class="nnn">
                    <h1>${i.name_full}</h1>
                    <h3 id="descripcion">${i.description}</h3>
                </div>
            </div>`
        }
        
    })
}
