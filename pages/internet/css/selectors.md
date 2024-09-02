---
layout: intro
title: Selettori CSS
level: 3
---

# Selettori CSS

Seleziona gli elementi HTML utilizzando i selettori CSS


---
title: Cosa sono i selettori CSS
level: 4
layout: image-right
image: /internet/images/slides/css/selectors/library.jpg
---


# Selezionare il nostro HTML
Aggiungere stile alla sostanza

Utilizziamo i selettori CSS per trovare specifici elementi sulla nostra pagina HTML in modo da poter applicare le regole CSS a quell'elemento.

L'ultima versione di CSS ci offre una moltitudine di selettori CSS che ci permettono di essere molto specifici quando selezioniamo gli elementi HTML.

Le seguenti slide passano in rassegna tutti i diversi tipi di selettori disponibili.

<!-- 

Note slide: 

Foto di DS stories: https://www.pexels.com/photo/pile-of-colorful-boxes-7679762/

-->




---
title: Selettori CSS
level: 4
---

# Cos'è un selettore
Aggiungere stile alla sostanza

I selettori CSS sono la prima parte delle nostre regole CSS. Sono un modello di elementi e altri termini che dicono al browser quali elementi HTML dovrebbero essere selezionati per avere i valori delle proprietà CSS all'interno della regola applicati a loro. L'elemento o gli elementi che sono selezionati dal selettore sono chiamati soggetto del selettore.

Nell'esempio sottostante, `body` e `p` sono i nostri selettori.

```css
body {
  background-color: red;
}

p {
  color: #eeeeee;
}
```

<!-- 

Note slide: 

-->


---
title: Selettori CSS
level: 4
---

# Liste di selettori
Aggiungere stile alla sostanza

Se hai più di un elemento che utilizza le stesse dichiarazioni CSS, sei in grado di elencare i tuoi selettori, separati da una `,` e le proprietà CSS saranno applicate a tutti gli elementi HTML selezionati dai selettori nella lista.

```css
h1 {
  color: #333333;
}

h2 {
  color: #333333;
}

/* Può essere combinato e scritto come */

h1 , h2 {
    color: #333333;
}

```


<!-- 

Note slide: 

-->



---
title: Selettori CSS
level: 4
---

# Selettore universale
Aggiungere stile alla sostanza

Tutti i markup e ogni elemento sulla pagina possono essere selezionati utilizzando il selettore `*`.

Nell'esempio sottostante, ogni elemento su una pagina web otterrà un bordo rosso solido di 1px applicato a loro.

```css
* {
  border: 1px solid red;
}
```

<!-- 

Note slide: 

-->



---
title: Selettori CSS
level: 4
---

# Selettore di tipo
Aggiungere stile alla sostanza

Un selettore di tipo (o selettore di elemento) seleziona tutti gli elementi HTML del dato tipo di elemento, e la sintassi è solo il nome dell'elemento.

```css
h1 {
  color: #333333;
}

ul {
  color: #eeeeee;
  background-color: #333333;
}

p {
 color: #333333;
}
```

<!-- 

Note slide: 

-->



---
title: Selettori CSS
level: 4
---

# Selettore di classe
Aggiungere stile alla sostanza

Possiamo essere più specifici su quale elemento selezioniamo assegnando un nome al tag HTML — chiamato classe. Le classi sono solo un attributo sui tuoi tag HTML.

Puoi utilizzare un selettore di classe aggiungendo un `.` davanti a un nome di classe nel tuo codice CSS.

```html 
<!-- index.html -->
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li class="selected">Elemento 3</li>
  <li>Elemento 4</li>
</ul>
```

```css
/* style.css */
.selected {
  color: red;
}
```

<!-- 

Note slide: 

-->



---
title: Selettori CSS
level: 4
---

# Selettore ID
Aggiungere stile alla sostanza

I selettori ID sono simili ai selettori di classe. Selezionano un elemento con l'ID dato, che è un altro attributo che si posiziona su un elemento HTML:

Puoi utilizzare un selettore id aggiungendo un `#` davanti a un id nel tuo codice CSS.

```html 
<!-- index.html -->
<ul>
  <li id="unique-item">Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>
```

```css
/* style.css */
#unique-item {
  color: red;
}
```

<!-- 

Note slide: 

-->


---
title: Selettori CSS
level: 4
---

# Selettore a catena
Aggiungere stile alla sostanza

Puoi anche selezionare specifici elementi HTML che hanno due o più classi specifiche applicate a loro. Questo è noto come selettore a catena.

Il selettore a catena viene utilizzato non mettendo spazi tra il nome della classe.

