---
layout: cover
background: >-
  /office/images/book.jpg?s=612x612&w=0&k=20&c=GXNeWQ7EHO6xEyzBn0lG47KTjx8JmxZg8fx-Qhx7ZEo=
level: 1
title: C Lab.1972 -Il linguaggio C.

### Calcolo

Se l'anno corrente è il 2023:

```plaintext
2023 - 1972 = 51
```

Quindi, il linguaggio C ha 51 anni nel 2023.

---

## Laboratorio: Tutorial

Un paio di consigli generali sulla programmazione: (se vuoi!)

<div class="scrollable">

Questo è un documento molto breve per familiarizzare con le basi del C in ambiente di programmazione su sistemi UNIX. Non è completo o particolarmente dettagliato, ma dovrebbe aiutarti abbastanza per farti lavorare.

Per diventare un programmatore esperto, è necessario padroneggiare più della semplice sintassi di un linguaggio di programmazione. In particolare, dovresti conoscere i tuoi strumenti, le loro librerie e la documentazione.

Gli strumenti rilevanti per la programmazione in C sono **GCC, GDB e forse LD.**

 Ci sono molte routine di librerie disponibili per te, ma fortunatamente molte funzionalità sono incluse in LIBC, che è collegata a tutti i programmi C. Tutto ciò che devi fare è includere i file di intestazione.

Sapere come trovare le routine della libreria di cui hai bisogno (ad esempio, imparare a trovare e leggere le pagine del manuale) è un'abilità che vale la pena acquisire. Ne parleremo più dettagliatamente in seguito. Come (quasi) tutto ciò che vale la pena fare nella vita, diventare un esperto in questi argomenti (domini) richiede tempo. Investire tempo in anticipo per saperne di più sugli strumenti e l'ambiente vale sicuramente la pena.

### lab.C.1 Un semplice programma C

Inizieremo con un semplice programma C, forse salvato nel file ["hw.c"](labC/hw.c). A differenza di Java, non esiste necessariamente una connessione tra il nome del file e il contenuto del file; pertanto, usa il tuo buon senso nella denominazione dei file in modo appropriato.

La prima linea specifica un file da includere, in questo caso `stdio.h`, che "prototipa" molte delle routine di input/output comunemente usate; quella a cui siamo interessati è `printf()`. Quando si utilizza la direttiva `#include`, stai dicendo al preprocessore C (CPP) di trovare un particolare file (ad esempio, `stdio.h`) e di inserirlo direttamente nel codice nel punto del `#include`. Per impostazione predefinita, CPP cercherà nella directory `/usr/include/` per trovare il file.

La parte successiva specifica la firma della routine `main()`, vale a dire che restituisce un numero intero (`int`) e verrà chiamata con due argomenti:


```c
/* I file di intestazione vanno qui */
/* Si noti che i commenti C sono racchiusi in una barra e una stella e possono avvolgere le linee */
// Anche due barre funzionano (e possono essere preferite)
#include <stdio.h>
// Main restituisce un numero intero
int main (int argc, char *argv[]) {
/* printf è la nostra funzione di output; per impostazione predefinita, scrive su standard */
/* printf restituisce un numero intero, ma lo ignoriamo */
    printf("ciao, mondo\n");
/* restituisce 0 per indicare che tutto è andato bene */
    return (0);
}
```

Un argomento intero, che è un conteggio del numero di argomenti sulla riga di comando, e una matrice di puntatori a caratteri (`argv`), ognuno dei quali contiene una parola dalla riga di comando e l'ultima delle quali è nulla. Ce ne saranno altri su puntatori e array di seguito.

Il programma quindi stampa semplicemente la stringa "ciao, mondo" e fa avanzare il flusso di output alla riga successiva, grazie alla barra seguita da una "n" alla fine della chiamata a `printf()`. Successivamente, il programma si completa restituendo un valore, che viene passato alla shell che ha eseguito il programma. Uno script o l'utente al terminale potrebbe controllare questo valore (nelle shell `csh` e `tcsh`, è memorizzato nella variabile di stato), per vedere se il programma è uscito in modo pulito o con un errore.

### lab.C.2 Compilazione ed esecuzione

Ora impareremo come compilare il programma. Nota che useremo GCC come nostro esempio, sebbene su alcune piattaforme potresti essere in grado di utilizzare un compilatore diverso (nativo), `cc`.

Per compilare il file `hw.c` utilizzando il compilatore GCC su Windows, puoi seguire questi passaggi:

