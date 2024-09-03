function buscarPeople() {
  let search = document.getElementById("id").value;
  let link = "https://swapi.py4e.com/api/people/" + search;
  mostrar(link)

  let bus = document.getElementById("id").value;
  let home = "https://swapi.py4e.com/api/planets/" + bus;
  mostrarHomeworld(home)

  let busEspe = document.getElementById("id").value;
  let espe = "https://swapi.py4e.com/api/species/"+busEspe;
  mostrarEspecies(espe)

  mostarFilms(link)

  mostrarStarchi(link)

  mostrarVehicles(link)

  ultimo(link)
}

function mostrar(link) {
  const tableBody = document.querySelector("#tabla tbody")
  fetch(link)
    .then(res => res.json())
    .then(Data => {
      document.getElementById("tabla").innerHTML = `
        <br></br>
           <table class="table table-dark">
            <tbody>
              <tr>
                <th scope="row">name</th>
                <td>${Data.name}</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">height:</th>
                <td>${Data.height}</td>
              </tr>
              <tr>
                <th scope="row">mass</th>
                <td colspan="2">${Data.mass}</td>
                <td></td>
              </tr>
               <tr>
                <th scope="row">hair color:</th>
                <td colspan="2">${Data.hair_color}</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">eye color</th>
                <td colspan="2">${Data.eye_color}</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">birth year</th>
                <td colspan="2">${Data.birth_year}</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">gender</th>
                <td colspan="2">${Data.gender}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
      `});

}

function mostrarVehicles(link){
  const tableBody = document.querySelector("#tabla tbody")
  fetch(link)
    .then(res => res.json())
    .then(Data => {
    let vehicless= document.getElementById("tabla6")
      for(const i of Data.vehicles){
        fetch(i)
        .then(res => res.json())
        .then(ve => {
          vehicless.innerHTML+=`
          <table class="table table-dark">
                <tbody>
                  <tr>
                  <th scope="row">vehicles</th>
                    <td> <ul class="list-group">
                        <li class="list-group-item">Name:${ve.name}</li>
                        <li class="list-group-item">Model:${ve.model}</li>
                        <li class="list-group-item">name:${ve.manufacturer}</li>
                        <li class="list-group-item">name:${ve.cost_in_credits}</li>
                        <li class="list-group-item">name:${ve.length}</li>
                        <li class="list-group-item">name:${ve.max_atmosphering_speed}</li>
                        <li class="list-group-item">name:${ve.crew}</li>
                        <li class="list-group-item">name:${ve.passengers}</li>
                        <li class="list-group-item">Capacity:${ve.cargo_capacity}</li>
                        <li class="list-group-item">name:${ve.consumables}</li>
                        <li class="list-group-item">Class vehicle:${ve.vehicle_class}</li>
                        <li class="list-group-item">Created:${ve.created}</li>
                        <li class="list-group-item">Editeed:${ve.edited}</li>
                        <li class="list-group-item">Url:${ve.url}</li>
                      </ul></td>
                  </tr>
                    </tbody>
              </table>`
        })
}})}

function mostrarStarchi(link){
  const tableBody = document.querySelector("#tabla tbody")
  fetch(link)
    .then(res => res.json())
    .then(Data => {
    let stass= document.getElementById("tabla9")
      for(const i of Data.starships){
        fetch(i)
        .then(res => res.json())
        .then(sta => {
          stass.innerHTML+=`
          <table class="table table-dark">
                <tbody>
                  <tr>
                  <th scope="row">starchifh</th>
                    <td> <ul class="list-group">
                        <li class="list-group-item">Name:${sta.name}</li>
                        <li class="list-group-item">Model:${sta.model}</li>
                        <li class="list-group-item">Manufacturer:${stass.manufacturer}</li>
                        <li class="list-group-item">Cost in Credits:${sta.cost_in_credits}</li>
                        <li class="list-group-item">Masx Atmosphening speed:${sta.max_atmosphering_speed}</li>
                        <li class="list-group-item">Crew:${sta.crew}</li>
                        <li class="list-group-item">Passengers:${sta.passengers}</li>
                        <li class="list-group-item">Cargo capacity:${sta.cargo_capacity}</li>
                        <li class="list-group-item">Passengers:${sta.passengers}</li>
                        <li class="list-group-item">Consumables:${sta.consumables}</li>
                        <li class="list-group-item">Hiperdrive Rating:${sta.hyperdrive_rating}</li>
                        <li class="list-group-item">Mgtl:${sta.MGLT}</li>
                        <li class="list-group-item">Starchip class:${sta.starship_class}</li>
                        <li class="list-group-item">Created:${sta.created}</li>
                        <li class="list-group-item">Edited:${sta.edited}</li>
                        <li class="list-group-item">Url:${sta.url}</li>`})}
    })};