```html 
<!-- index.html -->
<ul>
  <li class="active first">Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
</ul>
```

```css
/* style.css */
.active.first {
  color: red;
}
```

<!-- 

Note slide: 

-->




---
title: Selettori CSS
level: 4
---

# Combinatore discendente
Aggiungere stile alla sostanza

I combinatori sono selettori CSS che vengono utilizzati per stilizzare elementi che hanno una certa relazione con altri elementi selezionati.

Il selettore combinatore discendente ci permette di abbinare tutti i discendenti di un elemento specifico.

```html 
<!-- index.html -->
<section class="parent">
  <p>lorem ipsum dolar</p>
  <p class="child">lorem ipsum dolar</p> <!-- sarebbe stilizzato come ha classe genitore e figlio -->
</section>
<section>
  <p class="child">lorem ipsum dolar</p> <!-- non sarebbe selezionato poiché non è un figlio di una classe genitore -->
</section>
```

```css
/* style.css */
.parent .child {
  color: red;
}
```

<!-- 

Note slide: 

-->




---
title: Selettori CSS
level: 4
---

# Selettori di attributi
Aggiungere stile alla sostanza

Questo gruppo di selettori ti dà diversi modi per selezionare elementi in base alla presenza di un certo attributo su un elemento.


```html 
<!-- index.html -->
<p data-course="IMD1005">lorem ipsum dolar</p>
```

```css
/* style.css */
p[data-course] {
  font-size: 3rem;
  color: red;
}
```

<!-- 

Note slide: 

-->


---
title: Selettori CSS
level: 4
---

# Pseudo-classi
Aggiungere stile alla sostanza

Questo gruppo di selettori stila certi stati di un elemento. La pseudo-classe `:hover` per esempio seleziona un elemento solo quando viene passato sopra con il puntatore del mouse.

```html 
<!-- index.html -->
<a href="https://google.ca">Visita Google</a>
```

```css
/* style.css */
a:hover {
  background-color: #eeeeee;
  color: #333333;
}
```

<!-- 

Note slide: 

-->




---
title: Selettori CSS
level: 4
---

# Pseudo-elementi
Aggiungere stile alla sostanza

Gli pseudo-elementi si riferiscono a una certa parte di un elemento piuttosto che all'elemento stesso. Ad esempio, `::first-letter` seleziona sempre la prima lettera del testo all'interno di un elemento (un `<p>` nel caso sottostante).

Nell'esempio sottostante, il selettore pseudo-elemento avrebbe come target solo la lettera `L` nel `<p>` e gli darebbe un colore di sfondo, un colore di font e imposterebbe la dimensione del testo a `3rem`.


```html 
<!-- index.html -->
<p>Lorem ipsum dolar</p>
```

```css
/* style.css */
p::first-letter{
  background-color: #eeeeee;
  color: #333333;
  font-size: 2rem;
}
```


<!-- 

Note slide: 

-->



---
title: Risorse sui selettori CSS
level: 4
layout: image-right
image: /internet/images/slides/css/selectors/books.jpg
---


# Risorse sui selettori
Guide e cheatsheets

* [Combinare e concatenare i selettori CSS - Prof3ssorSt3v3](https://www.youtube.com/watch?v=6VGKD7p4p-w&list=PLyuRouwmQCjl4wTSNbb8RTKZuyMhoIxBe&index=4)
* [C in CSS significa Cascading - Prof3ssorSt3v3](https://www.youtube.com/watch?v=PigxOyVDIQg&list=PLyuRouwmQCjl4wTSNbb8RTKZuyMhoIxBe&index=2)
* [Nth Child - Prof3ssorSt3v3](https://www.youtube.com/watch?v=4NsJtaaC0qI&list=PLyuRouwmQCjl4wTSNbb8RTKZuyMhoIxBe&index=15)
* [Psuedo classes - Prof3ssorSt3v3](https://www.youtube.com/watch?v=0VDx1570X3U&list=PLyuRouwmQCjl4wTSNbb8RTKZuyMhoIxBe&index=14)
* [Selectors - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
* [Selectors - Odin project](https://www.theodinproject.com/lessons/foundations-css-foundations#selectors)
* [Selectors - web.dev](https://web.dev/learn/css/selectors/)
* [Selectors - Learn the web](https://learntheweb.courses/topics/using-css/#targeting-things-in-html)
* [Combinators - Code academy](https://www.codecademy.com/resources/docs/css/combinators)

<!-- 

Slide notes: 

Credit: 

Photo by Greg Rakozy: https://unsplash.com/photos/vw3Ahg4x1tY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText

-->
