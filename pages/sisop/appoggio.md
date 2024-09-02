
Come puoi vedere dalle figure, molto più deve avvenire quando c'è virtualizzazione. Certamente, a causa dei salti extra, la virtualizzazione potrebbe rallentare le chiamate di sistema e quindi potrebbe influire sulle prestazioni.

Potresti anche notare che abbiamo una domanda rimanente: in quale modalità dovrebbe eseguire il sistema operativo? Non può eseguire in modalità kernel, perché altrimenti avrebbe accesso illimitato all'hardware. Pertanto, deve eseguire in una modalità meno privilegiata rispetto a prima, essere in grado di accedere alle proprie strutture dati e contemporaneamente prevenire l'accesso alle sue strutture dati da parte dei processi utente.

Nel lavoro su Disco, Rosenblum e colleghi hanno affrontato questo problema in modo abbastanza elegante sfruttando una modalità speciale fornita dall'hardware MIPS nota come modalità supervisore. Quando si esegue in questa modalità, non si ha ancora accesso alle istruzioni privilegiate, ma si può accedere a un po' più di memoria rispetto alla modalità utente; il sistema operativo può usare questa memoria extra per le sue strutture dati e tutto funziona bene. Su hardware che non dispone di tale modalità, si deve eseguire il sistema operativo in modalità utente e utilizzare la protezione della memoria (tabelle delle pagine e TLB) per proteggere adeguatamente le strutture dati del sistema operativo. In altre parole, quando si passa al sistema operativo, il monitor dovrebbe rendere la memoria delle strutture dati del sistema operativo accessibile al sistema operativo tramite le protezioni delle tabelle delle pagine; quando si torna all'applicazione in esecuzione, la possibilità di leggere e scrivere il kernel dovrebbe essere rimossa.

### Virtualizzazione della Memoria del VMM

```
Spazio degli Indirizzi Virtuali
"Memoria Fisica"
Memoria della Macchina
0
1
2
3
Tabella delle Pagine del SO
VPN 0 a PFN 10
VPN 2 a PFN 03
VPN 3 a PFN 08
0
1
2
3
4
5
6
7
8
9
10
11
12
```
## Virtualizzazione della Memoria

Ora dovresti avere una comprensione di base di come viene virtualizzata la CPU: il VMM (Virtual Machine Monitor) agisce come un sistema operativo e pianifica l'esecuzione delle diverse macchine virtuali, con alcune interazioni interessanti quando i livelli di privilegio cambiano. Ma abbiamo lasciato fuori una parte importante dell'equazione: come fa il VMM a virtualizzare la memoria?

Ogni sistema operativo normalmente pensa alla memoria fisica come a un array lineare di pagine e assegna ogni pagina a sé stesso o ai processi utente. Il sistema operativo stesso, ovviamente, già virtualizza la memoria per i suoi processi in esecuzione, in modo tale che ogni processo abbia l'illusione del proprio spazio di indirizzamento privato. Ora dobbiamo aggiungere un altro strato di virtualizzazione, in modo che più sistemi operativi possano condividere la memoria fisica effettiva della macchina, e dobbiamo farlo in modo trasparente.

Questo strato extra di virtualizzazione rende la "memoria fisica" una virtualizzazione sopra ciò che il VMM chiama memoria della macchina, che è la vera memoria fisica del sistema. Pertanto, ora abbiamo un ulteriore strato di indirezione: ogni sistema operativo mappa gli indirizzi virtuali a quelli fisici tramite le sue tabelle delle pagine per processo; il VMM mappa le risultanti mappature fisiche agli indirizzi della macchina sottostante tramite le sue tabelle delle pagine per sistema operativo. La Figura B.4 rappresenta questo livello extra di indirezione.

### Flusso di un Miss della TLB Senza Virtualizzazione

```
Processo
    1. Caricamento da memoria: Miss della TLB: Trap
Sistema Operativo
    2. Gestore di miss della TLB: Estrai VPN dall'indirizzo virtuale; 
       Fai lookup nella tabella delle pagine;
       Se presente e valido: ottieni PFN, aggiorna TLB; 
       Ritorna dal trap
Processo
    3. Riprendi l'esecuzione (@PC dell'istruzione di trapping); 
       L'istruzione viene ritentata; 
       Risultato in un hit della TLB
```

### Flusso di un Miss della TLB con Virtualizzazione

