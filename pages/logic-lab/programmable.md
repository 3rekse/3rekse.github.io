---
layout: intro 
title: Programmable logic
level: 2
---

 # Logica programmabile

Le porte logiche sono formate collegando i transistor insieme su un materiale semiconduttore per creare un circuito integrato. I wafer, o chip, di semiconduttore contengono molte porte logiche che costituiscono diversi tipi di dispositivi che lavorano insieme per leggere, memorizzare, calcolare e trasmettere informazioni digitali.

La maggior parte dei circuiti integrati contiene un arrangiamento specifico di porte logiche al momento della loro fabbricazione. A causa delle loro proprietà fisiche e chimiche, alcuni semiconduttori possono permetterti di cambiare i collegamenti tra le porte dopo che il dispositivo è stato fabbricato. Applicando tensioni speciali ai pin di programmazione, un arrangiamento personalizzato di porte può essere "programmato" nel circuito integrato. Questi tipi di semiconduttori fanno parte di una categoria di elettronica chiamata _Dispositivi Logici Programmabili (PLD)_. Esistono molti tipi diversi. Alcuni di essi si programmano solo una volta e altri permettono di cancellare l'arrangiamento originale delle porte e programmare nuovi arrangiamenti più volte.

Possiamo usare il @boardname@ per creare il nostro PLD. I pin digitali sono gli input per i circuiti logici. Le porte logiche che programmiamo sono espressioni logiche nel codice che combinano gli input digitali che leggiamo dai pin. Il risultato dell'espressione viene scritto su un pin di output digitale.

---
layout: two-cols-header
title: Board PLD
level: 3
---

## Board PLD
 L'idea fisica di utilizzare la tua scheda come un PLD è la seguente:
::left::
Gli input logici per `A` e `B` sono collegati ai pin di input digitali. L'output risultante `Q` è collegato a un pin di output digitale. Possiamo fare una rappresentazione generale della tua scheda come un PLD selezionando alcuni pin digitali da utilizzare come input e output per la nostra logica programmabile.
![Scheda con due input logici e un output](/rete/images/logic-lab/pld/cpx-pld.png)


::right::
"Collegando" i pin insieme con il codice, possiamo programmare porte logiche virtuali e far agire la scheda come un PLD. Con più pin e un po' più di codice, possiamo anche creare un circuito logico combinato.

![Combinatorial XOR first version](/rete/images/logic-lab/pld/not-and-or.png)

---
title: Logic observer
level: 3
---

## Osservatore logico

Un modo semplice per vedere quali sono gli output del nostro PLD è utilizzare il pin **A6** come input dell'osservatore logico e visualizzare i pixel verdi quando un output del PLD è `true` e i pixel gialli quando è ``false``.

```
forever(function () {
    if (pins.A6.digitalRead()) {
        light.setAll(0x00ff00)
    } else {
        light.setAll(0xffff00)
    }
    pause(100)
})
```

---
layout: two-cols-header
title: Programmable NOT gate
level: 3
---
## Porta NOT programmabile
::left::

La porta **NOT** prende il valore logico dell'input e lo inverte all'output. Questa è una porta con un solo input che utilizza solo il pin **A4** per l'input.

La porta **NOT** è cablata utilizzando clip di prova alligatore come mostrato nel seguente diagramma. Il pin di output **A1** è collegato all'osservatore al pin **A6**.

Lo script per programmare la porta **NOT** è semplicemente un inverso logico di ``||pins:digital read pin||`` all'interno di un ``||pins:digital write pin||``.

```
pins.A1.digitalWrite((!pins.A4.digitalRead()))
```

::right::

![NOT gate with pin assignments](/rete/images/logic-lab/pld/not-gate-pins.png)

![NOT gate wiring diagram](/rete/images/logic-lab/pld/not-gate-pld.png)

---
layout: two-cols-header
title: Programmable OR gate
level: 3
---

## Programmable OR gate

::right::
![OR gate with pin assignments](/rete/images/logic-lab/pld/or-gate-pins.png)

![OR gate wiring diagram](/rete/images/logic-lab/pld/or-gate-pld.png)

::left::

La porta **OR** prende due input e rende l'output ``true`` se qualsiasi input è ``true``.

I pin **A4** e **A7** sono gli input.

La porta **OR** è cablata utilizzando clip di prova alligatore come mostrato in questo diagramma.

Il pin di output **A2** è collegato all'osservatore al pin **A6**.

Lo script per programmare una porta **OR** sono due blocchi ``||pins:digital read pin||``, collegati con un ``||logic:or||``, all'interno di un ``||pins:digital write pin||``.

```
pins.A2.digitalWrite(pins.A4.digitalRead() || pins.A7.digitalRead())
```

---
layout: two-cols-header
title: Programmable AND gate
level: 3

