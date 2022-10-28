// assertions ne fonctionne pas sur mozilla firefox; une autre option ?
import myJson from './report.json' assert {type: 'json'};

// let results_object = JSON.parse(localStorage.getItem("results"));

let results_object = {
    'web': 6,
    'wad': 8,
    'game': 2,
    'ai': 7
}

let sorted_results = Object.keys(results_object).sort(function(a,b){return results_object[b]-results_object[a]});

const showReport = function(i) {
    let h1 = document.getElementById('job_title');
    h1.innerHTML = myJson.reports[i].title;
    let p = document.getElementById('job_description');
    p.innerHTML = myJson.reports[i].description;
    let span = document.getElementById('job');
    span.innerHTML = myJson.reports[i].title;

    let urls = [];
    for (let j = 0; j < 4; j++) {
        let url = document.getElementById('url'+j);
        url.href = myJson.reports[1].courses[j].url;
        url.innerHTML = `${myJson.reports[i].courses[j].name} @${myJson.reports[i].courses[j].site}`;
        urls.push(url);
    }
};

if (results_object[sorted_results[0]] == results_object[sorted_results[1]]){
    // en cas d'égalité entre deux groupes ou plus: on affiche ninja reports[4];
    showReport(myJson.reports.length-1);
}
else if (results_object[sorted_results[0]] > results_object[sorted_results[1]]){
    let i = 0;
    while (i < sorted_results.length && sorted_results[0] != myJson.reports[i].code){
        i++;
    }
    showReport(i);
}

const chart = document.getElementById('myChart');

const myChart = new Chart(chart, {
    type: 'doughnut',
    data: {
        labels: [
            'Web Designer',
            'Back End Developer',
            'Game Developer',
            'Data Analyst'
        ],
        datasets: [{
            label: 'Your Carrer Path',
            data: [results_object.web, results_object.wad, results_object.game, results_object.ai],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
});