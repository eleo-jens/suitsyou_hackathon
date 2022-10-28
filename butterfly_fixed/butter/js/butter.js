
let results = JSON.parse(localStorage.getItem('results'));
let counter  = localStorage.getItem('counter');
console.log(counter)
let t2 = document.getElementById('t2');
let text = document.getElementById('text');


let identified = false;
let buttpoints = 0;


function found(e){
     
identified = true;
buttpoints = 1;
text.innerHTML = "Congrats! You identified hidden element!";
console.log(identified);
console.log(buttpoints);
results["web"]++;
        localStorage.setItem('results', JSON.stringify(results));
        counter++;
        localStorage.setItem('counter', counter)
setTimeout(() => {
    return window.location.assign("/suitsyou_hackathon/index_cube_animation.html");
  }, 3000);

    return false;
}




console.log(identified);
console.log(buttpoints);

