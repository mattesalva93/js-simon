//funzione che crea un array di numeri tra 0 e 100 tanti quanti valore aspettato, 
function randomNumbers (quantita){
    let elencoNumeri = [];

    while( elencoNumeri.length < quantita ){
            let numero = Math.floor( Math.random()*100);
            if ( !elencoNumeri.includes( numero ) ){
                elencoNumeri.push( numero );
            }
    }
    return elencoNumeri
} 
//funzione che verifica se un numero presentato è contenuto nell'array presentato
function controllaArray (array1, array2){
    let totale = 0;
    for (i=0; i < array1.length; i++){
        if (array1[i] != array2[i]){
            console.log("ahi ahi toppai");
        }else{
            totale++;
        }
    }
    return totale;
}
//funzione che richiede all'utente di inserire un valore tramite prompt in base al numero presentato
function interrogaUtente (volte){
    let numeriInseriti = [];
    
    while (numeriInseriti.length < volte){
        let inputUtente = parseInt(prompt("Inserisci uno dei numeri comparsi!"))
        numeriInseriti.push(inputUtente);
    }
    return numeriInseriti
}


let numeriGenerati = randomNumbers(5);
console.log(numeriGenerati);
//console.log(controllaArray(numeriGenerati, inputNumeriUtente));


let secondi = 10;
const tempoRimanente = document.getElementById("timer");
tempoRimanente.innerHTML = secondi;

let timer = setInterval(function(){
    secondi--;
    if (secondi == 0){
        clearInterval(timer);
        tempoRimanente.innerHTML = "Tempo scaduto!";
        let inputNumeriUtente = interrogaUtente(5);
        console.log(inputNumeriUtente);

    }else{
        tempoRimanente.innerHTML = secondi;
    }
}, 1000);

function partita(){

}