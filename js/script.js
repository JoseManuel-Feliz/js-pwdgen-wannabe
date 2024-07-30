console.log('js ok')

// Raccolta dati dell'utente per generazione password

/* 
1. Recuperare l'elemento con id:password all'interno del DOM.
    1b. Verificare inserito correttamente in console.

2. Chiedere il nome all'utente.
    2a. Verificare che sia stato raccolto ed inserito correttamente in console.

3. Chiedere il cognome all'utente.
    3a. Verificare che sia stato raccolto ed inserito correttamente in console.

4. Chiedere il colore preferito all'utente.
    4a. Verificare che sia stato raccolto ed inserito correttamente in console.

5. Inserire i dati raccolti all'interno dell'elemento con id:password.
*/

/* Fase Preparatoria */

//  1. Recuperare l'elemento con id:password all'interno del DOM.
const passwordElement = document.getElementById('password')
//1b. Verificare inserito correttamente in console.
console.log(password)

/* Raccolta dati */

// 2. Chiedere il nome all'utente.
const nome = prompt('Qual è il tuo nome?', 'Jose');
//2a. Verificare che sia stato raccolto ed inserito correttamente in console.
console.log(nome)

// 3. Chiedere il cognome all'utente.
const cognome = prompt('Qual è il tuo cognome?', 'Feliz');
//3a. Verificare che sia stato raccolto ed inserito correttamente in console.
console.log(cognome)

// 4. Chiedere il colore preferito all'utente.
const colore = prompt('Qual è il tuo colore preferito?', 'Verde');
//4a. Verificare che sia stato raccolto ed inserito correttamente in console.
console.log(nome)
