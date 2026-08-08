---
theme: default
background: https://cover.slickpic.com/u/41561/1/2000.jpg
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
title: Modulo 1 - Il Motore Intelligente
---

# 🤖 Costruisci la tua prima Creatura Cibernetica!
## Modulo 1: Il Motore Intelligente — Corso di Meccatronica Pratica

Dai vita alla materia con bit, elettroni e codice!

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-6 py-2 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold transition-all shadow-lg">
    ACCENDI I MOTORI <carbon:arrow-right class="inline"/>
  </span>
</div>

> **Obiettivo della Missione:** Progettare, cablare e programmare un controllore di velocità per un motore DC. Il primo vero passo per costruire qualsiasi robot!

<!--
[ELEMENTI VISUALI DA MOSTRARE]
- Immagine di copertina accattivante: un braccio robotico o un rover da esplorazione in stile Cyberpunk/Sci-Fi.
- Overlay grafico con testo che sfuma per dare un tocco cinematografico ed entusiasmante.
-->

---

# 🛠️ La Cassetta degli Attrezzi Virtuale
## I nostri due superpoteri per simulare gratis nel browser

- **🧱 Tinkercad (by Autodesk) — *Il LEGO dei circuiti***
  - Nessuna saldatura, zero rischi di prendersi la scossa o bruciare componenti reali!
  - Trascini i pezzi, fai i collegamenti con i cavi colorati e scrivi il codice per Arduino.
  - **Missione su Tinkercad:** Assembleremo l'hardware e scriveremo il software di controllo.

<br>

- **🪟 Falstad Circuit Simulator — *Il visore a Raggi X della corrente***
  - L'elettronica spesso sembra astratta perché la corrente non si vede... Falstad risolve il problema!
  - Mostra il flusso degli elettroni come pallini luminosi che corrono nei cavi a forma di cartoon.
  - **Missione su Falstad:** Visualizzeremo in tempo reale come funziona il segnale **PWM** per dominare la potenza del motore.

<!--
[ELEMENTI VISUALI DA MOSTRARE]
- Layout a due colonne affiancate:
  - Sinistra: Screenshot dell'interfaccia 3D/2D intuitiva di Tinkercad con Arduino e una breadboard.
  - Destra: Screenshot o GIF animata di Falstad che mostra impulsi verdi/gialli e forme d'onda dell'oscilloscopio.
-->

---

# 🧠 Cos'è la Meccatronica? (L'Approccio Top-Down)
## Non è un semplice motore che gira: è un sistema che RAGIONA!

- **⚡ Un motore da solo è "stupido":** Se lo colleghi a una pila gira sempre a palla finché non stacchi i fili. Non ha controllo.
- **🤖 Un sistema Meccatronico è "intelligente":** Gira alla velocità esatta che gli imponiamo noi in qualsiasi momento.
- **🏛️ I 3 Pilastri di ogni Robot:**

<div class="grid grid-cols-3 gap-4 mt-6 text-left">
  <div class="border border-blue-400/40 p-4 rounded-xl bg-blue-950/20">
    <h3 class="text-blue-400 font-bold text-lg mb-2">👁️ 1. SENSING (I Sensi)</h3>
    <p class="text-sm">Il <b>Potenziometro</b> (manopola). Legge l'intenzione dell'utente nel mondo fisico.</p>
  </div>
  <div class="border border-green-400/40 p-4 rounded-xl bg-green-950/20">
    <h3 class="text-green-400 font-bold text-lg mb-2">🧠 2. CONTROL (Il Cervello)</h3>
    <p class="text-sm"><b>Arduino Uno</b>. Prende decisioni logiche e calcola la potenza necessaria.</p>
  </div>
  <div class="border border-purple-400/40 p-4 rounded-xl bg-purple-950/20">
    <h3 class="text-purple-400 font-bold text-lg mb-2">💪 3. ACTUATION (I Muscoli)</h3>
    <p class="text-sm"><b>Transistor + Motore DC</b>. L'elettronica di potenza che scarica l'energia meccanica.</p>
  </div>
</div>

<!--
[ELEMENTI VISUALI DA MOSTRARE]
- Schema a blocchi interattivo (o PlantUML) con frecce di flusso dati:
  [ Sensore: Potenziometro ] ---> (Ingresso Analogico) ---> [ Cervello: Arduino ] ---> (Uscita PWM) ---> [ Muscolo: Transistor + Motore ]
-->

---

# 🛒 La Lista della Spesa per il Circuito
## Prendi i componenti dalla barra laterale di Tinkercad

