---
title: JavaScript fetch
layout: intro
level: 2
---

# JavaScript Fetch
Recupero dati da API 


---
title: JavaScript fetch
level: 3
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
level: 3
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
level: 3
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
level: 3
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
level: 3
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
level: 3
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
level: 3
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
level: 3
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