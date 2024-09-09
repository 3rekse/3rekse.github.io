---
layout: cover
level: 4
title: React

---

### 🧠

Omarillo-9

## React è una **libreria** JavaScript, creata da Facebook, usata principalmente per costruire interfacce utente, specialmente per applicazioni a pagina singola (SPA). 

## React si concentra sulla creazione di componenti UI riutilizzabili.

---
<!--
layout: cover
level: 4
title: React

---

### 🧠

Omarillo-2

## Strutturare un progetto React in modo efficace è essenziale per garantire manutenibilità, scalabilità e leggibilità del codice. Di seguito trovi una guida su come strutturare un progetto React seguendo delle buone pratiche.

---
layout: cover
level: 5
title: Struttura di base

---

### 🧠

Omarillo-1

### Struttura di base di un progetto React

1. **Inizializzazione del progetto:**
   Per iniziare un progetto React, puoi utilizzare `create-react-app`:

   ```bash
   npx create-react-app nome-progetto
   cd nome-progetto
   ```

   Questo comando crea Strutturare un progetto React in modo efficace è essenziale per garantire manutenibilità, scalabilità e leggibilità del codice. Di seguito trovi una guida su come strutturare un progetto React seguendo delle buone pratiche.

---
layout: cover
level: 5

---

### 🧠

Omarillo-3
 
##  **Struttura iniziale di base:**

Di solito, la struttura di base generata da `create-react-app` è simile a questa:

```

   nome-progetto/
   ├── node_modules/
   ├── public/
   │   ├── index.html
   │   └── ...
   ├── src/
   │   ├── App.css
   │   ├── App.js
   │   ├── App.test.js
   │   ├── index.css
   │   ├── index.js
   │   ├── logo.svg
   │   └── ...
   ├── package.json
   └── README.md
```

---
layout: cover
level: 5

---

### 🧠 Omarillo-4 Propongo una Struttura scalabile.

   Quando il progetto cresce, è utile dividere il codice in moduli e componenti logici.
   
   <div class="scrollable">

   ```
   nome-progetto/
   ├── node_modules/
   ├── public/
   │   ├── index.html
   ├── src/
   │   ├── assets/
   │   │   ├── images/
   │   │   └── styles/
   │   │       └── global.css
   │   ├── components/
   │   │   ├── Header/
   │   │   │   ├── Header.js
   │   │   │   ├── Header.css
   │   │   │   └── Header.test.js
   │   │   └── Footer/
   │   │       ├── Footer.js
   │   │       ├── Footer.css
   │   │       └── Footer.test.js
   │   ├── pages/
   │   │   ├── Home/
   │   │   │   ├── Home.js
   │   │   │   ├── Home.css
   │   │   └── About/
   │   │       ├── About.js
   │   │       └── About.css
   │   ├── services/
   │   │   └── api.js
   │   ├── store/
   │   │   └── index.js
   │   ├── App.js
   │   ├── index.js
   │   └── utils/
   │       └── helpers.js
   ├── package.json
   └── README.md
   ```
</div>

