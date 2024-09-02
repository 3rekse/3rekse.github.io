---
layout: intro
title: HTML Tag con contenuto 
level: 3
---

# Contenuto HTML
📖 Contrassegnare il contenuto con i tag `<p>`, `<h1>` e `<img>`

---
title: Elementi di contenuto
level: 4
---

# Tag di contenuto
Contrassegnare il contenuto
Ecco alcuni dei principali tag di contenuto che utilizziamo nella costruzione delle pagine. Sono stati omessi alcuni tag meno usati per brevità.
* `<p>`
* `<h1>` - `<h6>`
* `<ul>` - `<ol>` - `<dl>`
* `<a>`
* `<br />`
* `<strong>`
* `<em>`
* `<blockquote`
  
---
title: Paragrafi
level: 4
---

# Paragrafi
Contrassegnare il contenuto
Tag di paragrafo per, come avrai indovinato, paragrafi di testo.

```html
<p>Gechi sono un gruppo di lucertole di solito piccole, di solito notturne. Si trovano su tutti i continenti tranne l'Antartide.</p>
<p>
Alcune specie vivono nelle case dove cacciano insetti attratti dalla luce artificiale</p>
```

<div class="text-sm">

[\<p> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

</div>


<!-- 

Slide notes: 

-->

---
titolo: Intestazioni
level: 4 
---

# Intestazioni
Marcare il contenuto

Gli elementi di intestazione ti permettono di specificare quale contenuto della tua pagina è un'intestazione o un sottointestazione.

* Dovrebbe esserci solo un `<h1>` sulla pagina
* Non saltare livelli di intestazione

```html
<!-- 6 livelli di intestazione: -->
<h1>Terra</h1>
  <h2>America del Nord</h2>
    <h3>Canada</h3>
      <h4>Ontario</h4>
        <h5>Ottawa</h5>
          <h6>Kanata</h6>
    <h3>Stati Uniti</h3>
      <h4>California</h4>
  <h2>Africa</h2>
    <h3>Egitto</h3>
      <h4>Cairo</h4>
```

<div class="text-sm">

[\<h1>-\<h6> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

</div>

<!-- 

Slide notes: 

* Although HTML allows it, you should only have one <h1> on the page

-->



---
titolo: Liste
level: 4
---

# Liste
Marcare il contenuto

Ci sono tre tipi di liste che possono essere marcate.

`<ul>` Liste non ordinate - quando l'ordine degli elementi nella lista non importa, come ad esempio una lista di cose da comprare al supermercato.

```html
<ul>
    <li>Latte</li>
    <li>Uova</li>
    <li>Patatine</li>
    <li>Banane</li>
</ul>
```

<div class="text-sm">

[\<ul> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

</div>

<!-- 

Slide notes: 

-->


---
titolo: Liste
level: 4
---

# Liste
Marcare il contenuto

Ci sono tre tipi di liste che possono essere marcate.

`<ol>` Liste ordinate - quando l'ordine degli elementi è importante, come ad esempio le istruzioni in una ricetta.

```html
<ol>
    <li>Aggiungi il latte</li>
    <li>Batti le uova e aggiungile al latte</li>
    <li>Schiaccia le banane e mettile da parte</li>
</ol>

```

<div class="text-sm">

[\<ol> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)

</div>

<!-- 

Slide notes: 

-->


---
title: Liste di definizione
level: 4
---

# Liste
Marcare il contenuto

Ci sono tre tipi di liste che possono essere marcate.

`<dl>` Liste di definizione - per definire coppie di dati e valori.

```html
<dl>
    <dt>Lunghezza</dt>
    <dd>12 metri</dd>

    <dt>Massa</dt>
    <dd>5.4 tonnellate metriche</dd>
</dl>

```

<div class="text-sm">

[\<dl> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

</div>

<!-- 

Slide notes: 

-->



---
title: Collegamenti
level: 4
---

# Collegamenti
Marcare il contenuto

I collegamenti sono la chiave di tutto il web! Ecco come creare un collegamento.

Innanzitutto identifica il testo a cui vuoi aggiungere un collegamento.

```html
<p>Buster ama andare dal toelettatore di nome <a>Martin</a></p>
```

Poi aggiungi l'attributo href al tag `<a>`.

```html
<p>Buster ama andare dal toelettatore di nome <a href="">Martin</a></p>
```

Infine, aggiungi l'indirizzo web all'attributo href.

```html
<p>Buster ama andare dal toelettatore di nome <a href="https://martin.cutshair.com">Martin</a></p>
```

<div class="text-sm">

[\<a> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

</div>

<!-- 

Slide notes: 

-->

---
title: Immagini
level: 4
---

# Immagini
Marcare il contenuto

Il tag `<img>` viene utilizzato per visualizzare le immagini su una pagina web.

* Le immagini necessitano di due attributi per specificare informazioni aggiuntive sull'immagine:
  * `src` - la posizione dell'immagine e;
  * `alt` - la descrizione delle informazioni significative nell'immagine (o vuoto se l'immagine è decorativa)

```html
<img src="buster.jpg" alt="Foto di Buster" />
```

<div class="text-sm">

[\<img /> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

</div>

<!-- 

Slide notes: 

-->

---
title: Interruzione di linea
level: 4
---

# Interruzione di linea
Marcare il contenuto

Se hai mai bisogno di forzare un'interruzione di linea (invio / nuova linea) nel tuo contenuto, puoi utilizzare il tag `<br />` per ottenerlo.

  * `br />` - Tag auto-chiuso e deve avere la barra obliqua finale `/`
  * `<br/>` - Può anche essere scritto senza lo spazio

```html
<p>Questo è un paragrafo<br />
   E questo è su una nuova riga<br />
   Anche questo è su una nuova riga<br />
   E un'altra nuova riga per fortuna</p>
```

<div class="text-sm">

[\<br /> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)

</div>

<!-- 

Slide notes: 

-->


---
title: Strong
level: 4
---

# Strong tag
Marcatura del contenuto

L'elemento di forte importanza

L'elemento `<strong>` indica che il suo contenuto ha una forte importanza, serietà o urgenza.

* I browser di solito rendono il contenuto in grassetto.
* **Nota:** Non utilizzare il tag `<b>` per aggiungere enfasi o importanza al contenuto.

```html
<p>... la regola più importante, la regola che non puoi mai dimenticare, non importa quanto pianga, non importa quanto mendichi: <strong>mai nutrirlo dopo mezzanotte</strong>.</p>
```

<div class="text-sm">

[\<strong> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)

</div>

<!-- 

Slide notes: 

-->

---
title: Tag di enfasi
level: 4
---

# Tag di enfasi
Marcare il contenuto

L'elemento `<em>` contrassegna il testo che ha un enfasi di stress.

* I browser di solito rendono il contenuto in corsivo.

```html
<p>Qualcosa qualcosa qualcosa<em>questo è importante</em> qualcosa</p>

```

<div class="text-sm">

[\<em> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)

</div>

<!-- 

Slide notes: 

-->

---
title: Blockquote
level: 4
---

# Blockquote
Marcare il contenuto

L'elemento `<blockquote>` indica che il testo racchiuso è una citazione estesa.

* Di solito, questo viene reso visivamente dall'indentazione (vedi Note per come cambiarlo).

```html
<blockquote>
    <p>La verità può essere puzzolente. Può richiedere un po' di lavoro per affrontarla.
  Può essere controintuitiva. Può contraddire pregiudizi profondamente radicati.
  Potrebbe non essere consonante con ciò che desideriamo disperatamente che sia vero. Ma le nostre preferenze non determinano ciò che è vero.</p>
</blockquote>

```

<div class="text-sm">

[\<blockquote> - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)

</div>

<!-- 

Slide notes: 

-->
