---
layout: cover
background: >-
  https://3rekse.github.io/rete/images/solerosso.svg
hideInToc: true
level: 1
title: Welcome!
---

# FLUTTER Application

Per navigare, usa le frecce ← e →

Flutter è un framework open-source creato da Google per lo sviluppo di applicazioni per dispositivi mobili, web e desktop da un'unica base di codice.

Consente agli sviluppatori di costruire interfacce utente grafiche (GUI) ricche e complesse, che possono essere eseguite su molteplici piattaforme con prestazioni vicine a quelle native.

Flutter utilizza il linguaggio di programmazione Dart.

<!-- 

Note slide: 

-->

---
layout: intro
level: 2
title: flutter caratteristiche

---

## Caratteristiche principali di Flutter

1. **Hot Reload**: Permette agli sviluppatori di vedere le modifiche apportate al codice quasi in tempo reale, senza perdere lo stato dell'applicazione.
2. **Widget**: Tutto in Flutter è un widget, dalla struttura dell'applicazione, come pulsanti e testo, fino agli stessi layout. I widget possono essere annidati per costruire interfacce complesse.
3. **Performance vicine al nativo**: Grazie alla compilazione anticipata (AOT) del codice Dart in codice macchina nativo, Flutter può raggiungere prestazioni elevate.
4. **Sviluppo multipiattaforma**: Con un singolo codice sorgente, è possibile sviluppare app per iOS, Adroid, web, Windows, macOS e Linux.
5. **Ampio ecosistema**: Flutter ha un vasto ecosistema che consente la personalizzazione dell'aspetto e del comportamento delle app.

---

In informatica, un **widget** è un piccolo elemento grafico interattivo di un'interfaccia utente. Pensa a esso come a un mini-programma o a uno strumento che svolge una funzione specifica e limitata.

Ecco alcune caratteristiche chiave dei widget:

