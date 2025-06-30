# SISTEMI E reti

![https://www.istruzione.it/esame_di_stato/202324/Istituti%20tecnici/Ordinaria/A038_ORD24.pdf]

<iframe width="770" height="433" src="https://www.youtube.com/embed/9CL3pZfsHbs" title="Inside Google&#39;s $13 Billion Data Centers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

| **Data-center** | **Enti locali** | **Scuole** | **Str. San Publ**   | **Str. San Conv.**  |
|----------------|------------------|------------------|------------------|------------------|
| 10.0.0.0/8      | 10.0.10.0/24    | 10.0.20.0/24    | 10.0.30.0/24    | 10.100.0.0/16.  |

Struttura di un [Data Center](#data-center)

La maschera di sottorete /8 corrisponde a 255.0.0.0, il che significa che:

I primi 8 bit dell'[indirizzo IP](indirizzo-ip) sono riservati per identificare la rete.
I restanti 24 bit sono disponibili per assegnare indirizzi agli host all'interno di quella rete.
Ad esempio, se hai l'indirizzo 10.0.0.0/8, significa che la rete è 10.0.0.0 e puoi avere host con indirizzi che vanno da 10.0.0.1 a 10.255.255.254 (escludendo 10.0.0.0 come identificatore della rete e 10.255.255.255 come indirizzo di broadcast).

Descrizione dettagliata della tipologia e delle caratteristiche hardware del dispositivo che sarà fornito a ciascuna struttura sanitaria privata convenzionata, insieme ai dettagli sulla configurazione di rete e sui servizi da implementare.

## Tipologia e Caratteristiche Hardware del Dispositivo

1. **Tipo di Dispositivo**: [Router o Switch](Router-o-switch) di rete
2. **[Numero di Porte](le-porte-ethernet-e-le-porte-sfp)**:
   - **Porte Ethernet**: Almeno **[8 porte Gigabit Ethernet](#8-porte)** (10/100/1000 Mbps) per la connessione di dispositivi locali.
   - **Porte SFP**: 2 porte SFP (Small Form-factor Pluggable) per la connessione a fibra ottica, se necessario.
3. **Tipologia di Porte**:
   - **Porte LAN**: Utilizzate per connettere i dispositivi interni (PC, stampanti, ecc.).
   - **Porte WAN**: Una porta dedicata per la connessione alla rete regionale in fibra ottica.
4. **Alimentazione**: Supporto per **[Power over Ethernet (PoE)](#poe)** per alimentare dispositivi come telefoni VoIP o telecamere di sicurezza.

### Configurazione di Rete delle Porte

- **[Porte LAN](porte-lan)**:
  - Configurazione in modalità **DHCP** per l'assegnazione automatica degli indirizzi IP ai dispositivi connessi.
  - Creazione di VLAN (Virtual Local Area Network) per segmentare il traffico tra diverse aree (es. amministrazione, medici, pazienti).
  
- **[Porta WAN](prete-wan)**:
  - Configurazione con indirizzo IP statico o dinamico, a seconda delle specifiche fornite dalla rete regionale.
  - Implementazione di **NAT (Network Address Translation)** per consentire l'accesso a Internet, se necessario.

### Servizi da Configurare sul Dispositivo

1. **Firewall**: Configurazione di un firewall per proteggere la rete interna da accessi non autorizzati.
2. **VPN (Virtual Private Network)**: Implementazione di una VPN per garantire connessioni sicure tra la struttura e il data-center regionale.
3. **QoS (Quality of Service)**: Configurazione di QoS per garantire che le applicazioni critiche (come le videoconferenze o le applicazioni sanitarie) abbiano la priorità nel traffico di rete.
4. **Monitoraggio e Logging**: Attivazione di servizi di monitoraggio per tenere traccia delle prestazioni della rete e registrare eventi di sicurezza.

### Considerazioni Finali

Questa configurazione garantirà che ogni struttura sanitaria privata convenzionata possa connettersi in modo sicuro e affidabile alla rete regionale, facilitando l'integrazione dei dati sanitari e migliorando l'efficienza operativa.

---

Ecco un'analisi di come una struttura sanitaria privata convenzionata potrebbe connettere la sua LAN pre-esistente alla rete in fibra regionale, tenendo conto delle possibili configurazioni e degli apparati aggiuntivi.

### Scenario Base

Assumiamo che la struttura sanitaria abbia una LAN pre-esistente con le seguenti caratteristiche:

- **Switch**: Un switch di rete che gestisce la connettività tra i dispositivi interni (PC, stampanti, ecc.).
- **Router**: Un router che fornisce l'accesso a Internet e gestisce la connessione con il mondo esterno.

### Opzioni di Connessione

Esistono due approcci principali per connettere la LAN della struttura alla rete regionale in fibra:

1. **Connessione diretta tramite il router:**

   - **Scenario:** Il router esistente è compatibile con la connessione in fibra e può gestire l'indirizzamento IP e il NAT per la rete regionale.
   - **Apparati aggiuntivi:**
      - **Dispositivo di connessione in fibra:** Un dispositivo SFP (Small Form-factor Pluggable) da installare nel router per la connessione alla fibra.
   - **Configurazione:**
      - Il router viene configurato con un indirizzo IP statico o dinamico per la rete regionale.
      - Il NAT viene configurato per consentire alle risorse interne di accedere a Internet attraverso la rete regionale.
   - **Vantaggi:** Semplicità di implementazione, sfruttamento del router esistente.
   - **Svantaggi:** Dipendenza dalla compatibilità del router con la fibra, potenziale sovraccarico del router se la struttura ha un traffico di rete elevato.

2. **Connessione tramite uno switch aggiuntivo:**

   - **Scenario:** Il router esistente non è compatibile con la fibra o la struttura ha un traffico di rete elevato.
   - **Apparati aggiuntivi:**
      - **Switch in fibra:** Uno switch con porte SFP per la connessione alla fibra regionale.
      - **Router aggiuntivo:** Un router dedicato per la connessione alla rete regionale.
   - **Configurazione:**
      - Lo switch in fibra viene connesso alla rete regionale e al router esistente.
      - Il router aggiuntivo viene configurato con un indirizzo IP statico o dinamico per la rete regionale e gestisce il NAT.
      - Il traffico tra la LAN e la rete regionale viene indirizzato attraverso lo switch in fibra e il router aggiuntivo.
   - **Vantaggi:** Maggiore flessibilità, separazione del traffico di rete, riduzione del carico sul router esistente.
   - **Svantaggi:** Costi aggiuntivi per il nuovo switch e il router, maggiore complessità di configurazione.

### Esempio di Configurazione

**Scenario:** La struttura ha un router esistente non compatibile con la fibra e un traffico di rete elevato.

**Configurazione:**

- **Switch in fibra:** Uno switch con 2 porte SFP viene connesso alla porta WAN del router esistente e alla porta WAN del router aggiuntivo.
- **Router aggiuntivo:** Un router dedicato con un'interfaccia WAN per la fibra viene configurato con un indirizzo IP statico per la rete regionale e gestisce il NAT.
- **LAN:** La LAN della struttura rimane connessa al router esistente.

#### Schema Grafico

```plaintext
                                  +--------+
                                  |        |
                                  | Router |
                                  |        |
                                  +--------+
                                      |
                                      |
                                      |
                     +--------+       |       +--------+
                     |        |-------|-------|        |
                     | Switch |       |       | Router |
                     |        |-------|-------|        |
                     +--------+       |       +--------+
                                      |
                                      |
                                      |
                                  +--------+
                                  |        |
                                  | Switch |
                                  |        |
                                  +--------+
                                      |
                                      |
                                      |
                                  +--------+
                                  |        |
                                  | LAN    |
                                  |        |
                                  +--------+
```

 Considerazioni

La scelta della soluzione migliore dipende dalle specifiche esigenze della struttura sanitaria, come la compatibilità del router esistente, il volume del traffico di rete e il budget disponibile. La configurazione deve essere progettata per garantire una connessione sicura e affidabile alla rete regionale in fibra.

---

## La sicurezza dei dati sanitari

è fondamentale, e per questo è importante adottare misure adeguate sia per l'archiviazione che per il trasferimento dei dati.

La normativa sulla privacy, come il GDPR, fornisce una guida importante per garantire la sicurezza dei dati.  Il GDPR, ad esempio, definisce il concetto di "trasferimento" di dati personali, che si verifica quando i dati vengono inviati o resi permanentemente disponibili a qualcuno o a qualche azienda al di fuori dello Spazio Economico Europeo (SEE).

Per quanto riguarda la schedulazione temporale dei trasferimenti dei dati delle prestazioni sanitarie, la documentazione non specifica dettagliatamente le modalità e la frequenza con cui le strutture sanitarie trasferiscono i dati al data-center regionale.

Tuttavia, la documentazione sottolinea l'importanza di utilizzare meccanismi legalmente validi per proteggere il trasferimento dei dati, come i contratti tipo dell'Unione Europea per il trasferimento di dati personali verso paesi terzi (noti anche come "clausole contrattuali standard").

Queste clausole contrattuali standard garantiscono un'adeguata protezione dei dati personali e sono fondamentali per garantire la sicurezza dei dati sanitari durante il trasferimento.

Per avere informazioni più precise sulla schedulazione temporale dei trasferimenti, sarebbe utile consultare la documentazione specifica del data-center regionale o contattare direttamente la società regionale che gestisce l'infrastruttura in fibra.

---

Ecco un esempio di clausole contrattuali standard per il trasferimento di dati personali a strutture sanitarie e al centro dati regionale, in linea con il GDPR:

### Esempio di Clausole Contrattuali Standard

1. **Obbligo di Riservatezza**: L'importatore di dati si impegna a trattare i dati personali in modo riservato e a non divulgarli a terzi senza il consenso esplicito del titolare dei dati.

2. **Sicurezza dei Dati**: L'importatore deve implementare misure tecniche e organizzative adeguate per garantire un livello di sicurezza appropriato al rischio, inclusi la crittografia e il controllo degli accessi.

3. **Diritti degli Interessati**: L'importatore deve garantire che gli interessati possano esercitare i loro diritti, come l'accesso, la rettifica e la cancellazione dei dati personali.

4. **Notifica di Violazione**: In caso di violazione dei dati, l'importatore è obbligato a notificare tempestivamente il titolare dei dati e le autorità competenti.

5. **Subappaltatori**: L'importatore non può trasferire i dati a subappaltatori senza il consenso del titolare dei dati e deve garantire che anche i subappaltatori rispettino le stesse clausole.

6. **Legge Applicabile**: Le clausole devono specificare la legge applicabile e il foro competente per eventuali controversie.

Queste clausole sono fondamentali per garantire che i dati personali siano trattati in modo sicuro e conforme alle normative vigenti.

---

È fondamentale adottare misure tecniche e organizzative adeguate per garantire la sicurezza dei dati, specialmente quando si tratta di dati sensibili. Ecco alcune delle principali misure che puoi implementare:

### Misure Tecniche

1. **Crittografia**:
   - **Crittografia dei dati a riposo**: Protegge i dati memorizzati su server o dispositivi, rendendoli illeggibili senza la chiave di decrittazione.
   - **Crittografia dei dati in transito**: Utilizza protocolli come TLS/SSL per proteggere i dati mentre vengono trasferiti su reti.

2. **Controllo degli Accessi**:
   - **Autenticazione forte**: Implementa metodi di autenticazione a più fattori (MFA) per garantire che solo gli utenti autorizzati possano accedere ai dati.
   - **Gestione dei privilegi**: Limita l'accesso ai dati sensibili solo a coloro che ne hanno realmente bisogno per le loro funzioni lavorative.

3. **Firewall e Sistemi di Intrusione**:
   - Utilizza firewall per monitorare e controllare il traffico di rete e sistemi di rilevamento delle intrusioni (IDS) per identificare attività sospette.

4. **Backup e Ripristino**:
   - Esegui regolarmente backup dei dati e assicurati che ci siano procedure di ripristino in caso di perdita di dati o attacchi informatici.

### Misure Organizzative

1. **Formazione del Personale**:
   - Organizza corsi di formazione sulla sicurezza informatica per sensibilizzare i dipendenti riguardo alle minacce e alle migliori pratiche.

2. **Politiche di Sicurezza**:
   - Sviluppa e implementa politiche di sicurezza dei dati che definiscano chiaramente le responsabilità e le procedure da seguire.

3. **Valutazione dei Rischi**:
   - Esegui regolarmente valutazioni dei rischi per identificare vulnerabilità e adottare misure correttive.

4. **Monitoraggio e Audit**:
   - Implementa sistemi di monitoraggio per rilevare accessi non autorizzati e conduci audit regolari per garantire la conformità alle politiche di sicurezza.

Adottare queste misure può aiutarti a garantire un livello di sicurezza adeguato al rischio associato al trattamento dei dati.

---

Implementare la **crittografia dei dati a riposo** è un passo fondamentale per proteggere le informazioni sensibili memorizzate. Ecco alcuni passaggi chiave che puoi seguire per implementarla efficacemente:

### 1. **Valutazione dei Dati**

- **Identifica i dati sensibili**: Fai un inventario dei dati che necessitano di protezione, come informazioni personali, dati finanziari o sanitari.
- **Classifica i dati**: Determina il livello di sensibilità e il rischio associato a ciascun tipo di dato.

### 2. **Scelta della Tecnologia di Crittografia**

- **Algoritmi di Crittografia**: Scegli algoritmi robusti come **AES (Advanced Encryption Standard)**, che è ampiamente utilizzato e considerato sicuro.
- **Strumenti di Crittografia**: Utilizza strumenti o software di crittografia che supportano la crittografia a riposo. Molti fornitori di servizi cloud offrono opzioni integrate.

### 3. **Implementazione della Crittografia**

- **Crittografia a livello di file o disco**: Puoi crittografare singoli file o interi dischi. La crittografia a livello di disco protegge tutti i dati su un'unità, mentre la crittografia a livello di file si applica solo a file specifici.
- **Crittografia nativa**: Se utilizzi soluzioni di storage come **Nutanix**, verifica se offrono crittografia nativa, che può semplificare il processo.

### 4. **Gestione delle Chiavi**

- **Generazione e Archiviazione delle Chiavi**: Assicurati che le chiavi di crittografia siano generate in modo sicuro e archiviate in un luogo protetto. Utilizza un sistema di gestione delle chiavi (KMS) per gestirle.
- **Rotazione delle Chiavi**: Implementa politiche per la rotazione regolare delle chiavi per migliorare la sicurezza.

### 5. **Monitoraggio e Audit**

- **Monitoraggio delle Attività**: Tieni traccia degli accessi e delle operazioni sui dati crittografati per rilevare eventuali accessi non autorizzati.
- **Audit di Sicurezza**: Esegui audit regolari per garantire che le misure di crittografia siano efficaci e conformi alle normative.

### 6. **Formazione del Personale**

- **Sensibilizzazione**: Forma il personale sulle pratiche di sicurezza e sull'importanza della crittografia per proteggere i dati.

Implementare la crittografia dei dati a riposo richiede attenzione e pianificazione, ma è essenziale per garantire la sicurezza delle informazioni.

---

La **crittografia a livello di directory** su Ubuntu è un ottimo modo per proteggere i tuoi dati sensibili.
Puoi utilizzare **eCryptfs**, un sistema di file crittografato che è integrato in molte distribuzioni di Linux, incluso Ubuntu. Ecco come puoi procedere:

### Passaggi per crittografare una directory con eCryptfs

1. **Installazione di eCryptfs**:
   - Assicurati che eCryptfs sia installato. Puoi farlo aprendo il terminale e digitando

     ```bash
     sudo apt-get install ecryptfs-utils
     ```

2. **Creazione di una directory crittografata**:
   - Crea una nuova directory che desideri crittografare. Ad esempio:
  
     ```bash
     mkdir ~/Private
     ```

3. **Crittografia della directory**:
   - Per crittografare la directory, utilizza il comando:
  
     ```bash
     sudo mount -t ecryptfs ~/Private ~/Private
     ```

   - Durante questo processo, ti verrà chiesto di fornire alcune informazioni, come il tipo di crittografia e la password.

4. **Accesso alla directory crittografata**:
   - Una volta montata, puoi accedere alla directory come faresti normalmente. Tutti i file che inserisci in questa directory saranno crittografati.

5. **Smontare la directory**:
   - Quando hai finito di lavorare con i file, è importante smontare la directory per garantire la sicurezza. Puoi farlo con:

     ```bash
     sudo umount ~/Private
     ```

### Considerazioni Importanti

- **Backup delle chiavi**: Assicurati di avere un backup delle chiavi di crittografia, poiché perderle potrebbe rendere inaccessibili i tuoi dati.
- **Performance**: La crittografia può influire sulle prestazioni, quindi valuta se è necessaria per i tuoi dati specifici.

---

La crittografia è fondamentale per garantire la sicurezza dei dati e ci sono diversi tipi, ognuno con le proprie caratteristiche. Ecco una panoramica dei principali **tipi di crittografia**:

### 1. Crittografia Simmetrica

- **Definizione**: Utilizza la stessa chiave sia per la cifratura che per la decifratura.
- **Caratteristiche**:
  - **Velocità**: Generalmente più veloce rispetto alla crittografia asimmetrica.
  - **Sicurezza**: La sicurezza dipende dalla segretezza della chiave; se la chiave viene compromessa, i dati possono essere facilmente decifrati.
  - **Esempi di algoritmi**: AES (Advanced Encryption Standard), DES (Data Encryption Standard).

### 2. Crittografia Asimmetrica

- **Definizione**: Utilizza una coppia di chiavi: una chiave pubblica per la cifratura e una chiave privata per la decifratura.
- **Caratteristiche**:
  - **Sicurezza**: Maggiore sicurezza poiché la chiave privata non viene mai condivisa.
  - **Utilizzo**: Spesso utilizzata per la trasmissione sicura di dati e per la firma digitale.
  - **Esempi di algoritmi**: RSA (Rivest-Shamir-Adleman), ECC (Elliptic Curve Cryptography).

### 3. Crittografia Quantistica

- **Definizione**: Basata sui principi della meccanica quantistica, offre un nuovo approccio alla sicurezza dei dati.
- **Caratteristiche**:
  - **Sicurezza**: Teoricamente inviolabile, poiché qualsiasi tentativo di intercettazione altera i dati.
  - **Applicazioni**: Ancora in fase di sviluppo, ma promettente per comunicazioni ultra-sicure.

### 4. Crittografia a Chiave Pubblica

- **Definizione**: Un tipo di crittografia asimmetrica in cui la chiave pubblica è utilizzata per cifrare i dati e la chiave privata per decifrarli.
- **Caratteristiche**:
  - **Facilità di distribuzione**: La chiave pubblica può essere condivisa liberamente.
  - **Utilizzo**: Fondamentale per la sicurezza delle comunicazioni su Internet, come nel protocollo HTTPS.

Quando si visita un sito web sicuro, il browser utilizza la chiave pubblica del sito web per cifrare i dati che vengono inviati. Il sito web utilizza quindi la sua chiave privata per decifrare i dati. Questo processo garantisce che i dati siano protetti da occhi indiscreti durante la trasmissione.

La crittografia a chiave pubblica è un elemento essenziale per la sicurezza di Internet. Senza di essa, le comunicazioni online sarebbero vulnerabili agli attacchi e le informazioni personali sarebbero a rischio.

### Considerazione Finale

- **Scelta del tipo**: La scelta del tipo di crittografia dipende dalle esigenze specifiche di sicurezza, velocità e facilità d'uso.
- **Implementazione**: È importante implementare correttamente la crittografia per garantire la massima sicurezza.

## La crittografia a chiave pubblica

è un argomento affascinante, e per capirla meglio, possiamo immaginare un esempio concreto:

**Immagina di voler inviare un messaggio segreto al tuo amico tramite posta.**

  **Crittografia a chiave pubblica:**  tu hai una **cassetta di sicurezza con due chiavi**: una **chiave pubblica** che puoi distribuire liberamente a chiunque e una **chiave privata** che tieni segreta.
  **Invio del messaggio:** il tuo amico prende la tua **chiave pubblica** e la usa per **chiudere la cassetta di sicurezza** con il tuo messaggio segreto all'interno. Solo tu, con la tua **chiave privata**, puoi aprire la cassetta e leggere il messaggio.
  **Sicurezza:**  se qualcuno intercetta la cassetta di sicurezza durante il trasporto, non potrà aprirla senza la tua chiave privata.

**Questo è il principio base della crittografia a chiave pubblica!** La chiave pubblica può essere distribuita liberamente, ma solo la chiave privata può decifrare i dati.

## Ma come funziona la crittografia a chiave pubblica nel protocollo HTTPS?

  **HTTPS:** il protocollo HTTPS utilizza la crittografia a chiave pubblica per garantire che le comunicazioni tra il browser e il sito web siano sicure.
  **Certificato SSL:** il sito web ha un certificato SSL che contiene la sua chiave pubblica. Quando si visita un sito web sicuro, il browser verifica il certificato SSL e utilizza la chiave pubblica per cifrare i dati che vengono inviati al sito web.
  **Sicurezza:** questo processo garantisce che i dati siano protetti da occhi indiscreti durante la trasmissione, anche se qualcuno intercetta la comunicazione.

**La crittografia a chiave pubblica è quindi un elemento essenziale per la sicurezza online, proteggendo le nostre informazioni personali e le nostre transazioni online.**

Il server invia al browser informazioni criptate, non solo per proteggere la tua privacy, ma anche per evitare che qualcuno modifichi i dati durante il percorso.  

Ecco come funziona:

1. **Chiave simmetrica:** Il server e il browser concordano una chiave segreta (chiave simmetrica) da usare per la crittografia dei dati. Questo processo è noto come **handshake TLS**.
2. **Crittografia dei dati:** Il server utilizza la chiave simmetrica per criptare i dati che deve inviare al browser.
3. **Invio dei dati:** Il server invia i dati criptati al browser.
4. **Decrittazione dei dati:** Il browser utilizza la stessa chiave simmetrica per decifrare i dati ricevuti dal server.

**La chiave simmetrica è la chiave di accesso alla cassetta di sicurezza, e solo il server e il browser la conoscono.** Questo garantisce che solo il browser possa leggere i dati inviati dal server.

**Inoltre, il server firma digitalmente i dati con la sua chiave privata. Il browser può quindi verificare la firma con la chiave pubblica del server per assicurarsi che i dati non siano stati modificati durante il percorso.**

Questo è un esempio di come la crittografia a chiave pubblica e la crittografia simmetrica lavorano insieme per garantire la sicurezza delle comunicazioni online.

---

## L'handshake TLS

è un processo fondamentale per la sicurezza delle comunicazioni online. Ecco un'analogia per aiutarti a capirlo:

Immagina di voler inviare un messaggio segreto a un amico.  Tu e il tuo amico avete bisogno di un modo per concordare una chiave segreta per criptare il messaggio. L'handshake TLS è come un rituale che voi e il vostro amico eseguite per stabilire questa chiave segreta.

## I passaggi principali dell'handshake TLS:**

1. **Inizio della conversazione:** Il browser invia una richiesta al server, indicando che desidera una connessione sicura.
2. **Presentazione del server:** Il server risponde con il suo certificato SSL, che contiene la sua chiave pubblica.
3. **Verifica del certificato:** Il browser verifica il certificato SSL per assicurarsi che sia valido e che corrisponda al sito web che stai visitando.
4. **Generazione della chiave simmetrica:** Il browser genera una chiave simmetrica casuale da utilizzare per criptare i dati.
5. **Crittografia della chiave simmetrica:** Il browser cifra la chiave simmetrica con la chiave pubblica del server.
6. **Invio della chiave simmetrica:** Il browser invia la chiave simmetrica criptata al server.
7. **Decrittazione della chiave simmetrica:** Il server utilizza la sua chiave privata per decifrare la chiave simmetrica inviata dal browser.
8. **Inizio della comunicazione sicura:** Il server e il browser ora condividono la stessa chiave simmetrica e possono iniziare a scambiare dati criptati.

**Questo processo garantisce che solo il server e il browser possano leggere i dati criptati, rendendo la comunicazione sicura e protetta da occhi indiscreti.**

---

### La verifica del certificato SSL

è un passaggio fondamentale per garantire la sicurezza delle comunicazioni online.

Immagina di voler acquistare un prodotto online e di ricevere un pacco con un sigillo di sicurezza.  Questo sigillo ti assicura che il pacco non è stato manomesso durante il trasporto.  Allo stesso modo, il certificato SSL è come un sigillo di sicurezza per le comunicazioni online.

Ecco come funziona la verifica del certificato SSL:

1. **Autorità di certificazione (CA):** Un'autorità di certificazione (CA) è un'organizzazione di fiducia che emette e gestisce i certificati SSL.
2. **Verifica dell'identità:** Quando un sito web richiede un certificato SSL, la CA verifica l'identità del sito web.
3. **Emissione del certificato:** Se l'identità del sito web è verificata, la CA emette un certificato SSL che contiene la chiave pubblica del sito web.
4. **Verifica del certificato:** Quando il browser si connette al sito web, verifica il certificato SSL per assicurarsi che sia valido e che corrisponda al sito web che stai visitando.
5. **Controllo della catena di certificazione:** Il browser controlla la catena di certificazione, che è una serie di certificati che collegano il certificato SSL del sito web alla CA di fiducia.
6. **Verifica della data di scadenza:** Il browser verifica che il certificato SSL non sia scaduto.

Se il certificato SSL è valido, il browser può fidarsi del sito web e iniziare a scambiare dati criptati.

**Se il certificato SSL non è valido, il browser mostrerà un avviso di sicurezza e ti impedirà di accedere al sito web.**

---

### La gestione dei certificati SSL

è un aspetto cruciale per garantire la sicurezza delle comunicazioni online. Ecco una panoramica su come vengono gestiti i certificati SSL durante il loro ciclo di vita:

1. **Creazione:** I certificati SSL vengono generati, di solito, da un'autorità di certificazione (CA) dopo che l'identità del richiedente è stata verificata.

2. **Distribuzione:** Una volta creato, il certificato deve essere installato sul server web. Questo processo può variare a seconda del server e della piattaforma utilizzata.

3. **Monitoraggio:** È fondamentale monitorare i certificati SSL per assicurarsi che siano validi e non siano scaduti. Alcuni strumenti possono aiutare a tenere traccia delle date di scadenza e delle configurazioni.

4. **Rinnovo:** Prima della scadenza, i certificati devono essere rinnovati. Questo processo può richiedere la ri-verifica dell'identità.

5. **Revoca:** Se un certificato non è più sicuro (ad esempio, se la chiave privata è stata compromessa), deve essere revocato. Le autorità di certificazione mantengono un elenco di certificati revocati, noto come CRL (Certificate Revocation List).

6. **Gestione centralizzata:** Molte organizzazioni utilizzano piattaforme di gestione dei certificati per semplificare il monitoraggio e la gestione dei certificati SSL, come DigiCert® CertCentral.

Questi passaggi assicurano che i certificati SSL siano sempre aggiornati e sicuri, proteggendo così le comunicazioni online.

---

## Modello OSI

Il **modello OSI (Open Systems Interconnection)** è uno standard teorico che suddivide la comunicazione di rete in **7 livelli**, ognuno con un compito specifico. Aiuta a capire come i dati viaggiano in una rete e come i dispositivi comunicano tra loro.  

---

## **📜 I 7 Livelli del Modello OSI**

### **1️⃣ Livello Fisico (Physical)**

🔹 **Cosa fa?** Trasmette i bit (0 e 1) attraverso mezzi fisici come cavi di rame, fibra ottica o segnali radio.  
🔹 **Dispositivi coinvolti:** Cavi Ethernet, Wi-Fi, Bluetooth, hub, ripetitori.  
🔹 **Esempio:** Il segnale elettrico o ottico che viaggia lungo un cavo Ethernet.  

---

### **2️⃣ Livello Data Link (Collegamento Dati)**

🔹 **Cosa fa?** Organizza i bit in **frame** e gestisce la trasmissione tra due dispositivi collegati direttamente.  
🔹 **Dispositivi coinvolti:** Switch, schede di rete (NIC).  
🔹 **Protocolli usati:** Ethernet, Wi-Fi (802.11), MAC Address.  
🔹 **Esempio:** Uno switch usa gli indirizzi MAC per inviare dati al dispositivo corretto in una LAN.  

---

### **3️⃣ Livello Rete (Network)**

🔹 **Cosa fa?** Gestisce l’instradamento dei pacchetti tra reti diverse, assegnando indirizzi IP ai dispositivi.  
🔹 **Dispositivi coinvolti:** Router.  
🔹 **Protocolli usati:** IP (IPv4, IPv6), ICMP (ping), ARP.  
🔹 **Esempio:** Un router usa l’indirizzo IP per inviare un pacchetto su Internet.  

---

### **4️⃣ Livello Trasporto (Transport)**

🔹 **Cosa fa?** Garantisce la consegna corretta e ordinata dei dati tra due dispositivi. Può essere **affidabile** (TCP) o **veloce ma non garantito** (UDP).  
🔹 **Protocolli usati:** TCP, UDP.  
🔹 **Esempio:** Un sito web usa **TCP** per garantire che una pagina venga caricata senza errori, mentre un video in streaming può usare **UDP** per ridurre la latenza.  

---

### **5️⃣ Livello Sessione (Session)**

🔹 **Cosa fa?** Gestisce l’inizio, la durata e la chiusura delle sessioni di comunicazione tra due dispositivi.  
🔹 **Protocolli usati:** NetBIOS, RPC, PPTP.  
🔹 **Esempio:** Una sessione SSH aperta per amministrare un server da remoto.  

---

### **6️⃣ Livello Presentazione (Presentation)**

🔹 **Cosa fa?** Traduce, cifra e comprime i dati per renderli comprensibili tra sistemi diversi.  
🔹 **Protocolli usati:** SSL/TLS (cifratura), JPEG, MP3, ASCII.  
🔹 **Esempio:** Un file ricevuto in formato **JPEG** viene convertito in un’immagine visualizzabile dal browser.  

---

### **7️⃣ Livello Applicazione (Application)**

🔹 **Cosa fa?** Fornisce servizi agli utenti e alle applicazioni, come email, browser web, FTP.  
🔹 **Protocolli usati:** HTTP/HTTPS, FTP, SMTP, POP3, IMAP, DNS.  
🔹 **Esempio:** Quando navighi su un sito web con **HTTP**, stai usando il livello applicazione.  

---

## **🔗 Riassunto veloce**

| **#** | **Livello OSI** | **Funzione** | **Esempio** |
|------|----------------|-------------|-------------|
| **7** | Applicazione | Interfaccia utente | HTTP, FTP, DNS |
| **6** | Presentazione | Cifratura, compressione | SSL/TLS, JPEG |
| **5** | Sessione | Gestione sessioni | SSH, NetBIOS |
| **4** | Trasporto | Affidabilità della comunicazione | TCP, UDP |
| **3** | Rete | Instradamento pacchetti IP | IP, ICMP |
| **2** | Collegamento Dati | Indirizzi MAC, frame | Ethernet, Wi-Fi |
| **1** | Fisico | Trasmissione bit su cavi o wireless | Cavi, segnali radio |

---

## **🔍 Confronto OSI vs TCP/IP**

Il modello **OSI** è teorico, mentre il modello **TCP/IP** è più pratico e usato realmente su Internet.  
TCP/IP ha **4 livelli**, semplificando OSI così:  

| **Modello OSI** | **Modello TCP/IP** |
|----------------|------------------|
| Applicazione, Presentazione, Sessione | **Applicazione** |
| Trasporto | **Trasporto** |
| Rete | **Internet** |
| Collegamento Dati, Fisico | **Accesso alla rete** |

---

## **📌 Perché è utile il modello OSI?**

✅ Aiuta a comprendere come funzionano le reti.  
✅ Standardizza la comunicazione tra dispositivi di diversi produttori.  
✅ Facilita la risoluzione dei problemi di rete (es. sapere se il problema è fisico, IP, o software).  

---

## Data center

Un **data center** è una struttura fisica che ospita un grande numero di **server**, **dispositivi di rete**, **sistemi di storage** e altre infrastrutture necessarie per gestire, elaborare e archiviare grandi quantità di dati. È il cuore delle operazioni IT di aziende, governi e provider di servizi cloud.  

---

## **🔍 Caratteristiche principali di un Data Center**

### **1️⃣ Struttura e Architettura**

Un data center è progettato per garantire **sicurezza, affidabilità e scalabilità**. Tipicamente include:

- **Server rack**: Contengono server fisici che eseguono applicazioni e gestiscono dati.
- **Storage (SAN/NAS)**: Sistemi di archiviazione per conservare enormi quantità di dati.  
- **Switch, router e firewall**: Dispositivi di rete che garantiscono la connettività e la sicurezza.  

### **2️⃣ Sicurezza e Affidabilità**

Per garantire che i dati siano sempre disponibili e protetti, un data center implementa:

- **Alimentazione ridondante**: Sistemi UPS e generatori di emergenza.  
- **Raffreddamento avanzato**: HVAC e sistemi di climatizzazione per evitare surriscaldamenti.  
- **Sicurezza fisica**: Controllo accessi, telecamere, sorveglianza h24.  
- **Disaster Recovery**: Sistemi di backup e replica in data center remoti.  

### **3️⃣ Tipologie di Data Center**

- **Enterprise Data Center** 🏢 → Proprietari di aziende (es. data center di Google, Amazon).  
- **Cloud Data Center** ☁️ → Strutture che offrono servizi cloud (AWS, Azure, Google Cloud).  
- **Colocation Data Center** 🏬 → Strutture affittate da più aziende per ospitare i loro server.  
- **Edge Data Center** 🌍 → Piccoli data center distribuiti vicino agli utenti per ridurre la latenza (usati per il 5G, IoT, ecc.).  

---

## **🔗 Data Center e Cloud Computing**

Oggi molti servizi IT sono ospitati in **data center cloud**, dove le aziende possono affittare risorse invece di possedere hardware fisico. Ad esempio:

- **AWS, Microsoft Azure, Google Cloud** forniscono servizi basati su enormi data center sparsi nel mondo.
- **Vantaggi del cloud**: Scalabilità, riduzione dei costi di manutenzione, alta disponibilità.  

---

## **📌 Perché sono importanti i Data Center?**

✅ Supportano servizi essenziali come siti web, email, social network, streaming e applicazioni aziendali.  
✅ Garantiscono **sicurezza, ridondanza e alta disponibilità** dei dati.  
✅ Consentono lo sviluppo di **AI, Big Data, IoT** e altre tecnologie avanzate.  

---

## Router o switch

La differenza principale tra **Router** e **Switch di rete** sta nelle loro funzioni e nei livelli del modello OSI in cui operano. Vediamole nel dettaglio:

### **1. Router**

🔹 **Funzione principale:** Instrada i pacchetti tra reti diverse (interconnette reti diverse, come la tua rete domestica e Internet).  
🔹 **Livello OSI:** Opera a **Livello 3 (Rete)**.  
🔹 **Caratteristiche:**

- Ha una **tabella di routing** per determinare il miglior percorso per i dati.
- Usa indirizzi **IP** per decidere dove inviare i pacchetti.  
- Può eseguire **NAT (Network Address Translation)** per condividere un unico IP pubblico tra più dispositivi.  
- Può avere **funzionalità firewall** per la sicurezza della rete.  
- Tipico in reti WAN o tra reti LAN diverse.  
  
**Esempio pratico:** Il modem/router di casa tua collega la tua rete locale a Internet.  

---

### **2. Switch di rete**

🔹 **Funzione principale:** Smista i pacchetti all'interno di una stessa rete locale (LAN).  
🔹 **Livello OSI:** Opera a **Livello 2 (Data Link)**, anche se gli switch più avanzati possono operare a **Livello 3**.  
🔹 **Caratteristiche:**  

- Utilizza gli **indirizzi MAC** per inoltrare i dati ai dispositivi corretti.  
- A differenza di un hub, uno switch **non invia i pacchetti a tutti**, ma solo al destinatario corretto, ottimizzando la rete.  
- Viene usato per collegare PC, stampanti, server e altri dispositivi all’interno di una rete aziendale o domestica.  
- **Gli switch Layer 3** possono anche instradare pacchetti tra VLAN.  

**Esempio pratico:** In un ufficio, un switch collega tutti i computer alla stessa rete locale, permettendo loro di comunicare tra loro senza passare attraverso un router.  

---

### **Differenze chiave in breve**

| **Caratteristica** | **Router** | **Switch** |
|-------------------|------------|------------|
| **Livello OSI** | 3 (Rete) | 2 (Data Link) o 3 per switch avanzati |
| **Utilizza** | Indirizzi IP | Indirizzi MAC |
| **Funzione principale** | Collega diverse reti tra loro | Smista dati all'interno di una rete |
| **Ambiente tipico** | WAN e connessione a Internet | LAN e interconnessione di dispositivi |

🔹 **In pratica:**

- Se vuoi **collegare dispositivi nella stessa rete**, serve uno **Switch**.  
- Se vuoi **collegare reti diverse o accedere a Internet**, serve un **Router**.

---

## Indirizzo IP

Un **indirizzo IP (Internet Protocol Address)** è un numero univoco assegnato a ogni dispositivo connesso a una rete per identificarsi e comunicare con altri dispositivi. Funziona come un **indirizzo di casa** per i dispositivi su Internet o su una rete locale.  

---

## **📍 Tipologie di Indirizzi IP**

### **1️⃣ IPv4 (Internet Protocol version 4)**

- Formato: **32 bit**, diviso in **4 gruppi di numeri** separati da punti (es. `192.168.1.1`).  
- Ogni numero va da **0 a 255** (poiché 1 byte = 8 bit, e 2⁸ = 256 valori possibili).  
- Può rappresentare **circa 4,3 miliardi** di indirizzi (2³² = 4.294.967.296).  
- **Esempi di IPv4:**  
  - **Pubblico**: `8.8.8.8` (Google DNS)  
  - **Privato**: `192.168.1.1` (usato nei router domestici)  

### **2️⃣ IPv6 (Internet Protocol version 6)**

- Formato: **128 bit**, scritto in **otto gruppi di quattro cifre esadecimali** separati da due punti (es. `2001:db8::ff00:42:8329`).  
- Supporta **un numero enorme di indirizzi** (2¹²⁸ = 340 undecilioni).  
- Risolve il problema dell’esaurimento degli indirizzi IPv4.  
- **Esempio di IPv6:** `2606:4700:4700::1111` (Cloudflare DNS).  

---

## **📍 Tipologie di Indirizzi IP (Pubblici e Privati)**

| **Tipo**  | **Descrizione** | **Esempio** |
|-----------|----------------|-------------|
| **Pubblico** | Accessibile da Internet, assegnato dal provider (ISP). | `8.8.8.8` |
| **Privato** | Usato in reti interne (LAN), non accessibile da Internet. | `192.168.1.1`, `10.0.0.1` |

📌 **Indirizzi Privati più comuni:**

- **Classe A**: `10.0.0.0 - 10.255.255.255`  
- **Classe B**: `172.16.0.0 - 172.31.255.255`  
- **Classe C**: `192.168.0.0 - 192.168.255.255`  

I dispositivi con indirizzi privati comunicano tra loro attraverso un **router**, che usa **NAT (Network Address Translation)** per permettere la connessione a Internet.  

---

## **📍 Statico vs Dinamico**

🔹 **Indirizzo IP Statico**

- Non cambia mai, assegnato manualmente.
- Usato per server, siti web, VPN.  

🔹 **Indirizzo IP Dinamico**

- Cambia ad ogni connessione o dopo un certo periodo.  
- Assegnato automaticamente dal provider con **DHCP**.  
- Più economico e sicuro per utenti normali.  

---

## **📍 Indirizzi IP e Classi**

| **Classe** | **Range** | **Numero massimo di host** |
|-----------|----------|--------------------------|
| **A** | 1.0.0.0 - 126.255.255.255 | 16 milioni |
| **B** | 128.0.0.0 - 191.255.255.255 | 65 mila |
| **C** | 192.0.0.0 - 223.255.255.255 | 254 |
| **D** | 224.0.0.0 - 239.255.255.255 | Multicast |
| **E** | 240.0.0.0 - 255.255.255.255 | Riservato |

---

## **📍 Come Funziona un Indirizzo IP su Internet?**

1. **Un dispositivo si connette a Internet** → Riceve un indirizzo IP pubblico dal provider (ISP).  
2. **Il router assegna indirizzi privati ai dispositivi** nella rete locale (LAN).  
3. **Quando navighi su un sito web**, il tuo dispositivo invia una richiesta al server del sito.  
4. **I dati vengono inviati indietro all’indirizzo IP del dispositivo** che li ha richiesti.  

🔎 **Esempio pratico**

- Quando digiti `www.google.com`, il tuo dispositivo usa il **DNS** per convertire il nome in un IP (es. `172.217.16.195`).  
- Il tuo PC invia la richiesta al server di Google, che risponde con la pagina web.  

---

## **📍 Domande Comuni**

🔹 **Come scoprire il mio IP pubblico?**

- Visita [whatismyipaddress.com](https://www.whatismyipaddress.com) o cerca "mio IP" su Google.  

🔹 **Come scoprire il mio IP privato?**

- **Windows**: Apri il terminale (**CMD**) e digita `ipconfig`.  
- **Mac/Linux**: Usa `ifconfig` o `ip a`.  

🔹 **Un IP pubblico può essere condiviso?**

- Sì, gli ISP spesso usano **CGNAT (Carrier-Grade NAT)** per far condividere un singolo IP pubblico tra più utenti.  

---

### **💡 Riassunto veloce**

✔️ **IPv4** (32 bit) e **IPv6** (128 bit) sono i due principali tipi di IP.  
✔️ Un **IP pubblico** è visibile su Internet, mentre un **IP privato** è usato nelle reti locali.  
✔️ Il **router** usa **NAT** per collegare dispositivi con IP privati a Internet.  
✔️ Gli IP possono essere **statici** (fissi) o **dinamici** (cambiano nel tempo).  
✔️ Il **DNS** converte i nomi di dominio in indirizzi IP per facilitare la navigazione.  

---

## Le Porte Ethernet e le Porte SFP

Le **porte Ethernet** e le **porte SFP** sono due tipi di interfacce utilizzate nei dispositivi di rete (come switch, router e server) per connettere dispositivi e trasmettere dati. Vediamo nel dettaglio le differenze.

---

### **🔗 Porte Ethernet**

Le **porte Ethernet** sono interfacce standard usate per collegare dispositivi tramite **cavi di rete**.  

🔹 **Caratteristiche principali:**

- Supportano velocità di **10 Mbps, 100 Mbps, 1 Gbps (Gigabit Ethernet)** o superiori (es. 2.5G, 10G, 40G, ecc.).  
- Utilizzano connettori **RJ45** e cavi **UTP/STP (categoria 5e, 6, 6a, 7, 8)**.  
- Vengono usate in **LAN** (Local Area Network) per collegare PC, switch, router, server e altri dispositivi di rete.  

🔹 **Esempio pratico:**

- Un router domestico ha **4 porte Ethernet Gigabit** per collegare PC, stampanti o console di gioco con un cavo di rete.  

---

### **🔦 Porte SFP (Small Form-factor Pluggable)**

Le **porte SFP** sono slot per moduli ottici che permettono di usare **fibra ottica o cavi in rame** per connessioni ad alta velocità e lunga distanza.  

🔹 **Caratteristiche principali:**

- Possono supportare velocità da **1 Gbps fino a 100 Gbps**, a seconda del modulo inserito.  
- Utilizzano moduli intercambiabili chiamati **SFP (1G), SFP+ (10G), QSFP (40G), QSFP+ (100G)**.  
- Permettono connessioni **in fibra ottica** per coprire distanze più lunghe rispetto alle porte Ethernet.  
- Possono anche supportare connessioni in rame tramite **moduli SFP RJ45**.  

🔹 **Quando si usano le porte SFP?**

- In **reti aziendali e data center** per collegare switch e router a lunga distanza (es. tra piani di un edificio).  
- Quando serve **un’alta velocità** o **connessioni su fibra ottica** per ridurre le interferenze elettromagnetiche.  

🔹 **Esempio pratico:**

- Un **switch di rete aziendale** può avere **8 porte Ethernet per i PC** e **2 porte SFP per il collegamento a un altro switch via fibra ottica**.  

---

## **📍 Differenze tra Porte Ethernet e Porte SFP**

| **Caratteristica** | **Porte Ethernet** | **Porte SFP** |
|--------------------|-------------------|--------------|
| **Tipo di connessione** | Cavo Ethernet (RJ45) | Fibra ottica o rame (moduli SFP) |
| **Velocità supportate** | 10/100/1000 Mbps (fino a 10G su cavi Cat 6A/7/8) | 1G, 10G, 25G, 40G, 100G (a seconda del modulo) |
| **Distanza massima** | 100 metri con cavi Ethernet | Da pochi metri a **decine di km** con fibra ottica |
| **Utilizzo tipico** | LAN (uffici, case) | Connessioni a lunga distanza o alta velocità |
| **Modularità** | Fisso (solo cavi Ethernet) | Flessibile (si può cambiare il modulo SFP) |

---

### **📌 Riassunto veloce**

✔ **Porte Ethernet** → Usate per connessioni cablate standard con cavi di rete (RJ45).  
✔ **Porte SFP** → Slot per moduli ottici, permettono l’uso di **fibra ottica** o **rame** per connessioni a lunga distanza e alta velocità.  
✔ **Quando usare le porte SFP?** Se devi collegare switch su più piani o edifici con fibra ottica.  

Se uno switch o un router ha **8 porte Gigabit Ethernet (10/100/1000 Mbps)**, puoi connettere fino a **8 dispositivi locali** direttamente con cavi Ethernet.  

### **🔹 Esempio di dispositivi che puoi connettere:**

- **PC o laptop**  
- **Stampanti di rete**  
- **Server locali**  
- **Access Point Wi-Fi**  
- **Telecamere di sicurezza IP**  
- **Console di gioco**  
- **TV Smart**  

---

## 8 porte

### **📌 Cosa succede se servono più porte?**

Se hai bisogno di più di **8 connessioni cablate**, puoi:  
✔ **Aggiungere uno switch di rete** per espandere il numero di porte disponibili.  
✔ **Usare il Wi-Fi** per connettere alcuni dispositivi senza occupare porte Ethernet.  

📌 **Importante:** Se una porta è usata per connettere lo switch a un altro switch/router, allora **una porta sarà occupata** e rimarranno disponibili solo **7 connessioni** per i dispositivi locali.  

Se hai bisogno di una soluzione per una rete più grand, ecco alcune soluzioni per espandere la rete locale:  

---

### **🔹 1️⃣ Aggiungere uno Switch di Rete**

Uno **switch Ethernet** è il modo più semplice per aumentare il numero di dispositivi collegabili.

- **Esempio**: Se colleghi uno **switch a 16 porte** a una delle porte Ethernet del router, ottieni **15 porte aggiuntive** disponibili.
- **Tipi di switch consigliati**:  
  - **Switch non gestito** (Plug & Play, nessuna configurazione)  
  - **Switch gestito** (Più funzioni avanzate, come VLAN e QoS)  

✔ **Soluzione economica e scalabile**.  

---

### **🔹 2️⃣ Usare il Wi-Fi per alcuni dispositivi**

Se alcuni dispositivi non richiedono una connessione cablata, puoi collegarli alla rete Wi-Fi per ridurre l'uso delle porte Ethernet.  

✔ **Ideale per laptop, smartphone, tablet, stampanti wireless, smart TV e dispositivi IoT**.  

---

### **🔹 3️⃣ Utilizzare uno Switch PoE (Power over Ethernet)**

Se hai **telecamere IP, access point Wi-Fi o telefoni VoIP**, puoi usare uno **switch PoE**.

- Permette di **alimentare i dispositivi tramite lo stesso cavo Ethernet**, evitando l’uso di alimentatori separati.
- Esempio: **Uno switch PoE a 24 porte** può connettere e alimentare **telecamere di sicurezza e access point**.  

✔ **Perfetto per uffici e aziende**.  

---

### **🔹 4️⃣ Creare una Rete in Fibra Ottica con Porte SFP**

Se devi collegare dispositivi a **lunghe distanze** (es. tra piani di un edificio o tra edifici), puoi usare uno switch con **porte SFP** e moduli in fibra ottica.

- Ideale per velocità elevate e riduzione delle interferenze.
- Permette connessioni fino a **10 km o più** con fibra ottica.  

✔ **Ottimo per aziende o reti complesse**.  

---

### **📌 Quale soluzione è la migliore?**

- **Casa/Ufficio piccolo?** → Aggiungi uno **switch non gestito** (es. a 16 o 24 porte).  
- **Ufficio con dispositivi PoE?** → Usa uno **switch PoE**.  
- **Collegamento tra più edifici o lunghe distanze?** → Usa **porte SFP con fibra ottica**.  

---

## PoE

Il **Power over Ethernet (PoE)** è una tecnologia che consente di **trasmettere energia elettrica** insieme ai dati attraverso un **cavo Ethernet (RJ45)**. Questo permette di **alimentare dispositivi di rete** senza bisogno di un alimentatore separato.  

✅ **Vantaggi del PoE:**  
✔ Alimentazione e dati su un solo cavo → Meno cavi, installazione più pulita.  
✔ Perfetto per dispositivi lontani da prese di corrente.  
✔ Maggiore affidabilità rispetto agli alimentatori standard.  

---

### **🔌 PoE è per Router o Switch?**

Il **PoE è una funzione degli switch di rete**, non dei router.

- Gli **switch PoE** forniscono energia ai dispositivi collegati alle loro porte Ethernet.  
- I **router** di solito non supportano PoE, ma possono essere connessi a switch PoE.  

📌 **Esempio pratico:**

- Uno **switch PoE** può alimentare **telecamere IP, telefoni VoIP e access point Wi-Fi**, mentre il **router** si occupa della connessione a Internet.  

---

### **📍 Tipologie di PoE**

| **Standard PoE** | **Potenza per porta** | **Dispositivi supportati** |
|-----------------|-----------------|----------------------|
| **PoE (802.3af)** | Fino a **15,4W** | Telefoni VoIP, piccoli AP Wi-Fi |
| **PoE+ (802.3at)** | Fino a **30W** | Telecamere IP, AP Wi-Fi avanzati |
| **PoE++ (802.3bt)** | Fino a **60-100W** | Switch, monitor, dispositivi industriali |

---

### **📌 Quando serve uno switch PoE?**

✔ Se devi installare **telecamere IP**, telefoni VoIP o **Access Point Wi-Fi** senza usare alimentatori esterni.  
✔ Se vuoi ridurre il numero di cavi e semplificare l'installazione.  
✔ Se hai dispositivi di rete **in luoghi difficili da raggiungere con prese di corrente**.  

---

## Porta WAN

La **porta WAN (Wide Area Network)** è una porta su un **router** o un **modem** che permette la connessione a una rete esterna, come **Internet** o una rete aziendale remota. Questa porta si collega al **fornitore di servizi Internet (ISP)** tramite una connessione cablata (come fibra ottica, cavo, DSL, o 4G/5G).

---

### **📍 Configurazione con Indirizzo IP Statico o Dinamico**

La porta WAN può essere configurata con un **indirizzo IP statico** o **dinamico** a seconda delle esigenze e delle configurazioni del provider di servizi.

#### **1️⃣ Indirizzo IP Statico**  

- Un **IP statico** significa che l'indirizzo IP assegnato dalla tua ISP è **fisso e non cambia** nel tempo.  
- Questo tipo di configurazione è usato principalmente da **aziende** o per **servizi che richiedono un indirizzo IP fisso** (es. server web, VPN).  
- **Vantaggio**: Consente una connessione stabile e facilmente accessibile da remoto (es. connessione a un server remoto).  
- **Come configurarlo**: Devi inserire l'IP, la subnet mask, il gateway e i DNS forniti dal tuo ISP nella sezione di configurazione WAN del router.

#### **2️⃣ Indirizzo IP Dinamico**  

- Con un **IP dinamico**, l'indirizzo IP cambia ogni volta che il router si riconnette alla rete, ed è assegnato dal server **DHCP** dell'ISP.  
- Questo tipo di configurazione è generalmente più comune per **utenti domestici** e **piccole aziende**.  
- **Vantaggio**: Non devi preoccuparti di configurazioni avanzate.  
- **Come configurarlo**: Basta selezionare "DHCP" come metodo di configurazione nella sezione WAN del router e il router riceverà automaticamente l'indirizzo IP.

---

### **📍 NAT (Network Address Translation)**

Il **NAT (Network Address Translation)** è una tecnica utilizzata nei **router** per mappare gli indirizzi IP interni (privati) a un indirizzo IP pubblico. Questo è necessario per consentire a più dispositivi **in una rete locale (LAN)** di condividere un singolo **IP pubblico** quando accedono a Internet.  

#### **Come funziona il NAT?**

- Ogni dispositivo nella rete locale (con indirizzo IP privato) può **"uscire" su Internet** utilizzando un **unico IP pubblico** assegnato alla porta WAN del router.  
- Il router gestisce le richieste, traducendo gli indirizzi IP privati in un IP pubblico e viceversa.  
- Esempio: un dispositivo con IP privato **192.168.1.2** invia una richiesta a Internet. Il router traduce l'indirizzo a **IP pubblico** (es. **80.100.50.25**) e invia la richiesta. Quando la risposta torna, il router fa il contrario, indirizzando il traffico di ritorno verso il dispositivo giusto nella rete locale.  

#### **NAT e Sicurezza:**

- Il NAT fornisce anche una **sicurezza aggiuntiva**, poiché i dispositivi con IP privati non sono direttamente visibili su Internet.
  
#### **Tipi di NAT:**

- **Static NAT**: Un indirizzo IP privato viene mappato a un singolo IP pubblico.  
- **Dynamic NAT**: Gli indirizzi IP privati vengono mappati a un gruppo di indirizzi IP pubblici, ma non uno specifico.  
- **PAT (Port Address Translation)**: Un tipo di NAT dinamico che mappa più indirizzi IP privati su un singolo indirizzo IP pubblico, usando porte uniche per distinguere i dispositivi. È la forma più comune di NAT.  

---

### **📍 Riassunto della Configurazione WAN con NAT**

1. **Indirizzo IP Statico o Dinamico**:  
   - **Statico** per indirizzi fissi e accessi remoti.  
   - **Dinamico** per configurazioni più semplici e comuni per utenti domestici.  

2. **NAT (Network Address Translation)**:  
   - Permette a più dispositivi con IP privati di utilizzare un solo IP pubblico per accedere a Internet.  
   - Offrendo una **sicurezza extra** nascondendo gli IP privati dalla rete esterna.  

---

### **💡 Esempio pratico di configurazione WAN con NAT**

1. **Configurazione WAN** (IP dinamico):
   - Impostare il router in modalità **DHCP** sulla porta WAN per ottenere un IP pubblico dinamico dal provider.  
2. **Abilitazione NAT**:  
   - Il router si occupa automaticamente di mappare gli indirizzi IP privati della rete locale su un singolo IP pubblico (se configurato in modalità NAT).  
3. **Collegamento alla rete**:  
   - Dispositivi in rete (PC, smartphone, etc.) possono comunicare con il mondo esterno tramite l'IP pubblico del router.

---

## PORTE LAN

### **📌 Cosa sono le **Porte LAN** e le **VLAN**?**

Le **porte LAN** e le **VLAN** sono concetti fondamentali nella gestione e organizzazione delle reti. Vediamo in dettaglio cosa sono e come vengono utilizzate.

---

### **🔹 Cosa sono le Porte LAN?**

Le **porte LAN (Local Area Network)** sono porte su un **router** o uno **switch** che vengono utilizzate per **collegare dispositivi** all'interno di una rete locale (LAN). Queste porte sono tipicamente **Ethernet (RJ45)** e permettono la connessione di dispositivi come **PC, stampanti, telecamere di sicurezza, server e altri**.

#### **Caratteristiche delle Porte LAN:**

- **Connettività cablata** tramite **cavi Ethernet (Cat 5e, Cat 6, ecc.)**.
- **Velocità**: Le porte LAN possono supportare velocità di **10/100/1000 Mbps** (Gigabit Ethernet) o superiori.
- Queste porte collegano **dispositivi alla rete interna (LAN)**, non direttamente a Internet (questo avviene tramite la **porta WAN**).
  
📌 **Esempio**: Se hai un **router domestico** con **4 porte LAN**, puoi connettere fino a 4 dispositivi cablati come PC, TV, o stampanti.

---

### **🔹 Cosa sono le VLAN (Virtual Local Area Network)?**

Una **VLAN (Virtual Local Area Network)** è una **rete logica** che separa i dispositivi di una **rete fisica** in **sotto-reti virtuali**. Le VLAN permettono di isolare il traffico di rete tra gruppi di dispositivi, anche se si trovano sulla stessa rete fisica. In altre parole, una VLAN crea **sottoreti virtuali all'interno di una rete fisica**, permettendo una gestione più efficiente e sicura del traffico.

#### **Caratteristiche delle VLAN:**

- **Separazione del traffico**: Anche se i dispositivi sono fisicamente connessi allo stesso switch o router, grazie alle VLAN possono **comunicare solo tra di loro**.  
- **Miglioramento della sicurezza**: Separando i dispositivi (ad esempio, separando la rete aziendale e la rete guest), riduce i rischi di accessi non autorizzati.
- **Efficienza**: Le VLAN consentono di **ottimizzare la gestione** del traffico e migliorare le prestazioni della rete.
- **Isolamento**: Le VLAN possono essere utilizzate per isolare, ad esempio, i server, le stampanti, i PC e le reti guest.

#### **Esempi di utilizzo delle VLAN:**

- **VLAN per dipartimenti aziendali**: Un'azienda può creare una VLAN separata per il reparto **IT**, una per il reparto **HR**, una per **guest** (ospiti), e così via.
- **VLAN per dispositivi di rete**: Si può creare una VLAN per le **stampanti di rete**, una per le **telecamere IP**, una per i **PC**, ecc.

---

### **📍 Come creare una VLAN?**

La creazione di una VLAN dipende dal tipo di dispositivo di rete che stai utilizzando (router, switch gestito, ecc.), ma i principi di base sono simili:

#### 1. **Configurazione di una VLAN su uno switch (gestito):**

Un **switch gestito** è necessario per creare VLAN. Gli switch non gestiti non supportano questa funzionalità.

- Accedi all'interfaccia di gestione dello switch (tramite **IP** o **interfaccia web**).
- **Crea la VLAN** (per esempio, VLAN 10 per il reparto IT, VLAN 20 per i guest).
- **Assegna le porte** alle VLAN desiderate. Ogni porta fisica dello switch può essere assegnata a una VLAN specifica.
- **Configura il router** per il **routing tra VLAN**, se necessario, in modo che le VLAN possano comunicare tra di loro.

#### 2. **Configurazione su un router:**

Se hai un **router che supporta le VLAN**, dovrai configurare **interfacce virtuali** per ciascuna VLAN.

- Configura il router in modo che possa gestire il **routing tra VLAN** (inter-VLAN routing), se vuoi che le VLAN possano comunicare tra di loro.
  
  📌 **Nota:** Se il router non supporta il routing tra VLAN, puoi utilizzare un dispositivo separato, come un **router Layer 3** o un **firewall**, per consentire la comunicazione tra le VLAN.

---

### **📍 Tipi di VLAN e Applicazioni**

| **Tipo di VLAN**          | **Descrizione**                                   | **Applicazione comune**                                        |
|---------------------------|---------------------------------------------------|-----------------------------------------------------------------|
| **VLAN di dati (Data VLAN)** | La VLAN più comune, usata per il traffico di dati generico. | Collega PC, server, stampanti nella stessa VLAN.               |
| **VLAN di gestione**         | Dedicata alla gestione dei dispositivi di rete (switch, router, access point, ecc.). | Configurazione remota di dispositivi di rete.                  |
| **VLAN di voce (Voice VLAN)** | Ottimizzata per il traffico delle chiamate VoIP, che richiede bassa latenza. | Rete dedicata per telefoni VoIP o sistemi di comunicazione.     |
| **VLAN di sicurezza**       | Separata per il traffico di dispositivi di sicurezza come telecamere, sensori, ecc. | Protegge e isola il traffico video e di sorveglianza.           |
| **VLAN guest**              | Creata per separare la rete guest (ospiti) dalla rete principale. | Fornire accesso a Internet ai visitatori senza compromettere la sicurezza della rete aziendale. |

---

### **📍 Riassunto delle Porte LAN e delle VLAN:**

1. **Porte LAN**: Sono utilizzate per collegare dispositivi alla rete **locale** (PC, server, stampanti, ecc.).  
2. **VLAN**: È una **rete logica separata** che può essere configurata su uno switch gestito per isolare il traffico tra diversi gruppi di dispositivi nella stessa rete fisica.  
3. **Vantaggi delle VLAN**:
   - **Sicurezza**: Isola il traffico di rete.
   - **Organizzazione**: Suddivide la rete in base a funzioni o dipartimenti.
   - **Efficienza**: Riduce la congestione e migliora le prestazioni.

---
