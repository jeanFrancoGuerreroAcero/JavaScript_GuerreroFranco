function buscar(){
    let search = document.getElementById("id").value;
    let link = "https://superheroapi.com/api.php/b52aa20692595f4a0d9a87c5e5709502/"+search;
    mostrar(link);
};

function mostrar(link){
    fetch(link)
    .then(res => res.json())
    .then(data =>{
        document.getElementById("mostrar").innerHTML =`
        <br></br>
        <img src="${data.image.url}" alt="${data.name}" style="width:15em">
        <p><strong>Nombre completo:</strong> ${data.biography["full-name"]}</p>
        <p><strong>Inteligencia:</strong> ${data.powerstats.intelligence}</p>
        <p><strong>Fuerza:</strong> ${data.powerstats.strength}</p>
        <p><strong>Velocidad:</strong> ${data.powerstats.speed}</p>
        <p><strong>Durabilidad:</strong> ${data.powerstats.durability}</p>
        <p><strong>Poder:</strong> ${data.powerstats.power}</p>
        <p><strong>Combate:</strong> ${data.powerstats.combat}</p>
        <p><strong>Ocupación:</strong> ${data.work.occupation}</p>
        <p><strong>Lugar de nacimiento:</strong> ${data.biography["place-of-birth"]}</p>
        <p><strong>Alineación:</strong> ${data.biography.alignment}</p>`
    })
}
