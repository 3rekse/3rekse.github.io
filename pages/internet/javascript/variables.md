---
title: Variabili JavaScript
layout: intro
level: 2
---

# Variabili JavaScript

3 concetti fondamentali della programmazione in JavaScript:

1. **Primitivi:** In JavaScript, un tipo di dato primitivo è un dato che non ha metodi o proprietà (ad esempio, numeri, stringhe, booleani, null, undefined e simboli). Questi sono i blocchi di costruzione fondamentali dei programmi JavaScript.

2. **Oggetti letterali:** Un oggetto letterale è un modo per definire un oggetto in JavaScript. È un elenco di coppie chiave-valore racchiuso tra parentesi graffe. Ad esempio: `let auto = {marca: "Fiat", modello: "500", anno: 2008};`

3. **Variabili:** Le variabili sono contenitori per memorizzare valori di dati. In JavaScript.

IMPORTANTE: acquisire una comprensione di questi concetti e come utilizzarli nella programmazione JavaScript.

---
title: JavaScript
level: 3
---

# Lavorare con le variabili
Variabili

Ci sono tre modi per dichiarare una variabile `var`, `let` e `const`.

```js
/* NON USARE MAI VAR */ 
var miaPrimaVariabile = "Ciao";

/* Poi abbiamo let */ 
let miaSecondaVariabile = "Mondo";

/* E infine abbiamo const - per variabili che devono essere costanti */ 
const miaVariabileConst = true;

```

---
title: L'uso di `var`
level: 3
---

# L'uso di `var` per dichiarare variabili è sconsigliato per diversi motivi:

1. **Ambito di funzione:** A differenza di `let` e `const`, `var` è soggetto all'hoisting e ha un ambito di funzione piuttosto che un ambito di blocco. Questo può portare a comportamenti inaspettati.

2. **Riassegnazione involontaria:** Se dichiari la stessa variabile più volte usando `var`, non otterrai un errore. Questo può portare a bug difficili da individuare.

3. **Non comunicano l'intenzione:** `let` e `const` comunicano meglio l'intenzione del codice. `const` indica che una variabile non dovrebbe essere riassegnata, mentre `let` indica che una variabile potrebbe essere riassegnata in futuro.

---
title: Esempio con uso di `var`
level: 3
---

# Ecco un esempio di come `var` può comportarsi in modo inaspettato:

```javascript
function esempio() {
  var x = 1; // x è ora 1

  if (true) {
    var x = 2; // x è ora 2
    console.log(x); // Stampa 2
  }

  console.log(x); // Stampa anche 2, non 1
}

esempio();
```

In questo esempio, potresti aspettarti che il secondo `console.log(x)` stampi `1`, ma invece stampa `2` perché `var` ha un ambito di funzione, non un ambito di blocco. Se avessi usato `let` al posto di `var`, avrebbe stampato `1` come previsto.

---
title: Tante Variabili
level: 3
---

# Tante Variabili 
Variabili

* String 
* Number 
* BigInt
* Boolean
* Null 
* Undefined
* Object 
* Symbol



---
title: JavaScript
level: 3
---

# String
Variabili

Il tipo String viene utilizzato per memorizzare dati di testo o una sequenza di caratteri.

```js
    // Questa è una stringa 
    // Nota le virgolette attorno al valore
    let messaggioUno = "Ciao Mondo";

    // Anche le virgolette singole funzionano
    let messaggioDue = 'Ciao Mondo';

```



---
title: JavaScript
level: 3
---

# Number
Variabili JavaScript

Come suggerisce il nome, puoi memorizzare valori numerici in un numero. 

```js
// questo è un numero
let numeroDiElefanti = 33;

// La console visualizzerà 33
console.log(numeroDiElefanti);

```

---
title: JavaScript
level: 3
---

# Number
Variabili JavaScript

Questo è il valore numerico più grande che può essere memorizzato in modo sicuro in un `number` 9007199254740991.

