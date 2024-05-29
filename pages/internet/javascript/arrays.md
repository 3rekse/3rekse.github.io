---
title: Array JavaScript
layout: intro
level: 2
---

# Array JavaScript
Memorizzare le cose di JavaScript negli array


---
title: JavaScript
level: 3
---

# Array in JavaScript
Array

* Fino ad ora abbiamo visto tipi di dati primitivi e oggetti letterali, che trattano una singola variabile o una collezione di singoli nomi e coppie di valori
* L'oggetto Array ci permette di memorizzare più elementi in una singola variabile

```js
    // Dichiarare un array vuoto 
    let myEmptyArray = [];

    // Dichiarare un array con valori stringa 
    let myFavouriteColoursArray = ["viola", "blu", "rosa acceso", "verde", "giallo"];

    // Dichiarare un array di tipi di dati diversi
    let myMixedArray = ["blu", 55, false, "verde"];
 
    // Output degli array 
    console.log(myEmptyArray);
    console.log(myFavouriteColoursArray);
    console.log(myMixedArray);
```


---
title: JavaScript
level: 3
---

# Array in JavaScript
Array

* Gli array in JavaScript possono essere ridimensionati e possono contenere un mix di tipi di dati 
* Usiamo un valore indice, partendo da zero (0) per accedere agli elementi di un array

```js
    // Dichiarare un array vuoto 
    let myColourArray = [];

    // L'array viene ridimensionato per avere ora tre (3) elementi al suo interno
    myColourArray = ["viola", "blu", "rosa acceso"];

    // Accedere al secondo elemento dell'array usando il valore dell'indice 1
    myColourArray[1] = "oro";

    // Accedere a ciascun elemento usando l'indice per output dei tre elementi dell'array
    console.log(myColourArray[0]);
    console.log(myColourArray[1]);
    console.log(myColourArray[2]);

```

---
title: JavaScript
level: 3
---

# Array in JavaScript
Array

* È possibile utilizzare anche le funzioni `new Array()` e `Array()` per creare array
* Tuttavia, questo stile di creazione degli array non è consigliato
* Utilizzare la notazione `[]` quando si dichiarano gli array 

```js
    // Dichiarare un array vuoto 
    let myEmptyArray = new Array(); // lo stesso di []

    // Dichiarare un array con alcuni valori 
    let myFavouriteColoursArray = new Array("viola", "blu", "rosa acceso", "verde", "giallo");

    // Dichiarare un array di un mucchio di cose - notare che questo funziona anche senza la parola chiave new 
    let myMixedArray = Array("blu", 55, false, "verde");
 
    // Output degli array 
    console.log(myEmptyArray);
    console.log(myFavouriteColoursArray);
    console.log(myMixedArray);

```

---
title: JavaScript
level: 3
class: "border-l-36 border-green-600"

---

# Ora tocca a te! 
Array

* Apri il tuo file JavaScript
* Copia il seguente codice di partenza
* Aggiungi sette (7) numeri all'array `myLotteryNumbers`
* Esegui il codice e vedi quale è l'output

```js
    // Dichiarare un array con i tuoi sette valori
    let myLotteryNumbers = []; // AGGIUNGI IL CODICE QUI
 
    // Output dell'array
    console.log('I numeri vincenti sono ', myLotteryNumbers);

```


---
title: JavaScript
level: 3
class: "border-l-36 border-green-600"

---


# Ora tocca a te! 
Array

* Continuando da dove hai lasciato, dovresti avere 7 numeri in un array
* Aggiungi `10` al primo valore dell'array 
* Aggiungi `100` all'ultimo valore dell'array 
* Moltiplica per `* 3` il terzo valore dell'array 
* Esegui il codice e vedi quale è l'output

```js
    // Dichiarare un array con i tuoi sette valori
    let myLotteryNumbers = [];

    // Modifica il primo valore dell'array aggiungendo 10 ad esso
    // Modifica l'ultimo valore dell'array aggiungendo 100 ad esso 
    // Modifica il terzo valore dell'array moltiplicandolo per 3
 
    // Output dell'array
    console.log('I numeri modificati sono ', myLotteryNumbers);

```