- **🧠 1x Arduino Uno R3:** La scheda madre del nostro progetto.
- **🍞 1x Breadboard Piccola:** La piastra dove inserire i componenti per collegarli facilmente.
- **⚙️ 1x Motore DC (Giallo):** L'organo meccanico che trasformerà gli elettroni in rotazione.
- **🎛️ 1x Potenziometro (10kΩ):** La manopola del volume... ma usata per la velocità!
- **🔌 1x Transistor NPN (es. BC547 o TIP120):** L'interruttore elettronico ultra-veloce.
- **🛡️ 1x Diodo (1N4007):** Lo "Scudo di Capitan America" per proteggere i circuiti dai picchi induttivi.
- **🧱 1x Resistenza da 1kΩ:** Per evitare di inviare troppa corrente al transistor.

<!--
[ELEMENTI VISUALI DA MOSTRARE]
- Griglia fotografica 2x4 con le icone/rendering 3D di ciascuno dei 7 componenti presi direttamente dall'interfaccia di Tinkercad, con etichette colorate.
-->

---

# 🔌 Cabliamo il Sistema!
## Segui il codice colore dei cavi (come in un film di spie)

<div class="grid grid-cols-2 gap-6 text-left">

<div>

### 🎛️ 1. Lato Sensore (Input)
- **Potenziometro Pin SX** $\rightarrow$ `GND` di Arduino *(Cavo Nero)*
- **Potenziometro Pin DX** $\rightarrow$ `5V` di Arduino *(Cavo Rosso)*
- **Potenziometro Pin Centrale** $\rightarrow$ Pin Analogico **`A0`** *(Cavo Giallo)*

### 🛡️ 2. Protezione (Flyback)
- **Diodo in Parallelo al Motore:**
  - Striscia argentata (Catodo) verso il **`5V`**.
  - Assorbe i micidiali "calci di ritorno" di tensione quando il motore rallenta!

</div>

<div>

### 💪 3. Lato Attuatore & Potenza (Output)
- **Pin 9 Arduino** $\rightarrow$ Resistenza 1kΩ $\rightarrow$ **Base** del Transistor NPN
- **Emettitore** del Transistor $\rightarrow$ `GND` di Arduino
- **Collettore** del Transistor $\rightarrow$ Un capo del Motore DC
- Altro capo del Motore $\rightarrow$ **`5V`** di Arduino

</div>

</div>

<!--
[ELEMENTI VISUALI DA MOSTRARE]
- Diagramma ad alta risoluzione del circuito montato su breadboard in Tinkercad.
- I cavi devono seguire rigorosamente lo standard: Rosso per 5V, Nero per GND, Giallo/Verde per i segnali dati/controllo.
- Ingrandimento dettagliato del verso del diodo in parallelo ai due morsetti del motore.
-->

---

# 💻 Diamo la Vita al Motore! (Il Codice Arduino)
## Il loop infinito: Leggi $\rightarrow$ Decidi $\rightarrow$ Agisci

```cpp {all|2-3|5-8|10-12|14-16|18-20|all}
// Definiamo i "nomi" per i pin hardware
const int pinPotenziometro = A0; // Il nostro sensore di input
const int pinMotore = 9;         // Il nostro canale di output PWM

void setup() {
  // Configuriamo il pin 9 come USCITA per pilotare il transistor
  pinMode(pinMotore, OUTPUT);
}

void loop() {
  // FASE 1: LEGGI (Sensing) - Valore restituito da 0 a 1023
  int valoreLetto = analogRead(pinPotenziometro);

  // FASE 2: DECIDI (Logic) - Traduciamo la scala da 10-bit a 8-bit
  int velocitaMotore = map(valoreLetto, 0, 1023, 0, 255);

  // FASE 3: AGISCI (Actuation) - Spediamo la potenza desiderata
  analogWrite(pinMotore, velocitaMotore);

  delay(15); // Una micro-pausa per far respirare il chip!
}

```

---

# 🚀 Mettiamo in Moto!

## Premi "Avvia Simulazione" e goditi lo spettacolo!

* **1.** Clicca sul pulsante verde **"Avvia Simulazione"** in alto a destra su Tinkercad.
* **2.** Clicca con il mouse sulla manopola del potenziometro e ruotala lentamente.
* **3.** Osserva i numeri dei **RPM (Giri al Minuto)** sul motore DC cambiare in tempo reale!

```
┌─────────────────┐      0-5V      ┌─────────────────┐     0-255 PWM    ┌─────────────────┐
│   POTENZIOMETRO ├───────────────►│   ARDUINO UNO   ├─────────────────►│ TRANSISTOR + DC │
└─────────────────┘  (analogRead)  └─────────────────┘   (analogWrite)  └─────────────────┘

```

> 🎉 **LEVEL UP SBLOCCATO:** Hai creato ufficialmente il tuo primo **Sistema Meccatronico a Catena Aperta (Open Loop)**!

---

# 📐 Teoria Pilastro 1: Il Potenziometro & l'ADC

## Come spiegare il mondo analogico a un computer digitale

