---
layout: cover
level: 1
title: NEXT.JS

---
<!-- markdownlint-disable MD033 -->

## Next.js

---
layout: cover
level: 4

---

🧑‍🎓 Studente 1 (con entusiasmo):

### "Ok Omarilli, vi ho sentito parlare tanto di **Next.js**, ma non ho idea di come installarlo e iniziare. Potete guidarci?"


🧠  - Omarillo 1 (con tono rassicurante):

### "Assolutamente! **Next.js** è un framework fantastico per React che ti permette di creare applicazioni complete con funzionalità come il rendering lato server e la generazione di pagine statiche. Pronti per il viaggio?"


---
layout: cover
level: 4

---

🧑‍🎓 Studente 2 (con tono impaziente):

### "Sì, ma da dove iniziamo? Voglio vedere qualcosa funzionare sul mio schermo!"


🧠  - Omarillo 2 (con tono pratico):

### "Prima di tutto, devi avere **Node.js** installato sul tuo sistema. Controlla se ce l’hai eseguendo questo comando nel terminale:"

```bash
node -v
```


---
layout: cover
level: 4

---

🧑‍🎓 Studente 3 (guardando il terminale):

### "Sì, ho Node installato! E ora?"


🧠  - Omarillo 3 (con tono chiaro):

### "Perfetto! Ora è il momento di creare il tuo progetto Next.js. Usa **npx** per creare un'app Next.js senza dover installare nulla globalmente. Digita questo comando nel terminale per iniziare il processo di creazione:"

```bash
npx create-next-app@latest
```


---
layout: cover
level: 4

---

🧑‍🎓 Studente 4 (digitando con curiosità):

### "Wow, così semplice? Cosa succede dopo?"


🧠  - Omarillo 4 (con tono esplicativo):

### "Dopo aver eseguito quel comando, ti verrà chiesto di dare un nome alla tua applicazione. Ad esempio, potresti chiamarla `next-app`. Una volta inserito il nome, Next.js configurerà tutto per te!"

---
layout: cover
level: 4

---

🧑‍🎓 Studente 5 (mentre il terminale lavora):

### "Ho visto che sta installando un sacco di cose. Cosa sta succedendo esattamente?"


🧠  - Omarillo 5 (con tono didattico):

### "Next.js sta creando una struttura di base per la tua app. Sta installando tutte le dipendenze necessarie, come **React**, **React DOM** e gli strumenti per gestire il routing, il rendering lato server e la generazione delle pagine statiche. Non devi fare nulla a mano, pensa a tutto lui."


---
layout: cover
level: 4

---

🧑‍🎓 Studente 6 (con tono felice):

### "Ok, ha finito! E adesso?"

🧠  - Omarillo 6 (con tono entusiasta):

### "Ora che hai l’app pronta, è il momento di farla partire! Vai nella cartella del progetto appena creato con il comando:"

```bash
cd next-app
```

"E poi, per avviare il server di sviluppo, esegui questo comando:"

```bash
npm run dev
```


---
layout: cover
level: 4

---

🧑‍🎓 Studente 7 (con lo schermo illuminato):

### "Wow! Sto vedendo 'Local: http://localhost:3000' sul terminale. Cosa faccio ora?"

🧠  - Omarillo 7 (con tono felice):

### "Apri il browser e vai su `http://localhost:3000`. Vedrai la pagina iniziale della tua nuova app Next.js! Congratulazioni, hai appena creato la tua prima app Next.js."


---
layout: cover
level: 4

---

🧑‍🎓 Studente 8 (con tono impressionato):

### "Questo è davvero incredibile! Ma la struttura della cartella… cosa c’è dentro? A cosa servono questi file?"


🧠  - Omarillo 8 (con tono esplicativo):

### "Buona domanda! Facciamo una panoramica rapida della struttura. Ecco i file e le cartelle principali che troverai nella tua app Next.js:

