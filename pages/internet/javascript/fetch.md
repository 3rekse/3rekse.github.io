---
title: JavaScript fetch
layout: intro
level: 3
---

# JavaScript Fetch
Recupero dati da API 

---
layout: cover
level: 4

---

### 🧠

Omarillo-2

## Parliamo di due modi per gestire le operazioni asincrone in JavaScript: `fetch` con `then` e `async/await`. 

## Qualcuno di voi ha già utilizzato uno di questi metodi?

---
layout: cover
level: 4

---

### 🧑‍🎓

Studente-3

## Sì, ho usato `fetch` con `then` per fare delle chiamate API, ma non sono molto pratica con `async/await`.

---
layout: cover
level: 4

---

### 🧑‍🎓

Studente-10

## Io ho sentito parlare di `async/await`, ma non l'ho mai usato.

---
layout: cover
level: 4

---

### 🧠

Omarillo-6

## Perfetto, oggi vedremo le differenze tra questi due approcci e quando è preferibile usarne uno rispetto all'altro.

---
layout: cover
level: 4

---

### 🧠

Omarillo-6

## Iniziamo con `fetch` e `then`. Quando usiamo `fetch`, restituisce una promessa che può essere gestita con il metodo `then`. Vediamo un esempio:

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
```

---
layout: cover
level: 4

---

### 🧑‍🎓

Studente-12

## Quindi, ogni volta che la promessa viene risolta, passiamo al `then` successivo?

---
layout: cover
level: 4

---

### 🧠

Omarillo-9

## Esattamente. E se c'è un errore in qualsiasi punto della catena, viene catturato dal blocco `catch`.

---
layout: cover
level: 4

---

### 🧑‍🎓

Studente-11

## Ma questo può diventare complicato se abbiamo molte operazioni asincrone, giusto?

---
layout: cover
level: 4

---

### 🧠

Omarillo-6

### Sì, ed è qui che `async/await` entra in gioco. Utilizzando `async/await`, possiamo rendere il codice più leggibile e simile al codice sincrono. Ecco lo stesso esempio usando `async/await`:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

fetchData();
```

---
layout: cover
level: 4

---

### 🧑‍🎓

Studente-2

## Questo sembra molto più leggibile! 

## Sembra quasi codice sincrono.

---
layout: cover
level: 4

---

### 🧠

Omarillo-1

## Esattamente. Vediamo alcune differenze principali tra i due approcci:

1. **Leggibilità**:
   - **`then`**: Utilizza una catena di promesse, che può diventare difficile da leggere e mantenere con operazioni complesse.
   - **`async/await`**: Fornisce una sintassi più lineare e leggibile, simile al codice sincrono.

---
layout: cover
level: 4

---

### 🧠

Omarillo-2

2. **Gestione degli errori**:
   - **`then`**: Gli errori vengono gestiti utilizzando il metodo `catch`.
   - **`async/await`**: Gli errori vengono gestiti utilizzando il blocco `try/catch`.

---
layout: cover
level: 4

---

### 🧠

Omarillo-3

3. **Sintassi**:
   - **`then`**: Richiede di passare funzioni di callback a `then` e `catch`.
   - **`async/await`**: Utilizza parole chiave `async` e `await`, rendendo il codice più conciso.

---
layout: cover
level: 4

---

### 🧑‍🎓

Studente-8

## Quindi, `async/await` è generalmente preferito per la sua leggibilità e semplicità, specialmente con operazioni asincrone complesse?

---
layout: cover
level: 4

---

### 🧠

Omarillo-6

## Esattamente. Tuttavia, entrambi gli approcci sono validi e possono essere utilizzati a seconda delle necessità del progetto.

---
layout: cover
level: 4

---

### 🧑‍🎓

Studente-6

## Posso chiedere quando sarebbe preferibile usare `then` invece di `async/await`?

---
layout: cover
level: 4

---

### 🧠

Omarillo-6

## Ottima domanda. `then` può essere utile quando stai lavorando con librerie o framework che già utilizzano molte promesse o quando stai facendo operazioni semplici e non vuoi usare funzioni asincrone. Tuttavia, per operazioni più complesse, `async/await` è generalmente la scelta migliore.

---
layout: cover
level: 4

---

### 🧑‍🎓

Studente-4

## Grazie, Omarillo! Questo rende tutto molto più chiaro.

---
layout: cover
level: 4

---

### 🧠

Omarillo-6

## Di nulla! Ricordatevi che la pratica è fondamentale. Provate a usare entrambi gli approcci nei vostri progetti per vedere quale funziona meglio per voi. Alla prossima lezione!

