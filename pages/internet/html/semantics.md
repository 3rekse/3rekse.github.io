---
layout: intro
title: Tag semantici HTML
level: 1
---

# Semantica HTML

Semantic - What purpose or role does this HTML element have 

Semantica - Qual è lo scopo o il ruolo di questo elemento HTML


---
title: Semantic elements
level: 2
---

<img class="h-full" src="/internet/images/slides/html/semantics/semantic-no-tags.png" alt="" />

<!-- 

Slide notes: 

-->


---
title: Semantic elements
level: 2
---

<img class="h-full" src="/internet/images/slides/html/semantics/semantic-tags.png" alt="" />

<!-- 

Slide notes: 

-->

---
title: Semantic elements
level: 2
---

Gli elementi che pensano di essere più cool

# Semantic elements
The elements that think they are cooler

* `<header>` — per informazioni più importanti, come l'intestazione del sito web, dove si trovano il nome, il logo e la navigazione
* `<nav>` — navigazione, definisce la navigazione del sito web
* `<footer>` — per informazioni meno importanti, come il footer del sito web, di solito include la dichiarazione di copyright, icone social, ecc.
* `<main>` — per definire il contenuto principale
* `<aside>` — per informazioni secondarie, cose che non sono necessarie per capire il contenuto principale, come sidebar, citazioni, ecc.
* `<section>` — l'elemento di sezione generico



---
title: Semantic elements
level: 2
---

# HTML page sample

```html
<!DOCTYPE html>
<html lang="en-ca">
<head>
  <meta charset="utf-8">
  <title>Title of the page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
</head>
<body>
  <header>...</header>

  <!-- The <main> content of the website: what your user came to see -->
  <main>
    <h1>All of the dogs</h1>
    ...
  </main>

  <aside>...</aside>

  <footer>...</footer>
</body>
</html>
```


---
title: Semantic elements
level: 2
---

# Esempio semplificato di header / barra di navigazione

```html
...
<body>
  <header>
    <h2>Site title</h2> <!-- Your document sections must have a header -->

    <img src="/images/logo.png" alt="Company Logo" />

    <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>

  </header>
    ...
</body>
</html>
```


---
title: Semantic elements
level: 2
---

# Esempio semplificato di header / barra di navigazione


* Avere un'intestazione `<h2>` nella tua sezione `<heading>` per dare al tuo documento una struttura di intestazione corretta
* Usa l'elemento `<nav>` con un elenco non ordinato per qualsiasi navigazione del sito
* Non mettere un `<h1>` in nessuna sezione del documento diversa da `<main>`


---
title: Semantic elements
level: 2
---

# Main content area

```html
...
<body>
  ...
  <main>
    <h1>Page heading</h1> <!-- Your document sections must have a header -->

    <section>
      <h2>Chapter one</h2>
      ...

        <section>
          <h3>Sub chapter one alpha</h3>
          ...
        </section>

    </section>
    ...
  </main>
    ...
</body>
</html>
```


---
title: Elementi semantici
level: 2
---

# Area di contenuto principale

* Avere un'intestazione `<h1>` nella tua area di contenuto `<main>` per dare al tuo documento una struttura di intestazione corretta 
* Usa gli elementi `<section>` o `<article>` per organizzare ulteriormente il contenuto 
* Gli elementi `<section>` dovrebbero essere avvolti attorno a ogni intestazione (ad eccezione dell'`<h1>`)


---
title: Elementi semantici
level: 2
---

# Esempio semplificato di footer con navigazione

```html
...
<body>
  ...
  <footer>
    <h2>Informazioni del footer del sito</h2> <!-- Le sezioni del tuo documento devono avere un'intestazione -->

    <img src="/images/logo.png" alt="Logo dell'azienda" />

    <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">Chi siamo</a></li>
        <li><a href="contact.html">Contatti</a></li>
      </ul>
    </nav>

  </footer>
</body>
</html>
```


---
title: Elementi semantici
level: 2
---

# Esempio semplificato di footer con navigazione

* Avere un'intestazione `<h2>` nella tua sezione `<footer>` per dare al tuo documento una struttura di intestazione corretta 
* Usa l'elemento `<nav>` con un elenco non ordinato per qualsiasi navigazione del sito all'interno del footer
* Non mettere un `<h1>` in nessuna sezione del documento diversa da `<main>`
