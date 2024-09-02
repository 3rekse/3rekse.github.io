---
title: Promesse JavaScript
layout: intro
level: 3
---

# Promesse JavaScript
Fare due cose contemporaneamente in JavaScript


---
title: Promesse JavaScript
level: 4
---

# Introduzione 
Promesse JavaScript 

Le promesse sono come un contratto, ma in JavaScript. 

JavaScript è, di default, single threaded, quindi tutto il nostro codice viene eseguito in sequenza, una riga dopo l'altra. 

Sfortunatamente, se una riga di codice, o una funzione per esempio, impiega troppo tempo per essere eseguita, la nostra applicazione si bloccherebbe, e si fermerebbe ad aspettare fino a quando quella riga ha completato la sua operazione. 

Questo creerebbe un'esperienza utente orribile - immagina se la tua app si bloccasse completamente ogni volta che doveva recuperare dati o eseguire un calcolo complicato. 

Entrano in gioco le Promesse. Le promesse sono un modo per gestire le operazioni asincrone in JavaScript.

Possiamo inserire codice che potrebbe impiegare molto tempo per essere eseguito in una Promessa, e poi essere notificati da JavaScript quando quella Promessa ha completato l'esecuzione (risolta).



---
title: Promesse JavaScript
level: 4
---

# I quattro diversi stati di una Promessa 
Promesse JavaScript 

* **fulfilled**: L'azione relativa alla promessa è riuscita
* **rejected**: L'azione relativa alla promessa è fallita
* **pending**: La promessa è ancora in attesa, cioè non è ancora né risolta né rifiutata
* **settled**: La promessa è stata risolta o rifiutata




---
title: Promesse JavaScript
level: 4
---

# Configurazione della nostra prima promessa
Promesse JavaScript 

Per esempio, ecco come impostiamo una promessa e identifichiamo i valori risolti e rifiutati


```js
// Creare una promessa utilizzando l'oggetto Promise
const myFirstPromise = new Promise((resolve, reject) => {
    // Impostare un massimo per il nostro numero casuale 
    const MAX = 10;
    // Restituisce un numero casuale da 0 a MAX
    const random = Math.floor(Math.random() * 10);
    // Controlla se il valore del numero casuale è maggiore di 5
    if (random > 5) {
        // Successo!
        resolve("Evviva");
    }
    else {
        // Non così riuscito
        reject("Non abbastanza alto");
    }
});
```



---
title: Promesse JavaScript
level: 4
---

# Consumare la nostra promessa
Promesse JavaScript 

Ecco come eseguiamo la nostra promessa, e gestiamo un caso risolto con successo

```js
// Eseguiamo la promessa utilizzando il metodo "then"
// e passiamo una funzione per gestire la risposta
myFirstPromise
    .then((result) => {
        console.log("Risposta risolta dalla Promessa: " , result);
});

// Puoi chiamare la variabile argomento risultato come preferisci - questo funziona
myFirstPromise
    .then((message) => {
        console.log("Risposta risolta dalla Promessa: " , message);
});
```

---
title: Promesse JavaScript
level: 4
---

# Consumare la nostra promessa
Promesse JavaScript 

Ecco come usiamo un metodo catch per gestire uno stato rifiutato dalla nostra promessa

```js
// Eseguiamo la promessa utilizzando il metodo "then"
// e passiamo una funzione per gestire la risposta
myFirstPromise
    .then((result) => {
        console.log("Risposta risolta dalla Promessa: " , result);
    })
    .catch((result) => {
        console.log("Risposta rifiutata dalla Promessa: " , result);
    });


```




---
title: Promesse JavaScript
level: 4
---

# Consumare la nostra promessa
Promesse JavaScript 

Ecco come usiamo il metodo finally per eseguire del codice dopo che la nostra promessa è stata risolta o rifiutata

```js
// Eseguiamo la promessa utilizzando il metodo "then"
// e passiamo una funzione per gestire la risposta
myFirstPromise
    .then((result) => {
        console.log("Risposta risolta dalla Promessa: " , result);
    })
    .catch((result) => {
        console.log("Risposta rifiutata dalla Promessa: " , result);
    });
    .finally(() => {
        console.log("La Promessa ha finalmente completato");
    });


```



---
title: Promesse JavaScript
level: 4
---

# Attendere più promesse 
Promesse JavaScript 

E se avessimo più Promesse che dobbiamo eseguire e attendere prima di fare qualcosa. Nessun problema. Impostiamo tre promesse. 

```js
const myFirstPromise = new Promise((resolve,reject) => {
    resolve("Risposta risolta della mia Prima Promessa");
})

const mySecondPromise = new Promise((resolve,reject) => {
    resolve("Risposta risolta della mia Seconda Promessa");
})

const myThirdPromise = new Promise((resolve,reject) => {
    resolve("Risposta risolta della mia Terza Promessa");
})

```



---
title: Promesse JavaScript
level: 4
---

# Attendere più promesse 
Promesse JavaScript 

E se avessimo più Promesse che dobbiamo eseguire e attendere prima di fare qualcosa. Nessun problema. Impostiamo tre promesse. 

```js
// Questo aspetterà che tutte le promesse siano eseguite
Promise.all([
    myFirstPromise,
    mySecondPromise,
    myThirdPromise
])
    .then((results) => {
        // Otteniamo un array di tutte le risposte risolte
        console.log(results)
    })

```