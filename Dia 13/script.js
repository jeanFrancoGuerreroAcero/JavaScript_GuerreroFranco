let link = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
mostra(link)
const pedir= document.querySelector("#button")


pedir.addEventListener("click",mostra)
function mostra(link){
    fetch(link)
    .then(res => res.json())
    .then(data =>{
        var otro = data.deck_id
        var linkOtro= "https://deckofcardsapi.com/api/deck/"+String(otro)+"/draw/?count=3"
        fetch(linkOtro)
        .then(res => res.json())
        .then(carta =>{
            console.log(carta)
            let datos= document.getElementById("cartasPlayer")
            datos.innerHTML = `
                <img id="player1" src="${carta.cards[0].image}" alt="">
                <img id="player2" src="${carta.cards[0].image}" alt="">
                `
            console.log(carta.cards[0].value)
        })
    })
}