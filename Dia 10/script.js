let movie= 1

document.getElementById("boton2").addEventListener("click",function(){
    movie = parseInt(document.getElementById("id").value, 10);
    consumir(movie)
})

document.getElementById("atras").addEventListener("click",function(){
    movie--;
  consumir(movie)
})

function siguiente(){
    movie++;
    consumir(movie)
}
   
document.getElementById("id").addEventListener("keydown", function(event){
  if (event.key === "Enter"){
    movie = parseInt(document.getElementById("id").value, 10);
    consumir(movie)
  }
})

function consumir(buscar) {
    let pelicula = "http://api.disneyapi.dev/character/"+buscar;
    readid(pelicula)
}

function readid(pelicula) {
    const div = document.querySelector("#contenido ")
    fetch(pelicula)
      .then(res => res.json())
      .then(Data => {
        let datos= document.getElementById("aparece")
        datos.innerHTML = `
        <img id="imagen" src="${Data.data.imageUrl}" class="img-fluid rounded-start" alt="...">
        <br>
        <br>
        <br>
        <div id="negro">
        <p id="nombre">${Data.data.name}</p>
            <div id="caja">
                <div class="col-md-8">
                <div class="card-body">
                    <h4>peliculas</h4>
                    <p class="card-text">${Data.data.films}</p>
                    <h4>Videojuegos</h4>
                    <p class="card-text">${Data.data.videoGames}</p>
                    <h4>año de creacion</h4>
                    <p class="card-text">${Data.data.createdAt}</p>
                    <h4>cortos</h4>
                    <p class="card-text">${Data.data.shortFilms}</p>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    `
    })
}