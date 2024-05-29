---
layout: intro
title: CSS Grid 
level: 2
---

# CSS Grid

🏢 un altro modo per disporre i tuoi box


---
title: Cos'è Grid
level: 3
layout: image-right
image: /internet/images/slides/css/grid/layout.jpg
---


# Fondamenti di Grid
Introduzione a CSS Grid

## Cos'è? 

Le griglie CSS sono un framework di layout basato su griglie bidimensionali che sono state create specificamente per risolvere le sfide di layout utilizzando sia colonne che righe.


## Perché "Grid"?

Flexbox è unidirezionale per natura, mentre grid ci dà un po' più di opzioni essendo in grado di disporre gli elementi su un piano bidimensionale.

<!-- 

Note slide: 

Credit: 

Foto di Karolina Grabowska: https://www.pexels.com/photo/a-man-posting-a-schedule-reminder-5882583/

-->



---
title: Come usare Grid
level: 3
---


# Panoramica di Grid
Introduzione a CSS Grid

I layout di griglia hanno le seguenti caratteristiche

* Le griglie sono definite con righe e colonne. 
* Puoi definire la dimensione delle righe e delle colonne.
* Simile a flexbox, le griglie hanno un contenitore, e figli diretti (o elementi) che vengono inseriti nel contenitore della griglia.
* I figli possono essere inseriti nel contenitore automaticamente o puoi specificare una posizione precisa.
* Le linee e le aree sulla griglia possono essere nominate per facilitare la collocazione.
* Gli elementi della griglia possono essere allineati all'interno della loro area. 


<!-- 

Note slide: 

-->

---
title: Linee della griglia
level: 3
---


# Linee della griglia
Introduzione a CSS Grid

Una griglia è composta da linee, che corrono orizzontalmente e verticalmente. Se la tua griglia ha quattro colonne, avrà cinque linee di colonna compresa quella dopo l'ultima colonna.

I numeri delle linee iniziano da uno (1) e seguono il modo di scrittura (generalmente da sinistra a destra).

<ul class="grid-demo">
  <li>Elemento A</li>
  <li>Elemento B</li>
  <li>Elemento C</li>
  <li>Elemento D</li>
  <li>Elemento E</li>
  <li>Elemento F</li>
  <li>Elemento G</li>
  <li>Elemento H</li>
</ul>


<style>
ul.grid-demo {
    padding: 0px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 1px solid #cce3de;

    background-color: #eaf4f4;
}

