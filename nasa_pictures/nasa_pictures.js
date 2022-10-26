document.getElementById('valider').addEventListener("click", event => {
    let count = document.getElementById('count').value;
    let thumbs = document.getElementById('thumbs-select').value;

    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = event => {
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                // console.log(xhr.responseText);
                let reponse = JSON.parse(xhr.responseText);
                console.log(reponse);

                for (const index in reponse) {
                    let div = document.getElementById('resultat');
                    let img = document.createElement('img');
                    let title = document.createElement('h3');
                    let author = document.createElement('p');
                    if (reponse[index].media_type == "image"){
                        img.src = reponse[index].url;
                    }
                    else if (reponse[index].media_type == "video") {
                        img.src = reponse[index].thumbnail_url;
                    }
                    title.innerHTML = reponse[index].title;
                    author.innerHTML = `© ${reponse[index].copyright}`;
                    div.appendChild(img);
                    div.appendChild(title);
                    div.appendChild(author);
                }
            }
            else console.log(`Error: ${xhr.status}`);
        } 
    };

    // un peu triste de ne pas afficher de résultats pour celles.ceux qui n'ont pas bien mis 3 ou true
    if (count === "3" && thumbs == "true"){
        xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=3mpbloKSNnuBe6UpTH6LuvEpHLuMstO6NcviGMEj&count=3&thumbs=true");
        xhr.send(null);
        document.getElementById('valider').style.display = "none";
    }
    else {
        $('#myModal').modal('show');
    }
});