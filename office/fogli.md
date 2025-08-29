Google Fogli è un potente programma di foglio di calcolo che ti permette di organizzare, analizzare e visualizzare i dati. La sua interfaccia è composta da una griglia di **celle**, identificate da una combinazione di **colonna** (lettera) e **riga** (numero), come ad esempio `A1` o `B2`.

---

### Formule e Funzioni

Le **formule** sono espressioni matematiche che iniziano sempre con il segno di uguale (`=`) e permettono di eseguire calcoli. Le **funzioni** sono formule predefinite che semplificano operazioni complesse. Vediamo alcune delle più comuni:

* **`=SE()`**: È una funzione condizionale che restituisce un valore se una condizione è vera e un altro valore se la condizione è falsa. I suoi tre parametri sono: `test_logico`, `valore_se_vero`, `valore_se_falso`. Ad esempio, `=SE(A1>10, "Maggiore", "Minore")` mostrerà "Maggiore" se il valore in `A1` è superiore a 10, altrimenti mostrerà "Minore".

* **`=CONTA.SE()`**: Questa funzione conta il numero di celle in un intervallo che soddisfano un determinato criterio. La sua sintassi è `=CONTA.SE(intervallo, criterio)`. Ad esempio, `=CONTA.SE(A1:A10, ">5")` conterà quante celle nell'intervallo `A1:A10` contengono un valore maggiore di 5.

* **`=SOMMA.SE()`**: Funziona in modo simile a `CONTA.SE()`, ma invece di contare, **somma** i valori in un intervallo che soddisfano un criterio. La sintassi è `=SOMMA.SE(intervallo, criterio, [intervallo_somma])`. Ad esempio, se hai una colonna di prodotti e una di ricavi, puoi usare `=SOMMA.SE(A1:A10, "T-shirt", B1:B10)` per sommare solo i ricavi relativi alle "T-shirt".

* **`=CERCA.VERT()`**: Questa funzione è utilizzata per trovare un valore specifico in una colonna di una tabella e restituire un valore corrispondente dalla stessa riga in una colonna adiacente. I parametri sono: `valore_da_cercare`, `intervallo_ricerca`, `indice_colonna_risultato`, `[ordinato]`. È utile per cercare un dato in una tabella non ordinata, ad esempio per trovare il prezzo di un prodotto a partire dal suo codice.

