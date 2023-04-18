// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const arr_nomi = ['GIUSEPPE', 'MARIA', 'ANDREA', 'MARCO', 'FRANCESCO', 'ALESSIO'];
const arr_cognomi = ['MUSSO', 'CERRO', 'FERRERO', 'FASSIO', 'CONTI', 'GALLO'];
const arr_nomi_cognomi = [];

for (let i = 0; i < 10; i++) {
    let nomi_random = Math.floor(Math.random() * arr_nomi.length);
    let cognomi_random = Math.floor(Math.random() * arr_cognomi.length);
    let nomiCognomi = arr_nomi[nomi_random] + " " + arr_cognomi[cognomi_random];
    arr_nomi_cognomi.push(nomiCognomi);
    
    
}
console.log(arr_nomi_cognomi);
