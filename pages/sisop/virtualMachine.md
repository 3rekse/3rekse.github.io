---
layout: cover
title: Monitor della Macchina Virtuale VMM
level: 2
background: https://vidabytes.com/wp-content/uploads/2021/05/Programas-para-crear-m%C3%A1quinas-virtuales-4-1024x614.jpg
---

## Monitor della Macchina Virtuale VMM

Anni fa, IBM vendeva costosi mainframe a grandi organizzazioni, e sorgeva un problema:

Cosa fare se l'organizzazione voleva eseguire sistemi operativi diversi?

---
layout: section
title: Problema e Soluzione
level: 2

---

## Problema

Le organizzazioni volevano eseguire più sistemi operativi contemporaneamente.

## Soluzione

IBM ha sviluppato il concetto di macchine virtuali per risolvere questo problema.

---
layout: section
title: Conclusione
level: 2

---

## Conclusione

Le macchine virtuali hanno rivoluzionato il modo in cui utilizziamo i computer, permettendo l'esecuzione di più sistemi operativi su un singolo hardware.

---

## Macchina virtuale (VM) e un Virtual Machine Monitor (VMM)

<div class="scrollable">

Macchina virtuale (VM) e un Virtual Machine Monitor (VMM), noto anche come hypervisor, può essere compresa osservando i loro ruoli e funzioni distinti nel contesto della virtualizzazione.

### Macchina Virtuale (VM)

Una macchina virtuale è un ambiente virtuale che emula un computer fisico. 

Funziona come un sistema completo con un proprio sistema operativo, applicazioni, memoria, CPU virtuale, e storage. 

Le VM sono create e gestite dal VMM.

**Caratteristiche principali delle VM**:
1. **Isolamento**: Ogni VM opera in isolamento dalle altre, proteggendo le risorse e i dati delle VM individuali.
2. **Indipendenza**: Le VM possono eseguire diversi sistemi operativi e applicazioni senza interferenze.
3. **Portabilità**: Le VM possono essere spostate tra diversi host fisici con minima o nessuna interruzione del servizio.
4. **Gestibilità**: È possibile creare, sospendere, riprendere, clonare e eliminare VM facilmente.

**Esempi**:
- Una VM che esegue Windows Server su un server fisico Linux.
- Una VM utilizzata per testare una nuova applicazione in un ambiente isolato.

### Virtual Machine Monitor (VMM) / Hypervisor

Un Virtual Machine Monitor (VMM), noto anche come hypervisor, è un software o un firmware che crea e gestisce macchine virtuali (VM) su un computer fisico. Il VMM permette a più sistemi operativi di condividere un singolo hardware fisico in modo isolato e sicuro. Esistono due tipi principali di hypervisor:

1. **Hypervisor di tipo 1 (Bare-metal)**
   - Esegue direttamente sull'hardware fisico del computer senza un sistema operativo sottostante.
   - Fornisce un ambiente altamente efficiente e sicuro per la virtualizzazione.
   - Esempi includono VMware ESXi, Microsoft Hyper-V, e Xen.

2. **Hypervisor di tipo 2 (Hosted)**
   - Esegue sopra un sistema operativo host.
   - Offre una maggiore facilità d'uso e integrazione con il sistema operativo esistente.
   - Esempi includono VMware Workstation, Oracle VM VirtualBox, e Parallels Desktop.

### Funzioni principali di un VMM

1. **Isolamento**:
   - Mantiene le VM separate l'una dall'altra, in modo che un problema in una VM non influenzi le altre.
2. **Gestione delle risorse**:
   - Assegna risorse hardware (CPU, memoria, storage, ecc.) alle VM in modo efficiente e bilanciato.
3. **Sicurezza**:
   - Protegge le VM da accessi non autorizzati e garantisce la sicurezza dei dati e delle applicazioni in esecuzione.
4. **Mobilità**:
   - Consente di spostare VM tra diversi host fisici senza interrompere il servizio (funzionalità nota come "migrazione live").
