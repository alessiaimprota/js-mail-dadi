/*Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email*/

//creo un array delle mail degli invitati, un prompt per inserire una mail e una variabile userInvited che prima del ciclo sarà falsa

const listMail=["asd@gmail.com" , "qwerty@gmail.com", "lol@yahoo.it", "johndoe@gmail.com", "procione@gmail.com"]
 let userInput= (prompt("Inserisci la tua mail"))
 let userInvited= false

 //controlla tutti le mail dell'array
 for(let i=0; i<listMail.lenght ; i++)