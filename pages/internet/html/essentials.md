---
layout: intro
title: Fondamenti di HTML
level: 2
---

# Fondamenti di HTML

Tutto ciò che devi sapere sul linguaggio di markup ipertestuale🚀

## Contenuti 

<Toc columns="2" maxDepth="3" minDepth="3" mode="all" />


---
title: Cos'è l'HTML
level: 3
---

# Cos'è l'HTML
Le basi

L'HTML è un linguaggio di markup che usiamo per definire la struttura del contenuto delle nostre pagine web.

Usiamo i tag per definire lo scopo del contenuto e dare un significato semantico a un elemento.

Ad esempio, il seguente testo:

```html
Bobby ha fame
```

Se volessimo identificare quella riga come un paragrafo di testo, scriveremmo quanto segue:

```html
<p>Bobby ha fame</p>
```

`<p>` si riferisce al tag HTML, e "Buster ha fame" si riferisce al contenuto all'interno del tag.

<!-- 

Note slide: 

-->


---
title: il formato di un elemento HTML
level: 3
---

# Alcuni termini comuni da capire
Le basi

```html
<p class="text-red">Buster ha fame</p>
```


* `<p>` - tag di apertura — la parte di un elemento che definisce dove inizia questo tipo di contenuto
* `</p>` - tag di chiusura — la parte di un elemento che definisce dove finisce questo tipo di contenuto
* `class="text-red"` - attributo — un pezzo di metadati che di solito non è visibile nel browser ma definisce informazioni extra sull'elemento
* elemento — la combinazione di un tag di apertura, il contenuto e un tag di chiusura

<!-- 

Note slide: 

-->

---
title: Anatomia di un elemento HTML
level: 3
---

# Una nota sull'annidamento
Le basi

Puoi inserire elementi all'interno di altri elementi. Questo è chiamato annidamento. A volte ci riferiamo anche a questi elementi come aventi una relazione genitore-figlio.

Ricorda che gli elementi devono essere annidati correttamente.

```html
<p class="text-red">Buster è <strong>molto</strong> affamato</p>
```

L'elemento sopra funzionerà correttamente.

```html
<p class="text-red">Buster è <strong>molto affamato</p></strong>
```

L'elemento sopra non è strutturato correttamente perché il tag `<p>` viene chiuso prima del tag `<strong>`.

<!-- 

Note slide: 

-->
---
title: Commenti
level: 3
---

# Commenti HTML
Le basi

I commenti HTML sono visibili nel codice della pagina, ma non vengono visualizzati in alcun modo nel browser quando la pagina viene renderizzata.

Un commento HTML inizia con un \<!-- e poi termina con un -->.


```html
<!-- Questo è un commento su una singola riga che non verrà visualizzato nel browser -->

<p>Questo è un paragrafo <!-- Questo è un commento inline --> e non c'è nulla da vedere qui</p>
```

<!-- 

Note slide: 

Nota: lo stile del codice utilizzato attualmente rende i tag dei commenti ridicoli 

-->

---
title: Documento HTML
level: 3
---

# Documento HTML
Le basi

Ecco come appare il codice per un documento HTML base vuoto:

```html
<!DOCTYPE html>
<html lang="it-it">
<head>
  <meta charset="utf-8">
  <title>Titolo della pagina</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
</head>
<body>
    <h1>Ciao mondo</h1>
</body>
</html>
```

<!-- 

Note slide: 

-->


---
title: Documento HTML
level: 2
---

# Documento HTML (continua)
Le basi

E qui c'è una spiegazione di ogni elemento:

```html
<!DOCTYPE html>                     <!-- Dice al browser che questa è una pagina HTML5 -->
<html lang="it-it">                 <!-- Apre il tag HTML e imposta la lingua della pagina -->
<head>                              <!-- Contenitore per i metadati, dichiariamo informazioni sulla pagina -->
  <meta charset="utf-8">            <!-- Imposta il set di caratteri su UTF-8 -->
  <title>Titolo della pagina</title>  <!-- Nel head dichiariamo il titolo della pagina -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
                                    <!-- Imposta il livello di zoom (usato per mobile)-->
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                                    <!-- Risolve un problema di compatibilità con IE 11 -->
</head>
<body>                              <!-- La sezione body è dove va il contenuto della nostra pagina -->
    <h1>Ciao mondo</h1>
</body>
</html>                             <!-- Chiude il tag html -->
```

<!-- 

Note slide: 

-->