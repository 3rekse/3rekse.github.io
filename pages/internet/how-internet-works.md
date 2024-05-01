---
layout: intro
title: Come funziona Internet
level: 2
---

# Come funziona Internet

Le basi di come funziona il web



---
title: Indice per Come funziona Internet
level: 3
---

# Cosa viene trattato in questa sezione
Dal collegamento del computer al caricamento del sito web

* Come avviene la magia 🧙
* Esempio di richiesta e risposta HTTP 🌐
* Codici di stato HTTP ✅

<!-- 

Slide notes: 

-->

---
title: Processo di funzionamento del web
level: 3
---

# Come avviene la magia 🧙
Dal collegamento del computer al caricamento del sito web.

1. Internet 🌐
2. Il browser invia una richiesta 📥
3. Il server risponde 📩
4. La risposta viene elaborata 🖥️
5. La pagina viene visualizzata 🌐



<!-- 

Slide notes: 

-->


---
layout: two-cols
title: Internet
level: 3
---

# Internet
Passo 1 🧙

* Sistema mondiale di reti informatiche 🌐
* Nessuno possiede Internet o controlla chi può connettersi ad essa ❌
* TCP/IP è uno standard di rete utilizzato per standardizzare il modo in cui i computer si connettono tra loro e scambiano informazioni 🖧
* Un indirizzo IP viene utilizzato per identificare univocamente ogni dispositivo. Un esempio di IP è `216.146.46.20` 🔢
* Un pacchetto di dati 📦 è l'unità di base delle informazioni trasmesse su Internet
* 🌐 I server DNS vengono utilizzati per scoprire qual è l'effettivo indirizzo IP di un nome di dominio 🔍

::right::
<div class="ml-10 bg-zinc-100">
<div class="flex justify-center">
    <img alt="" class="place-content-end h-120" src="/internet/images/slides/internet/how-internet-works/map-01.png" />
</div>
</div>

<!-- 

Slide notes: 

Credit: 

https://thenounproject.com/icon/laptop-5407776/

-->



---
layout: two-cols
title: Client sends a request
level: 3
---

# Client sends a request
Step 2- secondo passaggio nel processo di comunicazione tra un client (come un browser web) e un server web. 🌐

* HTTP(s) è un protocollo utilizzato per recuperare risorse come documenti HTML.🔗
* HTTP(s) definisce come dovrebbero apparire la richiesta e la risposta, quali dati possono essere inclusi e come viene inviata la richiesta.📩
* Un client (come un browser) invia una richiesta HTTP al server chiedendo una pagina web, dati o qualche altro file di risorse.📥
* Le pagine web sono anche, ma non comunemente, chiamate documenti "Hyper Text", da cui il nome "Hyper Text Transfer Protocol (HTTP)".📄

::right::
<div class="ml-10 bg-zinc-100">
<div class="flex justify-center">
    <img alt="" class="place-content-end h-120" src="/internet/images/slides/internet/how-internet-works/map-02.png" />
</div>
</div>



<!-- 

Slide notes: 

-->


---
layout: two-cols
title: Server responds
level: 3
---

# Il server risponde
Passo 3

* Il server riceve la richiesta, la elabora e quindi invia una risposta 📩
* Il software del server web (ad esempio IIS, Apache, Nginx) viene eseguito sul server, in ascolto costante delle richieste e, quando ne arriva una, risponde di conseguenza 🖥️
* La risposta include un codice di stato HTTP, per indicare al browser se la richiesta è stata eseguita con successo ✅ o meno ❌ 
* Se il server approva la richiesta del client, risponderà con un messaggio di stato "200 OK" e la pagina web richiesta ✅

::right::

<div class="ml-10 bg-zinc-100">
    <div class="flex justify-center">
        <img alt="" class="place-content-end h-120" src="/internet/images/slides/internet/how-internet-works/map-03.png" />
    </div>
</div>

<!-- 

Slide notes: 

-->



---
layout: two-cols-header
title: Client processes the response
level: 3
---

# Il quarto passaggio il client (come un browser web)  processa la risposta di un server web.

* Il client (browser) riceve la risposta e inizia a lavorarci sopra. 🖥️
* Se la risposta è una pagina web, il client passerà attraverso il codice HTML e cercherà eventuali collegamenti ad altri file di risorse (CSS, JavaScript, Font, Immagini, ecc.). 🔍
* Il client invierà poi richieste separate anche per quei file. 🚀

::right::

* Server Response:(la risposta del server)

```html
HTTP/1.1 200 OK
Date: Sun, 23 Oct 2022 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html>… (the requested web page)
```


<!-- 

Slide notes: 

-->


---
title: Page is displayed
level: 3
layout: image-right
image: >-
  /internet/images/slides/internet/how-internet-works/screen-01.png

---

# Page is displayed
Step 5

Inizia il processo di rendering di una pagina web da parte del client (come un browser web). 🌐

* Non appena il client inizia a ricevere "pezzi" della pagina web, inizierà a metterla insieme per l'utente. 🧩
* Il client "dipinge" la pagina sullo schermo applicando gli stili (CSS), l'interattività (JavaScript) e eventuali immagini o altre risorse. 🎨
* L'utente vede il contenuto della pagina e può iniziare a interagire con esso. 🎉

 [La trasformazione digitale ](https://sites.google.com/view/bf3/linguaggi/la-trasformazione-digitale)


<!-- 

Slide notes: 

-->



---
title: Example HTTP Request and Response
level: 3
---

# HTTP flow
Client / Server request and response

Client Request 

```html
GET / HTTP/1.1
Host: imd1005.ca
Accept-Language: en
```

Server Response 

```html
HTTP/1.1 200 OK
Date: Sun, 23 Oct 2022 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html>… (here come the 29769 bytes of the requested web page)
```

<!-- 

Slide notes: 

Credit: 

https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

-->


---
title: HTTP Status Codes
level: 3
---

# HTTP Status Codes
A note about codes 

I codici di stato HTTP, che sono una parte essenziale della comunicazione tra client e server nel protocollo HTTP. Ecco cosa significano:

* 1xx (Informativo): Richiesta ricevuta, processo in corso. 🔄
* 2xx (Successo): L'azione è stata ricevuta, compresa e accettata con successo. ✅
* 3xx (Reindirizzamento): È necessario intraprendere ulteriori azioni per completare la richiesta. 🔄
* 4xx (Errore del client): La richiesta contiene una sintassi errata o non può essere soddisfatta. ❌
* 5xx (Errore del server): Il server non è riuscito a soddisfare una richiesta apparentemente valida. ❌

<!-- 

Slide notes: 

Credit: 

https://dev.opera.com/articles/http-response-codes/

-->