ul.grid-demo li:nth-child(2), 
ul.grid-demo li:nth-child(6) { border-left: 5px solid #6b9080;  }


/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>


<!-- 

Note slide: 

-->



---
title: Tracce della griglia
level: 3
---


# Tracce della griglia
Introduzione a CSS Grid

Una traccia è lo spazio tra due linee di griglia. Le tracce di riga corrono attraverso le righe, e le tracce di colonna corrono tra le colonne.

<ul class="grid-demo">
  <li>Elemento A</li>
  <li>Elemento B</li>
  <li>Elemento C</li>
  <li>Elemento D</li>
  <li>Elemento E</li>
  <li>Elemento F</li>
  <li>Elemento G</li>
  <li>Elemento H</li>
</ul>


<style>
ul.grid-demo {
    padding: 0px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 1px solid #cce3de;

    background-color: #eaf4f4;
}

ul.grid-demo li:nth-child(1), 
ul.grid-demo li:nth-child(2), 
ul.grid-demo li:nth-child(3), 
ul.grid-demo li:nth-child(4) { background-color: #a4c3b2;  }


/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>


<!-- 

Note slide: 

-->


---
title: Cella della griglia
level: 3
---


# Cella della griglia
Introduzione a CSS Grid

Una cella di griglia è lo spazio più piccolo su una griglia definito dall'intersezione di tracce di riga e colonna. È proprio come una cella di tabella o una cella in un foglio di calcolo. Se definisci una griglia e non posizioni nessuno degli elementi, saranno disposti automaticamente un elemento in ogni cella di griglia definita.

<ul class="grid-demo">
  <li>Elemento A</li>
  <li>Elemento B</li>
  <li>Elemento C</li>
  <li>Elemento D</li>
  <li>Elemento E</li>
  <li>Elemento F</li>
  <li>Elemento G</li>
  <li>Elemento H</li>
</ul>


<style>
ul.grid-demo {
    padding: 0px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 1px solid #cce3de;

    background-color: #eaf4f4;
}

ul.grid-demo li:nth-child(2) { background-color: #a4c3b2;  }

/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>


<!-- 

Note slide: 

-->



---
title: Area della griglia
level: 3
---


# Area della griglia
Introduzione a CSS Grid

Diverse celle di griglia insieme. Le aree della griglia sono create facendo in modo che un elemento si estenda su più tracce.

<ul class="grid-demo">
  <li>Elemento A</li>
  <li>Elemento B</li>
  <li>Elemento C</li>
  <li>Elemento D</li>
  <li>Elemento E</li>
  <li>Elemento F</li>
  <li>Elemento G</li>
  <li>Elemento H</li>
</ul>


<style>
ul.grid-demo {
    padding: 0px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 1px solid #cce3de;

    background-color: #eaf4f4;
}

ul.grid-demo li:nth-child(2),
ul.grid-demo li:nth-child(3),
ul.grid-demo li:nth-child(6),
ul.grid-demo li:nth-child(7) { background-color: #a4c3b2;  }

/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>


<!-- 

Note slide: 

-->


---
title: Area della griglia
level: 3
---


# Gap
Introduzione a CSS Grid

Un canale o un vicolo tra le tracce. Per scopi di dimensionamento, questi agiscono come una traccia regolare. Non puoi posizionare contenuti in un gap, ma puoi estendere gli elementi della griglia attraverso di esso.

<ul class="grid-demo">
  <li>Elemento A</li>
  <li>Elemento B</li>
  <li>Elemento C</li>
  <li>Elemento D</li>
  <li>Elemento E</li>
  <li>Elemento F</li>
  <li>Elemento G</li>
  <li>Elemento H</li>
</ul>


<style>
ul.grid-demo {
    padding: 0px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 5px solid #a4c3b2;

    background-color: #eaf4f4;
}

/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>


<!-- 

Note della slide: 

-->




---
title: Contenitore della griglia
level: 3
---


# Contenitore della griglia
Introduzione a CSS Grid

L'elemento HTML a cui è applicato `display: grid`, e quindi crea un nuovo contesto di formattazione della griglia per i figli diretti (gli elementi della griglia).

Qui creiamo una classe chiamata `.grid-container` che imposta il `display` a `grid`.

```css
.grid-container {
  display: grid;
}
```

E applichiamo la classe a un `ul` per far renderizzare i figli nel contenitore `grid`.

```html 
<ul class="grid-container">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>

```

<!-- 

Note della slide: 

-->


---
title: Contenitore della griglia
level: 3
layout: center
---


Aggiungendo `display: grid` non cambia molto di per sé. 

Dobbiamo specificare le colonne.

<ul class="grid-demo">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>


<style>
ul.grid-demo {
    padding: 5px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    border: 5px solid #6b9080;

    display: grid;

}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 5px solid #a4c3b2;

    background-color: #eaf4f4;
}

/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>

<!-- 

Note della slide: 

-->



---
title: Contenitore della griglia
level: 3
---


# Impostazione delle colonne
Introduzione a CSS Grid

Definiamo righe e colonne sulla nostra griglia con le proprietà `grid-template-rows` e `grid-template-columns`.

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

```html 
<ul class="grid-container">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>

```

<!-- 

Note della slide: 

-->


---
title: Contenitore della griglia
level: 3
layout: center
---


Aggiungendo `grid-template-columns: 200px 200px 200px;` otteniamo tre colonne di `200px` ciascuna.

Gli elementi aggiuntivi si avvolgono automaticamente alla riga successiva e mantengono la loro larghezza di colonna.

Lo spazio rimanente nel contenitore (se disponibile) viene lasciato inutilizzato. 

<ul class="grid-demo">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>


<style>
ul.grid-demo {
    padding: 5px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    border: 5px solid #6b9080;

    display: grid;
    grid-template-columns: 200px 200px 200px;

}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 5px solid #a4c3b2;

    background-color: #eaf4f4;
}

/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>

<!-- 

Note della slide: 

-->


---
title: Contenitore della griglia
level: 3
---


# L'unità fr
Introduzione a CSS Grid

Nell'esempio precedente abbiamo impostato la nostra griglia per avere tre colonne di `200px` ciascuna. 

Ora stiamo introducendo una nuova unità css chiamata `fr`. Queste possono essere utilizzate solo con le griglie e stanno per il termine "frazione". Il codice sottostante creerebbe tre colonne uguali nella nostra griglia.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

```html 
<ul class="grid-container">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>

```

<!-- 

Note della slide: 

-->

---
title: Contenitore Grid
level: 3
layout: center
---


Aggiungendo `grid-template-columns: 1fr 1fr 1fr;` otteniamo tre colonne di dimensioni uguali.

<ul class="grid-demo">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>


<style>
ul.grid-demo {
    padding: 5px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    border: 5px solid #6b9080;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 5px solid #a4c3b2;

    background-color: #eaf4f4;
}

/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>

<!-- 

Note slide: 

-->



---
title: Contenitore Grid
level: 3
---


# L'unità fr
Introduzione a CSS Grid

Le unità `fr` non devono essere uguali e possono avere dimensioni disuguali.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

```html 
<ul class="grid-container">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>

```

<!-- 

Note slide: 

-->


---
title: Contenitore Grid
level: 3
layout: center
---


Aggiungendo `grid-template-columns: 1fr 2fr 1fr;` impostiamo la colonna centrale per essere due volte la dimensione delle colonne prima e dopo.

<ul class="grid-demo">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>


<style>
ul.grid-demo {
    padding: 5px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    border: 5px solid #6b9080;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 5px solid #a4c3b2;

    background-color: #eaf4f4;
}

/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>

<!-- 

Note slide: 

-->




---
title: Contenitore Grid
level: 3
---


# La notazione repeat 
Introduzione a CSS Grid

Se avessimo molte colonne, sarebbe davvero fastidioso continuare a scrivere `1fr` ancora e ancora. Quindi possiamo usare la notazione `repeat()` per ripetere le direttive. 

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
```

È equivalente al seguente:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

<!-- 

Note slide: 

-->





---
title: Contenitore Grid
level: 3
---


# Posizionamento degli elementi
Introduzione a CSS Grid

Diamo un'occhiata al posizionamento degli elementi nella griglia che abbiamo creato. Usiamo le linee della griglia per impostare i punti di inizio e fine, e poi l'elemento si estenderà per riempire lo spazio disponibile tra le linee.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 50px 75px);
}

.item {
  grid-column-start: 2; /* inizia alla linea della colonna 2 */
  grid-column-end: 4; /* finisce alla linea della colonna 4 */
  grid-row-start: 2; /*inizia alla linea della riga 2 */
  grid-row-end: 5; /* finisce alla linea della riga 5 */
}
```

```html 
<ul class="grid-container">
  <li class="item">Elemento 1</li>
</ul>

```

<!-- 

Note slide: 

-->


---
title: Contenitore Grid
level: 3
layout: center
---

Quello che sta succedendo qui è che il nostro Elemento 1 inizia alla linea della colonna 2 e va fino alla linea della colonna 4.

E il nostro elemento inizia sulla seconda linea della riga e si estende fino all'ultima linea che è la linea della riga 5.

<ul class="grid-demo">
  <li class="item">Elemento 1</li>
</ul>


<style>
ul.grid-demo {
    padding: 5px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    border: 5px solid #6b9080;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 50px 75px);
}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 5px solid #a4c3b2;

    background-color: #eaf4f4;
}

ul.grid-demo li.item {
  grid-column-start: 2; /* inizia alla linea della colonna 2 */
  grid-column-end: 4; /* finisce alla linea della colonna 4 */
  grid-row-start: 2; /*inizia alla linea della riga 2 */
  grid-row-end: 5; /* finisce alla linea della riga 5 */
}

/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>

<!-- 

Note slide: 

-->

---
title: Contenitore Grid
level: 3
layout: center
---

Quello che succede qui è che il nostro elemento 1 inizia alla linea della colonna 2 e va fino alla linea della colonna 4.

E il nostro elemento inizia sulla seconda linea di riga e si estende fino all'ultima linea che è la linea di riga 5.

<ul class="grid-demo">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>


<style>
ul.grid-demo {
    padding: 5px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    border: 5px solid #6b9080;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 50px 75px);
}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 5px solid #a4c3b2;

    background-color: #eaf4f4;
}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 5px solid #a4c3b2;

    background-color: #eaf4f4;
}