---
title: JavaScript
level: 3
---

# Proprietà e metodi
Array

* Poiché un `array` è un oggetto JavaScript, esso viene fornito con un numero di `proprietà` e `metodi` che possiamo utilizzare 
* Ad esempio, possiamo utilizzare il metodo `push()` per aggiungere elementi alla fine di un array

```js
    // Dichiarare un array vuoto 
    let myFavouriteColours = [];

    // Aggiungere una variabile stringa all'array 
    myFavouriteColours.push("viola");

    // Controllare il contenuto dell'array - dovremmo vedere ("viola")
    console.log(myFavouriteColours);

    // Aggiungere un'altra variabile stringa all'array
    myFavouriteColours.push("verde");

    // Output dell'array - dovremmo vedere ("viola, "verde")
    console.log(myFavouriteColours);

```



---
title: JavaScript
level: 3
---

# Proprietà e metodi
Array

* Possiamo anche utilizzare la proprietà `.length` per dirci quanti elementi ci sono nell'array

```js
    // Dichiarare un array vuoto 
    let myFavouriteColours = [];

    // Aggiungere due variabili stringa all'array
    myFavouriteColours.push("viola");
    myFavouriteColours.push("verde");

    // Output dell'array - la lunghezza dovrebbe essere 2
    console.log('Il numero di elementi nell'array sono:', myFavouriteColours.length);

```


---
title: JavaScript
level: 3
---

# Proprietà e metodi
Array

* Per accedere al primo elemento dell'array possiamo sempre usare [0] purché sappiamo che c'è almeno un elemento nell'array 
* Possiamo utilizzare la proprietà `.length` per dirci quanti elementi ci sono nell'array
* Per accedere all'ultimo elemento dell'array avremmo bisogno di prendere la proprietà `.length` e sottrarre 1

```js
    // Dichiarare un array di colori
    let myFavouriteColours = ["viola", "blu", "rosa acceso", "verde", "giallo"];

    // Accedere al primo elemento dell'array e modificarlo
    myFavouriteColours[0] = "azzurro";

    // Accedere all'ultimo elemento dell'array e modificarlo
    myFavouriteColours[myFavouriteColours.length-1] = "beige";

    // Output dell'array - "azzurro", "blu", "rosa acceso", "verde", "beige"
    console.log(myFavouriteColours);

```

---
title: JavaScript
level: 3
class: "border-l-36 border-green-600"
---

# Ora tocca a te! 
Array

* Ti ho fornito un array di astronavi usate in Star Wars, ma ho sbagliato il primo elemento e ho dimenticato una astronave davvero importante, quindi spero che tu possa correggere il mio array
* Rimuovi il primo elemento `"Luke Skywalker"` poiché chiaramente non è un'astronave
* Aggiungi `"X-Wing"` alla fine dell'array 
* Aggiungi `"TIE Advanced x1"` all'inizio dell'array
* **SUGGERIMENTO**: cerca il metodo `array.unshift()`

```js
    // Dichiarare un array con i tuoi sette valori
    let starWarsShips = ["Luke Skywalker", "Star Destroyer", "Millennium Falcon", "CR90 corvette"];
    
    // AGGIUNGI IL TUO CODICE QUI
 
    // Output dell'array - 
    // ("TIE Advanced x1", "Star Destroyer", "Millennium Falcon", "CR90 corvette", "X-Wing");
    console.log(starWarsShips);

```



---
title: JavaScript
level: 3
---

# Const e array
Array

* Possiamo impostare un `array` come variabile `const` e JavaScript ci permetterà di cambiare gli elementi all'interno dell'array ma JavaScript non permetterà di riassegnare la variabile.

