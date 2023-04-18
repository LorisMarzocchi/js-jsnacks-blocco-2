// 1) snack 1.5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

arr_vuoto_dispari = [];
arr_vuoto_pari = [];
for (i = 0; i < 6; i++){
    
    const valoreUtente = parseInt(prompt('inserisci il primo numero: '));
    
    if(valoreUtente % 2 !== 0){
    
        arr_vuoto_dispari.push(valoreUtente);
        // console.log('numero dispari')
    
    }
    if(valoreUtente % 2 == 0){
    
        arr_vuoto_pari.push(valoreUtente);
        // console.log('numero pari')
    
        
    }
}
console.log('array dispari: ' + arr_vuoto_dispari);
console.log('array pari: ' + arr_vuoto_pari);
