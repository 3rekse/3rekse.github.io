import{o as h,c as t,k as n,e as i,aa as s,q as r,s as p,B as l}from"./modules/vue-DBgDjl02.js";import{I as d}from"./slidev/default-5WlvNUCI.js";import{u as o,f as y}from"./slidev/context-DrNUMLnm.js";import"./index-CZq52PTC.js";import"./modules/shiki-CR29Tdxk.js";const g={__name:"arrays.md__slidev_943",setup(A){const{$slidev:c,$nav:D,$clicksContext:e,$clicks:u,$page:B,$renderContext:m,$frontmatter:k}=o();return e.setup(),(C,a)=>(h(),t(d,r(p(l(y)(l(k),942))),{default:n(()=>a[0]||(a[0]=[i("h1",null,"Array in JavaScript",-1),i("p",null,"Array",-1),i("ul",null,[i("li",null,"Gli array in JavaScript possono essere ridimensionati e possono contenere un mix di tipi di dati"),i("li",null,"Usiamo un valore indice, partendo da zero (0) per accedere agli elementi di un array")],-1),i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-js"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // Dichiarare un array vuoto ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," myColourArray"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," [];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // L'array viene ridimensionato per avere ora tre (3) elementi al suo interno")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    myColourArray"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ["),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"viola"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"blu"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"rosa acceso"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // Accedere al secondo elemento dell'array usando il valore dell'indice 1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    myColourArray"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"["),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"oro"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // Accedere a ciascun elemento usando l'indice per output dei tre elementi dell'array")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    console"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"myColourArray"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"["),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"0"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    console"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"myColourArray"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"["),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    console"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"myColourArray"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"["),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]);")]),s(`
`),i("span",{class:"line"})])],-1)])),_:1},16))}},b=g;export{b as default};