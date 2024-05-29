---
layout: intro
title: CSS Flexbox 
level: 2
---

# css flexbox

💪 metti alla prova le tue abilità e costruisci layout come un boss


---
title: quindi cos'è flexbox
level: 3
layout: image-right
image: /internet/images/slides/css/flex-box/boxes.jpg
---


# basi di flexbox
introduzione a css flexbox

## cos'è? 

flexbox ti permette di controllare il flusso degli elementi in un contenitore posizionando gli elementi in righe e colonne.


## perché "flex"?

flexbox ci permette di distribuire lo spazio dinamicamente tra elementi di dimensioni sconosciute, da qui il termine "flex"



<!-- 

note slide: 

credito: 

foto di ayrat: https://www.pexels.com/photo/photograph-of-brown-cardboard-boxes-12354555/

-->


---
title: flexbox
level: 3
layout: center
---

<p>contenitore flex box</p>
<div class="border-dotted border-4 border-gray w-3xl">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

    display: flex;
}

ul.flex-demo li {
    margin: 0px;
    padding: 30px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->


---
title: flexbox
level: 3
---

# inizia con un contenitore flex

stiamo creando un contenitore flex e tutti i figli di quel contenitore diventano elementi flex.

```html

<ul>
    <li>elemento 1</li>
    <li>elemento 2</li>
    <li>elemento 3</li>
</ul>

```


```css

ul {
    display: flex;
}

```


<!-- 

note slide: 


-->



---
title: flexbox
level: 3
---

# direzione flex

```css

ul {
    display: flex;
    flex-direction: row;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

    display: flex;
}

ul.flex-demo li {
    margin: 0px;
    padding: 30px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->



---
title: flexbox
level: 3
---

# direzione flex

```css

ul {
    display: flex;
    flex-direction: row-reverse;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

    display: flex;
    flex-direction: row-reverse;
}

ul.flex-demo li {
    margin: 0px;
    padding: 30px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->

---
title: flexbox
level: 3
---

# direzione flex

```css

ul {
    display: flex;
    flex-direction: column;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

    display: flex;
    flex-direction: column;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->


---
title: flexbox
level: 3
---

# giustifica contenuto
possiamo distribuire gli elementi lungo l'asse in cui sono disposti gli elementi flex utilizzando la proprietà `justify-content`.

```css

ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

   display: flex;
    flex-direction: row;
    justify-content: center;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->


---
title: flexbox
level: 3
---

# giustifica contenuto
possiamo distribuire gli elementi lungo l'asse in cui sono disposti gli elementi flex utilizzando la proprietà `justify-content`.

```css

ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

   display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->


---
title: flexbox
level: 3
---

# giustifica contenuto
possiamo distribuire gli elementi lungo l'asse in cui sono disposti gli elementi flex utilizzando la proprietà `justify-content`.

```css

ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

   display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->



---
title: flexbox
level: 3
---

# giustifica contenuto
possiamo distribuire gli elementi lungo l'asse in cui sono disposti gli elementi flex utilizzando la proprietà `justify-content`.

```css

ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

   display: flex;
    flex-direction: row;
    justify-content: space-around;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->
---
title: flexbox
level: 3
---

# justify content
possiamo distribuire gli elementi lungo l'asse che gli elementi flex sono disposti utilizzando la proprietà `justify-content`.

```css

ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

   display: flex;
    flex-direction: row;
    justify-content: space-between;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>

<!-- 

slide notes: 


-->

---
title: flexbox
level: 3
---

# flex wrap

```css

ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

```

<div class="border-dotted border-4 border-gray w-lg">
<ul class="flex-demo w-xl">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

   display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

ul.flex-demo li {
    width: 200px;
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->


---
title: flexbox
level: 3
---

# flex wrap

```css

ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

```

<div class="border-dotted border-4 border-gray w-lg">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

   display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}

ul.flex-demo li {
    width: 200px;
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->





---
title: flexbox
level: 3
---

# allineamento elementi
possiamo distribuire gli elementi lungo l'asse trasversale che gli elementi flex sono disposti utilizzando la proprietà `align-items`.

```css

ul {
    display: flex;
    flex-direction: row;
    align-items: center;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;
    height: 150px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->



---
title: flexbox
level: 3
---

# allineamento elementi
possiamo distribuire gli elementi lungo l'asse trasversale che gli elementi flex sono disposti utilizzando la proprietà `align-items`.

```css

ul {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;
    height: 150px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->




---
title: flexbox
level: 3
---

# allineamento elementi
possiamo distribuire gli elementi lungo l'asse trasversale che gli elementi flex sono disposti utilizzando la proprietà `align-items`.

```css

ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;
    height: 150px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->


---
title: flexbox
level: 3
---

# allineamento elementi
possiamo distribuire gli elementi lungo l'asse trasversale che gli elementi flex sono disposti utilizzando la proprietà `align-items`.

```css

ul {
    display: flex;
    flex-direction: row;
    align-items: stretch;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;
    height: 150px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 

-->

---
title: flexbox
level: 3
---

# allineamento degli elementi
possiamo distribuire gli elementi lungo l'asse trasversale che gli elementi flex sono disposti utilizzando la proprietà `align-items`.

```css

ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

ul li:nth-child(3) { 
    align-self: stretch; 
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;
    height: 100px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(3) { align-self: stretch; }

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->


---
title: flexbox
level: 3
---

# flex grow
possiamo utilizzare la proprietà `flex-grow` per far occupare più spazio agli elementi flex

```css

ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

ul li:nth-child(1) { 
    flex-grow: 1;
}



```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { 
    flex-grow: 1;
}


ul.flex-demo li:nth-child(1) { background-color: #f72585; }

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->


---
title: flexbox
level: 3
---

# flex grow
possiamo utilizzare la proprietà `flex-grow` per far occupare più spazio agli elementi flex

```css

ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

ul li:nth-child(1) { 
    flex-grow: 2;
}

ul li:nth-child(2) { 
    flex-grow: 1;
}


```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
}

ul.flex-demo li:nth-child(1) { 
    flex-grow: 2;
}

ul.flex-demo li:nth-child(2) { 
    flex-grow: 1;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->


---
title: flexbox
level: 3
---

# flex basis
possiamo utilizzare la `flex-basis` per richiedere che l'elemento flex sia di una certa larghezza (o altezza in modalità colonna)

```css

ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

ul li { 
    flex-basis: 250px;
}

```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
    flex-basis: 250px;
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->


---
title: flexbox
level: 3
---

# gap
possiamo utilizzare la proprietà `gap` per aggiungere uno spazio tra gli elementi flex nella direzione dell'asse principale.

```css

ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 60px;
}
```

<div class="border-dotted border-4 border-gray w-full">
<ul class="flex-demo">
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
</div>

<style>
ul.flex-demo {
    padding: 0px !important;
    margin: 10px !important;
    list-style: none;
    background-color: white;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 60px;
}

ul.flex-demo li {
    margin: 0px;
    padding: 10px;
   
}

ul.flex-demo li:nth-child(1) { background-color: #f72585; }

ul.flex-demo li:nth-child(1) { background-color: #f72585; }
ul.flex-demo li:nth-child(2) { background-color: #b5179e; }
ul.flex-demo li:nth-child(3) { background-color: #7209b7; }


</style>


<!-- 

note slide: 


-->


---
title: risorse flexbox
level: 3
layout: image-right
image: /internet/images/slides/css/flex-box/fallen-boxes.jpg
---


# risorse flexbox
guide e cheatsheets

* [una guida completa a flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [cheatsheet flexbox](https://yoksel.github.io/flex-cheatsheet/)
* [flexbox froggy](https://flexboxfroggy.com)
* [un'altra cheatsheet flexbox](https://www.sketchingwithcss.com/samplechapter/cheatsheet.html)
* [articolo sulla dimensione degli elementi flexbox](https://www.smashingmagazine.com/2018/09/flexbox-sizing-flexible-box/)

<!-- 

note slide: 

credito: 

foto di cottonbro studio: https://www.pexels.com/photo/person-in-black-leather-boots-sitting-on-brown-cardboard-boxes-4553277/

-->