* **`=CONFRONTA()`**: A differenza di `CERCA.VERT()`, questa funzione non restituisce un valore, ma la **posizione relativa** (l'indice) di un dato all'interno di un intervallo. La sua sintassi è `=CONFRONTA(valore_da_cercare, intervallo, [tipo_corrispondenza])`. È spesso usata in combinazione con altre funzioni, come `INDICE()`, per creare ricerche più flessibili.

---

### Rappresentazione Grafica

Un'altra caratteristica chiave di Google Fogli è la sua capacità di trasformare i dati in **grafici**, rendendo le informazioni più facili da visualizzare e interpretare. Puoi creare diversi tipi di grafici, come a barre, a torta, a linee, a dispersione e molti altri, semplicemente selezionando i dati e scegliendo "Inserisci" > "Grafico". 

---

### Riferimento Assoluto e Relativo

La principale differenza tra un riferimento assoluto e uno relativo risiede nel modo in cui si comportano quando una formula viene copiata in altre celle.

* Un **riferimento relativo** si adatta in base alla posizione della cella in cui viene copiata. Ad esempio, se la formula `=A1+B1` è nella cella `C1` e la copi in `C2`, diventerà automaticamente `=A2+B2`. È utile quando si applica la stessa logica a una serie di dati.
* Un **riferimento assoluto** rimane invariato quando la formula viene copiata. È indicato dal segno del dollaro (`$`) prima della colonna e/o della riga (es. `=$A$1`). Se la formula `=$A$1+B1` è in `C1` e la copi in `C2`, diventerà `=$A$1+B2`, mantenendo il riferimento fisso alla cella `A1`.

---

### Realizzare una tabella per la media dei voti

1.  **Inserisci i dati:** In una tabella, crea una colonna per le materie e una per i voti. Ad esempio, nella colonna `A` inserisci le materie (Matematica, Italiano, Storia) e nella colonna `B` i voti corrispondenti (8, 7, 9).
2.  **Calcola la media:** In una cella vuota, ad esempio `B5`, inserisci la funzione `=MEDIA()` seguita dall'intervallo di celle contenente i voti. Nel nostro esempio, la formula sarà `=MEDIA(B2:B4)`.
3.  **Visualizza il risultato:** Premi `Invio`. La cella `B5` mostrerà la media dei voti.

---

### Fasi per realizzare un grafico a torta

1.  **Prepara i dati:** Organizza i dati in due colonne: una per le categorie (ad es. le materie) e una per i valori corrispondenti (ad es. i voti).
2.  **Seleziona i dati:** Evidenzia l'intervallo di celle che contiene i dati che vuoi rappresentare nel grafico.
3.  **Inserisci il grafico:** Vai al menu **"Inserisci"** e seleziona **"Grafico"**.
4.  **Scegli il tipo di grafico:** Nell'editor grafico, seleziona **"Grafico a torta"** dalla scheda **"Impostazioni"**.
5.  **Personalizza:** Puoi personalizzare il titolo, le etichette, i colori e altre impostazioni del grafico utilizzando le opzioni disponibili nell'editor. 

---

### Differenze tra grafico a dispersione e istogramma

* Un **istogramma** rappresenta la **distribuzione di frequenza** di un singolo set di dati numerici. I dati sono raggruppati in "bin" (intervalli) e l'altezza delle barre indica quante volte i valori cadono in ogni intervallo. È usato per mostrare la distribuzione di una variabile. 
* Un **grafico a dispersione** (o scatter plot) mostra la **relazione tra due variabili numeriche**. Ogni punto sul grafico rappresenta i valori di entrambe le variabili per un singolo punto dati. È usato per identificare correlazioni o modelli tra due set di dati. 

---

### Significato di "Serie" e come modificarne i dati

In un grafico di Google Fogli, una **serie** è un insieme di dati che viene tracciato. Ad esempio, in un grafico a barre che mostra le vendite annuali, ogni anno rappresenterebbe una serie. Un grafico può contenere una o più serie.

Per **modificare i dati di origine** di una serie, fai doppio clic sul grafico per aprire l'editor grafico. Nella scheda **"Impostazioni"**, puoi vedere le serie elencate. Puoi:
* Fare clic sul nome di una serie per cambiare l'intervallo di celle da cui prende i dati.
* Aggiungere una nuova serie per tracciare un altro set di dati.
* Rimuovere una serie che non ti serve più.
  
---

### La Cellula del Foglio di Calcolo: La Cella
Ogni cella è l'unità base del tuo foglio e ha tre caratteristiche principali:
* **Indirizzo:** È il nome univoco della cella, come `A1` o `B5`, formato dalla lettera della colonna e dal numero della riga.
* **Contenuto:** Può essere di quattro tipi:
    * **Testo:** Qualsiasi informazione non numerica (es. "Gennaio", "Nome Prodotto").
    * **Valore:** Un numero, una data o un'ora (es. 150, 10/05/2024).
    * **Formula:** Un'espressione che esegue un calcolo (es. `=A1+A2`).
    * **Funzione:** Una formula predefinita che semplifica calcoli complessi (es. `=SOMMA(A1:A5)`).
* **Formato:** Riguarda l'aspetto visivo della cella e dei suoi contenuti. Puoi personalizzare il formato del numero (es. valuta, percentuale), il tipo di carattere, l'allineamento del testo, i bordi e il colore dello sfondo. La **formattazione condizionale** ti permette anche di applicare automaticamente un formato specifico a una cella se soddisfa una certa condizione, per esempio colorare in rosso le celle con valori negativi.

***

### Formule, Errori e Riferimenti
Le **formule** sono il motore di calcolo del foglio di lavoro. Iniziano sempre con il simbolo di **uguale (`=`)** e possono usare gli operatori matematici di base: `+` (somma), `-` (sottrazione), `*` (moltiplicazione), `/` (divisione) e `^` (elevamento a potenza).

A volte, un errore nel calcolo di una formula viene segnalato con un codice che inizia con il simbolo **`#`**, come `#DIV/0!` (divisione per zero) o `#RIF!` (riferimento a una cella non valida).

Quando scrivi una formula, usi i **riferimenti** per indicare le celle coinvolte nel calcolo. Questi riferimenti possono essere di due tipi:

* **Riferimenti relativi:** Si adattano automaticamente quando la formula viene copiata in un'altra cella. Se la formula `=A1+B1` viene copiata da `C1` a `C2`, diventerà `=A2+B2`. Questo è il comportamento predefinito.
* **Riferimenti assoluti:** Rimangono fissi, anche quando la formula viene copiata. Si indicano con il segno del dollaro (`$`) prima della colonna e/o della riga (es. `=$A$1`).

***

### Selezione di Celle
La **selezione** ti permette di specificare una o più celle su cui applicare un'operazione, come copiare, eliminare o formattare. Per selezionare celle adiacenti, basta cliccare e trascinare il mouse.

La **selezione alternata**, invece, è utile per selezionare celle che non sono vicine tra loro. Per farla, tieni premuto il tasto `Ctrl` sulla tastiera (o `Cmd` su Mac) mentre clicchi sulle singole celle che vuoi includere nella selezione. 

