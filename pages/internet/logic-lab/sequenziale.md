---
layout: cover
title: Logica Combinatoria e Sequenziale
level: 2
---

# PROBLEMA / OBIETTIVO  3
Costruzione del chipset di memoria.

## Logica Combinatoria e Sequenziale
A differenza dei chip di elaborazione del computer, che si basano sulla **logica combinatoria**, la logica di memoria del computer richiede una **logica sequenziale** basata su clock. 

---
layout: cover
title: MEMORIA
level: 3
---

# La memoria

La memoria svolge un ruolo cruciale nel consentire ai computer e ai dispositivi elettronici di archiviare, recuperare e utilizzare dati e istruzioni in modo efficiente per eseguire le operazioni desiderate.

 🔑 conservare dei dati nel tempo allo scopo di influenzare un' azione futura.

--- 
level: 3
title: Logica Combinatoria  

---

# Logica Combinatoria 🔐

Il tipo di logica digitale utilizzata per costruire tutte le porte e i chip che abbiamo visto finora è la seguente:

- Gli input attuali del chip sono "lì" - fissi e immutabili
- L'output del chip è una funzione ("combinazione") degli input attuali e solo degli input attuali

Questo tipo di logica digitale è detta: Logica combinatoria 🔐

ALU: è il chip combinatorio "più alto" ♕ dove l'OUTPUT dipende dagli attuali input. 

### La logica digitale dell'ALU dipende dal tempo 🕰 ?

### La logica digitale della memoria RAM dipende 🕰 dal tempo ?

📝 Chiameremo:

# Logica sequenziale
La logica digitale che dipende dal tempo 

--- 
level: 3
title: Clock  

--- 

# Clock

Nel contesto della logica digitale e dei circuiti, il termine "clock" si riferisce a un segnale che oscilla tra un alto e un basso stato, simile al movimento di un pendolo in un orologio. 

Questo segnale di clock è fondamentale per il funzionamento di molti circuiti digitali, compresi i flip-flop e la memoria RAM.

Il "tick" e il "tock" sono termini spesso usati per descrivere le due fasi di un ciclo di clock:

- Il "tick" corrisponde alla transizione del segnale di clock da un basso a un alto stato (rising edge). t<sub>x</sub>->t<sub>x</sub>+
- Il "tock" corrisponde alla transizione del segnale di clock da un alto a un basso stato (falling edge). t<sub>x</sub>+-> t<sub>x+1</sub>

In molti circuiti digitali, le operazioni vengono eseguite o i dati vengono catturati su uno di questi bordi del segnale di clock. 

![dflipflop](/logica/clock.png)


--- 
level: 3
title: Flip Flip   

--- 

# Flip-Flop ?

Un flip-flop è un elemento di base utilizzato nei circuiti digitali per memorizzare un bit di informazione. Esistono diversi tipi di flip-flop, ciascuno con diverse caratteristiche e usi. Ecco alcuni dei tipi più comuni:

