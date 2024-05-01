---
layout: intro
title: Logic and expressions
level: 2
---

## Logica ed espressioni

L'uso e lo studio della _logica_ consiste nel trovare un nuovo fatto analizzando se altri fatti insieme possono dimostrarsi veri o falsi.

Se la temperatura esterna è al di sotto dello zero e non hai un cappotto, sentirai freddo.

Se non sei malato, allora ti sentirai bene.

Se sai nuotare o puoi salire su una barca in acqua, rimarrai a galla.

Queste sono dichiarazioni di fatti che derivano dal fatto che una certa condizione sia vera.

---
layout: center
level: 3
title: Truth

---

## Dichiarazioni di verità

Prendendo alcuni fatti e mettendoli in una forma logica, possiamo creare un'aritmetica che ci aiuta ad analizzarli e trarre una conclusione.

Utilizzando gli esempi appena menzionati, trasformiamoli in alcune equazioni logiche:

* La temperatura esterna è al di sotto dello zero **'E'** non ho un cappotto **'='** Mi sento freddo ❄️
* **'NON'** malato **'='** Mi sento bene 😊
* So nuotare **'O'** Sono su una barca **'='** Sto galleggiando ⛵️

Vedi l'AND, NOT e OR negli esempi di equazioni logiche? Questi sono i nostri _operatori_ logici. 🧠

---
layout: center
level: 3
title: Logic explorer

---

## A.I. Artificial Intelligence

Ogni giorno prendiamo decisioni quando pensiamo a uno o più fatti insieme utilizzando questi operatori. 🧠

A volte, è necessario che tutti i fatti siano veri affinché la conclusione sia vera. Questo è il caso quando viene utilizzato l'operatore AND. ⚡️

Quando si analizzano i fatti con l'operatore OR, è sufficiente che un fatto sia vero affinché anche la conclusione sia vera. ✅

Prendere una decisione può richiedere più di uno o due fatti. 🤔

Quando ciò accade, è necessario un altro operatore per combinare i fatti insieme e trarre una conclusione. 🔄

Nell'ultima equazione di parole dell'esempio, potresti non stare galleggiando se solo quelle due condizioni sono vere. Per dimostrare correttamente che stai effettivamente galleggiando, devi affermare che sei anche in acqua. 💦

* **(**``So nuotare`` **O** ``Sono su una barca``**) E** ``Sono in acqua`` **=** ``Sto galleggiando``

Per dimostrare che stai galleggiando, i due fatti che sai nuotare o sei su una barca devono essere trasformati in un unico fatto che viene combinato con l'altro fatto che sei anche in acqua. Altrimenti, se sei in grado di nuotare ma sei ancora sulla terraferma, o in una barca che si trova sulla spiaggia, non stai galleggiando.

---
leyout: center
level: 3
title: Boolean algebra

---

## Boolean algebra

George Boole ha creato un tipo di aritmetica (algebra booleana) che utilizza simboli per le condizioni, gli operatori e il risultato. Le condizioni sono considerate come variabili che hanno il valore di "vero" o "falso". Gli operatori come AND, OR e NOT sono simboli a carattere singolo. Se vogliamo trasformare l'affermazione "Sono felice quando c'è il sole o quando mangio un donut" in un'equazione booleana, possiamo iniziare facendo delle condizioni delle variabili.

* Variabile ``A`` = ``"C'è il sole"`` ☀️
* Variabile ``B`` = ``"Ho mangiato un donut"`` 🍩

Il risultato, quindi, è una variabile chiamata ``Q`` che è vera quando sei felice e ha un valore che è il risultato di un'operazione tra ``A`` e ``B``. Questa operazione è l'OR che è rappresentato dal simbolo ``+``.

``Q`` = ``A + B``

Il risultato di ``Q`` è vero quando c'è il sole o hai mangiato un donut.


---
leyout: center
level: 3
title: Boolean algebra - Part 2

---

## Boolean algebra - Part 2

Se altre cose ti rendono felice, come essere in vacanza, puoi aggiungerlo all'equazione.

* Variabile ``C`` = ``"Sono in vacanza"`` ``Q`` = ``A + B + C``

Potrebbe essere che sei facile da accontentare e devi solo sentirti bene per essere felice. Quindi, sei felice quando NON sei malato. Useremo il simbolo ``~`` per indicare il NOT nella nostra equazione.

* Variabile ``A`` = ``"Sono malato"``
``Q`` = ``~A``

Nella situazione in cui tutte le condizioni devono essere vere affinché il risultato sia vero, le condizioni utilizzano l'operazione AND. Perché il sole splenda su di te, il cielo deve essere sereno e deve essere di giorno. Mettiamo insieme questi due fatti con il simbolo AND ``·``.

* Variabile ``A`` = ``"Il cielo è sereno"``
* Variabile ``B`` = ``"È giorno"``
* Risultato ``Q`` = ``"Il sole splende"``

``Q`` = ``A · B``