```js
    // Dichiarare un array const
    const myFavouriteColours = ["viola", "verde", "blu"];

    // Aggiungere un elemento usando il metodo push() funziona
    myFavouriteColours.push("oro");
    
    // Output dell'array - la lunghezza dell'array sarà 4
    console.log('Il numero di elementi nell'array sono ora ', myFavouriteColours.length);

    // Riassegnare l'array dovrebbe generare un errore nel tuo console 
    myFavouriteColours = ["rosa acceso", "arancione"]; // Questo non funzionerà

```


---
title: JavaScript
level: 3
---

# C'è anche un metodo reverse 
Array

* Possiamo utilizzare il metodo `reverse` per invertire l'ordine degli elementi nell'array

```html
<script>

    // Dichiarare un array const
    const myLotteryNumbers = [1, 22, 34, 56, 83, 59, 23];

    // Output dell'array
    console.log("Originale: ", myLotteryNumbers);

    // Metodo reverse
    myLotteryNumbers.reverse();
    
    // Output dell'array
    console.log("Dopo reverse: ", myLotteryNumbers);

</script>
```
---
title: JavaScript
level: 3
---

# Copiare un array
Arrays

* Quando si copiano i tipi di dati primitivi, JavaScript utilizza il passaggio per valore, quindi non ci sono problemi
* Tuttavia, quando si tratta di array, JavaScript utilizza il passaggio per riferimento, e questo può creare alcuni problemi

```js
    // Dichiarare array
    let originalLotteryNumbers = [1, 22, 34, 56, 83, 59, 23];

    // Copiare l'array originale in un nuovo array
    let copyLotteryNumbers = originalLotteryNumbers;

    // Ora modifichiamo la copia
    copyLotteryNumbers[0] = 5;
    copyLotteryNumbers[1] = 12;

    // Output dell'array originale
    console.log("Originale: ", originalLotteryNumbers);
    
    // Output dell'array copia
    console.log("Copia: ", copyLotteryNumbers);

```


---
title: JavaScript
level: 3
---

# Copiare un array
Arrays

* Il modo più semplice per fare una vera copia di un array è utilizzare l'operatore spread `...`
* Non entreremo in cosa fa l'operatore spread ora, quello sarà per una lezione successiva, ma per ora sappi che il seguente funziona

```js
    // Dichiarare array
    let originalLotteryNumbers = [1, 22, 34, 56, 83, 59, 23];

    // Copia superficiale dell'array originale in un nuovo array
    let realCopyLotteryNumbers = [...originalLotteryNumbers];

    // Ora modifichiamo la copia
    realCopyLotteryNumbers[0] = 5;
    realCopyLotteryNumbers[1] = 12;

    // Output dell'array originale
    console.log("Originale: ", originalLotteryNumbers);
    
    // Output dell'array copia
    console.log("Copia: ", copyLotteryNumbers);

```



---
title: JavaScript
level: 3
---

# Copiare un array
Arrays

* E se vogliamo copiare solo una parte di un array. C'è un metodo anche per quello!
* Il metodo `slice()` prende il punto di inizio e il punto finale opzionale della copia
* Quindi `array.slice(2)` copierà ogni elemento dall'indice 2 alla fine
* Quindi `array.slice(2,4)` copierà ogni elemento dall'indice 2 all'indice 4

```js
    // Dichiarare array
    let originalLotteryNumbers = [1, 22, 34, 56, 83, 59, 23];

    // Copia superficiale dell'array originale in un nuovo array
    let portionOfLotteryNumbers = originalLotteryNumbers.slice(4);

    // Copia superficiale dell'array originale in un nuovo array
    let portionOfLotteryNumbers = originalLotteryNumbers.slice(-3);

    // Output dell'array originale - ( 59, 23 )
    console.log(portionOfLotteryNumbers);
    
    // Output dell'array copia - ( 83, 59, 23 )
    console.log(portionOfLotteryNumbers);

```

---
title: JavaScript
level: 3
---

# Metodi dell'array
Arrays

* In realtà ci sono molti altri metodi `array` molto utili che JavaScript ha che rendono il lavoro con gli array una brezza.
* https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array