ul.grid-demo li:nth-child(7), 
ul.grid-demo li:nth-child(8),
ul.grid-demo li:nth-child(12),
ul.grid-demo li:nth-child(13),
ul.grid-demo li:nth-child(17), 
ul.grid-demo li:nth-child(18) { background-color: #6b9080;  }


/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>

<!-- 

Note della slide: 

-->



---
title: Contenitore Grid
level: 3
---


# Aree del template Grid
Introduzione a CSS Grid

Se l'uso di numeri di riga e colonna è un po' fastidioso, la griglia ci permette di specificare la forma della nostra griglia usando aree di template nominate e di usare i nostri nomi derivati per ogni area nella nostra griglia. 

Il seguente codice crea una griglia di quattro colonne per tre righe e poi definisce quali aree vanno in ogni sezione.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1.5em 2fr 1fr 1.5em;
  grid-template-areas:
    "header header  header header"    /* layout your grid using your own strings */
    ".      content side   ."         /* this still has to be a grid shape */
    "footer footer  footer footer"    /* the footer spans all four columns */
}

.header { grid-area: header; }
.content { grid-area: content; }
.side { grid-area: side; }
.footer { grid-area: footer; }

```


<!-- 

Note della slide: 

-->


---
title: Contenitore Grid
level: 3
---


# Aree del template Grid
Introduzione a CSS Grid

E questo è l'`HTML` che implementerebbe quella griglia css

```html 
<div class="grid-container">
  <header class="header">...</header>
  <main>
    <div class="content">...</div>
    <div class="side">...</div>
  </main>
  <footer class="footer">...</footer>
