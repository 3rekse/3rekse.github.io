---
title: Cicli JavaScript
layout: intro
level: 2
---

# Cicli JavaScript
Iterare attraverso le cose

---
title: JavaScript
level: 3
---

# Spesso abbiamo bisogno di ripetere le azioni
Cicli

* I cicli ci forniscono un modo per eseguire ripetutamente il codice
* Questa sezione copre i cicli `for`, `while` e `do..while`
* JavaScript fornisce anche un modo infinito per iterare su array e oggetti, che tratteremo più avanti

```js
while (condizione) {
  // Blocco di codice che si ripete
}

do {
  // Blocco di codice che si ripete
} while (condizione);

for (inizio; condizione; passo) {
  // Blocco di codice che si ripete
}
```


---
title: JavaScript
level: 3
---

# While
Cicli

* Mentre la condizione è veritiera o valuta a vero, il blocco di codice verrà eseguito
* Fai attenzione ai cicli infiniti
* Non dimenticare di incrementare un contatore nel tuo blocco di codice

```js
// Dichiarare un valore che possiamo usare per la condizione
let i = 0; 

// Esegui il ciclo mentre i è minore di 100 
while (i < 100) {
  console.log(i);
  // Incrementa il contatore 
  i = i + 1; 
}

```


---
title: JavaScript
level: 3
---

# Do...While
Cicli

* Il ciclo viene eseguito una volta indipendentemente dalla condizione impostata nell'istruzione while
* Dopo che il ciclo è stato eseguito una volta, la condizione while viene valutata e se è veritiera o valuta a vero, il blocco di codice verrà eseguito di nuovo
* Fai attenzione ai cicli infiniti
* Non dimenticare di incrementare un contatore nel tuo blocco di codice

```js
// Dichiarare un valore che possiamo usare per la condizione
let i = 0; 

// Esegui il ciclo mentre i è minore di 100 
do {
  console.log(i);
  // Incrementa il contatore 
  i = i + 1;
} while (i < 100);

```



---
title: JavaScript
level: 3
---


# For
Cicli

* Più completo, ma meno incline a errori di codifica, e più comunemente usato 

```js
for (let i = 0; i < 5; i++) {
    console.log("Contatore a", i);
}
```


---
title: JavaScript
level: 3
class: "border-l-36 border-green-600"

---

# Ora provaci tu! 
Variabili

* Apri il tuo file JavaScript e copia questo codice 
* Aggiungi un ciclo `for` o `while` per attraversare l'array 
* Usa la console per registrare ogni nome di colore all'interno di quell'indice dell'array, tranne se il colore è "hotpink" allora registra nella console "NOPE"

```js
  // Dichiarare un array
  let coloriPreferiti = ["viola", "blu", "rosa acceso", "verde", "giallo"];

  // Itera attraverso l'array dei colori preferiti 

  // All'interno del ciclo, usa un'istruzione if per controllare se un valore è "rosa acceso"
  
  // Se è "rosa acceso" allora registra nella console "NOPE"
  
  // Altrimenti stampa semplicemente il colore che si trova nell'indice dell'array

  // L'output dovrebbe essere ("viola", "blu", "NOPE", "verde", "giallo")
```