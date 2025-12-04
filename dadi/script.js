/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/


//genero "random" dei numeri sia per l'user che per il pc
let userNumber= Math.floor((Math.random() * 6)+1);
console.log(`Hai tirato il dado e il risultato è... ${userNumber}!`)

let computerNumber= Math.floor((Math.random()*6)+1)
console.log(`Il computer ha tirato il dado e il risultato è... ${computerNumber}!`)

//rendendomi conto dopo un pochino di tentativi che mi dava uno come risultato ho abbassato il valore della moltiplicazione math.random e aggiunto un uno

//pongo le condizioni per le varie combinazioni di risultato
if(computerNumber>userNumber){
    console.log(`${computerNumber} è maggiore di ${userNumber}. Ha vinto il computer`)
}
else if(userNumber> computerNumber){
 console.log(`${userNumber} è maggiore di ${computerNumber}. Hai vinto!`)
}
else{
    console.log(`Avete tirato entrambi ${userNumber}. Pareggio!`)
}