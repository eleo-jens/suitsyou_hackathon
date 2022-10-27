document.getElementById('valider').addEventListener("click", event => {
    let api_key = document.getElementById('api_key').value;

    if (api_key === "DEMO_KEY") {
        let array_request = ["https://api.nasa.gov/planetary/apod?api_key=3mpbloKSNnuBe6UpTH6LuvEpHLuMstO6NcviGMEj&date=2018-06-18",
            "https://api.nasa.gov/planetary/apod?api_key=3mpbloKSNnuBe6UpTH6LuvEpHLuMstO6NcviGMEj&date=2020-09-29",
            "https://api.nasa.gov/planetary/apod?api_key=3mpbloKSNnuBe6UpTH6LuvEpHLuMstO6NcviGMEj&date=2017-05-31"]
        let random_index = Math.round(Math.random() * (array_request.length - 1));

        //requête à l'API et récupération de la réponse en JSON - remplace xhr
        fetch(array_request[random_index])
            .then(response => {
                if (response.status == 200) return response.json();
                else console.error(`Error API : satus ${response.status}`);
            }
            )
            .then(json => showApi(json));

        // disparition du bouton pour ne plus pouvoir faire des requêtes à l'API
        // point d'amélioration: faire un removeEventListener
        document.getElementById('valider').style.display = "none";

        // permet le passage après un certain délai à la page index qui va lancer le prochain jeu
        let delay = 25000;
        if (random_index === 2){
            delay = 45000;
        }
        console.log(delay);
        setTimeout(() => {
            // mettre à jour l'index
            return window.location.assign("/index_color_picker.html");
        }, delay);
    }
    else {
        $('#myModal').modal('show');
    }
});

// fonction qui permet l'affichage de la réponse API dans le DOM 
const showApi = function (reponse) {
    let div = document.getElementById('resultat');
    let iframe = document.createElement('iframe');
    let title = document.createElement('h3');
    let author = document.createElement('p');
    iframe.src = reponse.url;
    iframe.width = "500";
    iframe.height = "320";
    title.innerHTML = reponse.title;
    author.innerHTML = `© ${reponse.copyright}`;
    div.appendChild(iframe);
    div.appendChild(title);
    div.appendChild(author);
};