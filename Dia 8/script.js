function consumir(){
    let buscar= document.getElementById("id").value;
    let pokemon= "https://pokeapi.co/api/v2/pokemon/"+buscar;
    mostrarPokemon(pokemon)
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
        let ima = document.getElementById("gif");
        ima.innerHTML = `
        <div>
        <img src="${Data.sprites.other.showdown.front_defaul}">`}