* **Interattivi:** Permettono all'utente di interagire con un'applicazione o un sistema in modo rapido e semplice.
* **Grafici:** Hanno una rappresentazione visiva sullo schermo, come un pulsante, una casella di testo, una barra di scorrimento, un'icona, o un piccolo display di informazioni.
* **Funzione Specifica:** Ogni widget è progettato per uno scopo ben definito (ad esempio, mostrare il meteo, controllare la musica, visualizzare un calendario, lanciare un'applicazione).
* **Facili da Usare:** L'obiettivo è fornire accesso rapido a informazioni o funzioni senza dover aprire un'applicazione completa.

---

### Dove li trovi?

I widget sono onnipresenti nella tecnologia moderna:

* **Sistemi Operativi (Desktop e Mobile):** Li trovi sulla schermata iniziale del tuo smartphone (ad esempio, un widget del meteo, del calendario, o di un lettore musicale) o sulla barra delle applicazioni del tuo computer (come il widget dell'orologio o delle notizie).
* **Siti Web:** Molti siti web utilizzano widget per incorporare funzionalità da altri servizi (ad esempio, un widget di condivisione sui social media, un widget di Google Maps o un widget per le recensioni).
* **Applicazioni:** All'interno delle applicazioni stesse, elementi come pulsanti, menu a discesa, slider e caselle di controllo sono tutti esempi di widget che permettono l'interazione con il programma.

---

### Esempi comuni

* **Widget Meteo:** Mostra la temperatura e le condizioni attuali direttamente sulla schermata iniziale.
* **Widget Orologio:** Un orologio digitale o analogico sempre visibile.
* **Widget Musicale:** Controlla la riproduzione di musica (play/pausa, avanti/indietro) senza aprire l'app musicale completa.
* **Widget Notizie:** Visualizza le ultime notizie da una fonte specifica.
* **Widget Calendario:** Mostra gli eventi imminenti.

In sintesi, un widget è uno strumento comodo e compatto che migliora l'esperienza utente fornendo accesso rapido a informazioni o funzionalità specifiche.

---
layout: intro
background: https://www.winklix.com/blog/wp-content/uploads/2022/08/flutter-for-cross-platform-app-development.jpg
level: 1
title: Flutter application

---

## Flutter è cross-platform

Flutter è particolarmente apprezzato per la sua capacità di accelerare lo sviluppo di app cross-platform mantenendo allo stesso tempo un'alta qualità dell'interfaccia utente e delle prestazioni.

<Toc columns="2" maxDepth="2" minDepth="2" mode="next" />

Gli argomenti in queste sezioni ti aiutano nello sviluppo.

<!-- 

Note slide: 

-->

---
layout: cover
level: 2
title: I Widget in Flutter
background: https://cdn.educba.com/academy/wp-content/uploads/2020/12/Flutter-Widgets.jpg

---

## I Widget in Flutter

 sono gli elementi fondamentali per la costruzione dell'interfaccia utente.

Sono oggetti che descrivono parte dell'interfaccia utente rappresentando

- sia elementi visivi
 (come testo, pulsanti e immagini)
- sia elementi di layout (come righe, colonne e griglie)

che organizzano e controllano vari aspetti del display.

Flutter costruisce le applicazioni seguendo un approccio "tutto è un widget", il che significa che quasi ogni cosa che si vede in un'app Flutter è un widget o una composizione di widget.

---

### Caratteristiche Principali dei Widget

- **Gerarchia**: I widget in Flutter sono organizzati in alberi, dove ogni widget può avere widget figli. Questo permette di costruire interfacce utente complesse e personalizzate.
- **Immutabilità**: I widget sono immutabili, il che significa che le loro proprietà non possono cambiare nel tempo. Quando lo stato di un widget deve cambiare, il widget viene ricreato con le nuove proprietà.
- **Stato**: Esistono due tipi principali di widget in Flutter: stateless e stateful. I widget stateless sono immutabili e non cambiano nel tempo, mentre i widget stateful mantengono uno stato che può cambiare durante il ciclo di vita del widget.
- **Personalizzazione**: Flutter offre una vasta gamma di widget predefiniti che possono essere personalizzati in modo dettagliato. Inoltre, gli sviluppatori possono creare i propri widget personalizzati.

---

### Esempi di Widget

- **Text**: Un widget per visualizzare del testo.
- **Row** e **Column**: Widget per il layout orizzontale e verticale.
- **Container**: Un widget che combina layout, pittura e posizionamento dei suoi figli.
- **Image**: Un widget per visualizzare un'immagine.
- **Scaffold**: Un widget che fornisce la struttura di base per l'interfaccia utente, come appbar, drawer, bottom navigation, ecc.

I widget sono il cuore di Flutter e forniscono gli strumenti per creare interfacce utente ricche e personalizzabili in modo efficiente e flessibile.
<!-- 

Note slide: 

-->

---

layout: cover
background: https://cdn.educba.com/academy/wp-content/uploads/2020/12/Flutter-Widgets.jpg
level: 2
title: Il Widget text

---

Il widget `Text` in Flutter è utilizzato per visualizzare una stringa di testo nell'interfaccia utente dell'applicazione. È uno dei widget più basilari e comuni in Flutter, permettendo agli sviluppatori di inserire testo nelle loro app in modo semplice ed efficace.

Il widget `Text` è fondamentale per qualsiasi tipo di applicazione, dato che permette di comunicare informazioni all'utente in modo chiaro ed efficace. Grazie alla sua flessibilità e alle opzioni di personalizzazione, si adatta facilmente a vari contesti di design dell'interfaccia utente.
<!-- 

Note slide: 

-->
---
layout: cover
background: https://cdn.educba.com/academy/wp-content/uploads/2020/12/Flutter-Widgets.jpg
level: 3
title: Introduzione

---

# Il Widget text

<Toc columns="2" maxDepth="3" minDepthTEXT="3" mode="next" />

<!-- 

Note slide: 

-->

---

### Caratteristiche Principali

- **Personalizzazione del Testo**: Il widget `Text` supporta una vasta gamma di stili di testo, come il font, la dimensione, il colore, lo spessore, l'ombreggiatura, ecc., che possono essere specificati tramite la proprietà `style` del widget.
- **Testo Multilinea**: Il widget `Text` gestisce automaticamente il testo multilinea e supporta la personalizzazione dell'allineamento del testo su più righe.
- **Allineamento e Posizionamento**: È possibile controllare l'allineamento del testo (ad esempio, centrato, a sinistra, a destra) e il posizionamento all'interno del suo widget contenitore.
- **Localizzazione e Accessibilità**: Supporta la localizzazione e l'accessibilità, rendendo il testo accessibile a utenti di diverse lingue e a quelli che utilizzano tecnologie assistive.

---

### Text style

La proprietà `style` di un widget in Flutter, in particolare quando si parla del widget `Text`, è utilizzata per definire l'aspetto visivo del testo. Questa proprietà accetta un oggetto `TextStyle`, che permette di personalizzare vari aspetti del testo, come il colore, la dimensione, il tipo di font, lo spessore, l'ombreggiatura, l'altezza delle linee, e molto altro.

---

### Esempio Text style

```dart
Text(
  'Ciao, Flutter!',
  style: TextStyle(
    fontSize: 20.0, // Imposta la dimensione del font a 20
    fontWeight: FontWeight.bold, // Rende il testo in grassetto
    color: Colors.red, // Imposta il colore del testo a rosso
    letterSpacing: 2.0, // Aumenta lo spazio tra le lettere
    // Altre proprietà possono essere aggiunte qui
  ),
)
```

Nell'esempio sopra, il widget `Text` visualizza la stringa "Ciao, Flutter!" con uno stile personalizzato che include una dimensione del font di 20.0, testo in grassetto, colore rosso, e un incremento dello spazio tra le lettere di 2.0.

La personalizzazione dello stile del testo è fondamentale per creare interfacce utente attraenti e per garantire una buona esperienza utente, permettendo di evidenziare informazioni importanti, migliorare la leggibilità e adattare l'aspetto del testo al design generale dell'applicazione.

---

### Testo multilinea

Il supporto per il testo multilinea in Flutter è una caratteristica importante per la gestione di testi che superano la larghezza dello schermo o che sono intenzionalmente suddivisi in più righe. Per gestire il testo multilinea, Flutter offre alcune opzioni attraverso il widget `Text` e le sue proprietà.

Queste proprietà offrono flessibilità nella gestione del testo, permettendoti di creare un'interfaccia utente che gestisce efficacemente il contenuto testuale, indipendentemente dalla sua lunghezza.

---

### Gestione del Testo Multilinea con `Text`

Per visualizzare testo multilinea, puoi semplicemente inserire una stringa con ritorni a capo (`\n`) nel widget `Text`, oppure puoi sfruttare le proprietà del widget per controllare il comportamento del testo che supera la larghezza del contenitore.

Ecco un esempio di base:

```dart
Text(
  'Questa è una lunga stringa di testo\nche si estende su più righe\nper dimostrare il testo multilinea in Flutter.',
)
```

In questo esempio, il testo verrà visualizzato su tre righe separate a causa dei caratteri di ritorno a capo (`\n`) inseriti manualmente nella stringa.

---

### Proprietà `maxLines` del Testo Multilinea

- **`maxLines`**: Puoi specificare il numero massimo di righe per il testo. Se il testo supera il numero di righe, verrà troncato.
  
  ```dart
  Text(
    'Questo testo potrebbe essere molto lungo, ma verrà troncato dopo due righe.',
    maxLines: 2,
  )
  ```

### Proprietà `overflow` del Testo Multilinea

- **`overflow`**: Questa proprietà determina come visualizzare il testo che supera il limite di righe. Ad esempio, puoi usare `TextOverflow.ellipsis` per mostrare i puntini di sospensione.
  
  ```dart
  Text(
    'Questo testo potrebbe essere molto lungo, ma verrà troncato con ellissi se supera due righe.',
    maxLines: 2,
    overflow: TextOverflow.ellipsis,
  )
  ```

---

### Proprietà `softWrap` del Testo Multilinea

- **`softWrap`**: Quando impostato su `true` (il valore predefinito), il testo verrà a capo automaticamente alle bordature del contenitore. Se impostato su `false`, il testo non andrà a capo, potendo così estendersi orizzontalmente oltre la vista.
  
  ```dart
  Text(
    'Questo testo non andrà a capo ma continuerà orizzontalmente.',
    softWrap: false,
  )
  ```
<!-- 

Note slide: 

-->
---
layout: cover
background: https://cdn.educba.com/academy/wp-content/uploads/2020/12/Flutter-Widgets.jpg
level: 2
title: Localizzazione Accessibilità Alliniamento

---

## Localizzazione Accessibilità Alliniamento

1. La localizzazione e l'accessibilità sono due aspetti fondamentali nello sviluppo di applicazioni con Flutter, che assicurano che le app possano essere utilizzate da un pubblico globale e da utenti con diverse esigenze.

2. L'allineamento si riferisce a come un widget figlio è posizionato all'interno del suo widget contenitore.

Implementare la localizzazione e l'accessibilità non solo amplia la portata dell'applicazione ma è anche un passo importante verso l'inclusività, assicurando che l'app sia utilizzabile e godibile da tutti gli utenti, indipendentemente dalla lingua o dalle abilità.

---

### Localizzazione

La localizzazione in Flutter permette di adattare un'applicazione a diverse lingue e regioni. Questo processo include la traduzione del testo e l'adattamento di elementi come date, numeri e layout per soddisfare le convenzioni locali. Flutter supporta la localizzazione attraverso:

- **Internationalizing Flutter Apps**: Utilizzando il pacchetto `intl`, gli sviluppatori possono definire stringhe localizzate e utilizzare funzioni per formattare date, numeri e altro in base alla località.
- **Locali e Localizations Widgets**: Flutter utilizza il widget `Localizations` per caricare e rendere disponibili le risorse localizzate all'interno dell'app. Gli sviluppatori possono specificare un elenco di locali supportati e Flutter sceglierà automaticamente la localizzazione più appropriata.

---

### Accessibilità

L'accessibilità assicura che le app Flutter possano essere utilizzate da persone con diverse disabilità, come problemi di vista, udito o mobilità. Flutter include supporto per:

- **Lettori di Schermo**: Widget come `Semantics` permettono agli sviluppatori di fornire etichette descrittive, hint e altro per i lettori di schermo, migliorando l'esperienza per gli utenti non vedenti o ipovedenti.
- **Contrasto Elevato e Dimensioni del Testo**: Flutter rispetta le impostazioni di sistema per il contrasto elevato e le dimensioni del testo, permettendo agli utenti di personalizzare queste impostazioni per le loro esigenze.
- **Navigazione da Tastiera e Switch**: Supporto per la navigazione tramite tastiera e switch, essenziale per gli utenti che non possono utilizzare un touchscreen.

---

### Allineamento

L'allineamento si riferisce a come un widget figlio è posizionato all'interno del suo widget contenitore. Può essere controllato utilizzando widget come `Align`, `Center`, o impostando proprietà specifiche in widget di layout come `Column`, `Row`, e `Stack`.

Il posizionamento si riferisce a come i widget sono disposti e spaziati relativamente l'uno all'altro. Widget come `Padding`, `Margin`, `Expanded`, e `Flexible` sono utilizzati per controllare lo spazio intorno e tra i widget.

- **Padding**: Aggiunge spazio intorno ai bordi di un widget. Ad esempio, `Padding(padding: EdgeInsets.all(8.0))` aggiunge uno spazio di 8 punti da tutti i lati del widget figlio.
- **Margin**: Simile al padding, ma applicato all'esterno del widget, spesso utilizzato con `Container`.
- **Expanded** e **Flexible**: Sono utilizzati all'interno di widget di layout come `Row` e `Column` per controllare come lo spazio disponibile è diviso tra i widget figli.
  
---
layout: two-cols-header
level: 3
title: Esempio di Allineamento e Posizionamento

---

### Esempio di Allineamento e Posizionamento

::left::

```dart
Column(
  children: <Widget>[
    Align(
      alignment: Alignment.centerLeft,
      child: Text('Allineato a sinistra'),
    ),
    Padding(
      padding: EdgeInsets.all(20.0),
      child: Text('Con padding'),
    ),
    Expanded(
      child: Container(
        color: Colors.blue,
        child: Text('Espanso'),
      ),
    ),
  ],
)
```

::right::

In questo esempio, abbiamo una `Column` che contiene tre widget:

1. Un `Text` allineato a sinistra.
2. Un `Text` con un padding di 20 punti da tutti i lati.
3. Un `Container` che si espande per occupare tutto lo spazio disponibile, con un `Text` al suo interno.

Questi strumenti offrono agli sviluppatori Flutter la flessibilità di creare layout complessi e reattivi, garantendo che l'applicazione appaia come desiderato su dispositivi con diverse dimensioni e orientamenti dello schermo.
<!-- 

Note slide: 

-->
---
level: 2
title: I widget Row e Column
background: https://www.dbestech.com/uploads/20240220/4d9d6f07d27ad1835f97a3e073dc9124.jpg
---

## I widget Row e Column

I widget `Row` e `Column` sono due dei widget di layout più fondamentali in Flutter, utilizzati per disporre altri widget in orizzontale (`Row`) o in verticale (`Column`).

Entrambi sono estremamente versatili e permettono di creare interfacce utente complesse e reattive.

Utilizzando `Row` e `Column` con una combinazione delle loro proprietà e widget correlati, puoi costruire una vasta gamma di layout per le tue applicazioni Flutter.

<Toc columns="2" maxDepth="3" minDepth="3" mode="next" />

<!-- 

Note slide: 

-->

<!-- 

Note slide: 

-->
---
layout: two-cols-header
level: 3
title: Esempio base Rows e Colomns
---

 Esempi di base

::left::

### Row

`Row` dispone i suoi widget figli in una lista orizzontale. È utile quando si vuole allineare elementi uno accanto all'altro sull'asse orizzontale.

- **Esempio di base**:

  ```dart
  Row(
    children: <Widget>[
      Icon(Icons.star, color: Colors.red),
      Text('Star'),
      Icon(Icons.star, color: Colors.green),
    ],
  )
  ```

::right::

### Column

`Column` dispone i suoi widget figli in una lista verticale. È utile quando si vuole allineare elementi uno sopra l'altro sull'asse verticale.

- **Esempio di base**:

  ```dart
  Column(
    children: <Widget>[
      Text('Primo'),
      Text('Secondo'),
      Text('Terzo'),
    ],
  )
  ```

<!-- 

Note slide: 

-->
---
layout: two-cols-header
level: 3
title: I widget Rows Columns
---

### Proprietà principali

::left::  

 Rows

  - `mainAxisAlignment`: Controlla l'allineamento degli elementi sull'asse principale (orizzontale per `Row`).
  - `crossAxisAlignment`: Controlla l'allineamento sull'asse trasversale (verticale per `Row`).
  - `children`: La lista di widget da disporre orizzontalmente.

::right::

 Columns

  - `mainAxisAlignment`: Controlla l'allineamento degli elementi sull'asse principale (verticale per `Column`).
  - `crossAxisAlignment`: Controlla l'allineamento sull'asse trasversale (orizzontale per `Column`).
  - `children`: La lista di widget da disporre verticalmente.

<!-- 

Note slide: 

-->
---
level: 3
title: Proprietà mainAxisAlignment
---

### La proprietà `mainAxisAlignment`

è utilizzata nei widget di layout `Row` e `Column` in Flutter per controllare l'allineamento dei widget figli lungo l'asse principale del layout. 

L'asse principale per `Row` è orizzontale, mentre per `Column` è verticale. 

Questa proprietà accetta valori dall'enumerazione `MainAxisAlignment`, che determina come i figli vengono posizionati lungo l'asse principale.

Un'enumerazione, o "enum" come spesso viene abbreviata, è un tipo speciale in molti linguaggi di programmazione, incluso Dart (il linguaggio utilizzato in Flutter), che consente di definire un insieme limitato e immutabile di valori costanti. Questi valori sono tipicamente correlati tra loro.

Quando definisci un'enumerazione, stai creando un elenco finito di valori che quella variabile può rappresentare.

```dart
enum StatoConnessione { nonConnesso, connettendo, connesso, disconnesso,}
```

<!-- 

Note slide: 

-->
---
level: 3
title: Enum mainAxisAlignment
---

### I valori che `MainAxisAlignment` può assumere

- `start`: Posiziona i widget figli all'inizio dell'asse principale.
- `end`: Posiziona i widget figli alla fine dell'asse principale.
- `center`: Centra i widget figli sull'asse principale.
- `spaceBetween`: Dispone i widget figli in modo che ci sia uno spazio uniforme tra di loro, ma nessuno spazio extra all'inizio o alla fine.
- `spaceAround`: Dispone i widget figli con spazi uniformi intorno ad essi, risultando in metà dello spazio all'inizio e alla fine rispetto allo spazio tra i widget.
- `spaceEvenly`: Dispone i widget figli in modo che ci sia uno spazio uniforme tra di loro e anche agli estremi.

<!-- 

Note slide: 

-->
---
level: 3
title: Esempio mainAxisAlignment
---

### Esempio di Utilizzo

```dart
Row(
  mainAxisAlignment: MainAxisAlignment.center,
  children: <Widget>[
    Icon(Icons.star),
    Icon(Icons.star),
    Icon(Icons.star),
  ],
)
```

In questo esempio, tre icone vengono allineate al centro dell'asse orizzontale di un widget `Row` grazie alla proprietà `mainAxisAlignment` impostata su `MainAxisAlignment.center`.

La scelta del valore di `mainAxisAlignment` dipende dal layout che si desidera ottenere e può avere un impatto significativo sull'aspetto e la disposizione dei widget figli all'interno di un layout `Row` o `Column`.

<!-- 

Note slide: 

-->
---
level: 3
title: Proprietà crossAxisAlignment
---

### crossAxisAlignment

La proprietà `crossAxisAlignment` è utilizzata nei widget di layout `Row` e `Column` in Flutter per controllare l'allineamento dei widget figli lungo l'asse trasversale, ovvero l'asse perpendicolare all'asse principale del layout. Mentre l'asse principale di `Row` è orizzontale e quello di `Column` è verticale, l'asse trasversale funziona al contrario: è verticale per `Row` e orizzontale per `Column`.

Questa proprietà accetta valori dall'enumerazione `CrossAxisAlignment`, che determina come i figli vengono posizionati lungo l'asse trasversale.

<!-- 

Note slide: 

-->
---
level: 3
title: Enum di  crossAxisAlignment
---

- **`CrossAxisAlignment.start`**: Allinea i widget figli all'inizio dell'asse trasversale.
- **`CrossAxisAlignment.end`**: Allinea i widget figli alla fine dell'asse trasversale.
- **`CrossAxisAlignment.center`**: Centra i widget figli sull'asse trasversale.
- **`CrossAxisAlignment.stretch`**: Allarga i widget figli per farli occupare tutto lo spazio disponibile sull'asse trasversale. Questo significa che ogni widget figlio verrà allargato per occupare la massima larghezza in `Column` o la massima altezza in `Row`.
- **`CrossAxisAlignment.baseline`**: Allinea i widget figli lungo la linea di base del testo. Questo valore è utile principalmente all'interno di `Row` per allineare il testo di widget figli di dimensioni diverse. Per utilizzare questo valore, è necessario anche specificare il parametro `textBaseline`.

<!-- 

Note slide: 

-->
---
level: 3
title: Esempi con crossAxisAlignment

---

### Esempio di Utilizzo in `Row`

```dart
Row(
  crossAxisAlignment: CrossAxisAlignment.center,
  children: <Widget>[
    Text('Linea 1', style: TextStyle(fontSize: 30)),
    Text('Linea 2'),
  ],
)
```

In questo esempio, due widget di testo con dimensioni di font diverse vengono centrati lungo l'asse verticale all'interno di un widget `Row`, grazie alla proprietà `crossAxisAlignment` impostata su `CrossAxisAlignment.center`.

La scelta del valore di `crossAxisAlignment` dipende dal layout che si desidera ottenere e può avere un impatto significativo sull'aspetto e la disposizione dei widget figli all'interno di un layout `Row` o `Column`.
<!-- 

Note slide: 

-->
---
layout: cover
level: 3
title: La propietà children

---
### La propietà children

La proprietà `children` è comunemente utilizzata in vari widget di layout in Flutter, come `Column`, `Row`, `Stack`, e molti altri. Questa proprietà accetta una lista di widget, permettendo di costruire interfacce utente complesse componendo insieme diversi widget. Ogni widget all'interno della lista `children` viene disposto nel layout secondo le regole specifiche del widget contenitore.

<!-- 

Note slide: 

-->
---
level: 3
title: Come Funziona children

---

### Come Funziona

- **In `Column` e `Row`**: I widget nella lista `children` vengono disposti verticalmente (`Column`) o orizzontalmente (`Row`), uno dopo l'altro, nell'ordine in cui appaiono nella lista.
- **In `Stack`**: I widget nella lista `children` vengono sovrapposti uno sull'altro, con il primo widget nella lista posizionato in basso e l'ultimo widget posizionato in cima.

- La proprietà `children` è essenziale per costruire layout complessi in Flutter.
- Permette di inserire una lista di widget come figli di un widget padre, determinando come questi figli vengono visualizzati e organizzati nello schermo.
- La manipolazione di questa lista (aggiungendo, rimuovendo o modificando widget) può dinamicamente cambiare l'interfaccia utente.
<!-- 

Note slide: 

-->
---
level: 3
title: Esempio di Utilizzo children

---

### Esempio di Utilizzo Con `Column` e `Row`

```dart
Column(
  children: <Widget>[
    Text('Primo elemento'),
    Text('Secondo elemento'),
    Icon(Icons.star),
    Row( children: <Widget>[
        Icon(Icons.star),
        Text('Stella'),
        Icon(Icons.star_border),
        ],
    )
  ],
)
```

In questo esempio, `Column` dispone verticalmente un testo, un altro testo e un'icona, nell'ordine specificato poi `Row` che dispone orizzontalmente due icone e un testo, nell'ordine dato.
<!-- 

Note slide: 

-->
---
level: 3
title: Considerazioni sui widget Row e Column

---

### Considerazioni

- **Flexibilità**: Entrambi i widget possono utilizzare `Expanded` o `Flexible` per controllare come i widget figli occupano lo spazio disponibile, permettendo layout più dinamici e adattivi.
- **Scrolling**: `Row` e `Column` non sono scrollabili di default. Se il contenuto supera lo spazio disponibile, considera l'uso di `ListView` o `SingleChildScrollView` per aggiungere la capacità di scorrere.
- **Performance**: Per liste di elementi dinamici e potenzialmente lunghi, considera l'utilizzo di `ListView.builder` per migliorare le performance e l'efficienza della memoria.
<!-- 

Note slide: 

-->
---
level: 3
title: Il widget Stack

---

## Il widget `Stack` in Flutter

consente di sovrapporre i widget uno sopra l'altro lungo l'asse Z (profondità). Questo è utile quando si vuole creare interfacce utente con elementi che si sovrappongono, come un badge sopra un'icona o testo che si sovrappone a un'immagine. I widget all'interno di un `Stack` sono posizionati relativamente ai bordi del `Stack` stesso o rispetto agli altri widget nel `Stack`.
<!-- 

Note slide: 

-->
---
level: 3
title: Esempio di Utilizzo del widget Stack

---

## widget Stack Esempio di Utilizzo

```dart
Stack(
  alignment: Alignment.center, // Allinea i figli al centro dello Stack
  children: <Widget>[
    Container(
      width: 100,
      height: 100,
      color: Colors.red,
    ),
    Text('Sopra il contenitore'),
  ],
)
```

In questo esempio, un `Container` rosso e un widget `Text` sono inseriti nello `Stack`. Il `Container` funge da sfondo, mentre il `Text` viene sovrapposto sopra di esso. La proprietà `alignment` dello `Stack` è impostata su `Alignment.center`, il che significa che tutti i figli dello `Stack` saranno centrati all'interno dello `Stack`, a meno che non vengano posizionati esplicitamente in un'altra posizione.
<!-- 

Note slide: 

-->
---
level: 3
title: Proprietà del widget Stack

---

### Proprietà Importanti

- **`children`**: Una lista di widget da sovrapporre. Il primo widget nella lista è il più in basso, mentre l'ultimo widget è il più in alto.
- **`alignment`**: Determina come i figli non posizionati sono allineati all'interno dello `Stack`. Il valore predefinito è `AlignmentDirectional.topStart`.
- **`fit`**: Determina come lo `Stack` deve adattarsi ai suoi figli. Ad esempio, `StackFit.loose` permette ai figli di avere dimensioni diverse, mentre `StackFit.expand` forza i figli a espandersi per adattarsi allo `Stack`.
<!-- 

Note slide: 

-->
---
level: 3
title: Uso di Positioned nel widget Stack

---

### Uso di Positioned

Per posizionare specificamente un widget all'interno di uno `Stack`, si può avvolgere il widget con un widget `Positioned`. Questo permette di specificare la posizione esatta del widget all'interno dello `Stack`, utilizzando proprietà come `top`, `bottom`, `left`, e `right`.

```dart
Stack(
  children: <Widget>[
    Container(
      width: 100,
      height: 100,
      color: Colors.yellow,
    ),
    Positioned(
      top: 10,
      left: 10,
      child: Icon(Icons.star, size: 50),
    ),
  ],
)
```

In questo esempio, un'icona a forma di stella viene posizionata specificamente a 10 pixel dall'alto e 10 pixel dalla sinistra del `Container` giallo sottostante.
<!-- 

Note slide: 

-->
---
level: 3
title: Il widget Container

---

## Il widget `Container`

Funge da contenitore per altri widget e offre una vasta gamma di funzionalità per il layout, la decorazione e il posizionamento dei suoi widget figli.

Può essere utilizzato per aggiungere padding, margini, bordi, colori di sfondo, gradienti, o per imporre vincoli sulle dimensioni dei widget figli.

Il `Container` è estremamente utile per creare layout complessi e interfacce utente attraenti in Flutter, grazie alla sua flessibilità e alla vasta gamma di proprietà configurabili.
<!-- 

Note slide: 

-->
---
level: 3
title: Esempio di Utilizzo del widget Container

---

## Esempio di Utilizzo widget Container

```dart
Container(
  padding: EdgeInsets.all(20.0), // Aggiunge un padding intorno al figlio
  margin: EdgeInsets.symmetric(horizontal: 50.0), // Aggiunge un margine orizzontale
  decoration: BoxDecoration(
    color: Colors.blue, // Imposta il colore di sfondo
    borderRadius: BorderRadius.circular(10.0), // Arrotonda gli angoli
  ),
  child: Text('Ciao, mondo!'), // Widget figlio
)
```
<!-- 

Note slide: 

-->
---
level: 3
title: Proprietà Importanti del widget Container

---

### Proprietà Importanti widget Container

- **`child`**: Il widget figlio che il `Container` deve contenere. Può essere qualsiasi widget, ma solo uno.
- **`padding`**: Lo spazio interno tra i bordi del `Container` e il suo widget figlio.
- **`margin`**: Lo spazio esterno tra il `Container` e gli altri widget circostanti.
- **`decoration`**: Permette di personalizzare l'aspetto visivo del `Container`, inclusi colore, immagine di sfondo, bordi, ombre, e più. Si usa tipicamente con un widget `BoxDecoration`.
- **`width`** e **`height`**: Per specificare le dimensioni del `Container`. Se non forniti, il `Container` si adatterà alle dimensioni del suo figlio o si espanderà per occupare tutto lo spazio disponibile se non ha figli.
- **`alignment`**: Per allineare il widget figlio all'interno del `Container` se il `Container` è più grande del figlio.
<!-- 

Note slide: 

-->
---
level: 3
title: Il widget BoxDecoration
---

## Il widget BoxDecoration

Il `BoxDecoration` è un widget in Flutter che viene utilizzato per decorare un `Container`. Permette di aggiungere sfondo, bordi, gradienti, ombre e forme al `Container`. È una parte fondamentale per creare interfacce utente attraenti e visivamente interessanti.

`BoxDecoration` è uno strumento potente per personalizzare l'aspetto dei widget in Flutter, offrendo una flessibilità significativa nella progettazione dell'interfaccia utente.
<!-- 

Note slide: 

-->
---
level: 3
title: Esempio di Utilizzo del widget BoxDecoration

---

### Esempio di Utilizzo widget BoxDecoration

```dart
Container(
  decoration: BoxDecoration(
    color: Colors.blue, // Imposta un colore di sfondo
    borderRadius: BorderRadius.circular(10.0), // Arrotonda gli angoli
    border: Border.all(
      color: Colors.black, // Colore del bordo
      width: 2.0, // Spessore del bordo
    ),
    boxShadow: [
      BoxShadow(
        color: Colors.grey.withOpacity(0.5), // Colore dell'ombra
        spreadRadius: 5, // Estende l'ombra
        blurRadius: 7, // Effetto sfocatura dell'ombra
        offset: Offset(0, 3), // Posizione dell'ombra
      ),
    ],
    gradient: LinearGradient(
      begin: Alignment.topLeft,
      end: Alignment.bottomRight,
      colors: [Colors.blue, Colors.red], // Gradiente di colore
    ),
  ),
  child: Text('Decorato con BoxDecoration'),
)
```
<!-- 

Note slide: 

-->
---
level: 3
title: Proprietà Importanti del widget BoxDecoration

---

## Proprietà Importanti widget BoxDecoration

- **`color`**: Imposta un colore di sfondo. Non può essere usato insieme a `gradient`.
- **`borderRadius`**: Permette di arrotondare gli angoli del `Container`.
- **`border`**: Aggiunge un bordo intorno al `Container`. Si utilizza il widget `Border` per definire colore e spessore.
- **`boxShadow`**: Aggiunge un'ombra al `Container`. Accetta una lista di `BoxShadow`, permettendo di aggiungere multiple ombre.
- **`gradient`**: Applica un gradiente di colore al `Container`. Può essere lineare (`LinearGradient`), radiale (`RadialGradient`), o angolare (`SweepGradient`).
- **`shape`**: Definisce la forma del `Container`. I valori possono essere `BoxShape.rectangle` (rettangolare, il valore predefinito) o `BoxShape.circle` (circolare).
- **Center**: Un caso speciale di `Align` che centra il widget figlio all'interno del suo contenitore.
<!-- 

Note slide: 

-->
---
level: 3
title: Posizionamento

---
