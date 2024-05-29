---
layout: intro
title: Modello di box CSS
level: 2
---

# Modello di box CSS

Tutto è un box in CSS


---
title: Cos'è il modello di box CSS
level: 3
layout: image-right
image: /internet/images/slides/css/box-model/stack.jpg
---


# Modello di box
Tanti box

Ogni singolo elemento HTML renderizzato sullo schermo è un box rettangolare. Questi box possono essere annidati (avere altri box al loro interno) o possono stare da soli. 

Capire questi box è fondamentale per essere in grado di creare layout più complessi con CSS.

Le seguenti slide illustrano il modello di box e come dimensionare un box utilizzando `margin`, `padding` e `border`.

<!-- 

Note slide: 

Foto di BERK OZDEMIR: https://www.pexels.com/photo/people-reading-books-in-library-3779187/

-->




---
title: Modello di box CSS
level: 3
---

# Box di blocco e inline
Tutto è un box

Ci sono due categorie di box in CSS, i box **di blocco** e i box **inline**.

La differenza tra i due è che i box di blocco passeranno a una nuova riga e occuperanno tutta la larghezza disponibile per riempire lo spazio disponibile nel loro contenitore. Mentre gli elementi inline non passeranno a una nuova riga o occuperanno più larghezza di quanto ne abbiano bisogno.

Puoi impostare il tipo di box utilizzando la proprietà CSS `display`, anche se di default la maggior parte degli elementi HTML sono di blocco. Alcuni elementi HTML, come `<a>`, `<span>`, `<em>` e `<strong>` utilizzano inline come loro tipo di display di default.

<!-- 

Note slide: 

-->


---
title: Modello di box CSS
level: 3
---

# Box di blocco e inline
Tutto è un box

Ecco un esempio di elementi di blocco e inline. 

<div class="border border-gray-300 p-2">
    <div class="mb-10 pl-2 border border-5 border-red-200">
        <p>Questo è un box di blocco <span class="text-xs text-gray-500">(come un tag <code>p</code>)</span></p>
    </div>
    <div class="mb-10">
        <p class="p-2 inline border border-5 border-blue-200">Inline <span class="text-xs text-gray-500">(come un tag <code>span</code>)</span></p>
        <p class="ml-2 p-2 inline border border-5 border-blue-200">Inline</p>
        <p class="ml-2 p-2 inline border border-5 border-blue-200">Inline</p>
        <p class="ml-2 p-2 inline border border-5 border-blue-200">Inline</p>
    </div>
    <div class="mb-2 pl-2 border border-5 border-red-200">
        <p>E siamo tornati al box di blocco <span class="text-xs text-gray-500">(come un tag <code>p</code>)</span></p>
    </div>
</div>


<!-- 

Note slide: 

-->


---
title: Modello di box CSS
level: 3
---

# Parti di un box
Tutto è un box

* **Contenuto:**  L'area dove viene visualizzato il tuo contenuto; dimensionalo utilizzando proprietà come `width` e `height`.
* **Padding:** Il padding si trova attorno al contenuto come spazio bianco; dimensionalo utilizzando `padding` e proprietà correlate.
* **Bordo:** Il box del bordo avvolge il contenuto e qualsiasi padding; dimensionalo utilizzando `border` e proprietà correlate.
* **Margine:** Il margine è lo strato più esterno, avvolge il contenuto, il padding e il bordo come spazio bianco tra questo box e altri elementi; dimensionalo utilizzando `margin` e proprietà correlate.


<!-- 

Note slide: 

-->


---
layout: center
title: Modello di box CSS
level: 3
---

<img src="/internet/images/slides/css/box-model/model.png" alt="" />

<!-- 

Note slide: 

-->


---
title: Margine
level: 3
---

# Margine
Tutto è un box


<!-- 

Note slide: 

-->



---
title: Padding
level: 3
---

# Padding
Tutto è un box


<!-- 

Note slide: 

-->



---
title: Bordo
level: 3
---

# Bordo
Tutto è un box


<!-- 

Note slide: 

-->


---
title: Modello di box CSS
level: 3
---

# I due modelli di dimensionamento
Tutto è un box

La proprietà CSS `box-sizing` ci permette di includere il padding e il bordo nel calcolo dell'altezza e della larghezza di un elemento.


<!-- 

Note slide: 

-->



---
title: Risorse sul modello di box CSS
level: 3
layout: image-right
image: /internet/images/slides/css/selectors/books.jpg
---


# Risorse sul modello di box
Guide e cheatsheets

* [Modello di box - Odin project](https://www.theodinproject.com/lessons/foundations-the-box-model)
* [Modello di box - Learn the web](https://learntheweb.courses/topics/box-model/)
* [Dimensionamento del box - Prof3ssorSt3v3](https://www.youtube.com/watch?v=EfCE-a31OiM&list=PLyuRouwmQCjl4wTSNbb8RTKZuyMhoIxBe&index=52) 
* [Modello di box - MDN](https://developer.mozilla.org/it/docs/Learn/CSS/Building_blocks/The_box_model)
* [Modello di box - Code academy](https://www.codecademy.com/resources/docs/css/box-model)

<!-- 

Note slide: 

Credit: 


-->