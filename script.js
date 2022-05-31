/*

    Descrizione:


    Visualizzare in pagina (html) 5 numeri casuali.
    Avviare un timer di 30 secondi
    Dopo 30 secondi, nascondere i numeri.
    L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite un prompt().
    Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.


*/

// recupero gli elementi html

const playButton = document.getElementById('play-button');
const numbersOutput = document.getElementById('numbers');
const timerOutput = document.getElementById('timer');


// funzione che genera 5 numeri casuali unici da 1 a 100

function randomNumbers (){
    let randomArray = [];
    while (randomArray.length < 5){
        let randomNumber = Math.ceil(Math.random() * 100);
        if (randomArray.indexOf(randomNumber) === -1){
            randomArray.push(randomNumber);
        }
    }

    return randomArray;
}

// funzione che prende un array di numeri e li inserisce nell'area di gioco

function renderNumbers (element, numbersArray){
    for (let i = 0; i < numbersArray.length; i++){
        const myElement = document.createElement('div');
        myElement.classList.add('rounded');
        myElement.classList.add('bg-info');
        myElement.classList.add('p-4');
        myElement.classList.add('m-2');
        myElement.classList.add('rounded-circle');
        myElement.classList.add('shadow');
        myElement.innerHTML = numbersArray[i];
        element.appendChild(myElement);
    }
}

let numbers = randomNumbers();

renderNumbers(numbersOutput, numbers);