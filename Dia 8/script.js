let pokemonId= 1

document.getElementById("boton1").addEventListener("click",function(){
  pokemonId--;
  consumir(pokemonId)
})

document.getElementById("boton2").addEventListener("click",function(){
  pokemonId++;
  consumir(pokemonId)
})

document.getElementById("id").addEventListener("keydown", function(event){
  if (event.key === "Enter"){
    pokemonId = parseInt(document.getElementById("id").value, 10);
    consumir(pokemonId)
  }
})


function consumir(id){
    // let buscar= document.getElementById("id").value;
    let pokemon= "https://pokeapi.co/api/v2/pokemon/"+id;
    mostrarPokemon(pokemon)

    document.getElementById("lado").innerHTML = id

    mostrarImage(pokemon)
}

function mostrarPokemon(pokemon){
    const div = document.querySelector("#contenido ")
    fetch(pokemon)
      .then(res => res.json())
      .then(Data => {
        let datos= document.getElementById("derecha")
        datos.innerHTML = `
        <p>${Data.forms[0]["name"]}</p>
        `})
}

function mostrarImage(pokemon){
  const div = document.querySelector("#contenido ")
    fetch(pokemon)
      .then(res => res.json())
      .then(Data => {
        document.getElementById("aparece").innerHTML =`
        <div id="aparece">
          <img id="gif1" src="${Data.sprites.other.showdown.front_default}" alt="">
        </div>
        
        <audio autoplay src="${Data.cries.latest}">`

  })

}