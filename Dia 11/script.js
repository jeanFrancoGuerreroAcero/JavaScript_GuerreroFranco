const link = "https://randomuser.me/api/"
mostar(link)

function mostar(link){
    fetch(link)
    .then(res => res.json())
    .then(Data =>{
        let datos= document.getElementById("abaNombre")
        datos.innerHTML = `
        <p id="ho">${Data.results[0]["name"]["title"]}</p>`
    })
    .then(ata =>{
        let app= document.getElementById("foto")
        app.innerHTML = `
        <img src="${ata.results[0]["picture"]["large"]}" id="image" alt="">`
    })
}