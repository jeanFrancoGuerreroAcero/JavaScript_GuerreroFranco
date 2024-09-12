function aparecer(){
    let link = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    let link2 = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    mostra(link)
    maquina(link2)    
}

document.getElementById("buttonQuedarse").addEventListener("click", detenerse)
function detenerse(){
    if(valor>valorMaquina){
        let mmm= document.getElementById("victory")
        mmm.innerHTML = `
        <p>has ganado</p>`
    }
    if(valor==valorMaquina){
        let mmm= document.getElementById("victory")
        mmm.innerHTML = `
        <p>empate</p>`
    }
    if(valor<valorMaquina){
        let mmm= document.getElementById("victory")
        mmm.innerHTML = `
        <p>has perdido</p>`
    }
}

let valor=0
let valorMaquina=0

function mostra(link){
    fetch(link)
    .then(res => res.json())
    .then(data =>{
            var linkOtro= "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
            fetch(linkOtro)
            .then(res => res.json())
            .then(carta =>{
                console.log(carta)
                let datos= document.getElementById("cartasPlayer1")
                datos.innerHTML += `
                <img src="${carta.cards[0].image}" alt="">`

                valor += calcular(carta.cards[0].value) 

                console.log(carta.cards[0].value)
                console.log("el valor -", valor)

                if(valor>21){
                    console.log("perdio")
                    let mostra= document.getElementById("victory")
                    mostra.innerHTML = `
                    <p>Has perdido</p>`
                }
            })
        })
}

async function maquina(link2){
    fetch(link2)
    .then(res => res.json())
    .then(data =>{
        
            var linkOtro= "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
            fetch(linkOtro)
            .then(res => res.json())
            .then(carta =>{
                console.log(carta)
                let datos= document.getElementById("cartasPlayer2")
                datos.innerHTML += `
                <img src="${carta.cards[0].image}" alt="">`

                valorMaquina += calcular(carta.cards[0].value) 

                console.log(carta.cards[0].value)
                console.log("el valor maquina-", valorMaquina)
            })
        })
}

function calcular(value){
    if(value==="ACE"){
        return 11;
    }
    else if(["KING","QUEEN","JACK"].includes(value)){
        return 10;
    }
    else{
        return parseInt(value);
    }
}