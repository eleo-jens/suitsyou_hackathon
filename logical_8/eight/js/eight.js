let f = document.getElementById('f');
let t = document.getElementById('t');
let gloabl = document.getElementById('global');
let congrats = document.getElementById('congrats');
let results = JSON.parse(localStorage.getItem('results'));
let counter = localStorage.getItem('counter');

let points = 0;


function fun(){
    points = 0;
    global.style.display = 'none';
    congrats.innerHTML =' MISSED! &#128530'
    congrats.style.display = 'block';
    counter++;
    localStorage.setItem("counter", counter);
    setTimeout( ()=>{
       return window.location.assign("/suitsyou_hackathon/index_fake_button.html")   
        }, 1000);

}

function win(){
    points = 1;
    gloabl.style.display = 'none';
    congrats.style.display = 'block';
    results["wad"]++;
    console.log(results);
    localStorage.setItem("results", JSON.stringify(results));
    counter++;
    console.log(counter);
    localStorage.setItem("counter", counter);
    setTimeout( ()=>{
        return window.location.assign("/suitsyou_hackathon/index_fake_button.html")   
        }, 1000);
    }

console.log(points);