---
title: JavaScript fetch
level: 4
---

# Introduzione 
JavaScript fetch 

Il metodo `fetch()` fornisce un modo semplice per gli sviluppatori JavaScript di ottenere dati in modo asincrono. `fetch()` restituisce una Promise. 

```js
// Indirizzo dell'API 
const API_URL = "https://pokeapi.co/api/v2/pokemon/8"

// Esecuzione del metodo fetch
fetch(API_URL);

```

---
title: JavaScript fetch
level: 4
---

# Introduzione 
JavaScript fetch 

Poiché `fetch()` restituisce una Promise, dobbiamo usare il metodo `then()` per gestire una risoluzione di successo.

```js
// Indirizzo dell'API 
const API_URL = "https://pokeapi.co/api/v2/pokemon/8"

// Esecuzione del metodo fetch
fetch(API_URL)
    .then((result) => {
        // Gestisci la risposta
    })

```


---
title: JavaScript fetch
level: 4
---

# Introduzione 
JavaScript fetch 

Poiché `fetch()` restituisce una Promise, dobbiamo usare il metodo `catch()` per gestire eventuali situazioni di errore.

```js
// Indirizzo dell'API 
const API_URL = "https://pokeapi.co/api/v2/pokemon/8"

// Esecuzione del metodo fetch
fetch(API_URL)
    .then((response) => {
        // Gestisci la risposta
    })
    .catch((response) => {
        // Ops, qualcosa è andato storto
    });

```



---
title: JavaScript fetch
level: 4
---

# Introduzione 
JavaScript fetch 

`fetch()` ha due passaggi per accedere ai dati della risposta. 

Il primo passaggio invia la richiesta. Nel secondo passaggio dobbiamo "disimballare" la risposta usando il metodo `json()` (supponendo che l'API ci stia inviando dati in formato JSON).

```js
// Indirizzo dell'API 
const API_URL = "https://pokeapi.co/api/v2/pokemon/8"

// Esecuzione del metodo fetch
fetch(API_URL)
    .then((response) => {
        // Dobbiamo "disimballare" l'oggetto di risposta usando il metodo json()
        return response.json();
    });
```



---
title: JavaScript fetch
level: 4
---

# Introduzione 
JavaScript fetch 

Infine, gestiamo il risultato di quella seconda Promise e finalmente abbiamo accesso ai dati che sono tornati dall'API.

```js
// Indirizzo dell'API 
const API_URL = "https://pokeapi.co/api/v2/pokemon/8"

// Esecuzione del metodo fetch
fetch(API_URL)
    .then((response) => {
        // Dobbiamo "disimballare" l'oggetto di risposta usando il metodo json()
        return response.json();
    })
    .then((data) => {
        console.log("Dati da fetch", data);
    })
```


---
title: JavaScript fetch
level: 4
---

# Introduzione 
JavaScript fetch 

Aggiungiamo quindi il nostro metodo `catch()` per gestire eventuali errori che potrebbero essere occorsi

```js
// Indirizzo dell'API 
const API_URL = "https://pokeapi.co/api/v2/pokemon/8"

// Esecuzione del metodo fetch
fetch(API_URL)
    .then((response) => {
        // Dobbiamo "disimballare" l'oggetto di risposta usando il metodo json()
        return response.json();
    })
    .then((data) => {
        console.log("Dati da fetch", data);
    })
    .catch((response) => {
        // Ops, qualcosa è andato storto
        console.log("ERRORE");
    });
```


---
title: JavaScript fetch
level: 4
---

# Async e await 
JavaScript fetch 

Un altro modo per usare `fetch()` senza il metodo `then()` è usare le parole chiave async e await

```js
// Indirizzo dell'API 
const API_URL = "https://pokeapi.co/api/v2/pokemon/8"

// La funzione che ha await al suo interno DEVE avere la parola chiave async 
async function fetchPokemon() {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Dati da fetch usando async await", data);
}

// Esegui la funzione async
fetchPokemon(); 
```


---
title: JavaScript fetch
level: 4
---

# Gestione degli errori con async await
JavaScript fetch 

Poiché non abbiamo un metodo `catch()` con async await, dobbiamo usare un modo diverso per coprire la gestione degli errori

```js
// Indirizzo dell'API 
const API_URL = "https://pokeapi.co/api/v2/pokemon/8"

// La funzione che ha await al suo interno DEVE avere la parola chiave async 
async function fetchPokemon() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Dati da fetch usando async await", data);
    }
    catch(error) {
        console.log("Si è verificato un errore: ", error);
    }  
}
// Esegui la funzione async
fetchPokemon(); 
```
