---
title: JavaScript dom
layout: intro
level: 2
---

# JavaScript DOM
Il Document Object Model

---
title: JavaScript dom
level: 3
---

# Introduzione
JavaScript dom

Il Document Object Model (DOM) è una rappresentazione degli oggetti che costituiscono la struttura e il contenuto di una pagina web.

Ad esempio, il paragrafo sottostante sulla nostra pagina HTML avrebbe un corrispondente oggetto JavaScript a cui possiamo accedere, modificare o rimuovere.

L'oggetto `document` ci offre un modo programmatico per accedere a tutte le proprietà, metodi, elementi ed eventi della nostra pagina web.

```html
<!-- Paragrafo sulla nostra pagina in HTML -->
<p>Questo è un paragrafo</p>

```

---
title: JavaScript dom
level: 3
---

# Introduzione
JavaScript dom

Ad esempio, ecco come potremmo accedere al paragrafo in JavaScript

```html
<!-- Paragrafo sulla nostra pagina in HTML -->
<p>Questo è un paragrafo</p>

```

```js
/* Seleziona tutti i paragrafi sulla pagina */
const paragraphs = document.querySelectorAll("p");

// Il primo paragrafo
console.log(paragraphs[0]);

```

---
title: JavaScript dom
level: 3
---

# Introduzione
JavaScript dom

I principali metodi dom che stiamo esaminando (continua):

```js
/* Ottieni un elemento per id */
const myH1 = document.getElementByID("h1ID");

/* Ottieni elementi per nome di classe */ 
const collectionOfElements = document.getElementById("classname");

/* Ottieni un elemento utilizzando un selettore CSS (puoi utilizzare qualsiasi modello di selettore css qui) */ 
const oneElement = document.querySelector(".container");

/* Seleziona una collezione di elementi che corrispondono al modello di query */
const paragraphs = document.querySelectorAll("p");

/* Seleziona una collezione di elementi che corrispondono al modello di query */
const newParagraph = document.createElement("p");

```

---
title: JavaScript dom
level: 3
---

# Introduzione
JavaScript dom

I principali metodi dom che stiamo esaminando:

```js
/* Aggiungi nodo figlio al genitore */ 
const mainSection = document.getElementById("main");
mainSection.appendChild(newParagraph);

/* Modifica una proprietà di stile */ 
newParagraph.style.transform = "rotate(10deg)";

/* Imposta il contenuto del testo */ 
const myLink = document.getElementById("a");
myLink.textContent = "Questo è un link!";

/* Imposta l'attributo */ 
const myLink = document.getElementById("a");
myLink.setAttribute("href", "#");

```

---
title: JavaScript dom
level: 3
---

# Introduzione
JavaScript dom

I principali metodi dom che stiamo esaminando:

```js
/* Aggiungi nodo figlio al genitore ma come prima cosa nel genitore */ 
const mainSection = document.getElementById("main");
mainSection.prepend(newParagraph);
```
