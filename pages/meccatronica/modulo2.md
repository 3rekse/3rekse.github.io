---

<!-- theme: default
background: https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
title: Modulo 2 - L'Occhio del Robot
-->

## 👁️ L'Occhio del Robot: Il Feedback!
### Modulo 2: Controllo a Catena Chiusa — Corso di Meccatronica Pratica [1]

Passiamo da un motore che esegue ordini alla cieca a un sistema che "sente" e corregge i propri errori grazie ai sensori, i veri "occhi" del sistema meccatronico [2].

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-6 py-2 rounded-lg cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold transition-all shadow-lg">
    CHIUDI L'ANELLO <carbon:arrow-right class="inline"/>
  </span>
</div>

> **Obiettivo della Missione:** Costruire un sistema a Catena Chiusa (Closed Loop) integrando un sensore di velocità o un encoder per mantenere costanti i RPM del motore anche sotto carico [3, 4].

---

## 🛑 Il Problema del Modulo 1: La "Cecità" dell'Open Loop
### Perché inviare semplicemente potenza non basta più?

- **📉 Cosa succede se fieni il motore?**
  - Nel Modulo 1 inviavamo un segnale PWM fisso (es. `analogWrite(9, 127)` per il 50% di potenza).
  - Se il robot incontra una salita o un ostacolo, il motore **rallenta o si blocca**, ma Arduino continua a mandare sempre lo stesso valore!
  - **Risultato:** Il robot non mantiene la velocità desiderata.

<br>

- **🏎️ La metafora dell'Automobile in Salita:**
  - Se blocchi il pedale dell'acceleratore a metà strada (Open Loop) e inizi una salita ripida, la macchina rallenta.
  - Per mantenere gli $80\text{ km/h}$, il guidatore umano guarda il tachimetro e **preme di più il pedale**.
  - **Obiettivo di oggi:** Insegnare ad Arduino a fare la stessa identica cosa!

<!--
[ELEMENTI VISUALI DA MOSTRARE]
- Layout a due colonne:
  - Sinistra: Grafico della velocità nel tempo di un sistema Open Loop dove la velocità crolla quando si applica un carico (un "dito" sulla ruota).
  - Destra: Vignetta dell'automobilista che guarda il tachimetro e adegua la pressione sul pedale.
-->

---

## 🔄 Dal Segnale al Feedback: L'Architettura Closed Loop
### L'Approccio Top-Down alla Catena Chiusa

- **Il ciclo fondamentale di ogni sistema intelligente:**

```text
           ┌───────────────┐      Errore      ┌───────────────┐    Comando PWM    ┌───────────────┐
Target (RPM) ─►│  Nodo Somma   ├─────────────────►│   ARDUINO     ├──────────────────►│ MOTOR DRIVER  │
└───────▲───────┘                  └───────────────┘                   └───────┬───────┘
│                                                                      │
│                        ┌───────────────┐                             │
└────────────────────────┤ SENSORE / ENCO├─────────────────────────────┘
Misura RPM     └───────────────┘        Rotazione Reale
```

<br>

1. **Target ($r$):** La velocità desiderata dall'utente (impostata col potenziometro).
2. **Misura ($y$):** La velocità reale letta dal sensore/encoder montato sul motore.
3. **Calcolo dell'Errore ($e$):** 
   $$\text{Errore} = \text{Target} - \text{Misura}$$
4. **Azione Correttiva:** Se l'Errore $> 0$ (siamo troppo lenti), Arduino **aumenta** il PWM per compensare!

<!--
[ELEMENTI VISUALI DA MOSTRARE]
- Diagramma a blocchi animato o ben strutturato in stile ingegneristico con nodi evidenziati in colore diverso (Verde = Target, Rosso = Errore, Blu = Output).
-->

---

## 🛠️ Nuovi Strumenti e Componenti
### Aggiungiamo la vista al circuito del Modulo 1!

- **🎰 1x Encoder Ottico a Disco (o Sensore ad Effetto Hall):**
  - Un dischetto traforato montato sull'albero del motore che interrompe un fascio di luce ad infrarossi.
- **👁️ 1x Sensore Optocoppia a Forcella (FC-03):**
  - Conta quante "tacche" del disco passano in un secondo.
- **⚡ 1x Integrato Driver Ponte H (es. L293D / L298N) [Opzionale]:**
  - Per controllare non solo la velocità ma anche **invertire la direzione** di marcia.
- **🖥️ Il Serial Plotter dell'IDE / Tinkercad:**
  - Il nostro "Oscilloscopio software" per tracciare in tempo reale le curve di velocità.

<!--
[ELEMENTI VISUALI DA MOSTRARE]
- Foto/Render 3D dell'encoder ottico: disco con fessure + sensore a forcella.
- Animazione concettuale: il disco gira, il LED passa attraverso le fessure creando impulsi quadrati ON/OFF (HIGH/LOW).
-->

---

## ⚡ Come "Conta" Arduino? Gli Interrupt Hardware
### Catturare eventi ultra-veloci senza bloccare il codice!

- **🐢 Il problema del codice lento:**
  - Se usiamo `delay()` o loop lunghi, Arduino potrebbe "perdersi" le tacche del disco dell'encoder mentre gira a 3000 RPM!
