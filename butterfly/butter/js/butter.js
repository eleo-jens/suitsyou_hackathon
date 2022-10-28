const congrats = document.getElementById("congrats");
let t2 = document.getElementById('t2');


let identified = false;
let buttpoints = 0;
console.log(buttpoints)


function found(){
identified = true;
buttpoints = 1;
let p = document.createElement('p');
p.innerText = "Congrats !";
congrats.appendChild(p);
setTimeout( ()=>{
            return window.location.assign("/suitsyou_hackathon/index_butterfly.html")
        }, 500);

}


// if (identified == true){
//     setTimeout( ()=>{
//         return window.location.assign("/suitsyou_hackathon/index_butterfly.html")
//     }, 500);

// }
// if (identified == true) {
//     t2.style.display = 'block';
//     t2.innerHTML = "Congrats! You identified hidden element!";
// }
// if (identified == false) {
//     t2.style.display = 'none';
// }
//if (identified == false) {
   // t2.innerHTML = "text testing....";
//}


console.log(buttpoints);
console.log(identified);