```
Processo
    1. Caricamento da memoria: Miss della TLB: Trap
Virtual Machine Monitor
    2. Gestore di miss della TLB del VMM: 
       Chiamata al gestore di miss della TLB del sistema operativo (con riduzione dei privilegi)
Sistema Operativo
    3. Gestore di miss della TLB del sistema operativo: 
       Estrai VPN dall'indirizzo virtuale; 
       Fai lookup nella tabella delle pagine; 
       Se presente e valido: ottieni PFN, aggiorna TLB
Virtual Machine Monitor
    4. Gestore del trap: 
       Codice non privilegiato che tenta di aggiornare la TLB; 
       Il sistema operativo sta cercando di installare la mappatura VPN-PFN; 
       Aggiorna invece la TLB con VPN-MFN (privilegiato); 
       Torna al sistema operativo (riduzione dei privilegi)
Sistema Operativo
    5. Ritorna dal trap
Virtual Machine Monitor
    6. Gestore del trap: 
       Codice non privilegiato che tenta di ritornare da un trap; 
       Ritorna dal trap
Processo
    7. Riprendi l'esecuzione (@PC dell'istruzione); 
       L'istruzione viene ritentata; 
       Risultato in un hit della TLB
```

### Virtualizzazione della Memoria del VMM

```
Spazio degli Indirizzi Virtuali
"Memoria Fisica"
Memoria della Macchina
0
1
2
3
Tabella delle Pagine del Sistema Operativo
VPN 0 a PFN 10
VPN 2 a PFN 03
VPN 3 a PFN 08
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
Tabella delle Pagine del VMM
PFN 03 a MFN 06
PFN 08 a MFN 10
PFN 10 a MFN 05
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
```


Processo
Sistema Operativo
1. Caricamento dalla memoria: TLB miss: Trap
2. Gestore dei TLB miss del sistema operativo: Estrai VPN dall'indirizzo virtuale (VA);
   Esegui la ricerca nella tabella delle pagine;
   Se presente e valido: ottieni il PFN, aggiorna la TLB;
   Ritorno dalla trap