1. **[Flip-flop SR (Set-Reset flip-flop)](https://tinyurl.com/26r4txxm)**: Questo flip-flop ha due ingressi, S (set) e R (reset). Quando l'ingresso S è alto, il flip-flop viene impostato al suo stato "set". Quando l'ingresso R è alto, il flip-flop viene resettato al suo stato "reset".[Set-Reset flip-flop con Clock](https://tinyurl.com/24f73ly5)

2. **Flip-flop JK**: Questo è un tipo di flip-flop che ha due ingressi, J e K. A seconda dei valori di questi ingressi quando il clock cambia stato, il flip-flop può mantenere il suo stato attuale, passare al suo stato opposto, o impostare o resettare il suo stato.

3. **Flip-flop T (Toggle flip-flop)**: Questo flip-flop ha un solo ingresso, T. Quando l'ingresso T è alto e il clock cambia stato, lo stato del flip-flop viene invertito.

4. **Flip-flop D (Data flip-flop)**: Questo flip-flop ha un ingresso di dati (D) e un ingresso di clock (CLK). Quando il clock cambia stato (ad esempio, da basso ad alto), il valore all'ingresso D viene catturato e trattenuto fino al prossimo cambio di stato del clock.
Ogni tipo di flip-flop ha i suoi usi specifici nei circuiti digitali, a seconda delle esigenze di memorizzazione e controllo dello stato.
In un flip-flop D, il dato all'ingresso D viene catturato e trattenuto quando il clock va dal "tick" al "tock" (rising edge).


---
layout: two-cols-header
level: 3
title: Data flip-flop

---
## Flip-Flop D  DFF (Data flip-flop)

 Un DFF è un tipo di flip-flop che ha un ingresso di dati (D) e un ingresso di clock (CLK). Quando il clock cambia stato (ad esempio, da basso ad alto), il valore all'ingresso D viene catturato e trattenuto fino al prossimo cambio di stato del clock.

Ecco un esempio di come potrebbe essere implementato un [flip-flop D](https://tinyurl.com/24zdtlap) 

::left::

![dflipflop](/internet/images/logic-lab/DFF.png)


::right::

In questo esempio, `d` è l'ingresso di dati, `clk` è l'ingresso di clock, `q` è l'uscita del flip-flop, e `notq` è l'uscita negata. Quando il clock cambia da basso ad alto (una "rising edge"), il valore di `d` viene catturato e inviato all'uscita `q`, e il valore negato di `d` viene inviato all'uscita `notq`.

![dflipflop](/logica/3_1.png)

--- 
layout: cover
level: 3
title: Registri
---

# Registri 
 Un registro è un dispositivo di archiviazione che può "memorizzare" o "ricordare" un valore nel tempo, implementando il comportamento di archiviazione classico out(t) = out(t - 1). 
 
 Un DFF, d'altra parte, può solo produrre in uscita il suo input precedente, cioè, out(t) = in(t - 1).

Questo suggerisce che un registro può essere implementato da un DFF semplicemente alimentando l'uscita di quest'ultimo di nuovo nel suo ingresso, creando un dispositivo di archiviazione. 

Presumibilmente, l'uscita di questo dispositivo in qualsiasi momento t ripeterà la sua uscita al tempo t - 1, producendo la funzione classica attesa da un'[unità di archiviazione](https://tinyurl.com/29syqpbk).

![dflipflop](/logica/3_2.png)

---
layout: two-cols-header
level: 3
title: Reistri 
class: "border-l-36 border-green-600"

---

## Ora tocca a te 
Progetto 3 Obiettivo 1 e 2

![dflipflop](/logica/3_3.png)


Costruire 2 chips : [1-bit register e 16-bit register](https://nand2tetris.github.io/web-ide/chip/)

::left::

```
/**
 * 1-bit register:
 * If load is asserted, the register's value is set to in;
 * Otherwise, the register maintains its current value:
 * if (load(t)) out(t+1) = in(t), else out(t+1) = out(t)
 */
CHIP Bit {
    IN in, load;
    OUT out;
  }

CHIP Register {
    IN in[16], load;
    OUT out[16];
}

```

::right ::

![dflipflop](/logica/tt.png)



--- 
layout: two-cols-header
level: 3
title: RAM 

---

# RAM, un'unità di memoria ad accesso diretto

::right::
![dflipflop](/logica/3_4.png)

::left::

Un'unità di La logica di accesso diretto della RAM selezionerà il registro numero m, che poi emetterà il suo
valore di output al pin di output della RAM. Questa è un'operazione combinatoria, indipen-
dente dal clock.memoria ad accesso diretto, chiamata anche RAM, è un array di registri n w-bit,
dotata di circuiti di accesso diretto. 


Il numero di registri (n) e la larghezza di ogni registro (w) sono chiamati rispettivamente dimensione e larghezza della memoria. 

---
layout: two-cols-header
level: 3
title: Ram 
class: "border-l-36 border-green-600"

---

## Ora tocca a te 

Costruire una gerarchia di tali dispositivi di memoria, tutti larghi 16 bit, ma di dimensioni variabili:
unità RAM8, RAM64, RAM512, RAM4K e RAM16K. 
Tutti questi chip di memoria hanno esattamente la stessa API, e quindi li descriviamo in un unico diagramma parametrico

La logica di accesso diretto della RAM selezionerà il registro numero m, che poi emetterà il suo
valore di output al pin di output della RAM. Questa è un'operazione combinatoria, indipen-
dente dal clock.
::right ::

![dflipflop](/logica/3_6.png)

::left::

Leggi: Per leggere il contenuto del registro numero m, inseriamo m nell'input dell'indirizzo.


Scrivi: Per scrivere un nuovo valore di dati d nel registro numero m, inseriamo m nel
input dell'indirizzo, d nell'input in, e affermiamo il bit di input di load. 
Questo fa sì che la logica di accesso diretto della RAM selezioni il registro numero m, e il bit di carico lo abiliti.
Nel prossimo ciclo di clock, il registro selezionato si impegnerà con il nuovo valore (d), e l'
output della RAM inizierà a emetterlo.

---
layout: two-cols-header
level: 3
title: Ram 8 registri 
class: "border-l-36 border-green-600"

---

## RAM con 8 Registri da 16 bit


::left ::

![dflipflop](/logica/ram8.png)
RAM8 ha 8 Registri INPUT 3 bit Address ; 1 load bit;   In 16 bits ; OUTPUT out 16 bit 

::right::

| chip name | n | k |
|---|---|---|
| RAM8 | 8 | 3 |
| RAM64 | 64 | 6 |
|RAM512 | 512 | 9 |
|RAM4K | 4096 | 12 |
|RAM16K | 16384 | 14 |

--- 
level: 3
title: chip contatore digitale 
class: "border-l-36 border-green-600"
---

## Contatore
- Un **contatore** è un'astrazione fondamentale in elettronica e informatica utilizzata per memorizzare e contare valori. 
- Utilizzo un contatore per contenere l'indirizzo dell'istruzione che un computer deve eseguire.
- Il contatore è progettato per incrementarsi di 1 in ogni ciclo di clock, consentendo al computer di recuperare e eseguire l'istruzione successiva nel programma.

### Funzionalità del Contatore
- Il contatore deve essere **caricabile e azzerabile**, il che significa che deve essere possibile impostare il contatore su un valore specifico (come l'istruzione numero n) e azzerarlo quando necessario.
- L'interfaccia del chip contatore è simile a quella di un registro e include due bit di controllo aggiuntivi: **reset** e **inc**.
- Quando il bit **inc=1**, il contatore incrementa il suo stato ad ogni ciclo di clock emettendo il valore **out(t) = out(t-1) + 1**.
- Per resettare il contatore a 0, si imposta il bit di **reset**; per inizializzarlo su un'altra base di conteggio **d**, si inserisce **d** nell'input e si attiva il bit di **caricamento**.

--- 
layout: two-cols-header
level: 3
title: chip contatore digitale 
class: "border-l-36 border-green-600"
---
## Operazioni di base del PC
Il computer che costruiremo dovrà tenere traccia di quale istruzione deve essere recuperata ed eseguita successivamente
Questo viene fatto utilizzando un registro tipicamente chiamato Program Counter 
PC viene utilizzato per memorizzare l'indirizzo dell'istruzione che dovrebbe essere recuperata ed eseguita successivamente


- PC load n  PC= n - facilita il "salto a" e il recupero di alcune istruzioni
- PC increment PC++ facilita il recupero dell'istruzione successiva
- PC reset PC=0   facilita la ripartenza del programma. L'esecuzione del programma può essere riavviata in qualsiasi momento reimpostando il contatore su 0, che presumibilmente è l'indirizzo della prima istruzione del programma.

::right::
 ![progcount](/logica/pc.png)
 
::left:: 
Raccomandazione:
Inizia costruendo un chip per PC di base che abbia una modalità e un solo bit di controllo: inc;
Successivamente, estendi la progettazione e il codice HDL per gestire il bit di caricamento e il bit di ripristino.

--- 
layout: cover
level: 3
title: Computer per uso generale

---

## Computer per uso generale

Un computer progettato per scopi generici e non specifici, in grado di eseguire una vasta gamma di applicazioni e compiti, come i computer desktop o laptop che usiamo comunemente.

Per comprendere meglio il funzionamento interno e le operazioni di base del sistema occorre: 

- **Trattare il computer come astrazione:** indica la visione del computer come un'entità astratta o concetto piuttosto che come un insieme di componenti fisici. Questo approccio consente di concentrarsi sulle funzionalità e sulle operazioni del computer in modo più concettuale.

- **Integrazione dei moduli in un computer programmabile**: si riferisce al processo di aggiunta di componenti o moduli hardware e software in un computer che può essere programmato per svolgere una varietà di compiti. Questo processo potrebbe includere l'installazione di schede aggiuntive, chip di memoria o altri componenti che espandono le funzionalità del computer.

- **Apprendimento dell'uso del computer attraverso il linguaggio macchina**: suggerisce che si imparerà a utilizzare il computer a un livello più basso, cioè tramite il linguaggio macchina, che è il linguaggio di programmazione di basso livello comprensibile direttamente dalla CPU. Questo implica una maggiore comprensione delle operazioni di base del computer e della sua architettura.

 
--- 
layout: cover
level: 3
title: Computer systems

---

## Computer systems are flexible and versatile

Lo stesso hardware può eseguire molti programmi diversi (software)

• La memoria del computer può archiviare programmi, proprio come memorizza i dati

![progcount](/logica/archi.png)

--- 
layout: cover
level: 3
title: Il processore

---

## Il processore (CPU) manipola una serie di registri:
 
• Registri interni nella CPU (pochi, accesso diretto, per nome)

• Registri residenti in memoria RAM (molti, accessibili tramite indirizzo)

## Linguaggio Macchina 

• Un formalismo per accedere e manipolare i registri 

--- 
layout: two-cols-header
level: 3
title: Tipi di registro

---

# Tipi di registro interni alla CPU :

- **Data registers** Contengono valori di dati
- **Address register** Contiene un indirizzo
- **Instruction register** Contiene un'istruzione

Tutti questi registri sono dei contenitori che contengono bit

Il numero e la larghezza dei bit dei registri variano da un computer all'altro

La struttura e la forma delle istruzioni nei linguaggi macchina possono essere diverse a seconda del tipo di computer o architettura utilizzata ma lo scopo fondamentale dei linguaggi macchina è sempre lo stesso, ovvero manipolare i registri del computer per eseguire operazioni specifiche. 

Anche se la sintassi può variare, la semantica (il significato) e l'insieme di operazioni che possono essere eseguite rimane coerente.

--- 
layout: two-cols-header
level: 3
title: Tipi di registro

---

# Typical operations
The syntax of machine languages varies across computers
The semantics is the same: Manipulating registers.

::right::

- add R1, R2  // R1 = R1 + R2
- addi R1, 73 // R1 = R1 + 73
- mov R1, R2 // R1 = R2
- load R1, 137 // R1 = Memory[137]
- jgt R1, 15// if R1>0 goto 15

Di solito il processore esegue le istruzioni in sequenza, una dopo l'altra, nell'ordine in cui sono memorizzate.

A volte in determinate situazioni, potremmo aver bisogno di interrompere l'esecuzione sequenziale delle istruzioni e passare direttamente all'esecuzione di un'altra istruzione. Questo "salto" può essere necessario per condizioni specifiche o per eseguire una parte diversa del programma.

::left::

![lm](/logica/ml.png)

--- 
layout: two-cols-header
level: 3
title: Branching

---
## Branching
Eseguire un'istruzione diversa da quella successiva in base a condizioni specifiche o a istruzioni di salto.

  - **Esempio: Iniziare una nuova iterazione in un ciclo**
    - Quando il programma decide di iniziare una nuova iterazione all'interno di un ciclo anziché eseguire l'istruzione successiva. Questo consente di ripetere o saltare parti specifiche del codice in base alle condizioni stabilite nel programma.

::right::

Vesione Simbolica Estesa

```
...
// Adds 1 to R1, repetitively
(LOOP) addi R1,1
...
 goto LOOP //jmp LOOP "indirizzo fisico" 

...   
Programma 
+ Facile da realizzare
+ Leggibile 
+ Rilocabile 

```
::left::

Vesione Simbolica Base

```
...
// Adds 1 to R1, repetitively
13 addi R1,1
...
27 goto 13 //jmp linea # 13 "indirizzo fisico" 
...   

```
--- 
layout: two-cols-header
level: 3
title: Programma simbolico

---

Programma simbolico: Si riferisce a un programma scritto utilizzando simboli o rappresentazioni astratte anziché direttamente nel codice macchina.

Tradotto: Processo di conversione del programma simbolico in istruzioni leggibili dalla macchina.

Istruzioni: Comandi specifici o passaggi che il computer può comprendere ed eseguire.

Decodificare: Il computer traduce le istruzioni in un formato che può eseguire.

Eseguire: Il computer esegue i comandi specificati nelle istruzioni per svolgere le attività desiderate.
::left::

Symbolic program
Assembly (language)

```
// Sets R2 to abs(R1)
// R2 ← R1
mov R2,R1
// if (R2 > 0) goto cont
jgt R2,CONT
// R2 ← –R1
movi R2,0
sub R2,R1
CONT:
// Here R2 = abs(R1)

```
::right:: 

Binary code

```
0101111100111100
1010101010101010
1100000010101010
1011000010000001
...

```

Translate Load and execute

Assembler (tool):
Translation: INPUT symbolic program OUTPUT Binary code.