- **🚨 La Soluzione: Gli INTERRUPT (I "Campanelli d'Allarme"):**
  - Un Interrupt mette in "pausa" ciò che Arduino sta facendo, esegue una funzione micro-rapida (ISR) e torna al codice principale.
  - Quando una tacca dell'encoder passa davanti al sensore, il pin cambia stato (`RISING`) e scatta il contatore!

```cpp
// Esempio di configurazione dell'Interrupt sul Pin 2 di Arduino
volatile long impulsiEncoder = 0;

void contaImpulso() {
  impulsiEncoder++; // Aumenta di 1 ad ogni tacca del disco!
}

void setup() {
  // Collega il Pin 2 alla funzione contaImpulso sul fronte di salita
  attachInterrupt(digitalPinToInterrupt(2), contaImpulso, RISING);
}

```

---

## 💻 Il Codice del Controllo Proporzionale (P)

### Il nostro primo vero algoritmo di controllo!

```cpp {all|2-5|7-12|14-19|21-25|all}
const int pinPWM = 9;
const int pinSensore = 2;
volatile int conteggioImpulsi = 0;
unsigned long ultimoTempo = 0;
float Kp = 1.5; // Guadagno Proporzionale (I muscoli della reazione)

void contaTacca() { conteggioImpulsi++; }

void setup() {
  pinMode(pinPWM, OUTPUT);
  attachInterrupt(digitalPinToInterrupt(pinSensore), contaTacca, RISING);
}

void loop() {
  if (millis() - ultimoTempo >= 100) { // Calcola ogni 100ms
    int rpmMisurati = (conteggioImpulsi * 600) / 20; // 20 tacche per giro
    conteggioImpulsi = 0; // Resetta il contatore
    ultimoTempo = millis();

    int rpmTarget = map(analogRead(A0), 0, 1023, 0, 3000); // Impostato da potenziometro
    int errore = rpmTarget - rpmMisurati;                  // CALCOLO ERRORE

    // ALGORITMO PROPORZIONALE: PWM adatti in base all'errore
    int pwmOutput = constrain(map(rpmTarget, 0, 3000, 0, 255) + (errore * Kp), 0, 255);
    analogWrite(pinPWM, pwmOutput);
  }
}

```

---

## 📊 Il Test di Risposta nel Tempo (Serial Plotter)

### Guardiamo il cervello del robot in azione!

* **Tracciamo due linee sul grafico:**
* 🔵 **Linea Blu:** Velocità Target richiesta dal potenziometro ($r$).
* 🔴 **Linea Rossa:** Velocità Reale misurata dall'encoder ($y$).



* **🧪 L'Esperimento del "Dito sul Motore":**
1. Porta il motore a $1500\text{ RPM}$. Le due linee si sovrappongono perfettamente.
2. **Frena il motore con le dita!**
3. **Cosa osservi?** La linea rossa tenta di scendere, ma Arduino spinge immediatamente il segnale PWM verso l'alto per riportare la linea rossa sulla linea blu!
4. Quando rilasci la ruota, il sistema stabilizza di nuovo i RPM senza andare in fuorigiri.



---

## 🎛️ Regolare la Reattività: Il Parametro $K_p$

### Troppo pigro o troppo aggressivo? Trova il giusto equilibrio!

* **Cos'è $K_p$ (Guadagno Proporzionale)?**
* È la "sensibilità" del robot alle deviazioni. Determina con quanta forza reagisce all'errore.



> **Metafora del Videogioco:** Imposta la sensibilità della mira o dello sterzo: se è troppo bassa non curvi in tempo, se è troppo alta finisci fuori strada al minimo tocco!

---

## 🏆 Confronto Finale: Open Loop vs Closed Loop

### La differenza tra un giocattolo e un robot industriale

| Caratteristica | 🔴 Open Loop (Modulo 1) | 🟢 Closed Loop (Modulo 2) |
| --- | --- | --- |
| **Sensori di Feedback** | Assenti 🚫 | Presenti (Encoder ottico/Hall) 👁️ |
| **Reazione ai Disturbi** | Nessuna (Il motore rallenta/si blocca) | Immediata (Aumenta la potenza) |
| **Costo & Complessità** | Molto Basso / Codice banale | Maggiore / Richiede Interrupt & Algoritmi |
| **Precisione** | Bassa (Dipende dalla carica della batteria) | Elevata (Mantiene il setpoint costante) |
| **Applicazione Tipica** | Ventilina del PC, Spazzolino elettrico | Bracci Robotici, Stampanti 3D, Droni |

---

## 🏁 Checklist del Modulo 2 & Prossimi Passi!

### Complimenti! Hai completato il secondo livello meccatronico!

* [x] **Skill 1:** Comprensione dell'Architettura a Anello Chiuso (Closed Loop).
* [x] **Skill 2:** Lettura di un Encoder Ottico e conteggio velocità tramite **Interrupt Hardware**.
* [x] **Skill 3:** Calcolo dell'Errore in tempo reale ($\text{Target} - \text{Misura}$).
* [x] **Skill 4:** Implementazione e tuning del **Controllo Proporzionale ($K_p$)**.

### 🧪 Sfida Avanzata per gli Hacker del Codice:

> **Cosa succede se provi ad integrare anche la componente Integrativa ($K_i$) per eliminare l'errore a regime permanente?** *(Anteprima del controllo PID completo!)*

> **🔮 NEXT STEP (Modulo 3):** È ora di dare le gambe alla nostra creatura! Passeremo dal singolo motore alla **Cinematica di un Rover a guida differenziale a 2 ruote**!

```