function mostarFilms(link){
  const tableBody = document.querySelector("#tabla tbody")
  fetch(link)
    .then(res => res.json())
    .then(Data => {
    let filmss= document.getElementById("tabla5")
      for(const i of Data.films){
        fetch(i)
        .then(res => res.json())
        .then(fi => {
          filmss.innerHTML+=`
          <table class="table table-dark">
                <tbody>
                  <tr>
                  <th scope="row">films</th>
                    <td> <ul class="list-group">
                        <li class="list-group-item">Name:${fi.title}</li>
                        <li class="list-group-item">Episode Id:${fi.episode_id}</li>
                        <li class="list-group-item">Opening Crawl:${fi.opening_crawl}</li>
                        <li class="list-group-item">Director:${fi.director}</li>
                        <li class="list-group-item">Producer:${fi.producer}</li>
                        <li class="list-group-item">Release Data:${fi.release_date}</li>
                        <li class="list-group-item">Created:${fi.created}</li>
                        <li class="list-group-item">Edited:${fi.edited}</li>
                        <li class="list-group-item">Url:${fi.url}</li>`})}
    })};

function mostrarHomeworld(home) {
  const tableBody = document.querySelector("#tabla2 tbody")
  fetch(home)
    .then(res => res.json())
    .then(Data => {
      document.getElementById("tabla2").innerHTML = `
        <table class="table table-dark">
          <tbody>
            <tr>
               <th scope="row">Homeworld</th>
                <td> <ul class="list-group">
                    <li class="list-group-item">Nombre:${Data.name}</li>
                    <li class="list-group-item">Rotation Period:${Data.rotation_period}</li>
                    <li class="list-group-item">Orbital Period:${Data.orbital_period}</li>
                    <li class="list-group-item">Diameter:${Data.diameter}</li>
                    <li class="list-group-item">Climate:${Data.climate}</li>
                    <li class="list-group-item">Gravity:${Data.gravity}</li>
                    <li class="list-group-item">Terrain:${Data.terrain}</li>
                    <li class="list-group-item">Surface Water:${Data.surface_water}</li>
                    <li class="list-group-item">Population:${Data.population}</li>
                    <li class="list-group-item">Created:${Data.created}</li>
                    <li class="list-group-item">Edited:${Data.edited}</li>
                    <li class="list-group-item">Url:${Data.url}</li>
                  </ul></td>
            </tr>
            </tbody>
        </table>`})
}

function mostrarEspecies(espe) {
  const tableBody = document.querySelector("#tabla4 tbody")
  fetch(espe)
    .then(res => res.json())
    .then(Data => {
      document.getElementById("tabla4").innerHTML =`
      <table class="table table-dark">
            <tbody>
              <tr>
              <th scope="row">especies</th>
                <td> <ul class="list-group">
                    <li class="list-group-item">Nombre:${Data.name}</li>
                    <li class="list-group-item">Clasificacion:${Data.classification}</li>
                    <li class="list-group-item">Designacion:${Data.designation}</li>
                    <li class="list-group-item">Average height:${Data.average_height}</li>
                    <li class="list-group-item">Skin color:${Data.skin_colors}</li>
                    <li class="list-group-item">hair color:${Data.hair_colors}</li>
                    <li class="list-group-item">Eye color:${Data.eye_colors}</li>
                    <li class="list-group-item">Average lifeSpan:${Data.average_lifespan}</li>
                    <li class="list-group-item">Languaje:${Data.language}</li>
                    <li class="list-group-item">Created:${Data.created}</li>
                    <li class="list-group-item">Edited:${Data.edited}</li>
                    <li class="list-group-item">Url:${Data.url}</li>
                  </ul></td>
              </tr>
                </tbody>
          </table>`})
}

function ultimo(link){
  const tableBody = document.querySelector("#tabla7 tbody")
  fetch(link)
    .then(res => res.json())
    .then(Data => {
      document.getElementById("tabla7").innerHTML = `
           <table class="table table-dark">
            <tbody>
              <tr>
                <th scope="row">name</th>
                <td>${Data.created}</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">gender</th>
                <td colspan="2">${Data.edited}</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">gender</th>
                <td colspan="2">${Data.url}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
      `});
}