---
title: Eventi JavaScript
layout: intro
level: 3
---

# Eventi JavaScript
Gestione di tutti i tipi di eventi


---
title: Eventi JavaScript
level: 4
---

# Introduzione 
Eventi JavaScript 

Gli eventi sono azioni che si verificano nel browser a cui è possibile ascoltare e quindi rispondere di conseguenza. Ci sono molti tipi diversi di eventi a cui possiamo ascoltare.

Ad esempio: 

* Quando il browser rileva che una connessione di rete è stata disconnessa 
* Quando la pagina web finisce di caricare 
* Quando viene cliccato un pulsante 
* Quando la finestra del browser viene ridimensionata 
* Quando viene premuto un tasto sulla tastiera 

Possiamo rispondere a eventi specifici aggiungendo un gestore di eventi all'evento. Questo è solitamente sotto forma di una funzione nominata o anonima che viene eseguita quando l'evento viene "sparato". Questo è chiamato "registrazione di un gestore di eventi". 


---
title: Eventi JavaScript
level: 4
---

# Introduzione 
Eventi JavaScript 

Ad esempio, ecco come registriamo una funzione da eseguire quando viene cliccato il pulsante

```html
<!-- Pulsante sulla nostra pagina in HTML -->
<button id="btn-1">Cliccami</button>

```

```js
// Seleziona il pulsante
const btn = document.querySelector("#btn-1");

// Funzione da eseguire 
function buttonHandler(e) {
    console.log("Sono stato cliccato!");
}

// Registra il gestore di eventi sul pulsante
btn.addEventListener("click", buttonHandler);
```



---
title: Eventi JavaScript
level: 4
---

# Altri tipi di eventi 
Eventi JavaScript 

Sebbene guardiamo principalmente agli eventi `click` o `submit`, ci sono tonnellate di diversi tipi di eventi che possiamo registrare e ascoltare. 

Ad esempio gli eventi `dblclick` si verificano quando l'utente fa doppio clic con il mouse. E `mouseover` e `mouseout` possono darci lo stato del mouse dell'utente e se è sopra un elemento specifico. 



---
title: Eventi JavaScript
level: 4
---

# Oggetto evento
Eventi JavaScript 

Un oggetto evento viene passato alla nostra funzione gestore di eventi. La pratica comune è chiamare questo oggetto `e` o `event`.

L'oggetto evento ha un insieme standard di proprietà e metodi disponibili che possono aiutarci a determinare cosa ha innescato l'evento e dove sullo schermo è avvenuto l'evento.  

```js
// Seleziona il pulsante
const btn = document.querySelector("#btn-1");

// Registra il gestore di eventi sul pulsante
btn.addEventListener("click", buttonHandler);

// Funzione da eseguire 
// Nota l'oggetto evento che viene inviato a console.log
function buttonHandler(event) {
    console.log("Oggetto evento", event);
}
```

[Riferimento Oggetto Evento](https://developer.mozilla.org/it/docs/Web/API/Event)



---
title: Eventi JavaScript
level: 4
---

# Eventi e form
Eventi JavaScript 

Le form HTML hanno di default un comportamento associato a loro. E quindi, se stiamo ascoltando e lavorando con eventi relativi alle form HTML, dobbiamo disabilitare il comportamento predefinito del browser. 

Fortunatamente, questo può essere fatto facilmente con una chiamata di funzione. 


```html
<!-- Form sulla nostra pagina in HTML -->
<form id="form-1">...</form>

```

```js
// Seleziona il form
const form = document.querySelector("#form-1");

// Registra il gestore di eventi sul form quando il form viene inviato
form.addEventListener("submit", formHandler);

// Funzione da eseguire 
function formHandler(e) {
    e.preventDefault(); // impedisce al browser di inviare il form
    console.log("Sono stato cliccato!");
}


```


---
title: Eventi JavaScript
level: 4
---

# Event bubbling
Eventi JavaScript 

L'event bubbling descrive come un evento viene passato dal figlio più basso all'albero dei genitori.

Sebbene possa sembrare controintuitivo, considera un `<button>` all'interno di due `div` genitori annidati. Tecnicamente, quando l'utente fa clic sul `<button>`, quel pulsante risiede nei due genitori, e quindi JavaScript invia gli eventi su dom (noto come "bubbling events").



---
title: Eventi JavaScript
level: 4
layout: center
---

<img src="/rete/images/slides/javascript/events/bubbling.png" alt="" />



---
title: Eventi JavaScript
level: 4
---

# Event bubbling
Eventi JavaScript 

Se l'event bubbling sta avendo conseguenze non intenzionali nella tua applicazione, puoi facilmente disattivarlo con il metodo `.stopProrogation()`. 


```js
// Seleziona il pulsante
const btn = document.querySelector("#btn-1");

// Registra il gestore di eventi sul pulsante
btn.addEventListener("click", buttonHandler);

// Funzione da eseguire 
// Nota l'oggetto evento che viene inviato a console.log
function buttonHandler(event) {
    event.stopProrogation(); // Ferma l'evento dal salire ulteriormente
    console.log("Oggetto evento", event);
}
```




---
title: Eventi JavaScript
level: 4
---

# Delegazione di eventi
Eventi JavaScript 

Il seguente pattern ci permette di aggiungere un gestore di eventi e ascoltare tutti gli eventi dei figli. 

Nell'esempio sottostante, alla riga 9, stiamo filtrando tutti i click che non sono stati fatti da elementi `<button>`.

```html
<!-- Pulsante sulla nostra pagina in HTML -->
<ul id="list-1">...</ul>

```

```js
// Seleziona il pulsante
const list = document.querySelector("#list-1");

// Registra il gestore di eventi sul pulsante
list.addEventListener("click", listClickHandler);

// Funzione da eseguire 
function listClickHandler(event) {
    if (event.target.nodeName !== "BUTTON") { 
        return; 
    }
    console.log("Oggetto evento", event.target.nodeName);
}
```