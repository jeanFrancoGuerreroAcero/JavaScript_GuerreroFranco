document.getElementById("button").addEventListener("click", GetDataFromAPI);

function GetDataFromAPI() {
    var buscar = document.getElementById("entrada").value;
    let pelicula = "http://api.disneyapi.dev/character/"+buscar;
    readid(pelicula)
}

function readid(pelicula) {
    fetch(pelicula)
    .then (res => res.json())
    .then (Data => {
    document.getElementById("output").innerHTML = ""
    document.getElementById("output").innerHTML += `
        <p id = "nombre">${Data.data.name}</p>
        <br><p id = "movie">Películas: ${Data.data.films}</p>
        <br><p id = "fecha">Creado: ${Data.data.createdAt}</p>
        <br><p id = "game">Videojuegos: ${Data.data.videoGames}</p>
        <img id="imagen" src= "${Data.data.imageUrl}"><br>
        ${Data.data.shortFilms}
    `
    })
}