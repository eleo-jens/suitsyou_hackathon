let counter = localStorage.getItem("counter");
console.log(counter);
let results = JSON.parse(localStorage.getItem("results"));

console.log(results);

let timer = setInterval(move, 10);
let pos = 0;
let ball = document.getElementById("ball");

function move() {
  if (pos >= 270) {
    // the ball reached the end of the container (because 200px-50px = 150px)
    clearInterval(timer);
  } else {
    pos += 1;
    // right, bottom, left, top
    ball.style.right = pos + "px"; // déplace la boite par la gauche, son coté gauche change de position
    ball.style.top = pos + "px"; // déplace la boite par le haut, son coté haut change de position
  }
}

document.getElementById("valider").addEventListener("click", (event) => {
  let horizontale_value = document.getElementById("position1-select").value;
  let verticale_value = document.getElementById("position2-select").value;

  let timer = setInterval(move, 10);
  let pos = 0;
  let ball = document.getElementById("ball");

  function move() {
    if (pos >= 270) {
      clearInterval(timer);
    } else {
      pos += 1;
      if (horizontale_value == "right") {
        ball.style.right = pos + "px";
      }
      else {
        ball.style.left = pos + "px";
      }
      if (verticale_value == "top") {
        ball.style.top = pos + "px";
      }
      ball.style.bottom = pos + "px";
    }
  }

  if (horizontale_value === "left" && verticale_value === "bottom") {
    document.getElementById('valider').style.display = "none";
    console.log(results);
        results["game"]++;
        localStorage.setItem('results', JSON.stringify(results));
        counter++;
        localStorage.setItem('counter', counter)
    setTimeout(() => {
      return window.location.assign("/suitsyou_hackathon/index_nasa_video.html");
    }, 6000);
  }
  else {
    $('#myModal').modal('show');
  }
});