5. **Snapshot e Cloning**:
   - Permette di creare istantanee dello stato corrente delle VM per backup e recupero rapido.
6. **Networking Virtuale**:
   - Fornisce capacità di rete virtuale per connettere le VM tra loro e con la rete esterna.

### Vantaggi dell'uso di un VMM

- **Efficienza**: Migliora l'utilizzo dell'hardware fisico consentendo l'esecuzione simultanea di più VM.
- **Flessibilità**: Facilita l'esecuzione di vari sistemi operativi e applicazioni su un singolo hardware.
- **Gestione semplificata**: Centralizza la gestione delle risorse e delle applicazioni.
- **Costi ridotti**: Riduce la necessità di hardware fisico aggiuntivo e il costo associato alla manutenzione.

### Esempi di scenari di utilizzo

- **Data center e cloud computing**: Dove le risorse sono distribuite dinamicamente tra i vari utenti e applicazioni.
- **Test e sviluppo software**: Consentono ai programmatori di creare ambienti di test multipli senza bisogno di hardware dedicato.
- **Consolidamento dei server**: Riduce il numero di server fisici necessari accorpando più server virtuali su un unico hardware.

In sintesi, un Virtual Machine Monitor è una tecnologia fondamentale per la virtualizzazione, consentendo una gestione più efficiente, sicura e flessibile delle risorse informatiche.

### Differenze chiave

- **Funzione**:
  - **VM**: È un'istanza virtuale che emula un computer fisico.
  - **VMM**: È il software che crea e gestisce le VM, fornendo l'infrastruttura necessaria per il loro funzionamento.

- **Posizione nell'architettura**:
  - **VM**: Esegue sopra il VMM, come se fosse un normale computer.
  - **VMM**: Esegue direttamente sull'hardware fisico (tipo 1) o sopra un sistema operativo host (tipo 2).

- **Gestione delle risorse**:
  - **VM**: Utilizza le risorse assegnate dal VMM.
  - **VMM**: Controlla e gestisce la distribuzione delle risorse hardware tra le varie VM.

In sintesi, una macchina virtuale è l'entità che utilizza le risorse virtualizzate, mentre il Virtual Machine Monitor è il sistema che rende possibile la virtualizzazione e la gestione di queste macchine virtuali.

</div>

