---
title: Basi di javascript
layout: intro
level: 2
---

# javascript
il linguaggio di programmazione che tutti amano e odiano assolutamente


---
title: javascript
level: 3
---

# come eseguire il codice javascript
fondamentali

esecuzione del codice nel tag `head`. meh. 

```html
<html>
  <head>
    ...
    <script>
      /* 
        questo è un commento 
        multilinea in javascript 
      */

      // e questo è un commento su una singola riga
      console.log("ciao mondo");
    
    </script>
  </head>
  ...
</html>
```



---
title: javascript
level: 3
---

# come eseguire il codice javascript
fondamentali

esecuzione del codice nel tag `body`. meglio. 

```html
<html>
  ...
  <body>
    ...
    <script>
      /* 
        questo è un commento 
        multilinea in javascript 
      */

      // e questo è un commento su una singola riga
      console.log("ciao mondo");
    
    </script>
  </body>
</html>
```




---
title: javascript
level: 3
---

# come eseguire il codice javascript
fondamentali

esecuzione del codice nel `body` da un file `js` separato. il migliore. 

```html
<html>
  ...
  <body>
    ...
    <script src="javascript.js"></script>
  </body>
</html>
```




---
title: javascript
level: 3
---

# dichiarazioni
fondamentali

una dichiarazione è un'istruzione scritta nel codice javascript che il browser interpreta e poi fa qualcosa. 

**metti sempre i punti e virgola alla fine di una riga di codice**. 

javascript è di tipo debole e potrebbe funzionare senza di essi, ma otterrai un comportamento inaspettato. 

```js
  let eta = 300;
```


---
title: javascript
level: 3
---

# blocchi di codice
fondamentali

i blocchi di codice sono sezioni di codice delimitate da `{` e `}`

**non mettere mai un punto e virgola alla fine di un blocco di codice, non ne hanno bisogno**. 

```js
let eta = 300;

if (eta > 50) {
  console.log("dannazione, è vecchio");
}

/* nota: non c'è un punto e virgola alla fine della riga 6 */

```

---
title: javascript
level: 3
---

# convenzioni di denominazione
fondamentali

la cosa più difficile da fare nello sviluppo, a parte tutto, è dare un nome alle tue variabili. 

ci sono tre diverse convenzioni di denominazione `pascal case`, `camel case`, e `snake case`. 

(nota: ce n'è una quarta - `kebab-case` ma non funziona in javascript)

```js
// camel case 
let numElementiDaFare = 41;

// pascal case 
let NumElementiDaFare = 44;

// snake case 
let num_elementi_da_fare = 32; 


```



---
title: javascript
level: 3
---

# la riga di codice più importante in javascript:
fondamentali

l'oggetto `console` fornisce l'accesso alla console di debug del browser. 

puoi usare l'oggetto `console` ovunque nel tuo codice javascript. 

il modo più semplice per stampare qualcosa sulla console del browser è usare la funzione `console.log()` mostrata di seguito. più avanti esamineremo alcune altre funzioni `console` disponibili per noi. 

```js
// questa è la border: 1px solid red; di javascript 
console.log(numElementiDaFare);

```

---
title: javascript
level: 3
class: "border-l-36 border-green-600"
---

# ora provaci tu! 
fondamentali

* crea una pagina html
* aggiungi un elemento script alla fine della pagina
* aggiungi il seguente codice alla tua pagina 
* apri gli strumenti di ispezione nel tuo browser 
* visualizza l'output della console

```js
  // dichiara una variabile
  let messaggio = "ciao mondo";

  // console log il contenuto della variabile 
  console.log(messaggio);

```
<div class="text-sm">

[CODEPEN] (https://codepen.io/pen/)

</div>


---
title: javascript
level: 3
---

# altre funzioni `console` utili
fondamentali

```js
// pulisce la console 
console.clear();

// output di log generale
console.log("ciao mondo");

// log di informazioni
console.info("alcune informazioni utili");

// emette un messaggio di avvertimento
console.warn("uh oh, questo è un avvertimento"); 

// emette un messaggio di errore
console.error("è occorso un errore maggiore");

// emette dati tabulari. l'argomento può essere un array o un oggetto
console.table(["elefante", "leone", "tigre"]);

// utilizzato per stampare un stack trace sulla console.
 console.trace();
```

---
title: javascript console.trace();
level: 3
---

# console.trace();

 Questo metodo può essere utile per il debug, perché ti mostra la sequenza di chiamate di funzione che hanno portato al punto in cui `console.trace()` è stato chiamato. 

Ecco un esempio di come potrebbe essere utilizzato:

```javascript
function primaFunzione() {
  secondaFunzione();
}

function secondaFunzione() {
  terzaFunzione();
}

function terzaFunzione() {
  console.trace();
}

primaFunzione();
```
In questo esempio, `console.trace()` viene chiamato all'interno di `terzaFunzione()`. Quando esegui questo codice, vedrai un output sulla console che mostra che `terzaFunzione()` è stata chiamata da `secondaFunzione()`, che a sua volta è stata chiamata da `primaFunzione()`.

```