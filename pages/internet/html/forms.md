---
layout: intro
title: Moduli HTML
level: 3
---

# Moduli HTML

Marcatura dei moduli HTML



---
title: Moduli
level: 4
layout: image-right
image: /internet/images/slides/html/forms/form.jpg
---

# Vogliamo i tuoi input
I moduli consentono agli utenti di fornire dati di input

L'elemento HTML `<form>` rappresenta una sezione di documento contenente controlli interattivi per l'invio di informazioni.


I moduli sono uno strumento molto potente per interagire con gli utenti: più comunemente vengono utilizzati per raccogliere dati dagli utenti o consentire loro di controllare un'interfaccia utente.

In questa sezione copriremo tutti gli aspetti essenziali dei moduli HTML, inclusa la corretta marcatura della loro struttura, la validazione dei dati del modulo e l'invio dei dati al server.


<!-- 

Note sulla slide:

Credit: Foto di Cytonn Photography: https://www.pexels.com/photo/close-up-photography-of-person-writing-on-white-paper-955392/

-->

---
layout: two-cols-header
title: Moduli
level: 4
---


# Esempio di modulo

::left::

Impareremo sui moduli costruendo un semplice modulo di contatto.

Il nostro modulo conterrà tre campi di testo, un campo di intervallo e un pulsante.

Stiamo chiedendo all'utente:

* il loro nome,
* la loro email,
* il livello di urgenza del loro messaggio, e
* il messaggio che vogliono inviare

Premendo il pulsante verranno inviati i loro dati a un server web.

::right::

<div class="border p-3 bg-gray-50 ml-10 shadow-xl">

<p><strong>Modulo di contatto:</strong></p>

<label>Nome:</label>
<input type="text" class="ml-4 border border-gray-300" placeholder="Chris Rogers"/>

<label>Email:</label>
<input type="text" class="ml-4 border border-gray-300" placeholder="chris@avengers.com"/>

<label>Urgenza:</label>
<input type="range" class="ml-4 border border-gray-300" />

<label>Messaggio:</label>
<textarea class="ml-1 border border-gray-300" rows="5"></textarea>

<button class="border border-gray-300 bg-white p-2" type="sybmit">Invia</button>

</div>


<!-- 

Note sulla slide: 

-->



---
title: Moduli
level: 4
---

# Moduli
I moduli consentono agli utenti di fornire dati di input

Iniziamo aggiungendo un elemento `<form>` e nella maggior parte dei casi aggiungiamo un attributo `action` e un attributo `method`.

```html
<form action="/server-page-handling-form-data" method="post">
  <!-- Gli elementi del modulo vanno qui -->
</form>
```

**Note:** 

* L'attributo `action` definisce la posizione (URL) dove i dati raccolti dal modulo dovrebbero essere inviati quando viene inviato.
* L'attributo `method` definisce quale metodo HTTP utilizzare per inviare i dati (di solito `get` o `post`).


<!-- 

Note sulla slide: 

-->



---
title: Moduli
level: 4
---

# Moduli
I moduli consentono agli utenti di fornire dati di input

Il nostro modulo di contatto richiede i seguenti elementi di input oltre a un `label` per ciascuno

* Un campo di input per il nome come singola linea di testo (`input` di tipo `text`)
* Un campo di input per l'email come singola linea di testo che dovrebbe accettare solo indirizzi email (`input` di tipo `email`)
* Un campo di input per l'intervallo di urgenza che accetta un numero in base a quanto è urgente il problema (`input` di tipo `range`)
* Un campo di input per il testo del messaggio che ha più righe (elemento `textarea`)



<!-- 

Note sulla slide: 

-->


---
title: Moduli
level: 4
---

# Moduli
I moduli consentono agli utenti di fornire dati di input

Aggiungiamo il nostro primo elemento `input` di tipo `text` oltre al `label`


```html
<form action="/server-page-handling-form-data" method="post">
  <ul>
    <li>
      <label for="fullname">Nome:</label>
      <input type="text" id="fullname" name="fullname" placeholder="Chris Rogers"/>
    </li>
  </ul>
</form>
```

**Note:** 

* Dai un'occhiata agli attributi `for` `id` e `name` che vengono utilizzati per collegare la label e l'elemento `input`
* L'attributo `placeholder` ci consente di inserire del testo di aiuto nell'elemento del modulo


<!-- 

Note sulla slide: 

-->



---
title: Moduli
level: 4
---

# Moduli
I moduli consentono agli utenti di fornire dati di input

Successivamente aggiungiamo i nostri elementi di modulo per catturare l'indirizzo email degli utenti


```html
<form action="/server-page-handling-form-data" method="post">
  <ul>
    ...
    <li>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="chris@avengers.com"/>
    </li>
  </ul>
</form>
```

**Note:** 

* Il valore `type` è ora impostato su `email`


<!-- 

Note sulla slide: 

-->



---
title: Moduli
level: 4
---

# Moduli
I moduli consentono agli utenti di fornire dati di input

Successivamente aggiungiamo i nostri elementi di modulo per catturare il valore di urgenza utilizzando il cursore


```html
<form action="/server-page-handling-form-data" method="post">
  <ul>
    ...
    <li>
      <label for="urgency">Urgenza:</label>
      <input type="range" id="urgency" name="urgency" />
    </li>
  </ul>
</form>
```

**Note:** 

* Il valore `type` è ora impostato su `range`


<!-- 

Note sulla slide: 

-->



---
title: Moduli
level: 4
---

# Moduli
I moduli consentono agli utenti di fornire dati di input