Se pensi che la tua app avrà bisogno di memorizzare un numero più grande, dovresti utilizzare un `BigInt`.

```js
// questo è un numero
let numeroDiElefanti = 9007199254740991;

// La console visualizzerà 9007199254740991
console.log(numeroDiElefanti);

// Questo valore proviene dall'oggetto number 
Number.MAX_SAFE_INTEGER; // 9007199254740991

```


---
title: JavaScript
level: 3
---

# BigInt
Variabili

Questo è il valore numerico più grande che può essere memorizzato in un `number` 9007199254740991. 

Se pensi che la tua app avrà bisogno di memorizzare un numero più grande, dovresti utilizzare un `BigInt`.

```js
    // questo è come usiamo un BigInt
    let numeroDiElefanti = BigInt(9007199254740992);

```



---
title: JavaScript
level: 3
---

# Boolean
Variabili

I booleani possono essere impostati su `true` o `false`.

Sebbene tu possa dare quasi qualsiasi nome alle tue variabili (ci sono alcune regole che JS applica), quando si tratta di valori `Boolean`, dovresti cercare di dare un nome alle tue variabili con un prefisso `is`. 

Per esempio, `isEnabled`, `isPaidFor`, `isUserLoggedIn`. Inoltre, evita nomi negativi, come `isNotActive` o `isNotDone` in quanto possono causare grande confusione durante la lettura del codice. 

```js
    // questo è un booleano
    let isElephantPresent = false;

    // La console visualizzerà false
    console.log(isElephantPresent);
```



---
title: JavaScript
level: 3
---

# Null
Variabili

Questo è un valore assegnato che significa nulla, niente. 

Usiamo generalmente questo valore per impostare una variabile e segnalare che nulla è impostato nella variabile ancora. 

```js
    // questo è un valore null
    let numElefanti = null;

    // La console visualizzerà null
    console.log(numElefanti);
```



---
title: JavaScript
level: 3
---

# Undefined
Variabili

Il valore `undefined` viene impostato su una variabile prima che un valore effettivo venga fornito alla variabile.

```js
    // Oops - dichiarato una variabile ma non l'ho impostata su nulla
    let numElefanti;

    // La console visualizzerà undefined
    console.log(numElefanti); 
```



---
title: JavaScript
level: 3
---

# Oggetti letterali
Variabili

Gli oggetti letterali in JavaScript sono una raccolta di coppie nome e valore. 

Il seguente è un esempio molto semplice di un oggetto letterale, anche se possono diventare molto complessi. 

```js
    // Dichiarare un oggetto letterale
    const elefante = {
        nome: "Jimbo",
        eta: 200,
        isSposato: false,
    };

    // Accedere all'intero oggetto letterale 
    console.log(elefante)

    // Accedere a una proprietà utilizzando la notazione a punto e qualcosa chiamato chaining 
    console.log(elefante.nome)

    // Accedere a una proprietà utilizzando la notazione a punto e qualcosa chiamato chaining 
    console.log(elefante.eta)

```


---
title: JavaScript
level: 3
class: "border-l-36 border-green-600"
---

# Ora provaci tu! 
Variabili

* Apri il tuo file JavaScript
* Digita questo codice e controlla il messaggio della console del browser

```js
    // Dichiarare una variabile stipendio 
    let stipendio = 33; 

    // Dichiarare un altro valore 
    let bonus = 22;

    // Manipolare lo stipendio aggiungendo il bonus ad esso 
    stipendio = stipendio + bonus; 

    // Console log il contenuto della variabile 
    console.log("Lo stipendio aggiornato è impostato su", stipendio);

```


---
title: JavaScript
level: 3
class: "border-l-36 border-green-600"
---

# Ora provaci tu! 
Variabili

* Apri il tuo file JavaScript
* Digita questo codice e controlla il messaggio della console del browser
* Cerca di capire come aggiungere uno spazio nel tuo console log per separare i due messaggi