<style>
.scrollable {
  max-height: 300px; /* Altezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>

---
layout: cover
level: 5

---

### 🧠

Omarillo-12

### Dettagli della struttura:

- **`public/`:**
  Contiene i file statici, come `index.html`, che è il punto di ingresso dell'applicazione React. Puoi anche mettere altre risorse statiche, come immagini.

- **`src/`:**
  Il cuore dell'applicazione React.

---
layout: cover
level: 5

---

### 🧠

Omarillo-4

  - **`assets/`:** Contiene risorse statiche come immagini o fogli di stile globali. In alternativa, si possono separare le immagini per sezione.

  - **`components/`:** Contiene componenti riutilizzabili. Ogni componente ha la sua cartella dedicata, in cui sono presenti i file `.js`, `.css` e `.test.js` relativi al componente stesso. Questa organizzazione mantiene il codice pulito e ben strutturato.

  - **`pages/`:** Qui risiedono le pagine dell'applicazione (es. `Home`, `About`, ecc.). Le pagine sono componenti più complessi che possono includere altri componenti interni.

---
layout: cover
level: 5

---

### 🧠

Omarillo-6

  - **`services/`:** Qui puoi gestire le chiamate API o altre interazioni di servizio. Solitamente si definiscono qui le funzioni che interagiscono con il backend.

  - **`store/`:** Se usi un sistema di gestione dello stato come Redux o Context API, la logica di gestione dello stato globale va collocata qui.

  - **`utils/`:** Contiene funzioni di utilità, helper o logiche di supporto che possono essere riutilizzate in più parti dell'applicazione.

---
layout: cover
level: 5

---

### 🧑‍🎓

Studente-10

Quando esegui il comando `npm start` in un'applicazione React, vengono eseguiti diversi processi dietro le quinte per avviare l'applicazione in modalità di sviluppo. Ma cosa succede? 

---
layout: cover
level: 5

---

### 🧠

Omarillo-6

Succede che  

### 1. **Script di NPM**
   - **`npm start`** esegue uno script definito all'interno del file `package.json` del progetto. Questo script è di solito configurato automaticamente da `create-react-app` (CRA) quando l'app viene generata. L'entry point è il campo `scripts` in `package.json`, che potrebbe sembrare così:

     ```json
     "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "test": "react-scripts test",
       "eject": "react-scripts eject"
     }
     ```

---
layout: cover
level: 5

---

### 🧠

Omarillo-12 Quindi

   - **`react-scripts start`** è il comando effettivo eseguito da `npm start`. Questo comando è parte del pacchetto `react-scripts`, che include gli strumenti e la configurazione necessari per sviluppare un'app React senza la necessità di configurare manualmente Webpack, Babel, ecc.

### 2. **Configurazione Webpack**
   - Quando esegui `react-scripts start`, dietro le quinte viene avviato **Webpack**, un bundler di moduli che gestisce il packaging del codice. Webpack prende tutti i tuoi file JavaScript, CSS, immagini e altre risorse, li compila e li serve.
  
---
layout: cover
level: 5

---

### 🧠

Omarillo-9

   - **Webpack Dev Server** viene avviato per servire l'applicazione in locale. Questo server ha alcune funzionalità chiave, tra cui:
     - **Hot Module Replacement (HMR):** Permette di vedere le modifiche al codice senza dover ricaricare completamente la pagina. Quando modifichi un file JavaScript o CSS, Webpack aggiorna solo la parte modificata dell'applicazione in tempo reale.
     - **Compilazione in tempo reale:** Webpack esegue la compilazione ogni volta che salvi una modifica nel codice, mostrando gli aggiornamenti nel browser immediatamente.

---
layout: cover
level: 5

---

### 🧠

Omarillo-3

### 3. **Compilazione del codice**

- **Babel**, un transpiler JavaScript, è integrato nel processo di build e viene utilizzato per convertire il codice JSX e le nuove funzionalità di JavaScript in una versione compatibile con i browser più vecchi.
- Babel si occupa anche di trasformare i file `.js` e `.jsx` per renderli eseguibili nel browser.
   
- **Transpiling JSX:** I file che contengono JSX vengono trasformati in codice JavaScript puro, in modo che il browser possa eseguirli correttamente.

---
layout: cover
level: 5

---

### 🧠

Omarillo-11

<div class="scrollable">
I file che contengono **JSX** sono file JavaScript o TypeScript che usano una sintassi speciale, chiamata appunto **JSX (JavaScript XML)**, per combinare JavaScript con elementi simili a HTML.

### Cos'è JSX?

**JSX** è una sintassi che permette di scrivere codice simile a HTML all'interno di file JavaScript. È utilizzata principalmente con React per descrivere l'interfaccia utente (UI) in modo dichiarativo. Anche se sembra HTML, JSX è in realtà una sintassi estesa di JavaScript.

#### Esempio di codice JSX:

```jsx
function MyComponent() {
  return (
    <div className="container">
      <h1>Hello, World!</h1>
      <p>This is a React component using JSX.</p>
    </div>
  );
}
```

### Differenze tra HTML e JSX:

1. **Sintassi più simile a JavaScript che a HTML puro:**
   - JSX consente di scrivere espressioni JavaScript all'interno delle graffe `{}`. Ad esempio, puoi inserire variabili, chiamare funzioni o eseguire operazioni logiche all'interno di JSX:
   
     ```jsx
     const name = "John";
     return <h1>Hello, {name}!</h1>;
     ```

2. **Attributi con nomi leggermente diversi:**
   - Alcuni attributi HTML hanno nomi diversi in JSX. Ad esempio:
     - `class` diventa `className` perché `class` è una parola riservata in JavaScript.
     - `for` diventa `htmlFor`.

     Esempio:
     ```jsx
     <label htmlFor="inputId">Label</label>
     <input id="inputId" className="input-class" />
     ```

3. **JSX è strettamente legato a JavaScript:**
   - Dal momento che JSX è essenzialmente JavaScript, puoi usare tutta la potenza di JavaScript all'interno di esso, come l'uso di funzioni, condizioni (`if`, `ternary operator`), cicli (`map`, `for`, etc.).

4. **Elementi figli devono avere un singolo wrapper:**
   - In JSX, ogni componente deve restituire un singolo elemento di contenitore. Se vuoi restituire più elementi, devi racchiuderli in un wrapper come `<div>`, `<section>`, o l'elemento vuoto `<></>` (detto **React Fragment**).

Esempio:

```jsx
     return (
       <>
         <h1>Title</h1>
         <p>Description</p>
       </>
     );
     ```

### Come funziona JSX?

JSX non può essere eseguito direttamente dal browser perché i browser comprendono solo JavaScript standard. Per questo, il codice JSX viene **traspilato** (convertito) in puro JavaScript prima che venga eseguito dal browser.

Durante il processo di build, uno strumento come **Babel** prende il codice JSX e lo trasforma in codice JavaScript standard utilizzando le chiamate a `React.createElement`. Ad esempio, il seguente JSX:

```jsx
const element = <h1>Hello, World!</h1>;
```

viene convertito da Babel in:

```javascript
const element = React.createElement('h1', null, 'Hello, World!');
```

In questo modo, il browser è in grado di comprendere ed eseguire il codice.

### Estensioni dei file che contengono JSX

I file che contengono JSX solitamente hanno l'estensione:
- **`.js`**: se stai utilizzando JavaScript e JSX insieme (la configurazione più comune).
- **`.jsx`**: alcuni sviluppatori preferiscono usare questa estensione per distinguere più chiaramente i file che contengono JSX rispetto ai file JavaScript puri.
- **`.ts` o `.tsx`**: se stai usando TypeScript. L'estensione `.tsx` viene utilizzata per indicare che il file contiene TypeScript con JSX.

### Vantaggi di JSX

1. **Leggibilità e Familiarità:**
   - JSX rende il codice più leggibile e familiare a chi conosce HTML e XML. I componenti React possono essere scritti in modo molto simile alla struttura del DOM.

2. **Potenza del JavaScript:**
   - Poiché JSX è JavaScript, puoi sfruttare tutta la logica e la flessibilità di questo linguaggio direttamente nel markup.

3. **Componenti riutilizzabili:**
   - JSX si integra perfettamente con i componenti React, permettendo di comporre interfacce utente in modo modulare e riutilizzabile.

### Esempio completo:

```jsx
import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to the world of React and JSX.</p>
    </div>
  );
}

export default Greeting;
```

### Conclusione

JSX è un'estensione di JavaScript che consente di scrivere componenti React in modo più intuitivo e dichiarativo, utilizzando una sintassi simile a HTML all'interno del codice JavaScript. Questo facilita la costruzione di interfacce utente, rendendo il codice più leggibile e mantenibile, e sfruttando la piena potenza del linguaggio JavaScript.
</div>

<style>
.scrollable {
  max-height: 300px; /* Altezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>
---
layout: cover
level: 5

---

### 🧠

Omarillo-4

### 4. **Avvio del server locale**
   - Webpack Dev Server viene eseguito su una porta locale, di solito `http://localhost:3000/`. Quando esegui `npm start`, questo server viene avviato, e l'applicazione React è accessibile in locale tramite il browser su quell'URL.

### 5. **Modalità di sviluppo**
   - L'applicazione viene eseguita in **modalità di sviluppo**. Questo significa che:
     - Il codice non è minimizzato.
     - Viene visualizzata una diagnostica dettagliata nel caso di errori o warning.
     - Sono attivi strumenti come **React DevTools**, che consentono di esaminare lo stato e la struttura dei componenti React in tempo reale.
     - I file sorgenti vengono serviti dinamicamente dal server, quindi non è necessario rigenerare manualmente il bundle quando fai modifiche.

---
layout: cover
level: 5

---

### 🧠

Omarillo-5

### 6. **Monitoraggio dei file**

- Webpack Dev Server continua a monitorare i file del progetto. Ogni volta che un file viene modificato, il server rigenera il bundle aggiornato e aggiorna automaticamente la pagina web, se necessario.

### In sintesi

- `npm start` avvia l'ambiente di sviluppo configurato da `react-scripts`.
- Viene eseguito un server locale che serve l'app React tramite Webpack Dev Server.
- Viene eseguito il transpiling di JSX e modern JavaScript tramite Babel.
- Viene abilitato Hot Module Replacement per aggiornare il codice senza ricaricare la pagina.
- Il codice viene servito in modalità di sviluppo, con debug e diagnostica migliorati.

Quindi, il comando `npm start` avvia l'intero ciclo di sviluppo dell'applicazione React, semplificando notevolmente il processo di testing e debugging rispetto a un setup manuale.

---
layout: cover
level: 5

---

### 🧠

Omarillo-6

### Best Practices:

1. **Componenti riutilizzabili:**
   Evita la duplicazione del codice creando componenti generici e riutilizzabili. Ad esempio, un pulsante potrebbe essere usato in più parti dell'applicazione, quindi potrebbe risiedere nella cartella `components/`.

2. **Atomic Design:**
   Una metodologia utile è quella dell’**Atomic Design**, che suddivide i componenti in cinque livelli: **Atoms (Atomi)**, **Molecules (Molecole)**, **Organisms (Organismi)**, **Templates** e **Pages**. Questa struttura aiuta nella gestione di progetti più grandi.

---
layout: cover
level: 5

---

### 🧠

Omarillo-11

3. **Moduli CSS o CSS-in-JS:**
   Per evitare conflitti di stile, potresti usare **CSS Modules** (che limitano la portata dei nomi delle classi CSS) o **styled-components** (che integrano CSS-in-JS).

4. **Gestione dello Stato:**
   Se il progetto è complesso, l'uso di strumenti di gestione dello stato globale come **Redux** o **Context API** ti aiuterà a mantenere l’applicazione scalabile e facile da gestire.

5. **Test:**
   Organizza i test vicino ai componenti, utilizzando Jest e React Testing Library, per garantire che i componenti funzionino correttamente.

### Esempio di componenti modulari:

- `components/Header/Header.js`
- `components/Header/Header.css`
- `components/Header/Header.test.js`

Questo approccio mantiene il codice pulito e ben organizzato.

---
layout: cover
level: 5

---

### 🧠

Omarillo-11

### Considerazioni finali:

Una buona struttura di progetto deve essere scalabile e facile da mantenere. All'inizio, può sembrare eccessivo organizzare il progetto in così tanti livelli, ma una buona struttura sarà utile man mano che il progetto cresce e diventa più complesso.una struttura di file di base con una configurazione standard per un'app React.

---

---
layout: cover
level: 4

---

### 🧠

Omarillo-8

<div class="scrollable">
Il file `index.html` in un'applicazione React serve come il file HTML di base in cui l'intera applicazione viene montata. Anche se sembra un file HTML semplice, è essenziale per il funzionamento dell'applicazione React. Di seguito descrivo cosa deve contenere il file `index.html` e perché.

### Contenuto Tipico di `index.html`

Quando crei un'applicazione con **Create React App**, il file `index.html` che viene generato di default si trova nella cartella `public/` e ha una struttura simile alla seguente:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!-- Script Bundle -->
  </body>
</html>
```

### Spiegazione dei Vari Elementi

1. **`<!DOCTYPE html>`:**
   - Dichiara che il documento segue lo standard HTML5.

2. **`<html lang="en">`:**
   - Imposta la lingua predefinita del documento. In questo caso, è l'inglese (`lang="en"`). Puoi cambiarla secondo la lingua dell'applicazione, ad esempio `lang="it"` per l'italiano.

3. **`<head>`:**
   - Il tag `<head>` contiene metadati riguardanti la pagina, come charset, viewport, e il titolo della pagina.
   - **`<meta charset="UTF-8">`**: Definisce la codifica dei caratteri come UTF-8, che è il formato standard per la maggior parte delle pagine web moderne.
   - **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Imposta il viewport per garantire che l'app si adatti correttamente sui dispositivi mobili. Questo è essenziale per il responsive design.
   - **`<meta http-equiv="X-UA-Compatible" content="ie=edge">`**: Assicura che il sito venga visualizzato in modalità standard nei vecchi browser come Internet Explorer.

4. **`<title>React App</title>`:**
   - Questo tag definisce il titolo della pagina che apparirà nella barra del titolo del browser o nella scheda del browser. Puoi cambiare il titolo a seconda del nome della tua applicazione.

5. **`<body>`:**
   - Il tag `<body>` contiene il contenuto visibile della pagina. Tuttavia, nel caso di un'app React, il contenuto viene generato dinamicamente da React e iniettato all'interno del DOM.

6. **`<noscript>`:**
   - Questo elemento visualizza un messaggio per gli utenti che hanno disattivato JavaScript. Poiché React richiede JavaScript per funzionare, questo messaggio informa gli utenti che l'app non funzionerà correttamente senza JavaScript.

7. **`<div id="root"></div>`:**
   - Questo è l'elemento DOM fondamentale per l'intera applicazione React. Quando l'app viene avviata, React prende il controllo del `<div>` con l'id `"root"` e monta tutto il contenuto dell'applicazione all'interno di questo elemento.
   - **React Dom Rendering:** Nel file `src/index.js` dell'applicazione, trovi qualcosa di simile:
     ```javascript
     import React from 'react';
     import ReactDOM from 'react-dom';
     import App from './App';

     ReactDOM.render(<App />, document.getElementById('root'));
     ```
     Questo codice monta il componente principale (`<App />`) all'interno del div con id `"root"` nel file `index.html`.

8. **JavaScript Bundling:**
   - Anche se non visibile in questo esempio, nella versione finale del `index.html` generata dal processo di build (ad esempio con il comando `npm run build`), i **file JavaScript** minificati (e a volte i file CSS) verranno inclusi tramite i tag `<script>` e `<link>` aggiunti dinamicamente al momento della build. React gestisce questi dettagli automaticamente, quindi nel file `index.html` dello sviluppo non vedi riferimenti a questi file.
   
### Considerazioni Addizionali

1. **Non inserire contenuto direttamente nel body:**
   - In un'app React, non è necessario inserire direttamente contenuto HTML statico nel `<body>` al di fuori del div con l'id `"root"`, perché React gestisce il rendering di tutto il contenuto dinamicamente.

2. **Icone e Risorse Aggiuntive:**
   - È possibile includere altre risorse nel `<head>`, come ad esempio favicon o font esterni:
     ```html
     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
     <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
     ```

3. **SEO (Ottimizzazione per i motori di ricerca):**
   - Anche se React genera dinamicamente la maggior parte dei contenuti, puoi aggiungere **meta tag SEO** nel file `index.html` per migliorare la visibilità sui motori di ricerca. Puoi inserire meta tag come:
     ```html
     <meta name="description" content="Descrizione della tua applicazione React" />
     ```

4. **Script o Stili Globali:**
   - Se hai bisogno di includere file CSS globali o script JavaScript di terze parti (come Google Analytics o librerie esterne), puoi aggiungerli manualmente nell'`index.html`. Tuttavia, è consigliabile gestire stili e script tramite i file React e la pipeline di build (Webpack) piuttosto che modificarli direttamente nell'`index.html`.

### In Sintesi

Il file `index.html` serve come base statica per l'app React, con solo il minimo necessario per avviare l'applicazione. La maggior parte del contenuto dell'applicazione è gestita dinamicamente da React e montata all'interno del `<div id="root">`. Inoltre, configurazioni come i meta tag, il charset e il viewport aiutano a definire la struttura di base della pagina e garantiscono che l'app funzioni correttamente su tutti i dispositivi.
</div>

<style>
.scrollable {
  max-height: 300px; /* Altezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>

---
layout: cover
level: 4

---

### 🧑‍🎓

Studente-10

## Posso modificare il tag `<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />` per utilizzare un file SVG come favicon? 


---
layout: cover
level: 5

---

### 🧠

Omarillo-3

### SI! Modifica il file HTML 

Supponiamo che tu abbia un file SVG chiamato `favicon.svg` nella directory `public`. Puoi modificare il tag `<link>` nel file [`index.html`] come segue:

```html
<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <link r🧑‍🎓el="shortcut icon" href="%PUBLIC_URL%/favicon.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
```

---
layout: cover
level: 5

---

### 🧠

Omarillo-11

### Passaggi dettagliati

<div class="scrollable">

1. **Aggiungi il file SVG**: Assicurati che il file `favicon.svg` sia presente nella directory `public` del tuo progetto.

2. **Modifica il file `index.html`: Apri il file `index.html` e modifica il tag `<link>` come mostrato sopra.

### Verifica

Dopo aver apportato queste modifiche, avvia il server di sviluppo con `npm start` e verifica che il favicon SVG venga caricato correttamente nel browser.
🧑‍🎓
</div>

<style>
.scrollable {
  max-height: 300px; /* Altezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>

---
layout: cover
level: 4

---

### 🧑‍🎓

Studente-11

## Cosa sono i file svg ? 

---
layout: cover
level: 4

---

### 🧠

Omarillo-11

### I file **SVG** (Scalable Vector Graphics)

<div class="scrollable">

Sono un formato di immagine vettoriale basato su XML. Sono utilizzati per rappresentare grafiche vettoriali, come loghi, icone, diagrammi, illustrazioni e qualsiasi altro tipo di immagine che deve mantenere qualità e nitidezza indipendentemente dalle dimensioni.

### Caratteristiche dei File SVG

1. **Vettoriali, non raster:**
   - A differenza dei formati di immagine raster come JPEG o PNG, gli SVG non sono composti da pixel. Invece, utilizzano forme geometriche (come linee, cerchi, rettangoli e poligoni) definite da equazioni matematiche.
   - Questo significa che gli SVG possono essere scalati a qualsiasi dimensione senza perdere qualità. Sono ideali per immagini che devono apparire nitide su schermi ad alta risoluzione o che devono essere ridimensionate frequentemente (ad esempio per il responsive design).

2. **Basati su XML:**
   - Gli SVG sono fondamentalmente file di testo che descrivono come l'immagine dovrebbe essere disegnata. Poiché sono basati su XML, possono essere letti e modificati direttamente tramite editor di testo o tramite codice.
   - Questo significa che è possibile manipolare un SVG dinamicamente tramite JavaScript, CSS o HTML, rendendolo estremamente flessibile e potente.

3. **File leggeri:**
   - Gli SVG tendono ad avere dimensioni più piccole rispetto ai formati raster (come PNG o JPEG) per grafiche semplici o icone, il che li rende ideali per il web in termini di prestazioni e tempi di caricamento.

4. **Compatibilità con browser:**
   - I file SVG sono supportati da tutti i browser moderni e possono essere utilizzati come immagini o iniettati direttamente nel DOM come codice inline.

### Esempio di File SVG

Un file SVG potrebbe essere qualcosa di simile a questo:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

Questo codice XML rappresenta un semplice cerchio rosso con un bordo nero.

### Perché Usare i File SVG?

1. **Scalabilità Perfetta:**
   - Essendo vettoriali, gli SVG possono essere ridimensionati senza perdere qualità, il che li rende perfetti per loghi, icone o illustrazioni che devono apparire bene a qualsiasi risoluzione o dimensione.

2. **Leggerezza:**
   - SVG può spesso essere più leggero rispetto ai formati di immagine raster, specialmente per grafiche semplici. Questo si traduce in un caricamento più rapido delle pagine web e migliori prestazioni generali.

3. **Manipolabilità:**
   - Poiché gli SVG sono basati su XML, possono essere facilmente manipolati tramite JavaScript o CSS. Puoi, ad esempio, cambiare i colori, animare parti di un'immagine o interagire con i singoli elementi di un SVG direttamente tramite il DOM.

4. **Accessibilità:**
   - Essendo file di testo, gli SVG possono essere letti da tecnologie assistive come screen reader. Inoltre, possono essere facilmente ottimizzati per l'accessibilità aggiungendo attributi descrittivi, come `title` e `desc`.

5. **Interazione e Animazioni:**
   - Gli SVG supportano animazioni sia tramite CSS che tramite SMIL (una specifica per le animazioni SVG), rendendoli ideali per creare grafiche animate e interattive senza usare tecnologie più pesanti come GIF o video.

6. **Indipendenti dal dispositivo:**
   - Poiché gli SVG non dipendono dalla risoluzione dello schermo o dalle dimensioni del display, sono perfetti per dispositivi con display ad alta densità di pixel (come i Retina display). Gli SVG rimangono nitidi su qualsiasi schermo.

### Come Usare gli SVG nelle Applicazioni Web

1. **Immagini come file esterni:**
   - Puoi utilizzare un SVG come un'immagine esterna, simile a un PNG o JPEG, semplicemente utilizzando il tag `<img>` in HTML:
     ```html
     <img src="logo.svg" alt="Logo" />
     ```

2. **SVG inline nel codice HTML:**
   - Puoi includere il contenuto SVG direttamente nel tuo HTML, il che permette di manipolarlo direttamente con CSS o JavaScript:
     ```html
     <svg width="100" height="100">
       <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
     </svg>
     ```

3. **Come background CSS:**
   - Gli SVG possono essere utilizzati anche come immagini di sfondo in CSS:
     ```css
     .element {
       background-image: url('background.svg');
     }
     ```

4. **Manipolazione tramite JavaScript o React:**
   - Se includi un SVG inline, puoi manipolarne i singoli elementi tramite JavaScript o React. Ad esempio, puoi cambiare i colori, animare parti dell'SVG o aggiungere interazioni su eventi specifici.

### Quando Usare SVG Rispetto ad Altri Formati

- **SVG è ideale per:**
  - Loghi, icone, illustrazioni, diagrammi, grafici, forme geometriche o qualunque elemento che richiede scalabilità perfetta e manipolazione dinamica.

- **PNG o JPEG sono migliori per:**
  - Fotografie o immagini complesse che non beneficiano della scalabilità vettoriale. Questi formati sono più efficienti nel rappresentare sfumature di colore, texture complesse e dettagli molto precisi che si trovano nelle foto o nelle immagini di alta qualità.

### Conclusione

I file SVG sono uno strumento potentissimo per creare grafiche scalabili e leggere, con numerosi vantaggi nel contesto delle applicazioni web e dello sviluppo di interfacce utente. La loro capacità di essere manipolati tramite codice li rende estremamente flessibili per applicazioni interattive e dinamiche.
</div>

<style>
.scrollable {
  max-height: 300px; /* Altezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>

---
<!---

layout: cover
level: 4

### 🧑‍🎓

Studente-5

## E il file `manifest.json` ?

---
layout: cover
level: 4

---

### 🧠

Omarillo-11

<div class="scrollable">
Il file **`manifest.json`** in un'app React serve a definire alcune informazioni di base sulla web app, in particolare per supportare il **Progressive Web App (PWA)**, ma anche per fornire metadati generali che possono essere utilizzati da browser e dispositivi.

### Scopo del `manifest.json`

Il file `manifest.json` contiene una serie di configurazioni che permettono di specificare:
- Come la tua applicazione dovrebbe comportarsi quando viene "installata" su un dispositivo (simile a una app nativa).
- Informazioni su come deve apparire l'applicazione (icone, colore del tema, schermata iniziale).
- Metadati come il nome della tua applicazione, descrizione, ecc.

In sintesi, questo file serve a rendere la tua app un'app web installabile e a gestire l'aspetto e il comportamento dell'app una volta aggiunta alla home screen di un dispositivo mobile o desktop.

### Contenuto Tipico di `manifest.json`

Ecco un esempio di un file `manifest.json` standard generato da Create React App:

```json
{
  "short_name": "ReactApp",
  "name": "My React Application",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

### Descrizione dei Principali Campi

1. **`short_name`**:
   - Questo è il nome corto della tua app, utilizzato quando lo spazio è limitato (ad esempio sotto l'icona sulla schermata iniziale di un dispositivo mobile).

2. **`name`**:
   - Il nome completo della tua app. Questo nome potrebbe apparire in contesti come la schermata di avvio dell'app.

3. **`icons`**:
   - Un array di oggetti che specifica le diverse dimensioni delle icone dell'applicazione. Queste icone sono utilizzate dal dispositivo per rappresentare la tua app, ad esempio nella home screen o nel task manager.
   - Ogni oggetto nel campo `icons` ha:
     - `src`: il percorso dell'icona.
     - `sizes`: le dimensioni dell'icona (es. `"192x192"`, `"512x512"`).
     - `type`: il tipo MIME del file dell'icona (es. `image/png`).

4. **`start_url`**:
   - L'URL di partenza quando l'utente avvia la tua app dall'icona sulla home screen. Solitamente punta all'homepage dell'applicazione.

5. **`display`**:
   - Definisce come deve essere mostrata l'applicazione:
     - **`standalone`**: La tua app sarà lanciata come una app standalone, senza barra degli indirizzi o altri elementi del browser, simulando una vera e propria app nativa.
     - **`fullscreen`**: L'app si apre in modalità a schermo intero.
     - **`minimal-ui`**: Fornisce una minima interfaccia utente del browser (come i tasti indietro e avanti).
     - **`browser`**: L'app viene avviata in una normale finestra di browser.

6. **`theme_color`**:
   - Colore principale della tua applicazione. Questo colore è spesso utilizzato nella barra di stato del dispositivo mobile o desktop quando l'app è aperta. Ad esempio, su Android questo colore può diventare il colore della barra di navigazione.

7. **`background_color`**:
   - Il colore di sfondo mostrato durante il caricamento della tua app (quando viene visualizzata la schermata di avvio).

### Perché il `manifest.json` è Importante?

1. **Supporto per Progressive Web Apps (PWA)**:
   - Il `manifest.json` è uno degli elementi fondamentali per trasformare una web app in una Progressive Web App (PWA). Le PWA possono essere installate su dispositivi mobili o desktop, offrendo un'esperienza simile alle app native, ma sfruttando la tecnologia web.
   - Quando un utente visita la tua PWA, il browser può rilevare il `manifest.json` e offrire la possibilità di "installare" l'app sulla home screen, rendendola accessibile offline (se configurata correttamente).

2. **Aspetto Coerente su Diverse Piattaforme**:
   - Il manifest aiuta a mantenere un aspetto e un comportamento coerente su diverse piattaforme (iOS, Android, Windows, ecc.), specialmente per quanto riguarda icone e nomi.

3. **Personalizzazione dell'Interfaccia**:
   - Puoi definire come deve essere presentata la tua applicazione, sia a livello estetico (icone, colori) sia a livello di comportamento (standalone, fullscreen, ecc.), migliorando l'esperienza utente.

4. **Supporto per App Offline**:
   - Il manifest, insieme ai service worker, è parte della tecnologia che permette alle Progressive Web Apps di funzionare offline.

### Conclusione

Il file `manifest.json` è essenziale per configurare l'aspetto e il comportamento della tua app web quando viene installata su un dispositivo come PWA. Grazie a questo file, puoi rendere la tua app più simile a una app nativa, migliorando l'esperienza dell'utente, il branding, e la compatibilità su diverse piattaforme e dispositivi.
</div>

<style>
.scrollable {
  max-height: 300px; /* Altezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>

---
layout: cover
level: 5

---

### 🧑‍🎓

Studente-10

Una **Progressive Web App (PWA)** è

<div class="scrollable">
Un'applicazione web che utilizza moderne tecnologie web per offrire un'esperienza utente simile a quella delle app native su dispositivi mobili e desktop. Le PWA combinano le migliori caratteristiche delle applicazioni web e delle app native, fornendo una serie di vantaggi come il caricamento rapido, la capacità di funzionare offline, la possibilità di ricevere notifiche push e l'opzione di essere installate sulla home screen di un dispositivo, senza la necessità di passare attraverso uno store di app come il Google Play Store o l'App Store di Apple.

### Caratteristiche Principali di una PWA

1. **Progressiva**:
   - Funziona per tutti gli utenti, indipendentemente dal browser utilizzato, grazie all'adozione di principi di miglioramento progressivo. Anche su browser più vecchi, l'app funziona in modo basilare.

2. **Responsive**:
   - È progettata per adattarsi a qualsiasi dispositivo, sia esso uno smartphone, un tablet, un laptop o un desktop, e funziona correttamente su tutte le risoluzioni dello schermo.

3. **Offline e Funzionamento in Condizioni di Rete Instabile**:
   - Utilizza una tecnologia chiamata **Service Worker**, che permette di memorizzare in cache risorse e dati. Questo consente all'app di funzionare anche quando non c'è una connessione Internet o quando la rete è instabile.

4. **Installabile**:
   - Può essere "installata" sulla home screen di un dispositivo come una normale app nativa, senza passare per gli app store. Una volta installata, l'app si avvia come una app standalone (senza barra degli indirizzi del browser) e appare nelle liste di app del dispositivo.

5. **Notifiche Push**:
   - Le PWA possono inviare notifiche push agli utenti, simili a quelle delle app native, mantenendo un alto livello di interattività e coinvolgimento.

6. **Sicura**:
   - Le PWA devono essere servite tramite **HTTPS**, garantendo una connessione sicura per proteggere i dati dell'utente.

7. **Aggiornamenti Automatici**:
   - Le PWA si aggiornano automaticamente quando l'utente accede all'app, senza dover passare attraverso aggiornamenti manuali tramite uno store.

8. **Linkabile e Condivisibile**:
   - Come una pagina web, le PWA possono essere facilmente condivise tramite un URL, rendendole molto accessibili rispetto alle app native che devono essere scaricate da uno store.

### Tecnologie Chiave Dietro una PWA

1. **Service Workers**:
   - I Service Worker sono script che il browser esegue in background, indipendentemente dalla pagina web. Essi permettono alle PWA di funzionare offline, gestire notifiche push, sincronizzare dati in background, e molto altro. Il Service Worker agisce come un intermediario tra la rete e l'app, controllando cosa viene memorizzato nella cache e cosa deve essere recuperato dalla rete.

2. **Web App Manifest**:
   - Il `manifest.json` è un file JSON che fornisce al browser le informazioni sulla tua PWA, come il nome, le icone, i colori, e l'URL di avvio. Questo file è fondamentale per permettere all'app di essere installata sulla home screen e di apparire come un'app nativa.

3. **Cache API**:
   - Consente alla PWA di memorizzare risorse come immagini, file CSS, e JavaScript nella cache, permettendo all'app di funzionare in modalità offline o di caricare più velocemente quando la connessione è lenta.

### Vantaggi delle PWA

1. **Esperienza Simile a una App Nativa**:
   - Offrono molte delle caratteristiche delle app native, come la capacità di funzionare offline, notifiche push, e l'installazione sulla home screen, pur essendo costruite con tecnologie web.

2. **Prestazioni Migliorate**:
   - Grazie alla capacità di funzionare offline e di memorizzare dati nella cache, le PWA possono essere molto veloci e reattive, anche in condizioni di rete difficili.

3. **Nessuna Necessità di Store di App**:
   - Gli utenti possono installare una PWA direttamente dal browser, evitando i vincoli degli app store e permettendo agli sviluppatori di aggiornare l'app senza dover passare attraverso processi di approvazione.

4. **Crescita dell'Engagement**:
   - Grazie a funzionalità come le notifiche push, le PWA possono mantenere gli utenti coinvolti nel tempo, simile alle app native che offrono promemoria o messaggi personalizzati.

5. **Compatibilità Cross-Platform**:
   - Le PWA sono progettate per funzionare su qualsiasi piattaforma o dispositivo con un browser compatibile, sia esso Windows, macOS, iOS, Android, o Linux.

### Limiti delle PWA

1. **Limitazioni Hardware**:
   - Anche se le PWA offrono una buona esperienza utente, possono avere alcune limitazioni rispetto alle app native, soprattutto quando si tratta di accesso a funzionalità hardware avanzate come Bluetooth, NFC, lettori di impronte digitali, e così via.

2. **Supporto su iOS**:
   - Il supporto per le PWA su iOS (Safari) è stato storicamente limitato rispetto ad Android. Sebbene molte caratteristiche siano supportate, alcune funzionalità, come le notifiche push, non sono ancora completamente implementate su iOS.

### Esempi di PWA di Successo

1. **Twitter Lite**:
   - La versione PWA di Twitter è veloce e leggera, riducendo l'uso dei dati e offrendo una buona esperienza anche su connessioni lente.

2. **Pinterest**:
   - Dopo aver lanciato una PWA, Pinterest ha visto un notevole aumento dell'engagement degli utenti, con tempi di permanenza più lunghi e una crescita nel numero di sessioni giornaliere.

3. **Spotify**:
   - Spotify ha creato una versione PWA della propria app che consente agli utenti di accedere alla loro musica senza dover scaricare un'app nativa.

### Conclusione

Le **Progressive Web App (PWA)** rappresentano una potente evoluzione delle applicazioni web, fornendo un'esperienza utente molto simile a quella delle app native, ma con tutti i vantaggi delle tecnologie web moderne. Offrono un'ottima alternativa o complemento alle app native, specialmente in situazioni in cui velocità, accessibilità, e facilità di distribuzione sono cruciali.
</div>

<style>
.scrollable {
  max-height: 300px; /* Altezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>

--->
