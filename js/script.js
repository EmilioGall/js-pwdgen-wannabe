// DATA COLLECTION

// Name Input

const userName = prompt("Ciao, Utente! Qual è il tuo nome?"); // String

console.log(userName, typeof userName); // ShowInConsoleName Input

// Surname Input

const userSurname = prompt(`Perfetto, ${userName}! E il tuo cognome?`); // String

console.log(userSurname, typeof userSurname); // ShowInConsole SurnameInput

// Color Input

const userColor = prompt(`Ultimo passaggio, ${userName}! Qual è il tuo colore preferito?`); // String

console.log(userColor, typeof userColor); // ShowInConsole ColorInput

// PASSWORD GENERATION

let pswGenerated = `
  ${userName}${userSurname}${userColor}${"21"}
`; // String

// PASSWORD OUTPUT

document.getElementById("psw").innerHTML = pswGenerated;