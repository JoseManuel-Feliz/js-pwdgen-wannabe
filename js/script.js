console.log('js ok')

// Raccolta dati dell'utente per generazione password

/* 
1. Recuperare l'elemento con id:password all'interno del DOM.
    1b. Verificare che sia stato inserito correttamente in console.
2. Creazione messaggio
    2b. Verificare che sia stato inserito correttamente in console.

3. Chiedere il nome all'utente.
    3a. Verificare che sia stato raccolto ed inserito correttamente in console.

4. Chiedere il cognome all'utente.
    4a. Verificare che sia stato raccolto ed inserito correttamente in console.

5. Chiedere il colore preferito all'utente.
    5a. Verificare che sia stato raccolto ed inserito correttamente in console.

6. Inserimento elemento per fortificare la password.
    6b. Verificare che sia stato inserito correttamente in console.

7. Unificazione dei dati per generazione password.
    7b. Verificare  che siano stati inseriti correttamente in console.
 

8. Inserire i dati raccolti all'interno del DOM.
    8b. Verificare inserito correttamente in console e nel DOM.

*/

/* Fase Preparatoria */

//  1. Recuperare l'elemento con id:password all'interno del DOM.
const passwordElement = document.getElementById('password')
//1b. Verificare che sia stato inserito correttamente in console.
console.log(password)
//2. Creazione messaggio
const message = 'Your password is:'
//2a. Verificare che sia stato inserito correttamente in console.
console.log(message)

/* Raccolta dati */

// 3. Chiedere il nome all'utente.
const nome = prompt('Qual è il tuo nome?', 'Josè');
//3a. Verificare che sia stato raccolto ed inserito correttamente in console.
console.log(nome, typeof nome)

// 4. Chiedere il cognome all'utente.
const cognome = prompt('Qual è il tuo cognome?', 'Feliz');
//4a. Verificare che sia stato raccolto ed inserito correttamente in console.
console.log(cognome, typeof cognome)

// 5. Chiedere il colore preferito all'utente.
const colore = prompt('Qual è il tuo colore preferito?', 'Verde');
//5a. Verificare che sia stato raccolto ed inserito correttamente in console.
console.log(colore, typeof colore)

// 6. Inserimento di elemento per fortificare la password
const strongpass = 21
//6b. Verificare inserito correttamente in console.
console.log(strongpass, typeof strongpass)

/* Fase elaborazione dati */

// 7. Unificazione dei dati per generazione password
const genpassword = ' ' + nome + cognome + colore + strongpass
//7b. Verificare  che siano stati inserito correttamente in console.
console.log(genpassword)

/* Fase di Output */

//8. Inserire i dati raccolti all'interno del DOM.
passwordElement.innerHTML = `<strong>${message}</strong>` + genpassword;
//8b. Verificare che sia stato inserito correttamente in console e nel DOM.
console.log(`<strong>${message}</strong>` + genpassword)