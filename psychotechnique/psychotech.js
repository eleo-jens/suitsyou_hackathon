//On récupère le h2 #question
const question = document.getElementById("question");
const choicesList = document.getElementById("choiceContainer");
//On récupère les différents choix #choix-text dans un tableau

const imgContainer = document.getElementById("imgContainer");
//on récupère les éléments du 'HUD' (head-up display) :
//text qui indique 1/3 et le score + la progress bar
const progressText = document.getElementById("progressText");

const progressBarFull = document.getElementById("progressBarFull");
let choices;
let choice;

// (objet)
let currentQuestion = {};

//pour ajouter un délai : si le user a répondu, on crée un délai avant qu'il puisse répondre à nouveau (voy setTimeOut plus bas)
let acceptingAnwswers = false;

let score = 0;
let counter = localStorage.getItem("counter");
console.log(counter);
let results = JSON.parse(localStorage.getItem("results"));

console.log(results);
//quelle question 
let questionCounter = 0;

//copie du set de questions : on prendra les questions depuis ce tableau et on les enlèvera pour être surs que la question ne soit pas posée plusieurs fois
let availableQuestions = [];

// set des questions (tableau d'objets)
let questions = [
    {
        question: "Select better layout",
        choices : ["A","B"],
        answer: "1",
        group: "web",
        image: {
            source: "./images/design2.png",
            width: "800px",
            height: "500px"
        }
    },
    {
        question: "Indicate identical image",
        choices : ["A", "B", "C"],
        answer: "0",
        group: "wad",
        image: {
            source: "./images/find4.png",
            width: "800px",
            height: "500px"
        },
    },

    {
        question: "In which row occurs a mistake in repetition?",
        choices : ["Brussels, Brussels, Brussels, Brussels","ZyTTb33, ZyTTb33, ZyTTb33, ZyTTb33", "Interface3, Interface3, Interface3, Interface3", "Java Script, Java Script, Java Scrlpt, Java Script", "Smoothie, Smoothie, Smoothie, Smoothie", "Password, Password, Password, Password"],
        answer: "3",
        group: "wad",
        image: null
    },

    {
        question: "What is the second biggest business rated less than 60?",
        choices : ["Restaurants", "Coffee shops", "Cinemas", "Bars", "clubs"],
        answer: "0",
        group: "AI",
        image: {
            source: "./images/AIPychart.png",
            width: "800px",
            height: "400px"
        },
    },

    {
        question: "Which set does the figure belong to ?",
        choices : ["A", "B", "Neither of them"],
        answer: "2",
        group: "AI",
        image: {
            source: "./images/figure.png",
            width: "800px",
            height: "500px"
        },
    },
    {
        question: "Which block completes the following sequence?",
        choices : ["A", "B", "C", "D"],
        answer: "3",
        group: "game",
        image: {
            source: "./images/suiteLogique.png",
            width: "800px",
            height: "500px"
        },
    },
    {
        question: "Select better design",
        choices : ["A", "B"],
        answer: "0",
        group: "web",
        image: {
            source: "./images/design1.png",
            width: "800px",
            height: "500px"
        },
    },
    {
        question: "Which domino completes the suite?",
        choices : ["A", "B", "C", "D", "E"],
        answer: "0",
        group: "game",
        image: {
            source: "./images/dominos.png",
            width: "800px",
            height: "300px"
        },
    },
    

];

// CONSTANTES nécessaires pour le jeu lui-même


//À combien de questions le user doit-il répondre pour compléter le quizz ?
const MAX_QUESTIONS = 8;

startGame = () => {

    questionCounter = 0;
    
    score = [];
    availableQuestions = [...questions]; //[...questions] permet de faire une full copie du tableau "questions" (si on fait juste "= questions" le lien sera référenciel !)
    console.log(availableQuestions);
    getNewQuestion();

};

getNewQuestion = () => {
    //s'il n'y a plus de question disponible, on renvoie vers une page de fin
    if(availableQuestions === 0 || questionCounter >= MAX_QUESTIONS){
        //on stocke le tableau de résultat final dans le local storage grâce à la méthode "setItem" (on caste le tableau en string grâce à la méthode JSON.stringify )
        console.log(results);
        localStorage.setItem('results', JSON.stringify(results));
        counter++;
        localStorage.setItem('counter', counter)
        return window.location.assign("../index_PC.html");
    }
    choicesList.innerHTML = "";
    imgContainer.innerHTML = "";

    questionCounter++;
    //on set le "Question x/3 en fonction du questionCounter"
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

    //On update la width de la progressBarFull en fonction de l'avancée en question
    // console.log((questionCounter/MAX_QUESTIONS)*100);
    // console.log(progressBarFull);

    // progressBarFull.style.width = (questionCounter/MAX_QUESTIONS)*100; => ne fonctionne pas pcq la valeur doit être en % !
    // progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    //random question => Math.floor(Math.random()* nb de question)
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

    //on set la currentQuestion
    currentQuestion = availableQuestions[questionIndex];
    console.log(currentQuestion);
    //on remplacer l'innerText de la div "question" par la propriété "question" de la currentQuestion

    question.innerText = currentQuestion.question;
    if (currentQuestion.image != null){
        pImage = document.createElement("p");
        image = document.createElement('img');
        pImage.appendChild(image);
        image.src = currentQuestion.image.source;
        // image.style.width = currentQuestion.image.width;
        // image.style.height = currentQuestion.image.height;
        imgContainer.appendChild(pImage);


    }

    console.log(currentQuestion.choices);
    for (let index in currentQuestion.choices) {
        
        console.log(currentQuestion.choices[index]);
        choice = document.createElement('p');
        
        choice.innerText = currentQuestion.choices[index];
        choice.dataset.number = index;
        console.log(choice.dataset.number);
        choice.classList.add("choice-text");
        choicesList.appendChild(choice);
        choice.addEventListener("click", e =>{
            if(!acceptingAnwswers) return;
            acceptingAnwswers = false;
        
        const selectedAnswer = e.target.dataset['number'];
        console.log(selectedAnswer);
        if(selectedAnswer == currentQuestion.answer){
            results[currentQuestion.group]++;
            console.log(results);

        } 
        // console.log(resultsPsychotech);
        setTimeout( ()=>{
            //     // selectedChoice.parentElement.classList.remove(classToApply);
            //     //quand on a répondu a une question, on en a une nouvelle
                
                getNewQuestion();
            }, 500);
        
        

        });
}
   
    //splice (where?, how many ?)
    availableQuestions.splice(questionIndex, 1);
    //to allow the user to answer when the question is loaded
    acceptingAnwswers = true;

};

       
startGame();