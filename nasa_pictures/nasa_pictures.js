let counter = localStorage.getItem("counter");
console.log(counter);
let results = JSON.parse(localStorage.getItem("results"));

console.log(results);




document.getElementById("valider").addEventListener("click", (event) => {
  let count = document.getElementById("count").value;
  let thumbs = document.getElementById("thumbs-select").value;

  if (count === "3" && thumbs == "true") {
    //requête à l'API et récupération de la réponse en JSON - remplace xhr
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=3mpbloKSNnuBe6UpTH6LuvEpHLuMstO6NcviGMEj&count=3&thumbs=true"
    )
      .then((response) => {
        if (response.status == 200) return response.json();
        else console.error(`Error API : satus ${response.status}`);
      })
      .then((json) => showApi(json));
    // disparition du bouton pour ne plus pouvoir faire des requêtes à l'API
    // point d'amélioration: faire un removeEventListener
    document.getElementById("valider").style.display = "none";
    // permet le passage après un certain délai à la page index qui va lancer le prochain jeu
    
        console.log(results);
        results["web"]++;
        results["AI"]++;
        localStorage.setItem('results', JSON.stringify(results));
        counter++;
        localStorage.setItem('counter', counter)
    setTimeout(() => {
      return window.location.assign("/suitsyou_hackathon/index_butterfly.html");
    }, 8000);
  } else {
    $("#myModal").modal("show");
  }
});

// fonction qui permet l'affichage de la réponse API dans le DOM
const showApi = function (reponse) {
  for (const index in reponse) {
    let div = document.getElementById("resultat");
    let small_div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let author = document.createElement("p");
    if (reponse[index].media_type == "image") {
      img.src = reponse[index].url;
    } else if (reponse[index].media_type == "video") {
      img.src = reponse[index].thumbnail_url;
    }
    title.innerHTML = reponse[index].title;
    author.innerHTML = `© ${reponse[index].copyright}`;
    small_div.appendChild(img);
    small_div.appendChild(title);
    small_div.appendChild(author);
    div.appendChild(small_div);
  }
};