Quindi utilizziamo l'elemento `textarea` per catturare più righe di testo


```html
<form action="/server-page-handling-form-data" method="post">
  <ul>
    ...
    <li>
      <label for="message">Messaggio:</label>
      <textarea id="messsage" rows="5"></textarea>
    </li>
  </ul>
</form>
```

**Note:** 

* L'attributo `rows` imposta il numero di righe che sono visibili per l'input `textarea`. Gli utenti possono digitare più di 5 righe di testo.


<!-- 

Note sulla slide: 

-->



---
title: Moduli
level: 4
---

# Moduli
I moduli consentono agli utenti di fornire dati di input

Infine aggiungiamo un pulsante di invio utilizzando l'elemento `<button>` 


```html
<form action="/server-page-handling-form-data" method="post">
  <ul>
    ...
    <li>
      <button type="submit">Invia</button>
    </li>
  </ul>
</form>
```

**Note:** 

* Dobbiamo mettere un attributo `type=submit` sul nostro `<button>` per farlo funzionare con il modulo
* Il `<button>` non richiede una label


<!-- 

Note sulla slide: 

-->



---
title: Moduli
level: 4
---

# Codice completo del modulo:

```html
<form action="/server-page-handling-form-data" method="post">
  <ul>
    <li>
      <label for="fullname">Nome:</label>
      <input type="text" id="fullname" name="fullname" placeholder="Chris Rogers"/>
    </li>
    <li>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="chris@avengers.com"/>
    </li>
    <li>
      <label for="urgency">Urgenza:</label>
      <input type="range" id="urgency" name="urgency" />
    </li>
    <li>
      <label for="message">Messaggio:</label>
      <textarea id="messsage" rows="5"></textarea>
    </li>
    <li><button type="submit">Invia</button></li>
  </ul>
</form>
```

<!-- 

Note sulla slide: 

-->


---
title: Moduli
level: 4
---

# Validazione lato client 
I moduli consentono agli utenti di fornire dati di input

HTML ha alcuni attributi che possiamo utilizzare per validare l'input che il client sta fornendo.

Non solo possiamo rendere specifici campi del modulo obbligatori, ma possiamo anche validare che i numeri siano un intervallo specifico, o che l'input di testo segua uno schema specifico.

Il codice di esempio qui sotto mostra come utilizzare l'attributo `required` per rendere un input obbligatorio.

```html 
<form>
  ...
  <label for="password">Name (required)</label>
  <input id="fullname" name="fullname" type="text" required="required" />
  ...
</form>
```

<!-- 

Slide notes: 

-->

---
title: Moduli
level: 4
---

# Altri tipi di input
I moduli consentono agli utenti di fornire dati in input

L'elemento `<input>` ha molti tipi diversi in modo che possiamo raccogliere diversi tipi di dati da un utente. Abbiamo visto `text` e `range`, e in totale ci sono 22 tipi diversi disponibili.

Alcuni esempi di questi sono `date`, `time`, `tel`, `password`, `number`, `checkbox` per citarne alcuni.

Abbiamo anche l'elemento `select` che ci consente di aggiungere elenchi a discesa ai nostri moduli.

```html 
<form>
  ...
  <label for="password">Password (richiesta)</label>
  <input id="password" name="password" type="password" required="required" />
  ...
</form>
```

[Elenco dei tipi di input ed esempi](https://developer.mozilla.org/it/docs/Web/HTML/Element/input)

[L'elemento select](https://developer.mozilla.org/it/docs/Web/HTML/Element/select)

<!-- 

Note slide: 

-->


---
title: Moduli
level: 4
---

# Accessibilità dei moduli
I moduli consentono agli utenti di fornire dati in input

* È assolutamente fondamentale che tutti gli elementi del tuo modulo abbiano un `<label>` e il `<label>` ha un attributo `for` che corrisponde a un campo `<input>`
* Se fai clic sulla `<label>` del modulo, il browser trasferirà il focus all'elemento `<input>`. Se ciò non accade, è possibile che ci sia qualcosa di sbagliato nel tuo modulo.
* Devi avere l'elemento `<form>` che avvolge tutti i tuoi elementi `<input>`.
* Gli attributi `id` che utilizzi nei tuoi elementi di modulo devono essere unici e non possono iniziare con un numero

<!-- 

Note slide: 

-->


---
title: Risorse sui moduli
level: 4
layout: image-right
image: /internet/images/slides/html/forms/confused.jpg
---


# Risorse sui moduli
Guide e cheatsheets

* [L'elemento Form](https://developer.mozilla.org/it/docs/Web/HTML/Element/form)
* [Lavorare con i moduli web](https://developer.mozilla.org/it/docs/Learn/Forms)
* [Moduli HTML e JavaScript - Prof3ssorSt3v3](https://www.youtube.com/watch?v=ikR9DsGMUMc&list=PLyuRouwmQCjncCz8JChyPNRBvm2ONGYa2)
* [Tastiere mobili e moduli HTML - Prof3ssorSt3v3](https://www.youtube.com/watch?v=WGk-2_dD6L0&list=PLyuRouwmQCjncCz8JChyPNRBvm2ONGYa2&index=28)
* [Moduli HTML - Marksheet](https://marksheet.io/html-forms.html)
* [Moduli HTML - W3C](https://www.w3.org/TR/html401/interact/forms.html)

<!-- 

Note slide: 

Credit: 

Foto di Andrea Piacquadio: https://www.pexels.com/photo/a-man-in-red-shirt-covering-his-face-3760043/

-->