1. **Installazione di GCC**:
   - Su Windows, puoi utilizzare MinGW (Minimalist GNU for Windows) per ottenere GCC. Scarica e installa MinGW dal sito ufficiale: [MinGW-w64](http://mingw-w64.org/doku.php/download).
   - Durante l'installazione, assicurati di selezionare l'opzione per aggiungere MinGW al PATH di sistema.

2. **Compilazione del file `hw.c`**:
   - Apri il terminale di comando (cmd) o PowerShell.
   - Naviga alla directory dove si trova il file `hw.c` utilizzando il comando `cd`. Ad esempio:
     ```cmd
     cd C:\path\to\your\file
     ```
   - Compila il file `hw.c` utilizzando il comando `gcc`:
     ```cmd
     gcc hw.c -o hw.exe
     ```
     Questo comando compila `hw.c` e genera un eseguibile chiamato `hw.exe`.

3. **Esecuzione del programma**:
   - Dopo la compilazione, esegui il programma generato:
     ```cmd
     hw.exe
     ```

Ecco un riepilogo dei comandi da eseguire nel terminale:

```cmd
cd C:\path\to\your\file
gcc hw.c -o hw.exe
hw.exe
```

Assicurati che il percorso di MinGW sia incluso nel PATH di sistema per poter utilizzare il comando `gcc` direttamente dal terminale.

Al prompt della shell, si digita semplicemente:

```sh
prompt> gcc hw.c
```

GCC non è proprio il compilatore, ma piuttosto il programma chiamato "driver del compilatore"; coordina i molti passaggi della compilazione. Di solito ci sono quattro o cinque passaggi. Innanzitutto, GCC eseguirà CPP, il preprocessore C, per elaborare determinate direttive (come `#define` e `#include`). Il programma CPP è solo un traduttore di sorgente, quindi il suo prodotto finale è ancora solo codice sorgente (ovvero un file `.c`). 

Puoi inizierà la vera compilazione, di solito un comando chiamato `cc1`. Questo trasformerà il codice C a livello di sorgente nel codice di assemblaggio di basso livello, specifico per la macchina host. L'assemblatore `as` verrà quindi eseguito, generando codice oggetto (bit e cose che le macchine possono davvero capire) e infine il link-editor (o linker) `ld` metterà tutto insieme in un programma eseguibile finale. Fortunatamente (!), per la maggior parte degli scopi, puoi non essere a conoscenza di come funziona GCC e usarlo con le opzioni adeguate.

Il risultato della compilazione sopra è un eseguibile, chiamato (per impostazione predefinita) `a.out`. Per eseguire quindi il programma, digitiamo semplicemente:

```sh
prompt> ./a.out
```

Quando eseguiamo questo programma, il sistema operativo imposterà `argc` e `argv` correttamente in modo che il programma possa elaborare gli argomenti della linea di comando come necessario. In particolare, `argc` sarà uguale a 1, `argv[0]` sarà la stringa `"./a.out"`, e `argv[1]` sarà nullo, indicando la fine dell'array.

### lab.C.3 FLAG UTILI

Prima di passare al linguaggio C, sottolineeremo alcuni utili flag di compilazione per GCC.

```sh
prompt> gcc -o hw hw.c
# -o: per specificare il nome eseguibile
prompt> gcc -Wall hw.c
# -Wall: dà avvertimenti molto migliori
prompt> gcc -g hw.c
# -g: per abilitare il debug con GDB
prompt> gcc -O hw.c
# -O: per attivare l'ottimizzazione
```

Naturalmente, puoi combinare queste opzioni come vedi (ad esempio, `gcc -o hw -g -Wall hw.c`). Di queste opzioni, dovresti sempre usare `-Wall`, che ti dà molti avvertimenti extra su possibili errori. Non ignorare gli avvertimenti! Invece, risolvili e quindi rendili beatamente scomparire.

### lab.C.4 Collegamento con le librerie

NOTA: Con MinGW-w64 puoi utilizzare i thread, ma non puoi utilizzare `fork` in modo nativo come su sistemi Unix-like. MinGW-w64 fornisce il supporto per i thread POSIX (pthread) attraverso la libreria `pthread`. Tuttavia, `fork` non è supportato su Windows poiché è una chiamata di sistema specifica di Unix.

Ecco come puoi utilizzare i thread POSIX con MinGW-w64:

1. **Compilazione del codice con pthread**:
   - Quando compili il tuo codice che utilizza pthread, devi linkare la libreria `pthread` utilizzando l'opzione `-lpthread`.

```bash
gcc sommaScalabileMT.c -o sommaScalabileMT.exe -lpthread
```

1. **Esempio di codice con pthread**:
   Il tuo codice già utilizza pthread per creare e gestire i thread. Ecco un esempio di come potrebbe apparire il codice completo:

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define MAX_THREADS 4
#define SIZE 1000

typedef struct {
    int start;
    int end;
    int thread_id;
} parameters;

void* sum_array(void* arg) {
    parameters* data = (parameters*)arg;
    // Implementazione della funzione di somma
    free(data);
    return NULL;
}

int main() {
    pthread_t threads[MAX_THREADS];
    int segment_size = SIZE / MAX_THREADS;

    // Creazione dei thread
    for (int i = 0; i < MAX_THREADS;) {
        parameters* data = (parameters*)malloc(sizeof(parameters));
        data->start = i * segment_size;
        data->thread_id = i++;
        
        data->end = (i == MAX_THREADS ? SIZE : segment_size + data->start);

        printf("%d Tid [ %d ,  %d] \n",data->thread_id ,data->start, data->end-1);
        if (pthread_create(&threads[data->thread_id], NULL, sum_array, (void*)data)) {
            fprintf(stderr, "Errore nella creazione del thread\n");
            return 1;
        }
    }

    // Attendere il completamento dei thread
    for (int i = 0; i < MAX_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }

    return 0;
}
```

Questo ti permetterà di utilizzare i thread POSIX su Windows con MinGW-w64.


A volte, potresti voler utilizzare una routine di libreria nel tuo programma. Poiché così tante routine sono disponibili nella libreria C (che è automaticamente collegata ad ogni programma), tutto ciò che devi fare è trovare il file `#include` giusto. Il modo migliore per farlo è tramite le pagine manuali, di solito chiamate solo le pagine del "man".

Ad esempio, supponiamo che tu voglia utilizzare la chiamata di sistema `fork()`. Digitando `man fork` al prompt della shell, otterrai una descrizione testuale di come funziona `fork()`. In cima ci sarà uno snippet di codice corto che ti dirà quali file hai bisogno di `#include` nel tuo programma affinché funzioni correttamente. Nel caso di `fork()`, devi `#include` il file `unistd.h`, che sarebbe realizzato come segue:

```c
#include <unistd.h>
```

Tuttavia, alcune routine della libreria non risiedono nella libreria C e pertanto dovrai fare un po' più di lavoro. Ad esempio, la libreria matematica ha molte routine utili, come seni, coseni, tangenti e simili. Se vuoi includere la routine `tan()` nel tuo codice, dovresti controllare prima la pagina del man. Nella parte superiore della pagina di Linux Man per `tan()`, vedrai le seguenti due righe:

```c
#include <math.h>
```

Collegamento con `-lm`.

La prima riga che dovresti già capire: devi `#include` la libreria matematica, che si trova nella posizione standard nel file system (cioè, `/usr/include/math.h`). Tuttavia, la riga successiva ti dice come "collegare" il tuo programma con la libreria matematica. Un numero di librerie utili esistono e possono essere collegate; molte di quelle risiedono in `/usr/lib`; è lì che viene trovata la libreria matematica.

Esistono due tipi di librerie: librerie staticamente collegate (che finiscono in `.a`) e quelle legate dinamicamente (che finiscono in `.so`). Le librerie staticamente collegate sono combinate direttamente nel tuo eseguibile; cioè, il codice a basso livello per la libreria viene inserito nel tuo eseguibile dal linker, risultando in un oggetto binario molto più grande. Il collegamento dinamico migliora su questo metodo includendo solo un riferimento a una libreria nel tuo programma eseguibile; quando viene eseguito il programma, il caricatore del sistema operativo collega dinamicamente la libreria. Questo metodo è preferito all'approccio statico perché risparmia spazio su disco (non vengono realizzati eseguibili inutilmente grandi) e consente alle applicazioni di condividere il codice della libreria e i dati statici in memoria.

Nel caso della libreria matematica, sono disponibili versioni statiche e dinamiche, con la versione statica chiamata `/usr/lib/libm.a` e quella dinamica `/usr/lib/libm.so`. In ogni caso, per collegarsi con la libreria matematica, è necessario specificare la libreria al linker; questo può essere ottenuto invocando GCC con la bandiera giusta.

```bash
prompt> gcc -o hw hw.c -Wall -lm
```

La bandiera `-lxxx` dice al linker di cercare `libxxx.so` o `libxxx.a`, probabilmente in quest'ordine. Se per qualche motivo insisti sull'uso della libreria statica oltre a quella dinamica, c'è un'altra bandiera che puoi usare: vedi se puoi scoprirla. Le persone a volte preferiscono la versione statica di una libreria a causa del leggero costo delle prestazioni associato all'uso di librerie dinamiche.

Una nota finale: se si desidera che il compilatore cerchi le intestazioni in un percorso diverso rispetto ai soliti luoghi o si vuole che si colleghi con librerie che si specificano, è possibile utilizzare

 la bandiera`-I/foo/bar` per cercare le intestazioni nella directory `/foo/bar` e 
 
 la bandiera `-L/foo/bar` per cercare librerie nella directory `/foo/bar`. 
Una directory comune da specificare in questo modo è "." (chiamato "dot"), che è una stenografia Unix per la directory corrente. Si noti che l'`-I` dovrebbe andare su una linea di compilazione e l'`-L` sulla linea di collegamento.

### lab.C.5 Compilation separata

Una volta che un programma inizia a diventare abbastanza grande, potresti volerlo dividere in file separati, compilando ciascuno separatamente, quindi collegandoli insieme. Ad esempio, supponiamo che tu abbia due file,
 `hw.c` e `helper.c`, e desideri compilarli individualmente e poi collegarli insieme.

```bash
# Stiamo usando -Wall per avvertimenti, -O per l'ottimizzazione
prompt> gcc -Wall -O -c hw.c
prompt> gcc -Wall -O -c helper.c
prompt> gcc -o hw hw.o helper.o -lm
```

La bandiera `-c` dice al compilatore di produrre solo un file oggetto - in questo caso, file chiamati `hw.o` e `helper.o`. Questi file non sono eseguibili, ma solo rappresentazioni a livello di macchina del codice all'interno di ciascun file sorgente. Per combinare i file oggetto in un eseguibile, devi "collegarli" insieme; ciò si ottiene con la terza riga (`gcc -o hw hw.o helper.o -lm`). In questo caso, GCC vede che i file di input specificati non sono file sorgente (.c), ma invece sono file oggetto (.o), e quindi salta all'ultimo passaggio invocando il linker per collegarli in un singolo eseguibile. A causa della sua funzione, questa riga è spesso chiamata "linea di collegamento", e sarebbe dove si specificano comandi specifici del collegamento come `-lm`. Analogamente, le bandiere come `-Wall` e `-O` sono necessarie solo nella fase di compilazione, e quindi non è necessario includerle nella linea di collegamento ma piuttosto solo sulle linee di compilazione.

Naturalmente, potresti semplicemente specificare tutti i file sorgente C su una singola riga a GCC (`gcc -Wall -O -o hw hw.c helper.c`), ma questo richiede al sistema di ricompilare ogni file di codice sorgente, che può richiedere molto tempo per processi complessi. Compilando ciascuno individualmente, puoi risparmiare tempo ricompilando solo quei file che sono cambiati durante il tuo editing e quindi aumentare la tua produttività. Questo processo è meglio gestito da un altro programma, che ora descriviamo.

### lab.C.6 Make Files

Il programma `make` ti consente di automatizzare gran parte del processo di build, ed è quindi uno strumento fondamentale per qualsiasi programma (e programmatore) serio. Diamo un'occhiata a un semplice esempio, salvato in un file chiamato `Makefile`. Per costruire il tuo programma, ora tutto ciò che devi fare è digitare `make` nella riga di comando.

```makefile
HW: hw.o helper.o
    gcc -o hw hw.o helper.o -lm

hw.o: hw.c
    gcc -Wall -O -c hw.c

helper.o: helper.c
    gcc -Wall -O -c helper.c

clean:
    rm -f hw.o helper.o hw
```

Questo (per impostazione predefinita) cercherà `Makefile` o `makefile` e lo userà come suo input (è possibile specificare un file di make diverso con una flag; leggi le pagine man per scoprire quale). La versione GNU di `make`, `gmake`, è più pienamente presente rispetto alla `make` tradizionale, quindi ci concentreremo su di essa in questa discussione (anche se useremo i due termini in modo intercambiabile). La maggior parte di queste note si basano sulla pagina delle informazioni `gmake`; per vedere come trovare quelle pagine, consulta la sezione Documentazione di seguito. Nota anche: su sistemi Linux, `gmake` e `make` sono lo stesso.

I makefile si basano su regole, che vengono utilizzate per decidere cosa deve accadere. La forma generale di una regola:

```makefile
target: prerequisite1 prerequisite2 ...
    comando1
    comando2
    ...
```

Un target è di solito il nome di un file generato da un comando; esempi di target sono eseguibili o file oggetto. Un target può anche essere il nome di un'azione da realizzare, come "clean" nel nostro esempio. Un prerequisito è un file che viene utilizzato come input per creare il target. Un target dipende spesso da diversi file. Ad esempio, per costruire l'eseguibile `hw`, abbiamo bisogno di due file oggetto: `hw.o` e `helper.o`. Infine, un comando è un'azione che effettua. Una regola può avere più di un comando, ciascuno sulla propria riga. Importante: devi mettere un singolo carattere di tab all'inizio di ogni riga di comando! Se metti solo spazi, `make` stamperà un messaggio di errore oscuro e uscirà.

Di solito un comando è in una regola con prerequisiti e serve a creare un file target se uno qualsiasi dei prerequisiti cambia. Tuttavia, la regola che contiene il comando `clean` associato al target "clean" non ha prerequisiti. Tornando al nostro esempio, quando viene eseguito, `make` funziona approssimativamente in questo modo: in primo luogo, arriva al target `hw`, e si rende conto che per costruirlo, deve avere due prerequisiti, `hw.o` e `helper.o`. Pertanto, `hw` dipende da quei due file oggetto. `make` quindi esaminerà ciascuno di questi target. Esaminando `hw.o`, vedrà che dipende da `hw.c`.
Ecco la chiave: se `hw.c` è stato modificato più recentemente di quanto `hw.o` sia stato creato, `make` saprà che `hw.o` è obsoleto e dovrebbe essere rigenerato; in tal caso, eseguirà la riga di comando, `gcc -Wall -O -c hw.c`, che genera `hw.o`. Pertanto, se stai compilando un grande programma, `make` saprà quali file oggetto devono essere rigenerati in base alle loro dipendenze e farà solo la quantità necessaria di lavoro per ricreare l'eseguibile. Si noti inoltre che `hw.o` verrà creato nel caso non esista affatto.

Continuando, `helper.o` può anche essere rigenerato o creato, basato sugli stessi criteri definiti sopra. Quando entrambi i file oggetto sono stati creati, `make` è ora pronto per eseguire il comando per creare l'eseguibile finale, e lo fa: `gcc -o hw hw.o helper.o -lm`.

Fino ad ora, abbiamo ignorato l'obiettivo `clean` nel file Make. Per usarlo, devi chiederlo esplicitamente. Digita:

```bash
prompt> make clean
```

Questo eseguirà il comando sulla riga di comando. Poiché non ci sono prerequisiti per il target `clean`, digitando `make clean` comporterà sempre l'esecuzione dei comandi. In questo caso, il target `clean` viene utilizzato per rimuovere i file oggetto ed eseguibili, ed è particolarmente utile se desideri ricostruire l'intero programma da zero.

Ora potresti pensare: “Beh, sembra OK, ma questi Makefile sono davvero ingombranti!” E avresti ragione, se dovessero sempre essere scritti così. Fortunatamente, ci sono molte scorciatoie che rendono ancora più facile l'uso. Ad esempio, questo Makefile ha la stessa funzionalità, ma è un po' più elegante:

```makefile
# Specifica tutti i file di origine qui
Srcs = hw.c helper.c

# Specifica il target qui (nome dell'eseguibile)
Targ = hw

# Specifica il compilatore, le flag di compilazione e le librerie necessarie
Cc = gcc
Opts = -Wall -O
Libs = -lm

# Questo traduce i file .c nell'elenco Src in file .o
Objs = $(Srcs:.c=.o)

# Non è realmente necessario, ma viene utilizzato per generare il target
all: $(Targ)

# Questo genera l'eseguibile target
$(Targ): $(Objs)
	$(Cc) -o $(Targ) $(Objs) $(Libs)

# Questa è una regola generica per i file .o
%.o: %.c
	$(Cc) $(Opts) -c $< -o $@

# E infine, una linea pulita
clean:
	rm -f $(Objs) $(Targ)
```

Anche se non entreremo nei dettagli della sintassi, come puoi vedere, questo file può rendere la tua vita un po' più semplice. Ad esempio, consente di aggiungere facilmente nuovi file di origine alla tua build, semplicemente aggiungendoli alla variabile `Srcs` nella parte superiore del Makefile. Puoi anche cambiare facilmente il nome dell'eseguibile modificando la linea `Targ`, il compilatore, le opzioni di compilazione e le librerie sono tutte facilmente modificabili.

### Uso di MakeDepend

Una parola finale su Make: implementare i prerequisiti di un target non è sempre banale, specialmente in programmi grandi e complessi. Non sorprende che ci sia un altro strumento che aiuta in questo, chiamato `MakeDepend`. Leggi a riguardo da solo e vedi se riesci a incorporarlo in un Makefile.

### Debug con GDB

Infine, dopo aver creato un buon ambiente di build e un programma correttamente compilato, potresti scoprire che il tuo programma è buggy. Uno dei modi per risolvere il problema è pensare davvero intensamente: questo metodo a volte ha successo, ma spesso no. Il problema è una mancanza di informazioni; non sai esattamente cosa sta succedendo all'interno del programma e quindi non puoi capire perché non si comporta come previsto. Fortunatamente, c'è qualche aiuto: GDB, il debugger GNU.

Prendiamo il seguente codice buggy, salvato nel file `buggy.c` e compilato nell'eseguibile `buggy`.

```c
#include <stdio.h>

struct Data {
    int x;
};

int main(int argc, char *argv[]) {
    struct Data *p = NULL;
    printf("%d\n", p->x);
    return 0;
}
```

In questo esempio, il programma principale dereferenziando la variabile `p` quando è nulla, che porterà a un errore di segmentazione. Naturalmente, questo problema dovrebbe essere facile da risolvere per ispezione, ma in un programma più complesso, trovare un tale problema non è sempre facile.

### Preparazione per il Debug

Per prepararti a una sessione di debug, ricompila il tuo programma e assicurati di passare la flag `-g` a ciascuna linea di compilazione. Questo include informazioni extra di debug nel tuo eseguibile che saranno utili durante la tua sessione di debug. Inoltre, non attivare l'ottimizzazione (`-O`); anche se questo può funzionare, può anche portare alla confusione durante il debug.

```bash
gcc -g -Wall -o buggy buggy.c
```

Dopo aver ricompilato con `-g`, sei pronto per usare il debugger. Avvia GDB al prompt dei comandi come segue:

```bash
prompt> gdb buggy
```

Questo ti mette in una sessione interattiva con il debugger. Nota che puoi anche usare il debugger per esaminare i file "core" che sono stati prodotti durante le esecuzioni errate o per collegarsi a un programma già in esecuzione; leggi la documentazione per saperne di più su questo.

Una volta dentro, potresti vedere qualcosa del genere:

```bash
GNU gdb ...
Copyright 2024 Free Software Foundation, Inc.
(gdb)
```

La prima cosa che potresti voler fare è andare avanti ed eseguire il programma. Per fare ciò, digita semplicemente `run` al prompt dei comandi GDB. In questo caso, questo è quello che potresti vedere:

```bash
(gdb) run
Starting program: /path/to/buggy
Program received signal SIGSEGV, Segmentation fault.
0x8048433 in main (argc=1, argv=0xbffff844) at buggy.c:8
8       printf("%d\n", p->x);
```


Come puoi vedere dall'esempio, in questo caso, GDB individua immediatamente dove si è verificato il problema; un "errore di segmentazione" è stato generato sulla linea in cui abbiamo cercato di dereferenziato `p`. Questo significa solo che noi accediamo a un po' di memoria a cui non dovevamo accedere. A questo punto, il programmatore astuto può esaminare il codice e dire "AHA! deve essere che `p` non indica nulla di valido, e quindi non dovrebbe essere dereferenziato!", e quindi andare avanti e risolvere il problema.

### Esaminare le Variabili con GDB

Tuttavia, se non sapessi cosa stesse succedendo, potresti voler esaminare alcune variabili. GDB ti consente di farlo in modo interattivo durante la sessione di debug.

```bash
(gdb) print p
$1 = (struct Data *) 0x0
```

Usando il comando `print`, possiamo esaminare `p` e vedere che è un puntatore a una struttura di tipo `Data` e che attualmente è impostato su NULL (o zero o hex zero che è mostrato qui come "0x0").

### Punti di Interruzione e Esecuzione a Passi

Infine, puoi anche impostare i punti di interruzione all'interno del programma per avere il debugger interrompere il programma in una certa routine. Dopo averlo fatto, è spesso utile per passare attraverso l'esecuzione (una riga alla volta) e vedere cosa sta accadendo.

```bash
(gdb) break main
Breakpoint 1 at 0x8048426: file buggy.c, line 5.
(gdb) run
Starting program: /path/to/buggy
Breakpoint 1, main (argc=1, argv=0xbffff844) at buggy.c:5
5       struct Data *p = NULL;
(gdb) next
8       printf("%d\n", p->x);
(gdb) next
Program received signal SIGSEGV, Segmentation fault.
0x8048433 in main (argc=1, argv=0xbffff844) at buggy.c:8
8       printf("%d\n", p->x);
```

In questo esempio, abbiamo impostato un punto di interruzione all'inizio della funzione `main`. Quando eseguiamo il programma con `run`, il debugger interrompe l'esecuzione al punto di interruzione. Usando il comando `next`, possiamo eseguire il programma una riga alla volta, permettendoci di osservare lo stato delle variabili e vedere dove si verifica l'errore.

Questo è solo un esempio di come utilizzare GDB per eseguire il debug di un programma. GDB è uno strumento potente con molte altre funzionalità che possono aiutarti a identificare e risolvere i problemi nel tuo codice.

### lab.C.7 Debug

Infine, dopo aver creato un buon ambiente di compilazione e un programma correttamente compilato, è possibile scoprire che il tuo programma è buggy. Uno dei modi per risolvere il problema è pensare davvero intensamente: questo metodo a volte ha successo, ma spesso no. Il problema è una mancanza di informazioni; non sai esattamente cosa sta succedendo all'interno del programma, e quindi non puoi capire perché non si comporta come previsto. Fortunatamente, c'è qualche aiuto: GDB, il debugger GNU.

Prendiamo il seguente codice buggy, salvato nel file `buggy.c` e compilato nell'eseguibile `buggy`.

```c
#include <stdio.h>

struct Data {
    int x;
};

int main(int argc, char *argv[]) {
    struct Data *p = NULL;
    printf("%d\n", p->x);
    return 0;
}
```

In questo esempio, il programma principale dereferenzia la variabile `p` quando è nulla, che porterà a un errore di segmentazione. Naturalmente, questo problema dovrebbe essere facile da risolvere per ispezione, ma in un programma più complesso, trovare un tale problema non è sempre facile.

### Preparazione per il Debug

Per prepararti a una sessione di debug, ricompila il tuo programma e assicurati di passare la flag `-g` a ciascuna linea di compilazione. Questo include informazioni extra di debug nel tuo eseguibile che saranno utili durante la tua sessione di debug. Inoltre, non attivare l'ottimizzazione (`-O`); anche se questo può funzionare, può anche portare alla confusione durante il debug.

```bash
gcc -g -Wall -o buggy buggy.c
```

Dopo aver ricompilato con `-g`, sei pronto per usare il debugger. Avvia GDB al prompt dei comandi come segue:

```bash
prompt> gdb buggy
```

Questo ti mette in una sessione interattiva con il debugger. Nota che puoi anche usare il debugger per esaminare i file "core" che sono stati prodotti durante le esecuzioni errate o per collegarsi a un programma già in esecuzione; leggi la documentazione per saperne di più su questo.

Una volta dentro, potresti vedere qualcosa del genere:

```bash
GNU gdb ...
Copyright 2008 Free Software Foundation, Inc.
(gdb)
```

La prima cosa che potresti voler fare è andare avanti ed eseguire il programma. Per fare ciò, digita semplicemente `run` al prompt dei comandi GDB. In questo caso, questo è quello che potresti vedere:

```bash
(gdb) run
Starting program: /path/to/buggy
Program received signal SIGSEGV, Segmentation fault.
0x8048433 in main (argc=1, argv=0xbffff844) at buggy.c:8
8       printf("%d\n", p->x);
```

Come puoi vedere dall'esempio, in questo caso, GDB individua immediatamente dove si è verificato il problema; un "errore di segmentazione" è stato generato sulla linea in cui abbiamo cercato di dereferenziare `p`. Questo significa solo che stiamo accedendo a un'area di memoria a cui non dovremmo accedere. A questo punto, il programmatore astuto può esaminare il codice e dire "AHA! deve essere che `p` non indica nulla di valido, e quindi non dovrebbe essere dereferenziato!", e quindi andare avanti e risolvere il problema.

### Esaminare le Variabili con GDB

Tuttavia, se non sapessi cosa stesse succedendo, potresti voler esaminare alcune variabili. GDB ti consente di farlo in modo interattivo durante la sessione di debug.

```bash
(gdb) print p
$1 = (struct Data *) 0x0
```

Usando il comando `print`, possiamo esaminare `p` e vedere che è un puntatore a una struttura di tipo `Data` e che attualmente è impostato su NULL (o zero o hex zero che è mostrato qui come "0x0").

### Punti di Interruzione e Esecuzione a Passi

Infine, puoi anche impostare i punti di interruzione all'interno del programma per avere il debugger interrompere il programma in una certa routine. Dopo averlo fatto, è spesso utile eseguire il programma una riga alla volta e vedere cosa sta accadendo.

```bash
(gdb) break main
Breakpoint 1 at 0x8048426: file buggy.c, line 5.
(gdb) run
Starting program: /path/to/buggy
Breakpoint 1, main (argc=1, argv=0xbffff844) at buggy.c:5
5       struct Data *p = NULL;
(gdb) next
8       printf("%d\n", p->x);
(gdb) next
Program received signal SIGSEGV, Segmentation fault.
0x8048433 in main (argc=1, argv=0xbffff844) at buggy.c:8
8       printf("%d\n", p->x);
```

In questo esempio, abbiamo impostato un punto di interruzione all'inizio della funzione `main`. Quando eseguiamo il programma con `run`, il debugger interrompe l'esecuzione al punto di interruzione. Usando il comando `next`, possiamo eseguire il programma una riga alla volta, permettendoci di osservare lo stato delle variabili e vedere dove si verifica l'errore.

Questo è solo un esempio di come utilizzare GDB per eseguire il debug di un programma. GDB è uno strumento potente con molte altre funzionalità che possono aiutarti a identificare e risolvere i problemi nel tuo codice.

Nell'esempio sopra, un punto di interruzione è impostato sulla routine main(); così, quando eseguiamo il programma, il debugger interrompe quasi immediatamente l'esecuzione in main. A quel punto nell'esempio, viene emesso un comando "next", che esegue il comando successivo a livello di origine. Sia "next" che "step" sono modi utili per avanzare attraverso un programma: leggi la documentazione per maggiori dettagli.

Questa discussione in realtà non rende giustizia a GDB; è uno strumento di debug ricco e flessibile, con molte più funzionalità di quelle che possono essere descritte nello spazio limitato qui. Leggi di più da solo e diventa un esperto nel tuo copioso tempo libero.

## lab.C.8 Documentazione

Per imparare molto di più su tutte queste cose, devi fare due cose: il primo è usare questi strumenti e il secondo è leggere di più su di loro per conto proprio. Un modo per scoprire di più su GCC, Gmake e GDB è leggere le loro pagine man; digita `man gcc`, `man gmake` o `man gdb` al tuo prompt dei comandi. Puoi anche usare `man -k` per cercare le pagine man per parole chiave, anche se ciò non funziona sempre come potrebbe; Google è probabilmente un approccio migliore qui.

Una cosa difficile delle pagine man: la digitazione di `man XXX` potrebbe non dare il risultato desiderato, se c'è più di una cosa chiamata XXX. In particolare, puoi utilizzare il comando "help" interattivo durante il debug con GDB. Ad esempio, se stai cercando la pagina di sistema della chiamata kill() e digiti solo `man kill` al prompt, otterrai la pagina man sbagliata, perché esiste un programma di riga di comando chiamato kill. Le pagine man sono divise in sezioni e, per impostazione predefinita, man restituirà la pagina nella sezione più bassa che trova, che in questo caso è la sezione 1. Puoi capire quale pagina man hai ottenuto guardando la parte superiore della pagina: se vedi `kill(2)`, sai di essere nella pagina man giusta nella sezione 2, dove risiedono le chiamate di sistema. Digita `man man` per saperne di più su ciò che è memorizzato in ciascuna delle diverse sezioni delle pagine man. Nota anche che `man -a kill` può essere usato per scorrere tutte le diverse pagine man chiamate "kill".

Le pagine man sono utili per trovare una serie di cose. In particolare, spesso vorrai cercare quali argomenti passare a una chiamata di libreria, o quali file di intestazione devono essere inclusi per utilizzare una chiamata di libreria. Tutto questo dovrebbe essere disponibile nella pagina man. Ad esempio, se guardi la chiamata di sistema `open()`, vedrai:

```
SYNOPSIS

#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int open(const char *path, int oflag, /* mode_t mode */ ...);
```

Questo ti dice di includere le intestazioni `sys/types.h`, `sys/stat.h`, e `fcntl.h` per utilizzare la chiamata `open`. Ti racconta anche dei parametri da passare a `open`, vale a dire una stringa chiamata `path`, un flag chiamato `oflag` e un argomento opzionale per specificare la modalità del file. Se ci fossero librerie con cui dovevi collegarti per utilizzare la chiamata, lo direbbe anche qui.

Le pagine man richiedono uno sforzo per essere utilizzate in modo efficace. Sono spesso divise in diverse sezioni standard. Il corpo principale descriverà come puoi passare parametri diversi per far sì che la funzione si comporti in modo diverso. Una sezione particolarmente utile è la parte dei valori di ritorno della pagina man, che ti dice cosa tornerà la funzione in caso di successo o fallimento. Dalla pagina man di `open()` di nuovo:

```
RETURN VALUE

Upon successful completion, the `open()` function will open the file and return a non-negative integer representing the lowest numbered unused file descriptor. Otherwise, -1 is returned, `errno` is set to indicate the error, and no files are created or modified.
```

Pertanto, controllando cosa ritorna `open()`, puoi vedere se l'apertura è riuscita o meno. In caso contrario, `open()` (e molte routine di libreria standard) imposterà una variabile globale chiamata `errno` su un valore per indicarti l'errore. Vedi la sezione Errori della pagina man per maggiori dettagli.

Un'altra cosa che potresti voler fare è cercare la definizione di una struttura che non è specificata nella pagina man stessa. Ad esempio, la pagina man per `gettimeofday()` ha la seguente sinossi:

```
SYNOPSIS

#include <sys/time.h>

int gettimeofday(struct timeval *restrict tp, void *restrict tzp);
```

Da questa pagina, puoi vedere che il tempo è messo in una struttura di tipo `timeval`, ma la pagina man potrebbe non dirti quali campi ha quella struttura! (In questo caso, lo fa, ma potresti non essere sempre così fortunato). Quindi, potresti dover cercarla. Tutti i file di intestazione si trovano sotto la directory `/usr/include`, e quindi puoi usare uno strumento come `grep` per cercarla. Ad esempio, potresti digitare:

```
prompt> grep "struct timeval" /usr/include/sys/*.h
```

Questo ti consente di cercare la definizione della struttura in tutti i file che terminano con `.h` in `/usr/include/sys`. Sfortunatamente, questo potrebbe non funzionare sempre, poiché questi file di intestazione possono includere altri file che si trovano altrove.

Un modo migliore per farlo è utilizzare uno strumento a tua disposizione, il compilatore. Scrivi un programma che includa l'intestazione del tempo, `main.c`. Quindi, invece di compilarlo, usa il compilatore per invocare il preprocessore. Il preprocessore elabora tutte le direttive nel tuo file, come i comandi `#define` e `#include`. Per fare questo, digita `gcc -E main.c`. Il risultato di questo è un file che ha tutte le strutture e i prototipi necessari, inclusa la definizione dello strumento `timeval`.

Probabilmente un modo ancora migliore per trovare queste cose: Google. Dovresti sempre cercare su Google ciò che non sai: è incredibile quanto puoi imparare semplicemente cercandolo!

Pagine di informazioni

Anche abbastanza utili nella caccia alla documentazione sono le pagine di informazioni, che forniscono una documentazione molto più dettagliata su molti strumenti GNU. Puoi accedere alle pagine di informazioni eseguendo il programma `info` o tramite EMACS, l'editor preferito dagli hacker, eseguendo `info` con `Meta-X`. Un programma come GCC ha centinaia di opzioni e alcune di esse sono sorprendentemente utili da sapere. Gmake ha molte più funzionalità che miglioreranno il tuo ambiente di costruzione. Infine, GDB è un debugger piuttosto sofisticato. Leggi le pagine man e le pagine di informazioni, prova le funzionalità che non avevi provato prima e diventa un utente esperto dei tuoi strumenti di programmazione.

### lab.C.9 Letture suggerite

Oltre alle pagine man e alle pagine delle informazioni, ci sono una serie di libri utili disponibili. Si noti che molte di queste informazioni sono disponibili gratuitamente online; tuttavia, a volte avere qualcosa in forma di libro sembra renderla più facile da imparare. Inoltre, cerca sempre i libri di O’Reilly sugli argomenti che ti interessano; sono quasi sempre di alta qualità.

- **"Il linguaggio di programmazione C"**, di Brian Kernighan e Dennis Ritchie. Questo è il libro definitivo sul C da avere.
- **"Gestire progetti con Make"**, di Andrew Oram e Steve Talbott. Un libro ragionevole e corto su Make.
- **"Debugging with GDB: The GNU Source-Level Debugger"**, di Richard M. Stallman e Roland H. Pesch. Un piccolo libro sull'uso di GDB.
- **"Programmazione avanzata nell'ambiente UNIX"**, di W. Richard Stevens e Steve Rago. Stevens ha scritto alcuni libri eccellenti e questo è un must per gli hacker UNIX. Ha anche un eccellente set di libri sulla programmazione TCP/IP e socket.
- **"Programmazione C esperta"**, di Peter van der Linden. Molti suggerimenti utili sui compilatori, ecc., provengono direttamente da qui. Leggi questo! È un libro eccezionale e divertente, anche se un po' obsoleto.

</div>

<style>
.scrollable {
  max-height: 300px; /* Altezza massima dell'area scrollabile */
  max-width: 600px;  /* Larghezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>

---
layout: cover
level: 2
title: zeta.c

---

## Laboratorio: zeta.c


<div class="scrollable">

Questo programma legge la larghezza e l'altezza di una "Z" da input e stampa una "Z" di asterischi (`*`) con le dimensioni specificate. Ecco il codice con i commenti aggiunti per spiegare ogni parte:

```c
#include <stdio.h>

int main() {
    int l, h;
// Legge la larghezza della Z
scanf("%d", &l);

// Chiede all'utente di inserire l'altezza della Z
printf("Inserisci altezza di Z: ");
scanf("%d", &h);

// Ciclo esterno per ogni riga dell'altezza
for (int i = 0; i < h; i++) {
    // Ciclo interno per ogni colonna della larghezza
    for (int j = 0; j < l; j++) {
        // Condizioni per stampare un asterisco
        // Stampa un asterisco se è la prima riga, l'ultima riga o se è sulla diagonale
        if (i == 0 || i == h - 1 || j + i * l / (h - 1) == (l - 1)) {
            printf("*");
        } else {
            // Altrimenti, stampa uno spazio
            printf(" ");
        }
    }
    // Stampa una nuova riga dopo aver completato una riga di larghezza
    printf("\n");
}

// Termina il programma
return 0;
```

### Spiegazione del programma:
1. **Input della larghezza**:
   ```c
   scanf("%d", &l);
   ```
   Legge un numero intero `l` che rappresenta la larghezza della "Z".

2. **Input dell'altezza**:
   ```c
   printf("Inserisci altezza di Z: ");
   scanf("%d", &h);
   ```
   Chiede all'utente di inserire l'altezza della "Z" e legge il valore in `h`.

3. **Ciclo esterno per le righe**:
   ```c
   for (int i = 0; i < h; i++) {
   ```
   Itera attraverso ogni riga da `0` a `h-1`.

4. **Ciclo interno per le colonne**:
   ```c
   for (int j = 0; j < l; j++) {
   ```
   Itera attraverso ogni colonna da `0` a `l-1`.

5. **Condizioni per stampare un asterisco**:
   ```c
   if (i == 0 || i == h - 1 || j + i * l / (h - 1) == (l - 1)) {
       printf("*");
   } else {
       printf(" ");
   }
   ```
   - Stampa un asterisco (`*`) se:
     - È la prima riga (`i == 0`).
     - È l'ultima riga (`i == h - 1`).
     - È sulla diagonale che forma la "Z" (`j + i * l / (h - 1) == (l - 1)`).
   - Altrimenti, stampa uno spazio (` `).

6. **Stampa una nuova riga**:
   ```c
   printf("\n");
   ```
   Dopo aver completato una riga di larghezza `l`, stampa una nuova riga.

7. **Termina il programma**:
   ```c
   return 0;
   ```
   Termina il programma con successo.
</div>
   <style>
.scrollable {
  max-height: 300px; /* Altezza massima dell'area scrollabile */
  max-width: 600px;  /* Larghezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>

---
layout: cover
level: 2
title: email.c

---

## Laboratorio: ascii.c e email.c


<div class="scrollable">


Codice con i commenti aggiunti per spiegare ogni parte:

```c
// Include la libreria standard di input/output
#include <stdio.h>

// Funzione per stampare il codice ASCII di un carattere
void print_ascii_code(char c) {
    // Converte il carattere in codice ASCII
    ascii_code = (int)c;
    // Stampa il carattere e il suo codice ASCII
    printf("Il codice ASCII per '%c' è %d\n", c, ascii_code);
}

// Funzione principale
int main() {
    char c;

    // Legge un carattere dall'input
    printf("Inserisci un carattere: ");
    scanf("%c", &c);

    // Chiama la funzione per stampare il carattere e il codice ASCII
    print_ascii_code(c);

    return 0;
}


```

### Spiegazione del programma:
1. **Funzione principale `main`**:
   - Dichiarazione della variabile `c` (carattere).
   - Legge un carattere dall'input dell'utente.
   - Chiama la funzione `print_ascii_code` per stampare il codice ASCII del carattere.
      

2. **Funzione `print_ascii_code`**:
   - Prende come parametri un carattere `c`.
   - Dichiarazione della variabile `ascii_code` (codice ASCII)
   - Converte il carattere in codice ASCII.
   - Stampa il carattere e il suo codice ASCII.


# email.c

```c
// Include la libreria standard di input/output
#include <stdio.h>

// Definisce una costante per la lunghezza massima del nome
#define NAME_LENGTH 50
// Funzione per stampare il codice ASCII di un carattere
void print_ascii_code(char c) {
    // Stampa il carattere e il suo codice ASCII
    printf("Il codice ASCII per '%c' è %d\n", c, (int)c);
}

// Funzione principale
int main() {
    // Dichiarazione delle variabili per il nome e il cognome
    char firstName[NAME_LENGTH];
    char lastName[NAME_LENGTH];

    // Chiede all'utente di inserire il nome
    printf("Please enter your first name: ");
    scanf("%49s", firstName);  // Legge il nome dall'input dell'utente

    // Chiede all'utente di inserire il cognome
    printf("Please enter your last name: ");
    scanf("%49s", lastName);  // Legge il cognome dall'input dell'utente

    // Stampa l'indirizzo email generato
    printf("Your email address is: %s.%s@omarillo.net\n", firstName, lastName);

    // Dichiarazione di un carattere e conversione in codice ASCII
    char lettera = 'a';

    // Chiama la funzione per stampare il codice ASCII
    print_ascii_code(lettera);  
    

    for (int j = 0; j < NAME_LENGTH; j++) {
        lettera=firstName[j];
        printf("firstName[%d] - ",j);
        print_ascii_code(lettera);
    }

    return 0;
}

```

### Spiegazione del programma:
1. **Inclusione della libreria**:
   ```c
   #include <stdio.h>
   ```
   Include la libreria standard di input/output per utilizzare le funzioni `printf` e `scanf`.

2. **Definizione della costante**:
   ```c
   #define NAME_LENGTH 50
   ```
   Definisce una costante `NAME_LENGTH` con valore `50` per la lunghezza massima del nome e del cognome.

3. **Funzione principale `main`**:
   - Dichiarazione delle variabili `firstName` e `lastName` come array di caratteri con lunghezza `NAME_LENGTH`.
   - Chiede all'utente di inserire il nome e il cognome utilizzando `scanf`.
   - Stampa l'indirizzo email generato combinando il nome e il cognome.
   - Dichiarazione di un carattere `lettera` .
   - Chiama la funzione `print_ascii_code` per stampare il codice ASCII del carattere.

4. **Funzione `print_ascii_code`**:
   - Prende come parametro un carattere `c`
   - Conversione in codice ASCII di `c`.
   - Stampa il carattere e il suo codice ASCII.


</div>
   <style>
.scrollable {
  max-height: 300px; /* Altezza massima dell'area scrollabile */
  max-width: 600px;  /* Larghezza massima dell'area scrollabile */
  overflow-y: auto;  /* Abilita lo scroll verticale */
  padding: 1em;      /* Aggiungi un po' di padding */
  border: 1px solid #ccc; /* Aggiungi un bordo per evidenziare l'area scrollabile */
}
</style>