- **pages/**: Questa cartella è il cuore del routing di Next.js. Ogni file qui rappresenta una pagina dell’app. Ad esempio, `pages/index.js` è la tua homepage.
- **public/**: Qui puoi mettere immagini o altri file statici che vuoi servire direttamente.
- **styles/**: Questa è la cartella per i tuoi file CSS. Il file `globals.css` gestisce gli stili globali della tua app.

Tutto il routing è basato sui nomi dei file dentro `pages/`, quindi non devi configurare nulla manualmente!"

---
layout: cover
level: 4

---

🧑‍🎓 Studente 9 (con tono pratico):

### "Quindi, se volessi aggiungere una nuova pagina, basterebbe creare un nuovo file in `pages/`?"


🧠  - Omarillo 9 (con tono confermativo):

### "Esattamente! Ad esempio, se crei un file `about.js` dentro la cartella `pages/`, automaticamente avrai una pagina raggiungibile all’indirizzo `http://localhost:3000/about`."

---
layout: cover
level: 4

---

🧑‍🎓 Studente 10 (con tono curioso):

### "Ma e se volessi collegare quelle pagine? Come funziona la navigazione?"


🧠  - Omarillo 10 (con tono esplicativo):

### "Per la navigazione, Next.js ha un componente chiamato **Link**. Ti permette di collegare facilmente le pagine senza ricaricare tutto il sito, mantenendo il comportamento di una SPA (Single Page Application)."

Ecco un esempio di come usarlo:

```javascript
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Benvenuto nella Homepage</h1>
      <Link href="/about">Vai alla pagina About</Link>
    </div>
  );
}
```

Quando clicchi sul link, verrai indirizzato alla pagina `/about` senza un reload completo!"

---
layout: cover
level: 4

---

🧑‍🎓 Studente 11 (con tono pensieroso):

### "Ok, tutto questo è fantastico per lo sviluppo, ma cosa faccio quando la mia app è pronta per essere pubblicata?"

---
layout: cover
level: 4

---

🧠  - Omarillo 11 (con tono chiaro):

### "Grande domanda! Next.js rende tutto molto semplice anche qui. Quando vuoi **preparare l’app per la produzione**, tutto quello che devi fare è eseguire questo comando:"

```bash
npm run build
```

"Questo comando genera una build ottimizzata e pronta per essere distribuita su un server."

---
layout: cover
level: 4

---

🧑‍🎓 Studente 12 (con tono meravigliato):

### "Wow, sembra tutto molto efficiente. Ma devo configurare io il server?"

🧠  - Omarillo 12 (con tono rassicurante):

### "Non necessariamente! Puoi usare piattaforme come **Vercel**, che è sviluppata dallo stesso team di Next.js, per distribuire la tua app con un click. Vercel si integra perfettamente con Next.js e gestisce tutto per te: server, CDN, scalabilità. In pochi minuti puoi vedere la tua app live!"

---
layout: cover
level: 4

---

🧑‍🎓 Studente 3 (con tono entusiasta):

### "Questo Next.js è veramente potente! Offre un sacco di funzionalità integrate, come il routing e la possibilità di fare il rendering lato server. Grazie mille Omarilli per questa lezione!"

🧠  - Omarillo 1 (con tono allegro):

### "Siamo qui per aiutare! Adesso che hai una visione chiara di come installare e configurare un’app Next.js, sei pronto per esplorare altre funzionalità avanzate, come la **generazione di pagine statiche** e il **rendering lato server**. Ma questo è il prossimo capitolo del viaggio!"

---
layout: cover
level: 4

---

**Conclusione:**  

Gli Omarilli hanno guidato con successo gli studenti attraverso il processo di installazione e creazione di un’applicazione con **Next.js**, spiegando passo dopo passo come configurare il progetto, avviare il server di sviluppo, navigare tra le pagine e preparare l’app per la distribuzione?
