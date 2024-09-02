---
layout: intro
title: Logic explorer
level: 2
---

# Logic explorer

Per vedere come funzionano gli operatori logici di base, faremo un programma per testarli con tutti i loro possibili valori di input.

## Input e output

Crea un array chiamato ``||variables:inputs||`` con due valori, ``false`` e ``true``, come input logici.

Aggiungi un'altra variabile ``||variables:Q||`` per ricevere il valore risultante di un'espressione logica come output.
```
let inputs = [false, true]
let Q = false
```
![io](/internet/images/logic-lab/inout.png)

---
title: Single input loop
level: 3

---

# Single input loop


1. Per iniziare, faremo un test di input singolo per la variabile ``||variables:A||``.

2. L'output, nella variabile ``||variables:Q||``, per il test dell'operatore logico verrà visualizzato come un colore sui pixel. Un valore ``true`` si mostra come ``blu`` e ``false`` si illumina di ``arancione``.

---
title: Single input loop
level: 3
---
Steps

1. Ottieni un ciclo ``||loops:for element||`` e inseriscilo in ``||loops:on start||``.
   Rinomina la variabile ``||variables:index||`` in ``||variables:A||`` e cambia la variabile ``||variables:list||`` in ``||variables:inputs||``.
2. Trascina un blocco ``||variables:set Q to||`` nel ciclo ``||loops:for element||`` e imposta il valore su ``||logic:false||``.
3. Vai a trovare il ``||logic:if then else||`` e inseriscilo sotto il ``||variables:set Q to||``. Prendi un ``||variables:Q||`` in ``||variables:VARIABLE||`` e rilascialo su ``||logic:false||`` per sostituirlo.
4. Sposta un ``||light:set all pixels to||`` all'interno della sezione ``||logic:if then||`` e cambia il colore in ``blu``. Questo è il nostro colore per un output ``true``.
5. Sposta un ``||light:set all pixels to||`` all'interno della sezione ``||logic:else||`` e cambia il colore in ``arancione``. Questo è il nostro colore per un output ``false``.
6. Proprio sotto il ``||logic:if then else||``, inserisci un ``||loops:pause||``, un ``||light:clear||``, e un altro blocco ``||loops:pause||``. Imposta il tempo per ogni ``||loops:pause||`` a ``500``.

---
title: Single input loop code
level: 3
layout: image-right
image: /internet/images/logic-lab/singIn.png
---
```
let inputs = [false, true]
let Q = false
for (let A of inputs) {
    Q = false
    if (Q) {
        light.setAll(0x0000ff)
    } else {
        light.setAll(0xff8000)
    }
    pause(500)
    light.clear()
    pause(500)
}
```
---
title: Identity test 
level: 3
---
## Test di identità

Il test di identità è semplice. Fa in modo che l'output abbia lo stesso valore logico dell'input. Imposta la variabile di output ``||variables:Q||`` sulla variabile ``||variables:A||``.

```
let A = false
let Q = A
```

## Tabella di verità dell'identità

Per il test dell'identità, questi valori di output verranno mostrati per gli input:

A | Q = A
-|-
**false** | ``[light.setAll(0xff8000)]``
**true** | ``[light.setAll(0x0000ff)]``

---
title: Not test
level: 3
---
## Test NOT

La negazione, o inversione, fa sì che l'output abbia il valore opposto dell'input. Quindi, il valore dell'output NON è lo stesso dell'input. Poiché ci sono solo due possibili valori, l'output è l'altro valore che NON è l'input.

Sostituisci il ``||logic:false||`` nell'equazione ``||variables:Q||`` con un operatore ``||logic:not||``. Trascina la variabile ``||variables:A||`` giù dal ciclo ``||loops:for element||`` e rilasciala all'interno dell'operatore ``||logic:not||``.

```
let A = false
let Q = !A
```

![io](/internet/images/logic-lab/not.png)

---
title: Not truth table
level: 3
---

## NOT truth table

Per il test NOT, questi valori di output verranno mostrati per gli input:

