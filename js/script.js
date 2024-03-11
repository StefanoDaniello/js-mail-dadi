/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const emButton = document.getElementById('emButton');

emButton.addEventListener("click", function(){
    let email = [
    'stefanodaniello0@gmail.com',
    'stefanodaniello1@gmail.com',
    'stefanodaniello2@gmail.com'
    ]
    console.log(email);

    let userEmail= document.getElementById('userEmail').value;
    let found = false;
    console.log(userEmail);

    for(let i=0 ; i<email.length ; i++){
        if(userEmail.toLowerCase() === email[i].toLocaleLowerCase()){
            found=true;
        }
    }
    const emResult = document.getElementById('emResult');
    if(found){
        console.log('la tua email e presente nel sistema');
        emResult.innerHTML='la tua email e presente nel sistema'
    }else if(userEmail === '' || !isNaN(userEmail)){
        emResult.innerHTML='Errrore inserisci un email'
    }else{
        console.log('la tua email non e presente nel sistema');
        emResult.innerHTML='la tua email non e presente nel sistema'
    }
})

const emClear = document.getElementById('emClear');
emClear.addEventListener("click", function(){
    userEmail.value= '';
    emResult.innerHTML= '';
})


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/


let rnButton =document.getElementById('rnButton');

rnButton.addEventListener("click", function(){
    let randomNumber=[];
    randomNumber.push(getRndInteger(1,6));
    console.log(randomNumber);
    let userNumber=document.getElementById('userNumber').value;
    console.log(userNumber)

    const rnResult = document.getElementById('rnResult');
    const immagini =document.getElementById('immagini');
    if(userNumber <=0 || userNumber >6 || userNumber === ''){
        rnResult.innerHTML='errore inserisci un numero valido tra 1 e 6'
        // immagini.innerHTML='';
    }else if(randomNumber>userNumber){
    rnResult.innerHTML=`hai perso il computer ha scelto: ${randomNumber}`
    }else if(randomNumber == userNumber){
        rnResult.innerHTML=`hai pareggiato il computer ha scelto: ${randomNumber}`
    }else{
    rnResult.innerHTML=`hai vinto il computer ha scelto: ${randomNumber}`
    }

    // <img src="dadi/1.svg" alt="1.svg"></img>
    if(userNumber === ''){
    immagini.innerHTML='';
    }else if(randomNumber == 1){
        immagini.innerHTML= `<img src="dadi/1.svg" alt="1.svg"></img>`
    }else if(randomNumber == 2){
        immagini.innerHTML= `<img src="dadi/2.svg" alt="2.svg"></img>`
    }else if(randomNumber == 3){
        immagini.innerHTML= `<img src="dadi/3.svg" alt="3.svg"></img>`
    }else if(randomNumber == 4){
        immagini.innerHTML= `<img src="dadi/4.svg" alt="4.svg"></img>`
    }else if(randomNumber == 5){
        immagini.innerHTML= `<img src="dadi/5.svg" alt="5.svg"></img>`
    }else if(randomNumber == 6){
        immagini.innerHTML= `<img src="dadi/6.svg" alt="6.svg"></img>`
    }
})

const rnClear = document.getElementById('rnClear');
rnClear.addEventListener("click", function(){
    userNumber.value= '';
    rnResult.innerHTML= '';
    immagini.innerHTML='';
})