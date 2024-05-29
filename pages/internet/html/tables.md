---
layout: intro
title: Tabelle HTML
level: 2
---

# Tabelle HTML

Marcatura delle tabelle HTML



---
title: Tabelle
level: 3
---

# Tabelle
Usate quando devi visualizzare dati tabulari

Composte da un elemento `<table>` e uno o più elementi `<tr>`, `<th>`, e `<td>` all'interno degli elementi `<thead>` e `<tbody>`.

```html
<table>
  <thead>
    <tr>
      <th>Mese</th>
      <th>Utilizzo OC Transpo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gennaio</td>
      <td>300000</td>
    </tr>
    ...
  </tbody>
</table>
```

<!-- 

Note slide: 

-->



---
title: Tabelle
level: 3
---

# Tabelle
Usate quando devi visualizzare dati tabulari

Costruiamo la marcatura HTML per la seguente tabella:

<table>
  <thead>
    <tr>
      <th><strong>Mese</strong></th>
      <th><strong>Utilizzo OC Transpo</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gennaio</td>
      <td>300000</td>
    </tr>
    <tr>
      <td>Febbraio</td>
      <td>320000</td>
    </tr>
    <tr>
      <td>Marzo</td>
      <td>330000</td>
    </tr>
    <tr>
      <td>Aprile</td>
      <td>340000</td>
    </tr>
    <tr>
      <td>Maggio</td>
      <td>290000</td>
    </tr>
    <tr>
      <td>Giugno</td>
      <td>250000</td>
    </tr>
  </tbody>
</table>

<!-- 

Note slide: 

-->



---
title: Tabelle
level: 3
---

# Tabelle
Usate quando devi visualizzare dati tabulari

Iniziamo aggiungendo il nostro elemento `<table>`


```html
<table>
  <!-- Il contenuto della tabella andrà qui -->
</table>
```

<!-- 

Note slide: 

-->


---
title: Tabelle
level: 3
---

# Tabelle
Usate quando devi visualizzare dati tabulari

Poi aggiungiamo i nostri elementi `<thead>` e `<tbody>` al nostro elemento `<table>`


```html
<table>
  <thead>
    <!-- Le intestazioni della nostra tabella andranno qui -->
  </thead>
  <tbody>
    <!-- E il contenuto della nostra tabella andrà qui -->
  </tbody>
</table>
```

<!-- 

Note slide: 

-->



---
title: Tabelle
level: 3
---

# Tabelle
Usate quando devi visualizzare dati tabulari

Poi aggiungiamo la nostra riga di tabella `<tr>` alla nostra sezione di intestazione nel nostro `<thead>`


```html
<table>
  <thead>
    <tr>
      <!-- riga della tabella -->
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
```

<!-- 

Note slide: 

-->


---
title: Tabelle
level: 3
---

# Tabelle
Usate quando devi visualizzare dati tabulari

Poi aggiungiamo un'intestazione di tabella `<th>` per ogni colonna nella nostra riga di intestazione della tabella


```html
<table>
  <thead>
    <tr>
      <!-- L'intestazione per la colonna del mese -->
      <th>Mese</th>
      <!-- L'intestazione per la colonna dell'utilizzo -->
      <th>Utilizzo OC Transpo</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
```

<!-- 

Note slide: 

-->



---
title: Tabelle
level: 3
---

# Tabelle
Usate quando devi visualizzare dati tabulari

Ora possiamo aggiungere un `<tr>` alla nostra sezione `<tbody>` 


```html
<table>
  <thead>
    <tr>
      <th>Mese</th>
      <th>Utilizzo OC Transpo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <!-- I nostri dati di tabella andranno qui -->
    </tr>
  </tbody>
</table>
```

<!-- 

Note slide: 

-->



---
title: Tabelle
level: 3
---

# Tabelle
Usate quando devi visualizzare dati tabulari

Poi possiamo aggiungere i nostri dati di tabella `<td>` alle nostre righe di tabella nella nostra sezione `<tbody>` 


```html
<table>
  <thead>
    <tr>
      <th>Mese</th>
      <th>Utilizzo OC Transpo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <!-- Dati della tabella per la colonna del mese -->
      <td>Gennaio</td>
      <!-- Dati della tabella per la colonna dell'utilizzo -->
      <td>300000</td>
    </tr>
  </tbody>
</table>
```

<!-- 

Note slide: 

-->


---
title: Tabelle
level: 3
---

# Tabelle
Usate quando devi visualizzare dati tabulari

Infine aggiungiamo i nostri dati di tabella `<td>` rimanenti alla nostra tabella


```html
<table>
  <thead>
    <tr>
      <th>Mese</th>
      <th>Utilizzo OC Transpo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gennaio</td>
      <td>300000</td>
    </tr>
     <tr>
      <td>Febbraio</td>
      <td>320000</td>
    </tr>
    ...
  </tbody>
</table>
```

<!-- 

Note slide: 

-->

---
layout: two-cols-header
title: Elementi semantici
level: 3
---

# Tabelle
Usate quando devi visualizzare dati tabulari

::left::

```html
<table>
  <thead>
    <tr>
      <th>Mese</th>
      <th>Utilizzo OC Transpo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gennaio</td>
      <td>300000</td>
    </tr>
     <tr>
      <td>Febbraio</td>
      <td>320000</td>
    </tr>
    ...
  </tbody>
</table>
```

::right::

<table>
  <thead>
    <tr>
      <th><strong>Mese</strong></th>
      <th><strong>Utilizzo OC Transpo</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gennaio</td>
      <td>300000</td>
    </tr>
    <tr>
      <td>Febbraio</td>
      <td>320000</td>
    </tr>
    <tr>
      <td>Marzo</td>
      <td>330000</td>
    </tr>
    <tr>
      <td>Aprile</td>
      <td>340000</td>
    </tr>
    <tr>
      <td>Maggio</td>
      <td>290000</td>
    </tr>
    <tr>
      <td>Giugno</td>
      <td>250000</td>
    </tr>
  </tbody>
</table>


---
title: Tabelle
level: 3
---

# Tabelle
Usate quando devi visualizzare dati tabulari

Altri elementi di tabella includono `<caption>`, `<colgroup>`, `<tfoot>`. Poiché questi elementi non sono usati molto frequentemente, non li copriamo qui.

Sebbene sia al di fuori dell'ambito di questo corso, per tabelle più complesse, potresti imbatterti negli attributi `rowspan` e `colspan`. Questi attributi ti aiutano a disporre tabelle che hanno un alto grado di complessità. 



---
title: Risorse per le tabelle
level: 3
layout: image-right
image: /internet/images/slides/html/tables/you-got-this.jpg
---


# Risorse per le tabelle
Guide e cheatsheets

* [L'elemento Table](https://developer.mozilla.org/it/docs/Web/HTML/Element/table)
* [Imparare sulle tabelle HTML](https://developer.mozilla.org/it/docs/Learn/HTML/Tables/Basics)
* [Costruire e stilizzare tabelle HTML - Prof3ssorSt3v3](https://developer.mozilla.org/it/docs/Learn/HTML/Tables/Basics)
* [Tabelle HTML - W3C](https://www.w3.org/TR/html401/struct/tables.html)
* [Cheatsheet Tabelle HTML](https://www.codecademy.com/learn/learn-html/modules/learn-html-tables/cheatsheet)

<!-- 

Note slide: 

Credit: 

Foto di Prateek Katyal: https://www.pexels.com/photo/black-and-white-laptop-2740956/ 

-->