3. Riprendi l'esecuzione
   (@PC dell'istruzione che ha causato la trap);
   L'istruzione viene ripetuta;
   Risultato: TLB hit
Figura B.5: Flusso del TLB Miss senza Virtualizzazione

Nella figura, c'è un singolo spazio degli indirizzi virtuali con quattro pagine, tre delle quali sono valide (0, 2 e 3). Il sistema operativo utilizza la sua tabella delle pagine per mappare queste pagine a tre frame fisici sottostanti (rispettivamente 10, 3 e 8). Sotto il sistema operativo, il VMM esegue un ulteriore livello di indirezione, mappando i PFN 3, 8 e 10 ai frame della macchina 6, 10 e 5 rispettivamente. Ovviamente, questa immagine semplifica le cose in modo considerevole; in un sistema reale, ci sarebbero V sistemi operativi in esecuzione (con V probabilmente maggiore di uno) e quindi V tabelle delle pagine del VMM; inoltre, sopra ogni sistema operativo in esecuzione OSi, ci sarebbero un certo numero di processi Pi in esecuzione (probabilmente nelle decine o centinaia), e quindi tabelle delle pagine Pi (per-processo) all'interno di ogni OSi.

Per capire meglio come funziona questo processo, ricordiamo come funziona la traduzione degli indirizzi in un sistema moderno a paginazione. In particolare, discutiamo cosa succede in un sistema con una TLB gestita dal software durante la traduzione degli indirizzi. Supponiamo che un processo utente generi un indirizzo (per un fetch di istruzioni o un carico o salvataggio esplicito); per definizione, il processo genera un indirizzo virtuale, dato che il suo spazio degli indirizzi è stato virtualizzato dal sistema operativo. Come sapete ormai, è compito del sistema operativo, con l'aiuto dell'hardware, trasformare questo in un indirizzo fisico e quindi essere in grado di recuperare il contenuto desiderato dalla memoria fisica.

Supponiamo di avere uno spazio degli indirizzi virtuali a 32 bit e una dimensione della pagina di 4 KB. Pertanto, il nostro indirizzo a 32 bit è diviso in due parti: un numero di pagina virtuale (VPN) di 20 bit e un offset di 12 bit. Il compito del sistema operativo, con l'aiuto della TLB hardware, è quello di tradurre il VPN in un numero di frame di pagina fisica (PFN) valido e quindi produrre un indirizzo fisico completo che può essere inviato alla memoria fisica per recuperare i dati corretti. Nel caso comune, ci aspettiamo che la TLB gestisca la traduzione in hardware, rendendo quindi la traduzione veloce. Quando si verifica un TLB miss (almeno, su un sistema con una TLB gestita dal software), il sistema operativo deve intervenire per gestire il miss, come descritto qui nella Figura B.5.

Processo
Sistema Operativo
Monitor della Macchina Virtuale
1. Caricamento dalla memoria
   TLB miss: Trap
1. Gestore dei TLB miss del VMM:
   Chiama il gestore dei TLB miss del sistema operativo
   (riducendo i privilegi)
1. Gestore dei TLB miss del sistema operativo:
   Estrai VPN dall'indirizzo virtuale (VA);
   Esegui la ricerca nella tabella delle pagine;
   Se presente e valido,
   ottieni il PFN, aggiorna la TLB
1. Gestore delle trap:
   Codice non privilegiato che tenta
   di aggiornare la TLB;
   Il sistema operativo sta cercando di installare
   la mappatura VPN-PFN;
   Aggiorna la TLB invece con
   VPN-MFN (privilegiato);
   Ritorna al sistema operativo
   (riducendo i privilegi)
1. Ritorno dalla trap
2. Gestore delle trap:
   Codice non privilegiato che tenta
   di ritornare da una trap;
   Ritorno dalla trap
1. Riprendi l'esecuzione
   (@PC dell'istruzione);
   L'istruzione viene ripetuta;
   Risultato: TLB hit
Figura B.6: Flusso del TLB Miss con Virtualizzazione
Come puoi vedere, un TLB miss causa una trap nel sistema operativo, che gestisce il problema cercando il VPN nella tabella delle pagine e installando la traduzione nella TLB. Con un monitor della macchina virtuale (VMM) sotto il sistema operativo, tuttavia, le cose diventano un po' più interessanti. Esaminiamo di nuovo il flusso di un TLB miss (vedi Figura B.6 per un riepilogo). Quando un processo effettua un riferimento alla memoria virtuale e manca nella TLB, non è il gestore dei TLB miss del sistema operativo a entrare in funzione, bensì il gestore dei TLB miss del VMM, poiché il VMM è il vero proprietario privilegiato della macchina. Tuttavia, nel caso normale, il gestore dei TLB del VMM non sa come gestire il TLB miss, quindi salta immediatamente al gestore dei TLB miss del sistema operativo; il VMM conosce la posizione di questo gestore perché il sistema operativo, durante il "boot", ha cercato di installare i propri gestori delle trap. Il gestore dei TLB miss del sistema operativo quindi si avvia, esegue una ricerca nella tabella delle pagine per il VPN in questione e cerca di installare la mappatura VPN-PFN nella TLB. Tuttavia, farlo è un'operazione privilegiata e quindi causa un'altra trap nel VMM (il VMM viene notificato quando qualsiasi codice non privilegiato cerca di fare qualcosa di privilegiato, ovviamente). A questo punto, il VMM gioca il suo trucco: invece di installare la mappatura VPN-PFN del sistema operativo, il VMM installa la sua desiderata mappatura VPN-MFN. Dopo averlo fatto, il sistema alla fine ritorna al codice a livello utente, che riprova l'istruzione, risultando in un TLB hit, recuperando i dati dal frame macchina dove i dati risiedono.

### A Lato: HYPERVISOR E TLB GESTITE DALL'HARDWARE

La nostra discussione si è concentrata sulle TLB gestite dal software e sul lavoro che deve essere svolto quando si verifica un miss. Ma potreste chiedervi: come fa il monitor della macchina virtuale a intervenire con una TLB gestita dall'hardware? In quei sistemi, l'hardware percorre la tabella delle pagine ad ogni miss della TLB e aggiorna la TLB secondo necessità, e quindi il VMM non ha la possibilità di intervenire su ogni miss della TLB per inserire la sua traduzione nel sistema. Invece, il VMM deve monitorare da vicino i cambiamenti che il sistema operativo apporta a ciascuna tabella delle pagine (che, in un sistema gestito dall'hardware, è indicata da un registro di base della tabella delle pagine di qualche tipo), e mantenere una tabella delle pagine ombra che invece mappa gli indirizzi virtuali di ciascun processo alle pagine macchina desiderate dal VMM [AA06]. Il VMM installa la tabella delle pagine ombra di un processo ogni volta che il sistema operativo cerca di installare la tabella delle pagine a livello di sistema operativo del processo, e quindi l'hardware continua a tradurre gli indirizzi virtuali in indirizzi macchina usando la tabella ombra, senza che il sistema operativo se ne accorga.

Questo insieme di azioni suggerisce anche come un VMM debba gestire la virtualizzazione della memoria fisica per ciascun sistema operativo in esecuzione; proprio come il sistema operativo ha una tabella delle pagine per ciascun processo, il VMM deve tracciare le mappature da fisico a macchina per ciascuna macchina virtuale che sta eseguendo. Queste tabelle delle pagine per macchina devono essere consultate nel gestore dei TLB miss del VMM per determinare a quale pagina macchina una particolare pagina "fisica" mappa, e anche, ad esempio, se è presente nella memoria della macchina al momento attuale (cioè, il VMM potrebbe averla spostata su disco).

Infine, come potreste notare da questa sequenza di operazioni, i TLB miss in un sistema virtualizzato diventano abbastanza più costosi rispetto a un sistema non virtualizzato. Per ridurre questo costo, i progettisti di Disco hanno aggiunto una "TLB software" a livello di VMM. L'idea dietro questa struttura dati è semplice. Il VMM registra ogni mappatura da virtuale a fisico che vede il sistema operativo cercare di installare; poi, su un TLB miss, il VMM consulta prima la sua TLB software per vedere se ha già visto questa mappatura da virtuale a fisico e quale dovrebbe essere la mappatura da virtuale a macchina desiderata dal VMM. Se il VMM trova la traduzione nella sua TLB software, installa semplicemente la mappatura da virtuale a macchina direttamente nella TLB hardware, e quindi salta tutto il avanti e indietro nel flusso di controllo sopra descritto [B+97].

### A Lato: PARA-VIRTUALIZZAZIONE

In molte situazioni, è utile presumere che il sistema operativo non possa essere modificato per funzionare meglio con i monitor delle macchine virtuali (ad esempio, perché si sta eseguendo il proprio VMM sotto un sistema operativo concorrente poco collaborativo). Tuttavia, non è sempre così, e quando il sistema operativo può essere modificato (come abbiamo visto nell'esempio con lo zeroing a richiesta delle pagine), potrebbe funzionare in modo più efficiente su un VMM. Eseguire un sistema operativo modificato per funzionare su un VMM è generalmente chiamato **para-virtualizzazione** [WSG02], poiché la virtualizzazione fornita dal VMM non è completa, ma piuttosto parziale, richiedendo modifiche al sistema operativo per operare efficacemente. Le ricerche dimostrano che un sistema para-virtualizzato progettato correttamente, con solo le giuste modifiche al sistema operativo, può essere reso quasi altrettanto efficiente di un sistema senza VMM [BD+03].

### B.5 Il Divario Informativo

Così come il sistema operativo non sa troppo su ciò che i programmi applicativi realmente desiderano, e quindi deve spesso adottare politiche generali che sperabilmente funzionano per tutti i programmi, il monitor delle macchine virtuali (VMM) spesso non sa troppo su ciò che il sistema operativo sta facendo o desiderando; questa mancanza di conoscenza, a volte chiamata divario informativo tra il VMM e il sistema operativo, può portare a varie inefficienze [B+97]. Ad esempio, un sistema operativo, quando non ha nient'altro da eseguire, a volte entra in un ciclo inattivo semplicemente girando in attesa che si verifichi il prossimo interrupt:
```c
while (1)
; // il ciclo inattivo
```
Ha senso girare così se il sistema operativo è responsabile dell'intera macchina e quindi sa che non c'è nient'altro che deve essere eseguito. Tuttavia, quando un VMM sta eseguendo sotto due diversi sistemi operativi, uno nel ciclo inattivo e uno che esegue utilmente i processi utente, sarebbe utile per il VMM sapere che uno dei sistemi operativi è inattivo, in modo che possa dare più tempo di CPU al sistema operativo che sta facendo un lavoro utile.

Un altro esempio emerge con lo zeroing a richiesta delle pagine. La maggior parte dei sistemi operativi azzera un frame fisico prima di mappare quest'ultimo nello spazio degli indirizzi di un processo. La ragione per farlo è semplice: la sicurezza. Se il sistema operativo desse a un processo una pagina che un altro processo aveva utilizzato senza azzerarla, potrebbe verificarsi una fuga di informazioni tra i processi, potenzialmente rivelando informazioni sensibili. Purtroppo, il VMM deve azzerare le pagine che assegna a ciascun sistema operativo, per la stessa ragione, e quindi molte volte una pagina sarà azzerata due volte, una volta dal VMM quando la assegna a un sistema operativo, e una volta dal sistema operativo quando la assegna a un processo. Gli autori di Disco non avevano una grande soluzione a questo problema: cambiarono semplicemente il sistema operativo (IRIX) affinché non azzerasse le pagine che sapeva essere state azzerate dal VMM sottostante [B+97].
### SUGGERIMENTO: USO DELL'INFORMAZIONE IMPLICITA

L'informazione implicita può essere uno strumento potente nei sistemi a strati dove è difficile cambiare le interfacce tra i sistemi, ma è necessario più informazioni su un diverso livello del sistema. 

Ad esempio, un dispositivo disco basato su blocchi potrebbe voler sapere di più su come un file system sopra di esso lo sta utilizzando; allo stesso modo, un'applicazione potrebbe voler sapere quali pagine sono attualmente nella cache delle pagine del file system, ma il sistema operativo non fornisce alcuna API per accedere a queste informazioni. In entrambi questi casi, i ricercatori hanno sviluppato potenti tecniche di inferenza per raccogliere le informazioni necessarie implicitamente, senza richiedere un'interfaccia esplicita tra i livelli [AD+01,S+03]. Tali tecniche sono molto utili in un monitor delle macchine virtuali, che vorrebbe imparare di più sui sistemi operativi che eseguono sopra di esso senza richiedere un'API esplicita tra i due livelli.

Ci sono molti altri problemi simili a quelli descritti qui. Una soluzione è che il VMM usi l'inferenza (una forma di informazione implicita) per superare il problema. Ad esempio, un VMM può rilevare il ciclo inattivo notando che il sistema operativo è passato alla modalità a basso consumo. Un approccio diverso, visto nei sistemi para-virtualizzati, richiede che il sistema operativo venga modificato. Questo approccio più esplicito, sebbene più difficile da implementare, può essere molto efficace.
## Riassunto

La virtualizzazione sta vivendo un periodo di rinascita. Per molte ragioni, utenti e amministratori vogliono eseguire più sistemi operativi (OS) sulla stessa macchina contemporaneamente. La chiave è che i monitor delle macchine virtuali (VMM) generalmente forniscono questo servizio in modo trasparente; l'OS sovrastante ha poca consapevolezza di non controllare effettivamente l'hardware della macchina. Il metodo chiave che i VMM utilizzano per farlo è estendere la nozione di esecuzione diretta limitata; configurando l'hardware per permettere al VMM di interporre sugli eventi chiave (come i trap), il VMM può controllare completamente come vengono allocati le risorse della macchina preservando l'illusione necessaria all'OS.

Potresti aver notato alcune somiglianze tra ciò che fa l'OS per i processi e ciò che fa il VMM per gli OS. Entrambi virtualizzano l'hardware e quindi fanno alcune delle stesse cose. Tuttavia, c'è una differenza fondamentale: con la virtualizzazione dell'OS, vengono fornite nuove astrazioni e interfacce comode; con la virtualizzazione a livello di VMM, l'astrazione è identica all'hardware (e quindi non molto comoda). Mentre sia l'OS che il VMM virtualizzano l'hardware, lo fanno fornendo interfacce completamente diverse; i VMM, a differenza dell'OS, non sono particolarmente progettati per rendere l'hardware più facile da usare.

Ci sono molti altri argomenti da studiare se desideri saperne di più sulla virtualizzazione. Ad esempio, non abbiamo discusso cosa accade con l'I/O, un argomento che ha le sue nuove e interessanti questioni quando si tratta di piattaforme virtualizzate. Non abbiamo neanche discusso come funziona la virtualizzazione quando viene eseguita "a fianco" del tuo OS in quella che a volte viene chiamata configurazione "hosted". Leggi di più su entrambi questi argomenti se sei interessato [SVL01]. Non abbiamo inoltre discusso cosa accade quando una raccolta di sistemi operativi che eseguono su un VMM utilizza troppa memoria.

Infine, il supporto hardware ha cambiato il modo in cui le piattaforme supportano la virtualizzazione. Aziende come Intel e AMD ora includono un supporto diretto per un ulteriore livello di virtualizzazione, eliminando molte delle tecniche software descritte in questo capitolo. Forse, in un capitolo ancora da scrivere, discuteremo questi meccanismi in maggior dettaglio.
## Riferimenti

[AA06] "A Comparison of Software and Hardware Techniques for x86 Virtualization" di Keith Adams e Ole Agesen. ASPLOS '06, San Jose, California. Un eccellente articolo di due ingegneri VMware sui benefici sorprendentemente piccoli del supporto hardware per la virtualizzazione. Include anche una discussione generale sulla virtualizzazione in VMware, compresi i trucchi di traduzione binaria necessari per virtualizzare la difficile piattaforma x86.

[AD+01] "Information and Control in Gray-box Systems" di Andrea C. Arpaci-Dusseau e Remzi H. Arpaci-Dusseau. SOSP '01, Banff, Canada. Il nostro lavoro su come inferire informazioni e persino esercitare controllo sull'OS dal livello dell'applicazione, senza modifiche all'OS. Il miglior esempio in esso: determinare quali blocchi di file sono memorizzati nella cache utilizzando una tecnica probabilistica basata su sonde; questo consente alle applicazioni di utilizzare meglio la cache, pianificando prima il lavoro che risulterà in hit.

[B00] "FreeBSD Developers’ Handbook: Chapter 11 x86 Assembly Language Programming" http://www.freebsd.org/doc/en/books/developers-handbook/. Un bel tutorial sulle chiamate di sistema e simili nel manuale degli sviluppatori BSD.

[BD+03] "Xen and the Art of Virtualization" di Paul Barham, Boris Dragovic, Keir Fraser, Steven Hand, Tim Harris, Alex Ho, Rolf Neugebauer, Ian Pratt, Andrew Warfield. SOSP '03, Bolton Landing, New York. L'articolo che dimostra che con i sistemi para-virtualizzati, i costi generali dei sistemi virtualizzati possono essere resi incredibilmente bassi. Così successo fu questo articolo sul monitor delle macchine virtuali Xen che lanciò un'azienda.

[B+97] "Disco: Running Commodity Operating Systems on Scalable Multiprocessors" di Edouard Bugnion, Scott Devine, Kinshuk Govil, Mendel Rosenblum. SOSP '97. L'articolo che ha reintrodotto la comunità dei sistemi alla ricerca sulle macchine virtuali; beh, forse questo è ingiusto, poiché anche Bressoud e Schneider [BS95] lo hanno fatto, ma qui abbiamo iniziato a capire perché la virtualizzazione stava per tornare. Tuttavia, è diventato ancora più chiaro quando questo gruppo di eccellenti ricercatori ha avviato VMware e ha guadagnato miliardi di dollari.

[B+17] "Hardware and Software Support for Virtualization" di Edouard Bugnion, Jason Nieh, Dan Tsafrir. Morgan and Claypool, 2017. Indubbiamente il miglior posto per ottenere le ultime informazioni su come funziona la virtualizzazione nei sistemi moderni. Sfortunatamente, dovrai leggere un breve libro per capirlo!

[BS95] "Hypervisor-based Fault-tolerance" di Thomas C. Bressoud, Fred B. Schneider. SOSP '95. Uno dei primi articoli a riportare in auge l'hypervisor, che è solo un altro termine per un monitor delle macchine virtuali. In questo lavoro, tuttavia, tali hypervisor vengono utilizzati per migliorare la tolleranza ai guasti hardware, cheVirtaul Monchine Monitor 
    1. Processo trappato: Chiamata al gestore di trap del sistema operativo (con privilegi ridotti) è forse meno utile di alcuni degli scenari più pratici discussi in questo capitolo; tuttavia, ancora un articolo abbastanza intrigante di per sé.

[G74] "Survey of Virtual Machine Research" di R.P. Goldberg. IEEE Computer, Volume 7, Numero 6. Un ottimo sondaggio su molte ricerche vecchie sulle macchine virtuali.

[SVL01] "Virtualizing I/O Devices on VMware Workstation’s Hosted Virtual Machine Monitor" di Jeremy Sugerman, Ganesh Venkitachalam e Beng-Hong Lim. USENIX '01, Boston, Massachusetts. Fornisce una buona panoramica su come funziona l'I/O in VMware utilizzando un'architettura hosted che sfrutta molte funzionalità native dell'OS per evitare di reimplementarle all'interno del VMM.

---

## Il gruppo su Disco [B+97]

<div class="scrollable">


</DIV>


<style>
.scrollable {
  max-height: 70vh; /* Altezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>