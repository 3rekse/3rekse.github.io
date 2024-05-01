---
layout: intro
title: DOC Progetto Geolife
level: 2
---

# Esercizio "Progetto Geolife"

Usa il programma Microsoft Word oppure Google Documenti

## Contenuti dell'esercizio

<Toc columns="2" maxDepth="3" minDepth="3" mode="all" />

---
level: 3
title: Inserimento testo 1/2

---

## Inserimento testo 1/2

Progetto Geolife

L’utilizzo di massa di dispositivi portatili come smartphone e smartwatch ci permette di avere uno storico completo della nostra vita. Grazie alle informazioni collezionate da questi terminali, riusciamo a ricostruire, con accuratezza estrema, lo storico dei nostri spostamenti.
L’applicazione di algoritmi di machine learning ai dati di posizionamento, ci permette di poter estrarre informazioni molto rilevanti utili a capire i nostri comportamenti. Alcuni di questi pattern sono ad esempio: il percorso che facciamo da casa a scuola, le gite fuoriporta, quali locali frequentiamo il sabato sera etc..
In questo articolo descriveremo un efficiente e pratico algoritmo non supervisionato di machine learning per poter effettuare l’identificazione di pattern di traiettorie. Nella prima parte descriveremo l’algoritmo di clustering utilizzato per poter scoprire pattern, nella seconda invece mostreremo come realizzare concretamente tale algoritmo in Python.
I dati utilizzati sono relativi al tracciamento giornaliero degli spostamenti di un dato soggetto.

---
level: 3
title: Inserimento testo 2/2

---
## Inserimento testo 2/2

Set di dati di traiettoria GPS  raccolto nel progetto Geolife da 182 utenti in un periodo di oltre tre anni (da aprile 2007 ad agosto 2012). Una traiettoria GPS di questo set di dati è rappresentata da una sequenza di punti segnati nel tempo, ognuno dei quali contiene le informazioni di latitudine, longitudine e altitudine. Questo set di dati contiene 17.621 traiettorie con una distanza totale di circa 1,2 milioni di chilometri e una durata complessiva di 48.000 ore. Queste traiettorie sono state registrate da diversi logger GPS e telefoni GPS e hanno una varietà di frequenze di campionamento. Il 91% delle traiettorie sono registrate in una rappresentazione densa, ad esempio ogni 1-5 secondi o ogni 5-10 metri per punto. Questo set di dati ha ricodificato una vasta gamma di movimenti all'aperto degli utenti, tra cui non solo le routine di vita come andare a casa e andare al lavoro, ma anche alcuni intrattenimenti e attività sportive, come lo shopping, visite turistiche, ristoranti, escursioni a piedi e in bicicletta. Questo set di dati di traiettoria può essere utilizzato in molti campi di ricerca, come il project mining di modelli di mobilità, il riconoscimento delle attività degli utenti, i social network basati sulla posizione, la privacy della posizione e la raccomandazione di localizzazione. Si prega di citare i seguenti documenti quando si utilizza questo set di dati GPS. [1] Yu Zheng, Lizhu Zhang, Xing Xie, Wei-Ying Ma. Mining interesting locations and travel sequences from GPS trajectories. In Proceedings of International conference on World Wild Web (WWW 2009), Madrid Spain. ACM Press: 791-800. [2] Yu Zheng, Quannan Li, Yukun Chen, Xing Xie, Wei-Ying Ma. Understanding Mobility Based on GPS Data. In Proceedings of ACM conference on Ubiquitous Computing (UbiComp 2008), Seoul, Korea. ACM Press: 312-321. [3] Yu Zheng, Xing Xie, Wei-Ying Ma, GeoLife: A Collaborative Social Networking Service among User, location and trajectory. Invited paper, in IEEE Data Engineering Bulletin. 33, 2, 2010, pp. 32-40.

---
level: 3
layout: two-cols-header
title: Istruzioni di formattazione

---
<style>
.two-cols-header
{
  column-gap: 80px; /* aggiungi la tua dimensione desiderata qui */
}
</style>

## Istruzioni per la formattazione

::left::

Assegna a tutto il documento i seguenti margini: sinistro e destro 0,5cm. superiore 3cm ed inferiore 1cm

Assegna all'intestazione il carattere Tahoma dimensione 18, stile grassetto 
e allineamento centrato, con sfondo azzurro

Assegna a tutto il resto del testo carattere Lucida Console e dimensione 12pt 
allineamento giustificato.

Assegna rientro di 2cm a destra e 1cm a sinistra,un colore di sfondo azzurro a tutto il
primo paragrafo.

::right::

Assegna rientro di 1,5cm a destra e 2cm a sinistra,un carattere di colore rosso tutto il
secondo paragrafo e un allineamento a destra.

Assegna rientro di 1 cm a destra e 1cm a sinistra,un colore di sfondo giallo e il testo in 
corsivo a tutto il
terzo paragrafo con un allineamento centrato.

Inserisci in piè di pagina i numeri e applica lo stile grassetto alle parole che ritieni 
più opportune.

---
level: 3
layout: two-cols-header
class: wide
title: Risultato Finale

---

::left::

## RISULTATO FINALE

![coding](/office/images/primipassi/coding.png)

::right::

## Carica su Classroom il file in formato PDF.

Il nome corretto dovrebbe essere

>tuoCognome - coding.pdf
