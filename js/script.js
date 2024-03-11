/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/






const button = document.getElementById('stbutton');

button.addEventListener("click", function(){
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
    const result = document.getElementById('result');
    if(found){
        console.log('la tua email e presente nel sistema');
        result.innerHTML='la tua email e presente nel sistema'
    }else{
        console.log('la tua email non e presente nel sistema');
        result.innerHTML='la tua email non e presente nel sistema'
    }
})