<style>
.scrollable {
  max-height: 70vh; /* Altezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>

---
layout: 
title: Descrizione della soluzione
level: 2

---

## Descrizione della soluzione

IBM introdusse un altro livello di indirezione sotto forma di un monitor della macchina virtuale (virtual machine monitor VMM) (anche chiamato hypervisor). 

Specificamente, il monitor si trova tra uno o più sistemi operativi e l'hardware, e dà l'illusione a ciascun sistema operativo in esecuzione di controllare la macchina.

Dietro le quinte, tuttavia, il monitor è effettivamente in controllo dell'hardware e deve multiplexare l'esecuzione dei sistemi operativi attraverso le risorse fisiche della macchina.

In effetti, il VMM funge da sistema operativo per i sistemi operativi, ma a un livello molto più basso; il sistema operativo deve comunque pensare di interagire con l'hardware fisico.

---

## Pertanto, la trasparenza è un obiettivo principale dei VMM.

<div class="scrollable">
Il Virtual Machine Monitor (VMM), noto anche come hypervisor, è un componente chiave nella virtualizzazione che si posiziona tra l'hardware fisico di un computer e i sistemi operativi che vi vengono eseguiti. Il VMM fornisce un'illusione a ciascun sistema operativo che esso stia controllando direttamente l'hardware, quando in realtà è il VMM stesso a gestire le risorse fisiche.

### Funzionamento del VMM

**Illusione del Controllo Diretto**
- **Ruolo del VMM**: Il VMM crea un ambiente virtualizzato per ciascun sistema operativo, dando l'impressione che ognuno di essi abbia accesso esclusivo all'hardware della macchina.
- **Percezione dei Sistemi Operativi**: Ogni sistema operativo operante su una VM crede di avere il controllo completo della CPU, della memoria, del disco e delle altre risorse hardware, come se fosse l'unico sistema in esecuzione sulla macchina.

**Multiplexing delle Risorse Fisiche**
- **Gestione delle Risorse**: Il VMM è responsabile del multiplexing, cioè della suddivisione e gestione delle risorse fisiche tra le varie VM. Questo implica l'allocazione dinamica della CPU, della memoria e dello storage in base alle necessità di ciascuna VM.
- **Controllo dell'Hardware**: Nonostante l'illusione di controllo, è il VMM che effettivamente controlla l'hardware fisico. Decide quale VM riceve quante risorse e quando, assicurando che tutte le VM possano funzionare senza conflitti.

**Sistema Operativo per i Sistemi Operativi**
- **Strato di Astrazione**: Il VMM funge da strato di astrazione tra l'hardware e i sistemi operativi, gestendo le interazioni hardware in modo simile a come un sistema operativo gestisce le applicazioni.
- **Gestione a Livello Basso**: A differenza di un sistema operativo tradizionale che gestisce applicazioni e processi, il VMM opera a un livello molto più basso, gestendo direttamente l'hardware per conto dei sistemi operativi virtualizzati.

### Esempio di Operazioni Gestite dal VMM

- **Allocazione della CPU**: Il VMM assegna porzioni del tempo di CPU a ciascuna VM, garantendo che ogni sistema operativo riceva il tempo di esecuzione necessario per funzionare correttamente.
- **Gestione della Memoria**: Il VMM gestisce la memoria fisica, assegnando blocchi di RAM alle VM e garantendo che ogni sistema operativo abbia l'illusione di avere accesso a una memoria dedicata.
- **I/O e Storage**: Il VMM virtualizza dispositivi di input/output e lo storage, consentendo a ciascuna VM di leggere e scrivere dati senza interferenze reciproche.

### Vantaggi dell'Approccio VMM

- **Efficienza**: Permette l'esecuzione simultanea di più sistemi operativi su un singolo hardware fisico, ottimizzando l'uso delle risorse.
- **Flessibilità**: Facilita il test e lo sviluppo di software su diversi sistemi operativi senza bisogno di hardware dedicato.
- **Isolamento**: Garantisce che i problemi in una VM non influiscano sulle altre, migliorando la stabilità e la sicurezza complessiva del sistema.

In sintesi, il Virtual Machine Monitor è il maestro dietro le quinte della virtualizzazione, orchestrando l'accesso e l'uso delle risorse hardware per vari sistemi operativi in modo che possano operare in parallelo senza conflitti. Anche se i sistemi operativi credono di avere il controllo diretto dell'hardware, è il VMM che effettivamente gestisce tutto, fornendo un ambiente virtualizzato efficiente e isolato.
</div>

<style>
.scrollable {
  max-height: 70vh; /* Altezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>
---
level: 3
title: Welcome

---
Quindi, ci troviamo in una posizione interessante: finora il sistema operativo ha servito come maestro illusionista, ingannando le applicazioni ignare nel pensare di avere la propria CPU privata e una grande memoria virtuale, mentre segretamente passava da un'applicazione all'altra e condivideva la memoria. 

Ora, dobbiamo farlo di nuovo, ma questa volta sotto il sistema operativo, che è abituato a essere in carica. 

Come può il VMM creare questa illusione per ogni sistema operativo in esecuzione sopra di esso?

---
layout: section
level: 3
title: Welcome

---

# IL PUNTO CRUCIALE:

## COME VIRTUALIZZARE LA MACCHINA SOTTO IL SISTEMA OPERATIVO

Il monitor della macchina virtuale deve virtualizzare in modo trasparente la macchina sotto il sistema operativo.

Quali sono le tecniche necessarie per farlo?

---
level: 3
title: Welcome

---

## Motivazione: Perché i VMM?

Oggi, i VMM sono tornati popolari per una moltitudine di ragioni.

La consolidazione dei server è una di queste. 

In molti contesti, si eseguono servizi su macchine diverse che eseguono diversi sistemi operativi (o persino versioni di OS differenti), eppure ciascuna macchina è leggermente utilizzata.

In questo caso, la virtualizzazione consente a un amministratore di consolidare più sistemi operativi su meno piattaforme hardware, riducendo così i costi e semplificando l'amministrazione.

---
level: 3
title: Welcome

---

La virtualizzazione è diventata popolare anche sui desktop, poiché molti utenti desiderano eseguire un sistema operativo (ad esempio Linux o Mac OS X) ma avere comunque accesso alle applicazioni native su una piattaforma diversa (ad esempio Windows).

Questo tipo di miglioramento della funzionalità è anche una buona ragione.

Un'altra ragione è il testing e il debugging. 

Mentre gli sviluppatori scrivono codice su una piattaforma principale, spesso vogliono debuggarlo e testarlo sulle molte piattaforme diverse su cui distribuiranno il software.

---
level: 3
title: Welcome

---

Pertanto, la virtualizzazione rende facile farlo, consentendo a uno sviluppatore di eseguire molti tipi e versioni di sistemi operativi su una sola macchina.

Questa rinascita della virtualizzazione è iniziata seriamente nella metà degli anni '90, ed è stata guidata da un gruppo di ricercatori di Stanford guidato dal Professor Mendel Rosenblum.

Il lavoro del suo gruppo su Disco [B+97], un monitor della macchina virtuale per il processore MIPS, è stato uno dei primi sforzi che ha ravvivato i VMM e alla fine ha portato quel gruppo a fondare [VMware](http://www.vmware.com/).
Questo potrebbe essere il riferimento più inutile, poiché puoi chiaramente cercarlo da solo. 
Ad ogni modo, l'azienda è stata fondata nel 1998 ed è leader nel campo della virtualizzazione.

Petanto, discuteremo la tecnologia principale alla base di Disco e, attraverso questa finestra, cercheremo di capire come funziona la virtualizzazione.


---

## Il gruppo su Disco [B+97]

<div class="scrollable">

"[B+97] Disco: Running Commodity Operating Systems on Scalable Multiprocessors" di Edouard Bugnion, Scott Devine, Kinshuk Govil, e Mendel Rosenblum, presentato alla SOSP (Symposium on Operating Systems Principles) nel 1997. 

Questo lavoro è stato fondamentale nel reintrodurre la virtualizzazione come un'area di ricerca importante nella comunità dei sistemi operativi.

### Contesto e Contributi dell'Articolo

L'articolo descrive il sistema Disco, un Virtual Machine Monitor (VMM) progettato per eseguire sistemi operativi di uso comune su multiprocessori scalabili. Ecco alcuni punti chiave e contributi dell'articolo:

**Problema Affrontato**
- I grandi multiprocessori scalabili erano difficili da sfruttare pienamente con i sistemi operativi dell'epoca, che non erano progettati per tali architetture.
- C'era una necessità di un modo per eseguire questi sistemi operativi su hardware avanzato senza doverli riscrivere completamente.

**Soluzione Proposta: Disco**
- Disco era un VMM che permetteva l'esecuzione di sistemi operativi commodity, come Unix, su multiprocessori scalabili senza modifiche significative ai sistemi operativi stessi.
- Il VMM forniva un'interfaccia virtuale che emulava l'hardware sottostante, permettendo a ciascun sistema operativo di operare come se fosse in esecuzione su una macchina fisica dedicata.

**Caratteristiche di Disco**
- **Efficienza**: Disco era progettato per essere altamente efficiente, minimizzando l'overhead introdotto dalla virtualizzazione.
- **Gestione delle Risorse**: Disco gestiva la memoria, la CPU e i dispositivi di I/O in modo da massimizzare l'utilizzo delle risorse fisiche.
- **Compatibilità**: Permetteva l'esecuzione di sistemi operativi esistenti senza bisogno di modifiche significative, facilitando l'adozione della tecnologia di virtualizzazione.

### Impatto dell'Articolo

**Riscoperta della Virtualizzazione**
- Anche se il concetto di virtualizzazione non era nuovo, l'articolo di Disco ha dimostrato come potesse essere utilizzato efficacemente su hardware moderno, riaccendendo l'interesse della comunità dei sistemi operativi per la virtualizzazione.

**Fondazione di VMware**
- Gli autori dell'articolo, tra cui Mendel Rosenblum e Edouard Bugnion, sono tra i fondatori di VMware. La tecnologia e i concetti sviluppati in Disco hanno portato direttamente alla creazione di VMware, che ha avuto un impatto enorme sull'industria IT.
- VMware ha portato la virtualizzazione a un pubblico più ampio, permettendo a molte organizzazioni di migliorare l'efficienza delle loro infrastrutture IT e ridurre i costi.

### Confronto con Bressoud e Schneider [BS95]

**Bressoud e Schneider [BS95]**
- Lavoro importante nel contesto della tolleranza ai guasti attraverso la virtualizzazione.
- Hanno dimostrato come la virtualizzazione potesse essere utilizzata per migliorare l'affidabilità dei sistemi, introducendo concetti che sarebbero stati ulteriormente sviluppati in lavori successivi.

**Disco [B+97]**
- Ha avuto un impatto più ampio e diretto sulla reintroduzione della virtualizzazione come un'area di ricerca principale e come tecnologia commerciale.
- Ha mostrato il potenziale della virtualizzazione nel migliorare l'efficienza e l'utilizzo delle risorse hardware su larga scala, un concetto che è stato alla base del successo di VMware.

In sintesi, l'articolo "Disco: Running Commodity Operating Systems on Scalable Multiprocessors" ha avuto un ruolo cruciale nel rinnovato interesse per la virtualizzazione, dimostrando la sua utilità pratica e ponendo le basi per lo sviluppo di soluzioni commerciali come VMware, che hanno rivoluzionato il modo in cui le risorse IT vengono gestite e utilizzate.

# VMware e Oracle VM VirtualBox

VMware e Oracle VM VirtualBox sono entrambi strumenti popolari per la virtualizzazione, ma presentano differenze significative in termini di funzionalità, prestazioni, usabilità e target di utenti. Ecco un confronto dettagliato tra i due:

### VMware

**Prodotti principali**:
- **VMware Workstation**: Un hypervisor di tipo 2 (hosted) progettato per desktop e laptop, utilizzato principalmente per lo sviluppo e il test.
- **VMware ESXi**: Un hypervisor di tipo 1 (bare-metal) utilizzato per ambienti di data center e server.

**Caratteristiche principali**:
- **Prestazioni**: VMware è noto per le sue elevate prestazioni e l'efficienza nella gestione delle risorse.
- **Affidabilità e Stabilità**: VMware offre una stabilità eccellente, particolarmente nelle soluzioni enterprise come ESXi.
- **Funzionalità avanzate**: Include funzionalità come snapshot, clonazione di VM, migrazione live (vMotion), bilanciamento del carico, e alta disponibilità.
- **Supporto e Integrazione**: VMware offre un ampio supporto per vari sistemi operativi guest e una forte integrazione con strumenti di gestione aziendale come vSphere.
- **Costo**: Le soluzioni VMware, specialmente quelle enterprise come ESXi e vSphere, possono essere costose, ma offrono un valore elevato per le grandi aziende.

**Uso tipico**:
- Utilizzato da grandi aziende e data center per gestire infrastrutture IT complesse.
- Adatto per ambienti di produzione ad alta disponibilità e prestazioni elevate.
- Scegliere VMware per le necessità di sviluppo, test e produzione su larga scala.

### Oracle VM VirtualBox

**Caratteristiche principali**:
- **Gratuito e Open Source**: VirtualBox è disponibile gratuitamente sotto licenza open source, rendendolo accessibile per utenti individuali e piccole imprese.
- **Facilità d'uso**: VirtualBox è noto per la sua interfaccia intuitiva e la facilità di configurazione e gestione delle VM.
- **Compatibilità**: Supporta un'ampia gamma di sistemi operativi host (Windows, macOS, Linux, Solaris) e guest (vari sistemi operativi, inclusi Windows, Linux, Solaris, e altri).
- **Funzionalità di base**: Offre funzionalità come snapshot, clonazione di VM, supporto per immagini disco VDI, VMDK, VHD e HDD, e condivisione delle cartelle tra host e guest.
- **Estensioni e Plugin**: Supporta l'uso di estensioni per migliorare le funzionalità, come il pacchetto di estensioni per il supporto USB 2.0/3.0, RDP e PXE boot per schede Intel.

**Uso tipico**:
- Adatto per utenti individuali, sviluppatori e piccole imprese che necessitano di una soluzione di virtualizzazione facile da usare e a basso costo.
- Ideale per il test di applicazioni su diversi sistemi operativi e per l'uso in ambienti di sviluppo.
- Utilizzato per l'apprendimento e la sperimentazione di nuovi sistemi operativi senza necessità di hardware dedicato.

### Confronto diretto

**Prestazioni e Scalabilità**:
- **VMware**: Offre migliori prestazioni e scalabilità, particolarmente adatto per ambienti di produzione e data center.
- **VirtualBox**: Adeguato per carichi di lavoro meno intensivi e per uso personale o di piccoli gruppi.

**Funzionalità Avanzate**:
- **VMware**: Include funzionalità avanzate come migrazione live, bilanciamento del carico, alta disponibilità, e integrazione con soluzioni di gestione aziendale.
- **VirtualBox**: Offre funzionalità essenziali per la virtualizzazione, ma manca di alcune delle caratteristiche avanzate presenti in VMware.

**Costo**:
- **VMware**: Le soluzioni di VMware possono essere costose, specialmente per le versioni enterprise, ma offrono un valore significativo in termini di prestazioni e funzionalità.
- **VirtualBox**: Gratuito e open source, rappresenta una soluzione economica e accessibile per molti utenti.

**Supporto e Comunità**:
- **VMware**: Offre supporto tecnico professionale e ha una vasta base di clienti aziendali.
- **VirtualBox**: Supportato da una comunità open source attiva e offre supporto attraverso forum e documentazione online.

In conclusione, la scelta tra VMware e Oracle VM VirtualBox dipende dalle esigenze specifiche dell'utente. VMware è ideale per ambienti aziendali e data center che necessitano di prestazioni elevate e funzionalità avanzate, mentre VirtualBox è più adatto per singoli utenti, sviluppatori e piccole imprese che cercano una soluzione di virtualizzazione gratuita e facile da usare.

</DIV>


<style>
.scrollable {
  max-height: 70vh; /* Altezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>

---
level: 3
title: Welcome

---

## Virtualizzazione della CPU

Per eseguire una macchina virtuale (ad esempio, un sistema operativo e le sue applicazioni) sopra un monitor della macchina virtuale, la tecnica di base utilizzata è l'esecuzione diretta limitata, una tecnica che abbiamo visto in precedenza quando abbiamo discusso di come il sistema operativo virtualizza la CPU. 

Quindi, quando desideriamo "avviare" un nuovo sistema operativo sopra il VMM, semplicemente saltiamo all'indirizzo della prima istruzione e lasciamo che il sistema operativo inizi a funzionare. 

È semplice come sembra (beh, quasi).

---
layout: intro
level: 3
title: Welcome

---

Assumiamo di essere in esecuzione su un singolo processore e di voler multiplexare tra due macchine virtuali, cioè tra due sistemi operativi e le loro rispettive applicazioni.

In un modo molto simile a un sistema operativo che commuta tra i processi in esecuzione (un cambio di contesto), un monitor della macchina virtuale deve eseguire una commutazione di macchina tra le macchine virtuali in esecuzione.

---
layout: intro
level: 3
title: Welcome

---

## Quindi, 
quando esegue tale commutazione, il VMM deve salvare l'intero stato della macchina di un sistema operativo (inclusi registri, PC e, diversamente da un cambio di contesto, qualsiasi stato hardware privilegiato), ripristinare lo stato della macchina della VM da eseguire e poi saltare al PC della VM da eseguire, completando così la commutazione. 

Si noti che il PC della VM da eseguire potrebbe essere all'interno del sistema operativo stesso (cioè il sistema stava eseguendo una chiamata di sistema) oppure potrebbe semplicemente essere all'interno di un processo in esecuzione su quel sistema operativo (cioè un'applicazione in modalità utente).

---
layout: intro
level: 3
title: Welcome

---

Incontriamo alcune questioni leggermente più complicate quando un'applicazione o un sistema operativo in esecuzione cerca di eseguire un'operazione privilegiata. 

Ad esempio, su un sistema con una TLB gestita via software, il sistema operativo utilizzerà istruzioni privilegiate speciali per aggiornare la TLB con una traduzione prima di riavviare un'istruzione che ha subito un miss della TLB. In un ambiente virtualizzato, il sistema operativo non può essere autorizzato a eseguire istruzioni privilegiate, perché altrimenti controllerebbe la macchina anziché il VMM sottostante. Pertanto, il VMM deve in qualche modo intercettare i tentativi di eseguire operazioni privilegiate e mantenere così il controllo della macchina.

---
layout: intro
level: 3
title: Welcome

---
Un semplice esempio di come un VMM deve interporsi su alcune operazioni sorge quando un processo in esecuzione su un dato sistema operativo cerca di fare una chiamata di sistema. 

Ad esempio, il processo potrebbe cercare di chiamare open() su un file, o potrebbe chiamare read() per ottenere dati da esso, o potrebbe chiamare fork() per creare un nuovo processo.

In un sistema senza virtualizzazione, una chiamata di sistema viene eseguita con un'istruzione speciale; su MIPS, è un'istruzione di trap, e su x86, è l'istruzione int (un interrupt) con l'argomento 0x80. 

Ecco la chiamata di libreria open su FreeBSD [B00] (ricorda che il tuo codice C prima fa una chiamata di libreria nella libreria C, che poi esegue la sequenza di assembly appropriata per effettivamente emettere l'istruzione di trap e fare una chiamata di sistema)

---


Nei sistemi basati su UNIX, open() prende solo tre argomenti: 

`int open(char *path, int flags, mode_t mode)`.

```
open:
    push    dword mode
    push    dword flags
    push    dword path
    mov     eax, 5
    push    eax
    int     80h
```

Puossiamo vedere nel codice  come viene implementata la chiamata di libreria open()
1. gli argomenti vengono spinti sullo stack (mode, flags, path)
2. un 5 viene spinto sullo stack
3. viene chiamato `int 80h`, che trasferisce il controllo al kernel.

Il 5, è la convenzione pre-concordata tra le applicazioni in modalità utente e il kernel per la chiamata di sistema open() in FreeBSD.

Chiamate di sistema diverse metterebbero numeri diversi nello stack (nella stessa posizione) prima di chiamare l'istruzione di trap `int` e fare così la chiamata di sistema.

---
layout: intro
level: 3
title: Welcome

---

Solo per rendere le cose confuse, i ragazzi di Intel usano il termine "interrupt" per ciò che quasi chiunque chiamerebbe un'istruzione di trap. 

Come ha detto Patterson sull'insieme di istruzioni Intel: "È un ISA che solo una madre potrebbe amare". Ma in realtà, ci piace, e non siamo sua madre.

---

Quando viene eseguita un'istruzione di trap, come abbiamo discusso prima, essa di solito fa un numero di cose interessanti. 

La più importante nel nostro esempio è che trasferisce il controllo (cioè cambia il PC) a un gestore di trap ben definito all'interno del sistema operativo. 

Il sistema operativo, quando si avvia per la prima volta, stabilisce l'indirizzo di una tale routine con l'hardware (anche questa è un'operazione privilegiata) e quindi, durante i trap successivi, l'hardware sa dove iniziare a eseguire il codice per gestire il trap. 

Allo stesso tempo del trap, l'hardware fa anche un'altra cosa cruciale: cambia la modalità del processore da modalità utente a modalità kernel. 

In modalità utente, le operazioni sono limitate e i tentativi di eseguire operazioni privilegiate porteranno a un trap e probabilmente alla terminazione del processo offensivo.

In modalità kernel, invece, è disponibile tutta la potenza della macchina e quindi tutte le operazioni privilegiate possono essere eseguite. 

Pertanto, in un contesto tradizionale (ancora, senza virtualizzazione), il flusso di controllo sarebbe come quello che vedi nella Figura B.1.

---

### Flusso della Chiamata di Sistema Senza Virtualizzazione

```
Processo
   1. Esegue le istruzioni (add,load,etc)   
   2. Chiamata di sistema: Trap al sistema operativo
HardWare switch a kernel mode 
Sistema operativo
   3. Gestore di trap del sistema operativo 
   4. Decodifica trap ed esegue la routine di sistema appropriata; 
   5. Quando finito: ritorno dal trap
HardWare switch a user mode 
Processo
   6. Riprendi l'esecuzione (@PC dopo il trap)
```

### Flusso della Chiamata di Sistema Con Virtualizzazione

```
Processo
    1. Chiamata di sistema: Trap al sistema operativo
Virtaul Machine Monitor 
    2. Processo trappato: Chiamata al gestore di trap del sistema operativo (con privilegi ridotti)
Sistema operativo
    3. Gestore di trap del sistema operativo: Decodifica trap ed esegue la chiamata di sistema; 
    4. Quando finito: emetti ritorno dal trap
Virtaul Machine Monitor 
    5. Il sistema operativo ha cercato di ritornare dal trap
    6. Fai il vero ritorno dal trap ~~~~
Processo
    7. Riprendi l'esecuzione (@PC dopo il trap)
```

---

Molte più cose devono avvenire quando c'è virtualizzazione.

Certamente, a causa dei salti extra, la virtualizzazione potrebbe rallentare le chiamate di sistema e quindi potrebbe influire sulle prestazioni.

Potresti anche notare che abbiamo una domanda aperta: in quale modalità dovrebbe eseguire il sistema operativo?
Non può eseguire in modalità kernel, perché altrimenti avrebbe accesso illimitato all'hardware.

Pertanto, deve eseguire in una modalità meno privilegiata rispetto a prima, essere in grado di accedere alle proprie strutture dati e contemporaneamente prevenire l'accesso alle sue strutture dati da parte dei processi utente.

---

Nel lavoro su Disco, Rosenblum e colleghi hanno affrontato questo problema in modo abbastanza elegante sfruttando una modalità speciale fornita dall'hardware MIPS nota come modalità supervisore. Quando si esegue in questa modalità, non si ha ancora accesso alle istruzioni privilegiate, ma si può accedere a un po' più di memoria rispetto alla modalità utente; il sistema operativo può usare questa memoria extra per le sue strutture dati e tutto funziona bene. Su hardware che non dispone di tale modalità, si deve eseguire il sistema operativo in modalità utente e utilizzare la protezione della memoria (tabelle delle pagine e TLB) per proteggere adeguatamente le strutture dati del sistema operativo. In altre parole, quando si passa al sistema operativo, il monitor dovrebbe rendere la memoria delle strutture dati del sistema operativo accessibile al sistema operativo tramite le protezioni delle tabelle delle pagine; quando si torna all'applicazione in esecuzione, la possibilità di leggere e scrivere il kernel dovrebbe essere rimossa.