</div>

```

<!-- 

Note della slide: 

-->



---
title: Contenitore Grid
level: 3
layout: center
---

E qui è il nostro Layout Grid implementato usando template nominati.

L'intestazione e il piè di pagina coprono l'intera riga, e le aree di contenuto e laterali hanno due piccole colonne su entrambi i lati per il padding.

<ul class="grid-demo">
  <li class="header">Intestazione</li>
  <li class="content">Contenuto</li>
  <li class="side">Lato</li>
  <li class="footer">Piè di pagina</li>
</ul>


<style>
ul.grid-demo {
    padding: 5px !important;
    margin: 0px !important;
    list-style: none;
    background-color: white;

    border: 5px solid #6b9080;

    display: grid;
    grid-template-columns: 1.5em 2fr 1fr 1.5em;
    grid-template-areas:
    "header header  header header"    /* layout your grid using your own strings */
    ".      content side ."         /* this still has to be a grid shape */
    "footer footer  footer footer"    /* the footer spans all four columns */
}

ul.grid-demo li {
    margin: 0px;
    padding: 25px;

    border: 5px solid #a4c3b2;

    background-color: #eaf4f4;
}

.header { grid-area: header; }
.content { grid-area: content; }
.side { grid-area: side; }
.footer { grid-area: footer; }



/* 
  https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8
*/

</style>

<!-- 

Note della slide: 

-->


---
title: Risorse Grid
level: 3
layout: image-right
image: /internet/images/slides/css/flex-box/fallen-boxes.jpg
---


# Risorse Grid
Guide e cheatsheets

Queste slide hanno appena sfiorato la superficie di Grid. Si prega di considerare la revisione delle seguenti risorse per ulteriori informazioni su CSS Grid.

* [Gioco Grid Garden](https://cssgridgarden.com)
* [Concetti di base del layout della griglia - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
* [Aree del template nominate - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
* [CSS Grid - web.dev](https://web.dev/learn/css/grid/)
* [CSS Grid - CSS-tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [CSS Grid cheatsheet - yoksel](https://yoksel.github.io/grid-cheatsheet/)

<!-- 

Note della slide: 

Credit: 

Foto di cottonbro studio: https://www.pexels.com/photo/person-in-black-leather-boots-sitting-on-brown-cardboard-boxes-4553277/

-->