```js
    // Dichiarare l'inizio del messaggio
    let inizioMessaggio = "Ciao come stai?"; 

    // Dichiarare la fine del messaggio
    let fineMessaggio = "Cosa stai facendo?";

    // Aggiungi entrambe le stringhe e visualizza usando il console log
    console.log(inizioMessaggio + fineMessaggio);

    // Aggiungi uno spazio per separare i due messaggi?

```


---
title: JavaScript
level: 3
class: "border-l-36 border-green-600"
---

# Ora provaci tu! 
Variabili

* Apri il tuo file JavaScript
* Digita questo codice 
* Definisci una `const` chiamata `puntoDiEbollizione` e impostala su `100`
* Esegui questo codice nel tuo browser e controlla il messaggio della console del browser

```js
    // Dichiarare una const e impostarla su 100

    // Prova ad assegnare alla const un nuovo valore
    puntoDiEbollizione = 105;
 
    // Aggiungi entrambe le stringhe e visualizza usando il console log
    console.log("Il punto di ebollizione è:" , puntoDiEbollizione);

```


---
title: JavaScript
level: 3
class: "border-l-36 border-green-600"
---

# Ora provaci tu! 
Variabili

* Okay questa è subdola
* Apri il tuo file JavaScript
* Definisci una variabile costante chiamata `citazione` e metti una `stringa` nella variabile 
* Imposta il valore della stringa su `Mi hai avuto a "Ciao"` (nota le virgolette doppie incluse)
* Console log la variabile `citazione`

```js
    // Dichiarare una const e impostarla su - Mi hai avuto a "Ciao"
    const citazione = ; // AGGIUNGI CODICE QUI
 
    // Aggiungi poi visualizza usando il console log
    console.log(citazione);

```
---
title: JavaScript
level: 3
class: "border-l-36 border-green-600"
---

# Ora provaci tu! 
Variabili
 
* Crea un oggetto letterale chiamato `prodotto` e aggiungi le seguenti proprietà 
    * `prezzo` impostato a `4.99`
    * `nome` impostato a `Nacho Cheese Doritos`
    * `èInMagazzino` impostato a `true`
* Console log della variabile `prodotto`

```js

    // Dichiarare una const chiamata prodotto
    // Imposta le seguenti proprietà 
    //   prezzo a 4.99 (Number)
    //   nome a Nacho Cheese Doritos (String)
    //   èInMagazzino a true (Boolean)
    const prodotto = {}; 
 
    // Aggiungi poi visualizza usando il console log
    console.log(prodotto);

```


---
title: JavaScript
level: 3
---

# Template literals 
Variabili

I template literal (noti anche come stringhe di template) sono racchiusi da backticks [ ` ] e non da virgolette.

All'interno dei template literal sei in grado di eseguire espressioni utilizzando la notazione `${...}`.

```js
    // Dichiarare una const chiamata prezzo e impostarla
    const prezzo = 4.99; 

    // Dichiarare una const chiamata quantità e impostarla
    const quantità = 7 
 
    // Console log visualizzerà - Puoi comprare 7 elefanti per $34.93
    console.log(`Puoi comprare ${quantità} elefanti per $${prezzo * quantità}`);

    // Nota i due segni del dollaro - il primo è solo il normale segno del dollaro
    //  e il secondo attiva l'espressione all'interno delle parentesi graffe

```



---
title: JavaScript
level: 3
class: "border-l-36 border-green-600"
---

# Ora provaci tu! 
Variabili

* Pratichiamo l'uso di un template literal 
* Ho creato tre variabili che dovrai fare riferimento
* Utilizzando i template literal e il console log, visualizza il seguente facendo riferimento alle tre variabili 
* `Il mio numero di telefono è (613) 825-6849`

```js
    // Dichiarare alcuni attributi 
    let prefissoArea = 613;
    let prefissoTelefono = 825;
    let numeroLinea = 6849;
 
    // Usa un template literal di stringa 
    // per visualizzare: "Il mio numero di telefono è (613) 825-6849"
    console.log(`INSERISCI_IL_TUO_CODICE_QUI`);

```