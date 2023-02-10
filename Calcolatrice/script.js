//Bottoni
const buttons = document.querySelectorAll("button");

//Display
const display = document.getElementById ("risultato_display");

let calculation = []; //array sul display
let calcoloDefinitivo //numero finale su schermo

//funzione per evento
function calcolo (button) {
    const value = button.textContent; //prendi il valore del bottone
        if (value=== "C") { //se clicco su clear
            calculation = []; //l'array si svuota
            display.textContent = "0"; //e il valore dell array quindi dello schermo ritorna nullo
        } else if (value === "=") {
            display.textContent = eval (calcoloDefinitivo);
        } else  {
    calculation.push (value);  //aggiungi il valore del bottone premuto all'array
    calcoloDefinitivo = calculation.join(""); //togli le virgole e metti tutto in una nuova variabile
    display.textContent = calcoloDefinitivo; //trasferisci l'array sullo schermo con virgole
    } 
}

//collegamento pulsanti ad evento
buttons.forEach(button => button.addEventListener("click", () => calcolo(button)));