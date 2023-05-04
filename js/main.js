//Il software deve chiedere per 5 volte all’utente di inserire un numero.
 //Il programma stampa la somma di tutti i numeri inseriti.

 //dichiaro le costanti
 const numeriUtente = [];
 const container = document.getElementById("container");

 //dichiaro la variabile 
let sommaNumeri = 0 ;
console.log(sommaNumeri);

//apro il ciclo for
 for (let i = 1; i <=5; i++){
    let numeriInseriti =  parseInt(prompt("numeri da inserire"));

    numeriUtente.push(numeriInseriti)
    console.log(numeriUtente);

    sommaNumeri= sommaNumeri + numeriInseriti;

}
console.log(sommaNumeri);

//OUTPUT
container.innerHTML = `La somma dei numeri è ${sommaNumeri}`

 