---
::left::

## Porta AND programmabile

La porta **AND** prende due input e rende l'output ``true`` se entrambi gli input sono ``true``. I pin **A4** e **A7** sono gli input.

La porta **AND** è cablata utilizzando clip di prova alligatore come mostrato nel prossimo diagramma. Il pin di output **A3** è collegato all'osservatore al pin **A6**.

Lo script per una porta **AND** sono due blocchi ``||pins:digital read pin||``, collegati con un ``||logic:and||``, all'interno di un ``||pins:digital write pin||``.

```
pins.A3.digitalWrite(pins.A4.digitalRead() && pins.A7.digitalRead())
```

::right::

![AND gate with pin assignments](/rete/images/logic-lab/pld/and-gate-pins.png)

![AND gate wiring diagram](/rete/images/logic-lab/pld/and-gate-pld.png)

---
title: Combined logic 
level: 3
---
## Logica combinata 

Puoi programmare la tua scheda per avere più porte logiche che operano sui due input. Basta combinare gli script delle tre porte logiche di sopra in un unico ciclo ``||loops:forever||``.

```
forever(function () {
    pins.A1.digitalWrite((!pins.A4.digitalRead()))
    pins.A2.digitalWrite(pins.A4.digitalRead() || pins.A7.digitalRead())
    pins.A3.digitalWrite(pins.A4.digitalRead() && pins.A7.digitalRead())
    pause(100)
})
```
---
title: Input tests
level: 3
---
## Input tests

Puoi testare diverse combinazioni di input collegando gli altri estremi dei cavi con clip alligatore ai pin **A4** e **A7** a **GND** o **3.3V**. Il pin **GND** produrrà un valore di input ``false`` e **3.3V** produrrà un valore di input ``true``. Sposta l'altro estremo del cavo con clip alligatore collegato al pin osservatore **A6** a ciascuno degli output **A1**, **A2** e **A3** per vedere il risultato dell'operazione logica programmata per quei pin.

Come esempio, ecco la tabella di verità con le tensioni dei pin per l'operazione **NOT**:

A4 | A1 | Pixels
-|-|-
GND | 3.3V | ``[light.setAll(0x00ff00)]``
3.3V | GND | ``[light.setAll(0xffff00)]``
<br/>

Do test connections for the inputs and check the results for the **OR** and **AND** outputs.
---
layout: two-cols-header
title: True Table 
level: 3
---
::left::

## OR truth table

A4 | A7 | A2 | Pixels
-|-|-|-
GND | GND | ? | ?
GND | 3.3V | ? | ?
3.3V | GND | ? | ?
3.3V | 3.3V | ? | ?

::right::

## AND truth table

A4 | A7 | A3 | Pixels
-|-|-|-
GND | GND | ? | ?
GND | 3.3V | ? | ?
3.3V | GND | ? | ?
3.3V | 3.3V | ? | ?

---
title: XOR  device
level: 3
---
## XOR  device


Come abbiamo appreso in precedenza, l'operazione della porta **XOR** è composta da diverse altre porte. Il risultato `Q` è stato ottenuto da questa espressione nel codice:

```
let A = false
let B = false
let Q = (!A && B) || (A && !B)
```

Creeremo una porta **XOR** programmando un dispositivo logico combinato per essa. Questa volta diciamo che l'intera @boardname@ è una porta **XOR** programmata.

![XOR symbol with board image](/rete/images/logic-lab/pld/xor-cpx.png)

Useremo lo stesso schema di cablaggio che abbiamo utilizzato per la porta **OR** utilizzando **A4** e **A7** come pin di input con **A2** collegato al pin osservatore **A6**.

![XOR gate wiring diagram](/rete/images/logic-lab/pld/xor-gate-pld.png)

---
layout: two-cols-header
title: XOR  device
level: 3
---
::left::
## XOR  device

Il nostro script della porta logica è un po' diverso questa volta. Per semplificare la formazione dell'espressione per **XOR**, assegneremo variabili ai valori di input e output.
```
let A = false
let B = false
let Q = false
forever(function () {
    A = pins.A4.digitalRead()
    B = pins.A7.digitalRead()
    Q = !(A) && B || A && !(B)
    pins.A2.digitalWrite(Q)
    pause(100)
})
```
::right::
Collega gli input per **A4** e **A7** secondo la tabella di verità **XOR** e verifica se gli output nella tabella corrispondono ai tuoi risultati.

A4 | A7 | A2 | Pixels
-|-|-|-
GND | GND | GND | ``[light.setAll(0xffff00)]``
GND | 3.3V | 3.3V | ``[light.setAll(0x00ff00)]``
3.3V | GND |  3.3V | ``[light.setAll(0x00ff00)]``
3.3V | 3.3V | GND | ``[light.setAll(0xffff00)]``
