---
title: logica condizionale javascript
layout: intro
level: 3
---
# logica condizionale javascript
il linguaggio di programmazione che tutti amano e assolutamente odiano


---
title: javascript
level: 4
---

# prendere decisioni in javascript
logica condizionale

* tutti i linguaggi di programmazione forniscono un modo per prendere decisioni e eseguire azioni basate su tali decisioni
* in javascript questo viene fatto attraverso istruzioni condizionali che sono strutture di codice utilizzate per testare se un'espressione restituisce true o no.
* il codice viene quindi eseguito in base ai risultati dell'espressione

```js
// l'istruzione condizionale if...else più basilare
if (condizione) {
// il codice viene eseguito se la condizione è vera
} 
else {
// il codice viene eseguito se la condizione è falsa 
}
```

---
title: javascript
level: 4
---
# esempio di if...else
logica condizionale

* consideriamo un esempio più realistico

```js
// dichiaro le mie variabili
let minutiBusInRitardo = 25;
let haIniziatoACorrere = null;

// l'istruzione condizionale if...else più basilare
if (minutiBusInRitardo > 30) {
  // il codice viene eseguito se la condizione è vera
  haIniziatoACorrere = true;
} 
else {
  // il codice viene eseguito se la condizione è falsa 
  haIniziatoACorrere = false;
}
```

---
title: javascript
level: 4
---

# operatori di confronto
logica condizionale

|operatore|descrizione|
|--------|-----------|
|!=|non uguale a|
|==|uguale a|
|===|strettamente uguale a|
|!==|non strettamente uguale a|
|<|minore di|
|>|maggiore di|
|<=|minore o uguale a|
|>=|maggiore o uguale a|

---
title: javascript
level: 4
---

# operatori di confronto
logica condizionale

* tutti gli operatori di confronto restituiscono un valore booleano
* `true` significa sì, corretto, o "la verità"
* `false` significa no, sbagliato, o "non la verità"

```js
console.log( 10 > 8); // true (corretto)
console.log( 2 == 1); // false (sbagliato)
console.log( 2 != 1); // true (corretto)
console.log( 99 <= 99); // true (corretto)
console.log( 50 <= 100); // false (sbagliato)

```

---
title: javascript
level: 4
class: "border-l-36 border-green-600"

---

# ora provaci tu!
arrays

* apri il tuo file javascript e copia questo codice
* non abbiamo ancora guardato le `funzioni` ma per ora non preoccuparti di quello
* modifica **solo la riga 2** aggiungendo una condizione che controlla se la variabile **`num`** è pari o dispari
* **suggerimento**: cerca su google come calcolare un numero pari con javascript

```js
function iseven(num) {
  if (/* aggiungi qui la tua istruzione condizionale */) {
    console.log("pari");
  }
}

iseven(300); // pari
iseven(55); // (vuoto)
iseven(44); // pari
iseven(99); // (vuoto)
iseven(22); // pari
iseven(2400); // pari

```

---
title: javascript
level: 4
---

# esempio di else if
logica condizionale

* possiamo usare la logica else if per testare una serie di scenari
* l'esempio di codice sottostante sta testando diversi valori di età per determinare il costo che la persona dovrebbe pagare in base alla sua età

```js
let eta = 16;
let costo = null;

if (eta > 18) {
costo = 20;
} else if (eta > 10) {
costo = 10;
} else if (eta > 5) {
costo = 5;
} else {
costo = 0;
}
```

---
title: javascript
level: 4
---

# condizioni annidate
logica condizionale

* possiamo anche testare una condizione in base al risultato di un'altra condizione
* diciamo che volevamo testare che un utente avesse una certa età e provenisse da una certa località

```js
let eta = 19;
let statoOProvincia = "ontario";

if (statoOProvincia === "california") {
  if (eta >= 21) {
    console.log("ciao vegas");
  } else {
    console.log("mi dispiace");
  }
} else if (statoOProvincia === "ontario") {
  if (eta >= 19) {
    console.log("ciao toronto");
  } else {
    console.log("mi dispiace");
  }
}
```

---
title: javascript
level: 4
class: "border-l-36 border-green-600"

---

# ora provaci tu! 
logica condizionale

* apri il tuo file javascript 
* scrivi una logica condizionale per un sistema di valutazione che registra un messaggio in base alla valutazione degli utenti
  
```js
const rating = 4;

/* se la valutazione è 5 */ 
console.log("ottimo lavoro");
/* se la valutazione è 4 */ 
console.log("è davvero meraviglioso");
/* se la valutazione è 3 */ 
console.log("bel lavoro");
/* se la valutazione è 2 */ 
console.log("oh no, è stato un buon tentativo");
/* se la valutazione è 1 */ 
console.log("ehm, quindi questo è imbarazzante");

```

---
title: operatori logici
level: 4
---

# operatori logici
logica condizionale

* ci sono quattro operatori logici in javascript
* `||` o OR
* `&&` e AND
* `!` non NOT
* `??` coalescenza null 



---
title: javascript OR
level: 4
---

# operatori logici - o OR
logica condizionale

* l'operatore `||` o testa due valori o istruzioni condizionali e restituisce true se almeno uno è veritiero

```js
let isloggedin = false;
let islocaluser = true; 

if (isloggedin || islocaluser) {
    console.log("l'utente è locale o ha effettuato l'accesso");
}
else {
    console.log("l'utente non è locale né ha effettuato l'accesso");
}
```


---
title: javascript AND
level: 4
---

# operatori logici - e AND
logica condizionale

* l'operatore `&&` e testa due valori o istruzioni condizionali e restituisce true se entrambi sono veritieri

```js
let isloggedin = false;
let islocaluser = true; 

if ( isloggedin && islocaluser) {
    console.log("l'utente è sia locale che ha effettuato l'accesso");
}
else {
    console.log("l'utente non è locale o non ha effettuato l'accesso, o entrambi");
}
```


---
title: javascript NOT
level: 4
---

# operatori logici - non NOT
logica condizionale

* l'operatore `!` non converte l'operando in un valore booleano e poi restituisce l'opposto

```js
let isloggedin = false;

if (!isloggedin) {
    console.log("l'utente non ha effettuato l'accesso");
}

```

<!-- 

    credit: https://javascript.info/logical-operators

-->



---
title: javascript
level: 4
class: "border-l-36 border-green-600"
---

# ora provaci tu! 
arrays

* apri il tuo file javascript e copia questo codice
* per favore cambia il valore della variabile `mystery` fino a quando il tuo browser dice "ce l'hai fatta" nella console
* **suggerimento**: cerca su google "string indexof" per vedere cosa fa

```js
const mystery = ''; 

if (mystery[0] === 's' && mystery.length > 4 && mystery.indexof('a') !== -1 ){
  console.log("ce l'hai fatta!");
}
else {
  console.log("continua a provare, ce la puoi fare!")
}

```

<!-- 

    credit: 
    
    colt steele
    developer and bootcamp instructor

-->


---
title: javascript
level: 4
---

# istruzione switch
logica condizionale

* l'istruzione switch è equivalente all'annidamento di molteplici istruzioni if

```js
let rating = 3;

switch (rating) {
  case 5: 
    console.log("ben fatto");
    break;
  case 4: 
    console.log("buon lavoro");
    break;
  case 3:
    console.log("va bene così");
    break;
  default:
    console.log("vediamoci dopo");
}

```

<!-- 

    credit: https://javascript.info/logical-operators

-->
