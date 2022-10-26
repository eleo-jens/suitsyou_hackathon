document.getElementById('valider').addEventListener("click", event => {
    let api_key = document.getElementById('api_key').value;

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = event => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // console.log(xhr.responseText);
                let reponse = JSON.parse(xhr.responseText);
                console.log(reponse);

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
            }
            else console.log(`Error: ${xhr.status}`);
        }
    };

    // un peu triste de ne pas afficher de résultats pour celles.ceux qui n'ont pas bien mis 3 ou true
    if (api_key === "DEMO_KEY") {
        let array_request = ["https://api.nasa.gov/planetary/apod?api_key=3mpbloKSNnuBe6UpTH6LuvEpHLuMstO6NcviGMEj&date=2018-06-18",
            "https://api.nasa.gov/planetary/apod?api_key=3mpbloKSNnuBe6UpTH6LuvEpHLuMstO6NcviGMEj&date=2020-09-29",
            "https://api.nasa.gov/planetary/apod?api_key=3mpbloKSNnuBe6UpTH6LuvEpHLuMstO6NcviGMEj&date=2017-05-31"]
        let random_index = Math.round(Math.random() * (array_request.length-1));
        console.log(random_index);
        xhr.open("GET", array_request[random_index]);
        xhr.send(null);
        document.getElementById('valider').style.display = "none";
    }
    else {
        $('#myModal').modal('show');
    }
});