A | ~A
-|-
**false** | ``[light.setAll(0x0000ff)]``
**true** | ``[light.setAll(0xff8000)]``

---
layout: intro
title: Two input loop
level: 3
---
## Two input loop

Per il resto dei test degli operatori, abbiamo bisogno di un'altra variabile di input.

Questa variabile proviene da un secondo ciclo ``||loops:for element||``.

Con una variabile di input c'erano solo due possibili valori di input.

Aggiungendo una seconda variabile di input, il numero di possibili combinazioni di input aumenta due volte.

Ora ci saranno 4 diverse possibilità di input.

Questo comporterà che le tabelle di verità avranno 4 righe per i test degli operatori.

Prendi un altro ciclo ``||loops:for element||`` e inseriscilo in modo che circondi tutto all'interno del primo ciclo. Rinomina la variabile ``||variables:index||`` in ``||variables:B||`` e cambia la variabile ``||variables:list||`` in ``||variables:inputs||``.

---
title: Two input loop code 
level: 3
layout: image-right
image: /internet/images/logic-lab/twoInOut.png
---

## Two input loop

```
let inputs = [false, true]
let Q = false
for (let A of inputs) {
    for (let B of inputs) {
        Q = !A
        if (Q) {
            light.setAll(0x0000ff)
        } else {
            light.setAll(0xff8000)
        }
        pause(500)
        light.clear()
        pause(500)
    }
}
```
---
title: Or test 
level: 3
---
## OR test

Ora, prendi un operatore ``||logic:or||`` e sostituisci il ``||logic:not||`` nell'equazione ``||variables:Q||`` con esso. Trascina la variabile ``||variables:A||`` giù dal ciclo esterno ``||loops:for element||`` e rilasciala sul lato sinistro dell'operatore ``||logic:or||``. Trascina giù la variabile ``||variables:B||`` dal ciclo interno ``||loops:for element||`` e rilasciala sul lato destro dell'operatore ``||logic:or||``.

```
let A = false
let B = false
let Q = A || B
```
---
title: Or truth table 
level: 3
---

## OR truth table

Per il test OR, questi valori di output verranno mostrati per gli input:
A | B | A + B
-|-|-
**false** | **false** |  ``[light.setAll(0xff8000)]``
**false** | **true** |  ``[light.setAll(0x0000ff)]``
**true** | **false** |  ``[light.setAll(0x0000ff)]``
**true** | **true** |  ``[light.setAll(0x0000ff)]``
---
layout: two-cols-header
title: ANd test 
level: 3
---

::left::

## AND test

Ora, cambia il tipo di operatore ``||logic:or||`` nell'equazione ``||variables:Q||`` con il tipo di operatore ``||logic:and||``:

```
let A = false
let B = false
let Q = A && B
```

::right::

### AND truth table

 AND test,  output values for the inputs:

A | B | A · B
-|-|-
**false** | **false** |  ``[light.setAll(0xff8000)]``
**false** | **true** |  ``[light.setAll(0xff8000)]``
**true** | **false** |  ``[light.setAll(0xff8000)]``
**true** | **true** |  ``[light.setAll(0x0000ff)]``

---
layout: two-cols-header
title: XOR test 
level: 3
---

::left::

## Test XOR

Per testare XOR, utilizzeremo l'espressione XOR da [Elementi Booleani](/logic-lab/elements#xor). Trascina e posiziona i blocchi ``||logic:LOGIC||`` per far sembrare l'equazione ``||variables:Q||`` così:

```
let A = false
let B = false
let Q = (A || B) && !(A && B)
```

::right::

### Truth Table

 XOR test,  output values for the inputs:

A | B | A ⊕ B
-|-|-
**false** | **false** |  ``[light.setAll(0xff8000)]``
**false** | **true** |  ``[light.setAll(0x0000ff)]``
**true** | **false** |  ``[light.setAll(0x0000ff)]``
**true** | **true** |  ``[light.setAll(0xff8000)]``

[Microbit ](https://makecode.microbit.org/S98034-95862-02378-36619)