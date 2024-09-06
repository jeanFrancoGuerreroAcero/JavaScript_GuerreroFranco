const link = "https://randomuser.me/api/"
mostar(link)
mostarFoto(link)

let cards = document.getElementsByClassName("imagen");
let previous = cards[0];

for(const card of cards){
    card.addEventListener("mouseenter",() => {
        if(!card.classList.contains("seleccion")){
            previous.classList.remove("seleccion")
            previous  = card;
            card.classList.add("seleccion")
        }
    })
}

function mostar(link){
    fetch(link)
    .then(res => res.json())
    .then(Data =>{
        let datos= document.getElementById("abaNombre")
        datos.innerHTML = `
        <p id="ho">${Data.results[0]["name"]["first"]}</p>`
    })
    let datos= document.getElementById("nombre")
    datos.innerHTML = `
    <p>Hi, My name is</p>`
}

function mostarEmail(link){
    fetch(link)
    .then(res => res.json())
    .then(Data =>{
        let datos= document.getElementById("abaNombre")
        datos.innerHTML = `
        <p id="ho">${Data.results[0]["email"]}</p>`
    })
    let datos= document.getElementById("nombre")
    datos.innerHTML = `
    <p>Hi, My email is</p>`
}

function mostarMapa(link){
    fetch(link)
    .then(res => res.json())
    .then(Data =>{
        let datos= document.getElementById("abaNombre")
        datos.innerHTML = `
        <p id="ho">${Data.results[0]["location"]["street"]["number"]}-${Data.results[0]["location"]["street"]["name"]}</p>`
    })
    let datos= document.getElementById("nombre")
    datos.innerHTML = `
    <p>Hi, My address is</p>`
}

function mostarNumero(link){
    fetch(link)
    .then(res => res.json())
    .then(Data =>{
        let datos= document.getElementById("abaNombre")
        datos.innerHTML = `
        <p id="ho">${Data.results[0]["phone"]}</p>`
    })
    let datos= document.getElementById("nombre")
    datos.innerHTML = `
    <p>Hi, My number is</p>`
}

function mostarNacimiento(link){
    fetch(link)
    .then(res => res.json())
    .then(Data =>{
        let datos= document.getElementById("abaNombre")
        datos.innerHTML = `
        <p id="ho">${Data.results[0]["dob"]["date"]}</p>`
    })
    let datos= document.getElementById("nombre")
    datos.innerHTML = `
    <p>Hi, My birthday is</p>`
}

function mostarContraseña(link){
    fetch(link)
    .then(res => res.json())
    .then(Data =>{
        let datos= document.getElementById("abaNombre")
        datos.innerHTML = `
        <p id="ho">${Data.results[0]["login"]["password"]}</p>`
    })
    let datos= document.getElementById("nombre")
    datos.innerHTML = `
    <p>Hi, My password is</p>`
}

function mostarFoto(link){
    fetch(link)
    .then(res => res.json())
    .then(ata =>{
        let app= document.getElementById("foto")
        app.innerHTML = `
        <img src="${ata.results[0]["picture"]["large"]}" id="image" alt="">`
    })
}