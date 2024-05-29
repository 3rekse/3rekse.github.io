---
layout: intro
title: Fondamentali del CSS
level: 2
---

# Fondamentali del CSS

iniziare con css


---
title: cos'è css
level: 3
layout: image-right
image: /internet/images/slides/css/essentials/css-logo.jpg
---


# cos'è css?
aggiungere stile alla sostanza

i fogli di stile a cascata (css) sono il codice che stila il contenuto web.

è un linguaggio di fogli di stile utilizzato per descrivere la presentazione di un documento scritto in html. css descrive come gli elementi dovrebbero essere resi sullo schermo, su carta, nel discorso o su altri media.

<!-- 

note slide: 

foto di realtoughcandy.com: https://www.pexels.com/photo/man-love-people-woman-11035386/

-->



---
title: sintassi css
level: 3
---

# sintassi di base
aggiungere stile alla sostanza

css funziona selezionando un elemento html (come un paragrafo `<p>`) e poi alterando le proprietà dell'elemento (come il colore) e applicando un valore specifico a quella proprietà (come rosso). 

```css
p {
        color: red;
}

```

**note:**

* `p` - selettore
* `color` - proprietà
* `red` - valore
* `color: red` - dichiarazione 


<!-- 

note slide: 

-->


---
title: sintassi css
level: 3
---

# sintassi di base
aggiungere stile alla sostanza

* **selettore:** questo è il nome dell'elemento html all'inizio del set di regole. definisce l'elemento o gli elementi da stilizzare (in questo esempio, gli elementi `<p>`). per stilizzare un elemento diverso, cambia il selettore
* **proprietà:** questi sono i modi in cui puoi stilizzare un elemento html. (in questo esempio, il colore è una proprietà degli elementi `<p>`.) in css, scegli quali proprietà vuoi influenzare nella regola.
* **valore della proprietà:** a destra della proprietà, dopo i due punti, c'è il valore della proprietà. questo sceglie una delle molte possibili apparenze per una determinata proprietà. (ad esempio, ci sono molti valori di colore oltre al rosso.)
* **dichiarazione:** questa è una singola regola come color: red;. specifica quali delle proprietà dell'elemento vuoi stilizzare.

<!-- 

note slide: 

-->



---
title: sintassi css
level: 3
---

# set di regole css
aggiungere stile alla sostanza

* a parte il selettore, ogni set di regole deve essere racchiuso tra parentesi graffe. (`{}`)
* all'interno di ogni dichiarazione, devi usare i due punti (`:`) per separare la proprietà dal suo valore o valori.
* all'interno di ogni set di regole, devi usare il punto e virgola (`;`) per separare ogni dichiarazione dalla successiva.


<!-- 

note slide: 

-->



---
title: sintassi css
level: 3
---

# aggiungere css a html
aggiungere stile alla sostanza

## css esterno 

il css esterno contenuto in uno o più file css è il metodo più comune utilizzato per aggiungere css a un contenuto html. per fare questo creiamo file css separati e poi li collegiamo da dentro un file html nel tag `<head>` con un elemento `<link>` auto-chiudente. 

```html 
<!-- index.html -->
<head>
    <link rel="stylesheet" href="style.css" />
</head>
```

```css
/* style.css */
body {
    background-color: #eeeeee;
}

```


<!-- 

note slide: 

-->




---
title: sintassi css
level: 3
---

# aggiungere css a html
aggiungere stile alla sostanza

## css interno 

il css interno (o css incorporato) comporta l'aggiunta di css direttamente alla pagina html all'interno dell'elemento `<head>` dentro un tag `<style>`. questo modo di includere css è molto meno popolare perché non puoi riutilizzare il tuo css su più pagine html.

```html 
<!-- index.html -->
<head>
    ...
    <style>
        /* styles */
        body {
            background-color: #eeeeee;
        }
    </style>
    ...
</head>
```


<!-- 

note slide: 

-->



---
title: sintassi css
level: 3
---

# aggiungere css a html
aggiungere stile alla sostanza

## css inline 

il css inline rende possibile aggiungere stili direttamente agli elementi html, anche se questo metodo non è così consigliato o ampiamente utilizzato. una differenza chiave nella sintassi qui è che non usi un selettore, poiché gli stili sono applicati direttamente all'elemento.

```html 
<!-- index.html -->
<body>
    <main>
        <h1 style="color: red;background-color: black;">...</h1>
    </main>
</body>
```


<!-- 

note slide: 

-->




---
title: basi css
level: 3
---

# cascata di css
aggiungere stile alla sostanza




<!-- 

note slide: 

-->



---
title: basi css
level: 3
---

# specificità
aggiungere stile alla sostanza




<!-- 

note slide: 

-->



---
title: basi css
level: 3
---

# ereditarietà
aggiungere stile alla sostanza




<!-- 

note slide: 

-->



---
title: basi css
level: 3
---

# colore
aggiungere stile alla sostanza




<!-- 

note slide: 

-->



---
title: basi css
level: 3
---

# unità css
aggiungere stile alla sostanza




<!-- 

note slide: 

-->





---
title: risorse css
level: 3
layout: image-right
image: /internet/images/slides/css/essentials/css-books.jpg
---


# risorse css
guide e cheatsheets

* [valori e unità css - mdn](https://developer.mozilla.org/en-us/docs/learn/css/building_blocks/values_and_units)
* [css - odin project](https://www.theodinproject.com/lessons/foundations-css-foundations)
* [css - code academy](https://www.codecademy.com/resources/docs/css)
* [introduzione a css - prof3ssorst3v3](https://www.youtube.com/watch?v=kfkscnha-8m&list=plyurouwmqcjl4wtsnbb8rtkzuymhoixbe)
* [basi css - mdn](https://developer.mozilla.org/en-us/docs/learn/getting_started_with_the_web/css_basics)
* [css tricks](https://css-tricks.com)
* [css - learn the web](https://learntheweb.courses/topics/using-css/#start)

<!-- 

note slide: 

credito: 

foto di kobu agency: https://unsplash.com/photos/iparhaxetrk?utm_source=unsplash&utm_medium=referral&utm_content=creditcopytext

-->