* **I computer parlano solo in 0 e 1:** Non capiscono le sfumature della realtà (come la posizione fluida di una manopola).
* **L'ADC (Analog to Digital Converter):** È il "traduttore" dentro Arduino che converte la tensione continua in numeri interi.
* **Risoluzione a 10-Bit:**
* $2^{10} = 1024$ possibili gradini di misura!
* $0\text{V} \rightarrow 0$ | $2.5\text{V} \rightarrow 512$ | $5\text{V} \rightarrow 1023$



$$\text{Valore Digitale (ADC)} = \left( \frac{V_{\text{in}}}{5\,\text{V}} \right) \times 1023$$

* **In sintesi:** Ruotando la manopola modifichi la tensione; l'ADC la trasforma in un numero tra $0$ e $1023$ che il codice C++ può elaborare!

---

# ⚡ Teoria Pilastro 2: Perché serve il Transistor?

## Cervello vs Muscoli (O perché non collegare il motore ad Arduino!)

* **💥 Il rischio distruzione:**
* Un pin di Arduino eroga al massimo **$20\text{ mA}$** (milliampere).
* Il motore DC richiede da **$200\text{ mA}$ fino a oltre $1000\text{ mA}$** allo spunto!
* *Collegare il motore diretto ad Arduino = Bruciare il pin in un microsecondo!*


* **🤼 Il Transistor NPN (BC547) come un Relè Ultraveloce:**
* **Base (B):** La "maniglia" azionata da Arduino con pochissima corrente.
* **Collettore (C) ed Emettitore (E):** Il tubo principale dove passa l'energia pesante della pila per il motore.



> **Metafora:** Arduino è l'allenatore con il fischietto (dà solo l'ordine), il Transistor è l'atleta sollevatore di pesi (fa tutto lo sforzo fisico)!

---

# 🌊 Teoria Pilastro 2: Il Segnale PWM

## Il "trucco di magia" della potenza digitale

* **Come fa un segnale digitale (ON/OFF) a regolare la velocità in modo fluido?**
* Arduino non può erogare $1.5\text{V}, 2\text{V}$ o $3.7\text{V}$ analogici... o sputa $0\text{V}$ o sputa $5\text{V}$!
* **Soluzione:** **PWM (Pulse Width Modulation)** — Accende e spegne il pin centinaia di volte al secondo!

> **La metafora della lampadina:** Se accendi e spegni l'interruttore della luce della tua stanza 1000 volte al secondo, la tua vista non vedrà il lampeggio, ma percepirà una luce a mezza intensità!

---

# 🔄 Teoria Pilastro 3: Open Loop vs Closed Loop

## Correre a occhi aperti vs correre a occhi bendati!

### 🔴 Catena Aperta (Open Loop)

*Quello che abbiamo realizzato oggi!*

* **Funzionamento:** Inviamo il comando ("Gira a metà potenza"), ma non verifichiamo la velocità REALE.
* **Il Problema:** Se tocchi la ruota con il dito e la freni, la velocità crolla, ma Arduino **non lo sa** e non aumenta la potenza.
* **Esempio:** Correre a occhi bendati sperando di andare dritti!

### 🟢 Catena Chiusa (Closed Loop)

*Il prossimo step della Meccatronica!*

* **Funzionamento:** Aggiungiamo un sensore (Encoder) che misura costantemente i giri reali e li comunica ad Arduino (**Feedback**).
* **Il Vantaggio:** Se il motore rallenta per un ostacolo, Arduino lo rileva e dice: *"Ehi! Stiamo rallentando! Diamo più PWM!"*.
* **Esempio:** Il Cruise Control della macchina.

---

# 🏁 Checklist Finale & Sfida Pratica

## Hai sbloccato le competenze del Modulo 1!

* [x] **Skill 1:** Assemblaggio di circuiti con elettronica di potenza su Tinkercad.
* [x] **Skill 2:** Traduzione dal mondo fisico al digitale con l'ADC a 10-Bit (`analogRead`).
* [x] **Skill 3:** Gestione della potenza del motore con il segnale PWM (`analogWrite`).
* [x] **Skill 4:** Protezione dai picchi induttivi tramite Diodo Flyback.

### 🧪 La Sfida da Laboratorio (Hacker Mindset):

> **Cosa succede in simulazione se rimuovi il Diodo di Ricircolo dal circuito?**
> *(Spoiler: In simulazione potrebbe funzionare ancora... ma nel mondo reale il transistor si distruggerebbe per la sovratensione al primo spegnimento! Prova a riflettere sul perché!)*

> **🔮 NEXT LEVEL (Modulo 2):** Aggiungeremo gli "occhi" al motore con un **Encoder Ottico** per realizzare il nostro primo controllo intelligente a **Catena Chiusa (Closed Loop)**!

```