---
layout: two-cols-header
level: 3
title: Expressions

---

### Espressioni

::left::

A volte, diverse operazioni sulle stesse condizioni possono produrre risultati equivalenti. Se prendiamo il caso opposto dell'ultimo esempio in cui il sole non splende, le variabili per questo sono:

* Variabile ``A`` = ``"Il cielo è sereno"``
* Variabile ``B`` = ``"È giorno"``
* Risultato ``Q`` = ``"Il sole splende"``
* Risultato ``~Q`` = ``"Il sole NON splende"``

Per ottenere l'opposto di ``"il sole splende"``, neghiamo, utilizziamo il simbolo NOT, su entrambi i lati dell'equazione.
``~Q`` = ``~(A · B)``

::right::

Ora, pensiamo al sole che NON splende a causa di condizioni negative. Se il cielo non è sereno O non è di giorno, allora il sole non sta splendendo. Quindi, il simbolo NOT viene inserito prima delle variabili per ogni condizione in modo che ``"il sole NON splende"`` abbia un'altra equazione come questa:
``~Q`` = ``~A + ~B``

Vediamo che il lato con le variabili ``A`` e ``B`` in entrambe le equazioni sono equivalenti tra loro poiché entrambe si equivalgono a ``~Q``:
``~(A · B)`` = ``~A + ~B``

L'equazione logica ora non include la variabile di risultato ``Q`` ma invece ci sono due _espressioni_ che sono logicamente equivalenti su ciascun lato.


---
leyou: center
level: 3
title: De Morgan's Thereom

---

## Teorema di De Morgan

L'ultima equazione, ``~(A · B)`` = ``~A + ~B``, dimostra una proprietà importante nell'algebra booleana.

Si chiama Teorema di De Morgan e afferma che l'inverso (NOT) di una congiunzione (AND) è logicamente equivalente alla disgiunzione (OR) di due inversi (NOT). Inoltre, l'inverso (NOT) di una disgiunzione (OR) è logicamente equivalente alla congiunzione (AND) di due inversi (NOT).

Questo è più facilmente comprensibile osservando le equazioni booleane per entrambi i casi:

``~(A · B)`` = ``~A + ~B``

>-- AND --

``~(A + B)`` = ``~A · ~B``


---
layout: two-cols-header
level: 3
title: Truth tables

---

::left::

## Tabelle di verità

Una tabella di verità è un modo per visualizzare tutte le possibili condizioni delle variabili in un'espressione logica e tracciare i risultati.

Utilizzando l'affermazione di verità sul fatto che fa freddo fuori e non hai un cappotto, ecco la tabella di verità che mostra le possibili condizioni e i loro risultati:

Poiché ti senti freddo solo quando entrambe le condizioni sono vere, l'affermazione diventa un'espressione AND nell'algebra booleana.

* Variabile ``A`` = ``"fa freddo"``
* Variabile ``B`` = ``"non ho un cappotto"``

``A · B`` = ``Q``

::right::
Una tabella di verità per le variabili nell'espressione ha gli stessi valori della tabella per l'affermazione di verità (``vero`` e ``falso`` sono abbreviati con ``1`` e ``0``).

Ecco la tabella di verità con le possibili condizioni e i loro risultati:

Fa freddo | Non ho un cappotto | Mi sento freddo | A | B | Q
-|-|-|-|-|-
 falso | falso | falso | 0 | 0 | 0
 falso | vero | falso | 0 | 1 | 0
 vero | falso | vero | 1 | 0 | 0
 vero | vero | falso | 1 | 1 | 1


---
layout: two-cols-header
level: 3
title: Truth tables 2

---

## Truth tables 2

::left::

Cosa succederebbe se cambiamo la condizione di "Non ho un cappotto" in "Ho un cappotto"?

Come influisce sulla tabella di verità su quanto ti senti freddo?

Fa freddo | Ho un cappotto | Mi sento freddo
-|-|-
falso | falso | falso
falso | vero | falso
vero | falso | vero
vero | vero | falso

::right::

Per scrivere un'equazione booleana per quando ti senti freddo, troviamo le condizioni nella tabella in cui ``Q`` è ``vero``. Qui vediamo che ti sentirai freddo solo in una riga, quando la condizione ``A`` è ``vero`` e la condizione ``B`` è ``falso``. L'equazione booleana per queste condizioni è questa:

``A · ~B`` = ``Q``
A | B | Q
-|-|-
F 0 | F 0 | F 0
F 0 | V 1 | F 0
V 1 | F 0 | V 1
V 1 | V 1 | F 0

Per scrivere un'equazione booleana per quando ti senti freddo, troviamo le condizioni nella tabella in cui ``Q`` è ``vero``. Qui vediamo che ti sentirai freddo solo in una riga, quando la condizione ``A`` è ``vero`` e la condizione ``B`` è ``falso``. L'equazione booleana per queste condizioni è questa:

``A · ~B`` = ``Q``
