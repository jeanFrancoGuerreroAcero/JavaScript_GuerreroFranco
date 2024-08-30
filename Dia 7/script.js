function buscarPeople(){
    let search = document.getElementById("id").value;
    let link = "https://swapi.py4e.com/api/people/"+search;
    mostrar(link)
}

function mostrar(link){
    const tableBody = document.querySelector("#tabla tbody")
    fetch(link)
    .then(res => res.json())
    .then(Data =>{
        document.getElementById("tabla").innerHTML =`
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
              <tr>
                <th scope="row">homeworld</th>
                <td colspan="2">${Data.homeworld}</td>
                <td> <ul class="list-group">
                  </ul></td></td>
              </tr>
              <tr>
                <th scope="row">films</th>
                <td> <ul class="list-group">
                    <li class="list-group-item">name:</li>
                    <li class="list-group-item">Rotate:${Data.homeworld.diameter}</li>
                    <li class="list-group-item">opening crawl:</li>
                  </ul></td>
              </tr>
            </tbody>
          </table>
      `});
}