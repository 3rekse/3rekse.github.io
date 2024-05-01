---
layout: intro
title: Logic Gates
level: 2
---
## [Porte Logiche](https://tinyurl.com/25j6nhao)

![Simbolo della porta OR](/internet/images/logic-lab/logic-gates/full-adder.png)

Nel mondo reale, i dispositivi digitali non sono le astratte espressioni logiche dell'algebra booleana, ma sono implementazioni di queste espressioni nell'hardware. Le espressioni logiche vengono tradotte in strutture di dispositivi chiamate _porte logiche_. Una porta logica è sia una rappresentazione simbolica di un'operazione logica che, quando utilizzata nell'elettronica digitale, è un circuito effettivo nell'hardware. Di solito, una singola porta logica è composta da diversi transistor e condivide lo spazio con molti altri in un circuito integrato. 💻🔌

---
level: 3
title: Gate symbols

---

## Simboli delle porte logiche

Ogni operatore base che abbiamo imparato nella sezione [espressioni](/expressions) ha un simbolo di porta logica. Il simbolo prende il posto dell'operatore e le variabili sono gli input della porta. Il valore risultante dall'equazione dell'espressione è l'output della porta. L'output di una porta può essere un risultato finale o può essere collegato come input a un'altra porta.

Le porte logiche sono simboli che possono sostituire direttamente un'espressione nell'aritmetica booleana. Ognuna ha una forma diversa per mostrare la sua particolare funzione. Gli input (variabili booleane) entrano a sinistra del simbolo e l'output esce a destra. Quando combinate insieme, diverse porte possono creare un sistema di valutazione logica complesso che ha molti input e output. I computer digitali sono progettati collegando migliaia, o milioni, di queste porte insieme.

---
level: 3
title: NOT gate

---

## Porta NOT

La porta NOT è una freccia in avanti con un piccolo cerchio all'uscita. La parte circolare del simbolo indica che l'uscita sta negando l'input.

![Simbolo della porta NOT](/internet/images/logic-lab/logic-gates/not-gate.png)

---
level: 3
title: OR gate

---

## Porta OR

La porta OR ha un lato di ingresso curvo e un lato di uscita appuntito.

![Simbolo della porta OR](/internet/images/logic-lab/logic-gates/or-gate.png)

---
level: 3
title: AND gate

---

## Porta AND

La porta AND ha un lato di ingresso piatto e un lato di uscita rotondo.

![Simbolo della porta AND](/internet/images/logic-lab/logic-gates/and-gate.png)

---
level: 3
title:  Exclusive OR (XOR) gate

---

## Porta XOR (OR esclusivo)

Il simbolo della porta XOR è simile a quello della porta OR, ma ha una linea curva aggiuntiva che attraversa gli ingressi.

![Simbolo della porta XOR](/internet/images/logic-lab/logic-gates/xor-gate.png)

---
level: 3
title: Combined logic

---

## Logica combinata

Quando si collegano più porte insieme, si ha un sistema di logica combinata o _logica combinatoria_. Per progettare un sistema di logica combinata, possiamo utilizzare tabelle di verità per abbinare le uscite logiche alle diverse condizioni di input. Le espressioni booleane vengono scritte dalle condizioni nella tabella. Successivamente, possiamo convertire direttamente l'espressione in un diagramma di porte logiche.

Potresti ricordare che nel capitolo [Elementi booleani](/elements#xor) abbiamo visto che non c'era un operatore da utilizzare nel codice per XOR. Era stato creato utilizzando una combinazione degli operatori AND, OR e NOT:

---
level: 3
title: Combined logic (cont)

---

## Combined logic (cont)

```js
let A = false
let B = false
let Q = (A || B) && !(A && B)
```

Mappiamo le condizioni di input e output in una tabella di verità per un sistema logico combinato per XOR. Troveremo tutte le condizioni che causano un risultato ``true`` e creeremo un'espressione booleana per esse.

---
layout: two-cols-header
level: 3
---

## Combined logic - Part 2

::left::

A | B | A ⊕ B
-|-|-
F | F | F
F| T | T
T| F | T
T | T | F

In codice, questa espressione è formata con questi blocchi logici:

```js
let A = false
let B = false
let Q = (!A && B) || (A && !B)
```

::right::

Ci sono due condizioni in cui la colonna dei risultati ha valori ``true``.

La prima condizione è quando ``A`` è ``false`` e ``B`` è ``true``, che si esprime come ``~A · B``.

La seconda condizione è quando ``A`` è ``true`` e ``B`` è ``false``, che si esprime come ``A · ~B``.

La nostra espressione XOR è ``true`` quando una di queste condizioni è true, che si scrive come:

``A ⊕ B`` = ``(~A · B) + (A · ~B)``

---
level: 3

---

## Combined logic - Part 3

La conversione dell'equazione in porte logiche produce il seguente diagramma. Nota come ogni porta "collega" le variabili insieme proprio come i blocchi logici nel codice sopra.


![Combinatorial XOR first version](/internet/images/logic-lab/logic-gates/combinatorial1-xor.png)

---
level: 3

---

## Combined logic - Part 4

Tuttavia, se prendiamo le altre due condizioni inutilizzate dalla tabella di verità che rendono l'operazione XOR ``false``, possiamo creare l'equazione negativa per XOR, chiamata NXOR:

``~(A ⊕ B)`` = ``(~A · ~B) + (A · B)``

Per tornare a ``A ⊕ B`` dobbiamo negare questa equazione negativa. Poi, con l'aiuto del [Teorema di De Morgan](/internet/logic-lab/expressions#de-morgan-s-thereom), otteniamo un'equazione diversa per XOR ma è comunque logicamente equivalente a quella originale.

``A ⊕ B`` = ``(A + B) · ~(A · B)``

Quando questa equazione viene convertita in porte logiche, c'è una porta in meno rispetto al primo diagramma.

---
level: 3

---

## [Combined logic](http://tinyurl.com/ytfazyv9)

![Combinatorial XOR second version](/internet/images/logic-lab/logic-gates/combinatorial2-xor.png)

Questo diagramma ha meno complessità rispetto al primo. La riduzione del numero di porte per ottenere lo stesso risultato logico è uno degli obiettivi principali della progettazione logica digitale. Per i dispositivi elettronici, ciò consente di utilizzare più porte nello spazio limitato di un circuito integrato.


## END

* [Somma bit in Esadecimale](http://tinyurl.com/2x65qywa)
* [Contatore Esadecimale & Binario](http://tinyurl.com/yroohrrv)
