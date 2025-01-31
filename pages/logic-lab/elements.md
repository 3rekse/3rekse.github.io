---
level: 2
layout: intro
title: Boolean elements

---

## Elementi booleani

Che tu stia creando equazioni in algebra booleana o utilizzandole nei tuoi programmi, formerai espressioni logiche sia semplici che complesse che utilizzano operazioni di base per combinare le condizioni logiche.

## Notazione

Le equazioni booleane (logiche) sono espresse in modo simile alle equazioni matematiche. Le variabili nelle espressioni booleane, però, hanno solo due possibili valori, "vero" o "falso".

Per un'equazione che utilizza un'espressione logica, i lati equivalenti del segno di uguale, "=", saranno anch'essi solo "vero" o "falso".

---
level: 3
title: Boolean expressions

---

## Espressioni booleane

La seguente lista mostra gli elementi di notazione di base per le espressioni booleane.

* ``~A``: l'inverso (**NOT**) di ``A``, quando ``A`` è ``true``, ``~A`` è ``false``
* ``A + B``: il valore di ``A`` **OR** ``B``
* ``A · B``: il valore di ``A`` **AND** ``B``
* ``A ⊕ B``: il valore dell'OR esclusivo (**XOR**) di ``A`` con ``B``
* ``Q``: valore risultante (OUTPUT) equivalente di un'espressione logica

Un valore risultante, ``Q``, da un'espressione logica è mostrato come:

``Q`` = ``A + B``

---
level: 3
title: Equation

---

## Equazione

Un'equazione per mostrare espressioni logicamente equivalenti (dove entrambi i lati hanno lo stesso valore risultante) può apparire così:

``~(A + B)`` = ``~A · ~B``

<iframe style="max-width:100%" src="https://wordwall.net/it/embed/2a4e53f82a1b4565ad9e2eb0a6b31fcb?themeId=1&templateId=5&fontStackId=0"  frameborder="0" allowfullscreen></iframe>

---
level: 3
title: Logical operators

---
## [Operatori logici](https://tinyurl.com/3ya6ad2d)

Tutte le espressioni booleane risultano dalla combinazione di condizioni e operatori.

Questi operatori uniscono singole condizioni insieme e valutano in una singola condizione "vero" o "falso".

Di seguito sono riportati gli operatori logici di base.

**=** (Identità)

**NOT** (Negazione)

**OR** (Disgiunzione)

**AND** (Congiunzione)

**XOR** (OR esclusivo)

Il loro utilizzo sia nell'algebra booleana che nel codice è mostrato insieme alla loro tabella di verità.


---
layout: two-cols-header
level: 3
title: Identity

---

## [Identità](http://tinyurl.com/ysgf43zt)

L'identità significa che il valore risultante è uguale alla condizione stessa.

``Q = A``

[let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let?retiredLocale=it)
::left::

```js
let A = false
let Q = A
```

### Truth table

A | Q
-|-
F | F
T | T

::right::

### Example - Blink  on press

```js
let A = false
forever(function () {
    A = input.buttonA.isPressed()
    if (A) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
    pause(500)
})
```

[Identity](https://makecode.com/_P1hcUA7L8FaY)

---
layout: two-cols-header
level: 3
title: Not

---

## NOT (Negazione)

L'operatore NOT è chiamato negazione o inverso. Prende un singolo valore logico e lo rende con il valore opposto, ``true`` diventa ``false`` e ``false`` diventa ``true``.


::left::

``Q = ~A``

```js
let A = false
let Q = !(A)
```

::right::

Truth table

A | ~A
-|-
F | T
T | F

---
level: 3
title: NOT Example

---

### Example - Blink pixels on not pressed

```js
let A = false
forever(function () {
    A = input.buttonA.isPressed()
    if (!(A)) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
    pause(500)
})
```

[Negation](https://makecode.com/_PsFaCH9J0Wvw)

---
level: 3
title: OR

---

## OR (Disgiunzione)

L'operatore OR restituisce ``true`` quando una o più condizioni sono ``true``.

``Q = A + B``

```js
let A = false
let B = false
let Q = A || B
```

A | B | A + B
-|-|-
F | F | F
T | F | T
F | T | T
T | T | T

---
level: 3
title: Or example

---

## Example - Blink on any press

```js
let A = false
let B = false
input.buttonA.onEvent(ButtonEvent.Click, function () {
    A = !(A)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    B = !(B)
})
forever(function () {
    if (A || false) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
    pause(500)
})

```

[Or da completare](https://makecode.com/_D1z8v47LyTm1)

---
level: 3
title: AND

---

## AND (Congiunzione)

L'operatore AND richiede che tutte le condizioni siano "vere" affinché il risultato sia "vero".

``Q = A · B``

```js
let A = false
let B = false
let Q = A && B
```

A | B | A · B
-|-|-
F | F | F
T | F | F
F | T | F
T | T | T

---
level: 3
title: AND Example

---

## Example - Blink on double press only

```js
let A = false
let B = false
input.buttonA.onEvent(ButtonEvent.Click, function () {
    A = !(A)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    B = !(B)
})
forever(function () {
    if (A && false) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
    pause(500)
})

```

---
layout: two-cols-header
level: 3
title: XOR (Exclusive OR)

---

## XOR (OR esclusivo)

::left::

L'OR esclusivo (XOR) significa che solo una delle due condizioni è vera. Entrambe le condizioni non possono essere vere contemporaneamente. XOR è comune nell'algebra booleana ma non ha un operatore in JavaScript. La sua operazione può essere realizzata combinando alcune semplici espressioni.

``Q = A ⊕ B``

```js
let A = false
let B = false
let Q = (A || B) && !(A && B)
```

![menu](/rete/images/logic-lab/logic-gates/menu.png)

::right::

| A | B | A⊕B |
|---|---|-----|
| F | F |  F  |
| F | T |  T  |
| T | F |  T  |
| T | T |  F  |

---
level: 3
title: XOR Example

---

## Example - Blink on one press or the other

```js
let A = false
let B = false
forever(function () {
    A = input.buttonA.isPressed()
    B = input.buttonB.isPressed()
    if (?????) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
    pause(500)
})
```
