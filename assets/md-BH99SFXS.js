import{_ as e}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BksLixMb.js";import{o as n,c as r,k as a,l as p,m as o,q as d,s as g,B as t,e as i,aa as s}from"./modules/vue-9M24w38T.js";import{I as c}from"./slidev/default-Baua-wYJ.js";import{u as y,f as A}from"./slidev/context-BrpKgFPm.js";import"./modules/unplugin-icons-Bmhb8--w.js";import"./index-CErdVrjL.js";import"./modules/shiki-D165QSPi.js";const m=i("h1",null,"Configurazione della nostra prima promessa",-1),D=i("p",null,"Promesse JavaScript",-1),B=i("p",null,"Per esempio, ecco come impostiamo una promessa e identifichiamo i valori risolti e rifiutati",-1),u=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-js"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Creare una promessa utilizzando l'oggetto Promise")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," myFirstPromise"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," new"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," Promise"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"resolve"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," reject"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // Impostare un massimo per il nostro numero casuale ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," MAX"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 10"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // Restituisce un numero casuale da 0 a MAX")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," random"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," Math"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"floor"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"Math"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"random"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 10"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // Controlla se il valore del numero casuale è maggiore di 5")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    if"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"random"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," >"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 5"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"        // Successo!")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"        resolve"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Evviva"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    else"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"        // Non così riuscito")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"        reject"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Non abbastanza alto"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"});")])])],-1),_={__name:"promises.md__slidev_1000",setup(f){const{$slidev:C,$nav:v,$clicksContext:h,$clicks:P,$page:$,$renderContext:x,$frontmatter:l}=y();return h.setup(),(F,b)=>{const k=e;return n(),r(c,d(g(t(A)(t(l),999))),{default:a(()=>[m,D,B,p(k,o({},{ranges:[]}),{default:a(()=>[u]),_:1},16)]),_:1},16)}}},V=_;export{V as default};