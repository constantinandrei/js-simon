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
const descriptionOutput = document.getElementById('description');

// variabili per salvare il tempo

let countDown = 3;
let myTimeout;
let mySecondTimeout;

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
        myElement.classList.add('number-style');
        myElement.innerHTML = numbersArray[i];
        element.appendChild(myElement);
    }

}



// funzione che aggiorna il timer nell'html

function renderCountDown(element){
    element.innerHTML = countDown.toString().padStart(2, '0');
    myTimeout = setInterval(function (){
        countDown--;
        element.innerHTML = countDown.toString().padStart(2, '0');
        countDown--;
    }, 1000)
}

// funzione che interrompe il count down e chiede i numeri all'utente

function stopCountDown (numbers) {
    let numbersArray = []
    let correctNumbers = [];
    mySecondTimeout = setInterval(function(){

        if (countDown < 0){
            clearInterval(myTimeout);
            clearInterval(mySecondTimeout);
            // chiedo all'utente i numeri
            while (numbersArray.length < 5){
                let number = parseInt(prompt('Inserire uno dei 5 numeri'));
                if (isNaN(number)) {
                    alert('Inserire un numero valido')
                } else if (numbersArray.indexOf(number) !== -1){
                    alert('Hai già inserito questo numero')
                }
                else {
                numbersArray.push(number)}
            }

            for (let i = 0; i < numbersArray.length; i++){
                if (numbers.indexOf(numbersArray[i]) !== -1){
                    correctNumbers.push(numbersArray[i])
                }
            }
        }
    }, 1000)

    return correctNumbers;
}

//event listener sul pulsante gioca

playButton.addEventListener('click', function(){
    if (myTimeout){
        return;
    }
    let numbers = randomNumbers();
    renderNumbers(numbersOutput, numbers);
    renderCountDown(timerOutput);
    let correctNumbers = stopCountDown(numbers);
    
    

})