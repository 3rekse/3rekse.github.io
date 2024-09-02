---
title: Funzioni JavaScript
layout: intro
level: 3
---

# Funzioni JavaScript
I mattoni fondamentali di JavaScript


---
title: JavaScript
level: 4
layout: center
---

Mantenere le cose DRY

* **D**o not
* **R**epeat
* **Y**ourself



---
title: JavaScript
level: 4
---

# Diciamo che abbiamo un array di età
Funzioni

* Abbiamo un array di età e vogliamo sapere se possono consumare alcol a Las Vegas
* Se Las Vegas cambia mai l'età minima, o se cambiamo il nostro array, questo codice sarà super fastidioso da mantenere

```js
let listOfAges = [12, 34, 28, 21, 44, 90, 18, 20, 25];

if ( listOfAges[0] >= 21) {
  console.log('L\'età all\'indice 0 è maggiore')
}

if ( listOfAges[1] >= 21) {
  console.log('L\'età all\'indice 1 è maggiore')
}

if ( listOfAges[2] >= 21) {
  console.log('L\'età all\'indice 2 è maggiore')
}

...

```



---
title: JavaScript
level: 4
---

# Aggiungiamo una funzione per fare il controllo dell'età
Funzioni

* Possiamo semplificare questo codice creando e aggiungendo una funzione per fare il nostro controllo

```js
let listOfAges = [12, 34, 28, 21, 44, 90, 18, 20, 25];

function canConsumeAlcoholInVegas(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

if (canConsumeAlcoholInVegas(listOfAges[0])) {
  console.log('L\'età all\'indice 0 è maggiore')
}

if (canConsumeAlcoholInVegas(listOfAges[1])) {
  console.log('L\'età all\'indice 1 è maggiore')
}
...
```


---
title: JavaScript
level: 4
---

# Infine, possiamo migliorare questo ancora di più con un ciclo for
Funzioni

* Possiamo ulteriormente semplificare questo codice aggiungendo un ciclo for

```js
let listOfAges = [12, 34, 28, 21, 44, 90, 18, 20, 25];

function canConsumeAlcoholInVegas(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i <= listOfAges.length; i++) {
  if (canConsumeAlcoholInVegas(listOfAges[i])) {
    console.log(`L'età all'indice ${i} è maggiore`);
  }
}
```



---
title: JavaScript
level: 4
---

# Anatomia di una funzione
Funzioni

* Le funzioni consistono in tre elementi:
* La parola chiave function e il nome della funzione
* I parametri che vengono passati alla funzione, separati da virgole
* Il blocco di codice che viene eseguito racchiuso tra parentesi graffe

```js

function canConsumeAlcoholInVegas(age) {
    if (age >= 21) {
        return = true;
    } else {
        return = false; 
    }
}

console.log(canConsumeAlcoholInVegas(25)); // true

```

---
title: JavaScript
level: 4
---

# Variabili locali
Funzioni

* Le variabili di funzione sono "scoped", quindi le variabili locali non saranno disponibili al di fuori della funzione 
* Nell'esempio sottostante, quando proviamo a leggere `allowed` JavaScript lancerà un errore

```js

function canConsumeAlcoholInVegas(age) {
  let allowed = null; 
    
  if (age >= 21) {
    allowed = true;
  } else {
    allowed = false; 
  }
  return allowed
}

console.log(allowed); // Errore!

```



---
title: JavaScript
level: 4
---

# Variabili esterne
Funzioni

* Le variabili dichiarate al di fuori di una funzione (nel genitore diretto) sono rese disponibili alla funzione 
* Nell'esempio sottostante, 

```js
let age = 21;

function canConsumeAlcoholInVegas() {
    let allowed = null;
    
    if (age >= 21) {
        
        allowed = true;
    } else {
        allowed = false; 
    }
    return allowed
}

console.log(canConsumeAlcoholInVegas()); // vero!

```



---
title: JavaScript
level: 4
class: "border-l-36 border-green-600"
---

# Ora provate voi! 
Basics

* Apri il tuo file JavaScript e copia questo codice 
* C'è una variabile esterna chiamata `age` (21) e una variabile interna chiamata `age` (16)
* Prova a indovinare quale variabile `age` verrà utilizzata e quale sarà l'output nella console

```js
let age = 21;

function canConsumeAlcoholInVegas() {
  let age = 16

  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

console.log(canVisitVegas()); // ????
```



---
title: JavaScript
level: 4
---

# Una parola sulle variabili globali
Funzioni

* Le variabili dichiarate al di fuori di una funzione sono chiamate variabili "globali" e hanno uno scope globale 
* Questo significa che sono visibili da qualsiasi funzione, il che è considerato una cattiva pratica 
* Ora che lo sai, una pratica molto migliore è mettere tutta la tua logica e le tue variabili all'interno di una funzione 



---
title: JavaScript
level: 4
---

# Parametri della funzione 
Funzioni

* Possiamo passare un qualsiasi numero di parametri alla funzione
* L'ordine dei parametri è estremamente importante quando si chiama la funzione

```js
function displayTodoItem(title, done) {
    console.log(`ToDo Titolo: ${title}, Todo Stato Fatto: ${done}`)
}

displayTodoItem("Compra la spesa", false);
displayTodoItem("Ordina Uber Eats", true);
displayTodoItem("Chiama mamma", false);
displayTodoItem("Presenta le tasse", false);

```



---
title: JavaScript
level: 4
---

# Impostazione dei parametri predefiniti 
Funzioni


* Possiamo impostare il parametro `done` per avere un valore predefinito di `false` quindi se qualcuno chiama la funzione con un solo parametro possiamo impostare `done` su `false`

```js
function displayTodoItem(title, done = false) {
  console.log(`ToDo Titolo: ${title}, Todo Stato Fatto: ${done}`)
}

displayTodoItem("Compra la spesa");
displayTodoItem("Ordina Uber Eats");
displayTodoItem("Chiama mamma");
displayTodoItem("Presenta le tasse");

```


---
title: JavaScript
level: 4
---

# Controllo dei parametri
Funzioni


* Ecco un altro modo per controllare i parametri in arrivo

```js
function displayTodoItem(title, done) {
  // Controlla il valore di done prima di usarlo nel console.log
  if (done === undefined) {
    done = false;
  }
  console.log(`ToDo Titolo: ${title}, Todo Stato Fatto: ${done}`)
}

displayTodoItem("Compra la spesa");
displayTodoItem("Ordina Uber Eats");
displayTodoItem("Chiama mamma");
displayTodoItem("Presenta le tasse");

```




---
title: JavaScript
level: 4
---

# Restituire valori
Funzioni


* Una funzione può restituire un valore al codice chiamante come risultato.

```js
function addNumbers(a, b) {
  return (a+b);
}

let result = addNumbers(300,400);

console.log(result);
```


---
title: JavaScript
level: 4
class: "border-l-36 border-green-600"
---

# Ora provate voi!
Funzioni

* Aggiungi codice al `screamMessage` sotto che cicla per il numero di volte definito da count 
* Per ogni ciclo, rendi il `message` fornito completamente maiuscolo 
* Quindi il tuo codice sotto risulterebbe in "NON MI PIACE IL ROSA CALDO" (x3) e 
"NON VOGLIO PRESENTARE LE MIE TASSE" (x5)
* Suggerimento: i metodi stringa toUpperCase sono i tuoi amici 

```js
function screamMessage(count, message) {
    // Aggiungi la tua logica qui
}

console.log(screamMessage(3,"Non mi piace il rosa caldo"));
console.log(screamMessage(5,"Non voglio presentare le mie tasse"));

```