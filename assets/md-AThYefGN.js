import{_ as k}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DJIuZV0r.js";import{o as n,c as r,k as a,l as o,m as d,q as p,s as c,B as t,e as i,aa as s}from"./modules/vue-9M24w38T.js";import{I as g}from"./slidev/default-p8i6ujn3.js";import{u as y,f as u}from"./slidev/context-B14DBQu9.js";import"./modules/unplugin-icons-Bmhb8--w.js";import"./index-D5LvUICJ.js";import"./modules/shiki-D165QSPi.js";const m=i("h1",null,"Validazione lato client",-1),D=i("p",null,"I moduli consentono agli utenti di fornire dati di input",-1),B=i("p",null,"HTML ha alcuni attributi che possiamo utilizzare per validare l’input che il client sta fornendo.",-1),_=i("p",null,"Non solo possiamo rendere specifici campi del modulo obbligatori, ma possiamo anche validare che i numeri siano un intervallo specifico, o che l’input di testo segua uno schema specifico.",-1),f=i("p",null,[s("Il codice di esempio qui sotto mostra come utilizzare l’attributo "),i("code",null,"required"),s(" per rendere un input obbligatorio.")],-1),A=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-html"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"form"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  <"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"label"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," for"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"password"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Name (required)"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"label"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  <"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"input"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," id"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"fullname"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"fullname"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," type"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"text"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," required"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"required"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"form"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),C={__name:"forms.md__slidev_807",setup(b){const{$slidev:E,$nav:v,$clicksContext:e,$clicks:$,$page:x,$renderContext:q,$frontmatter:l}=y();return e.setup(),(z,F)=>{const h=k;return n(),r(g,p(c(t(u)(t(l),806))),{default:a(()=>[m,D,B,_,f,o(h,d({},{ranges:[]}),{default:a(()=>[A]),_:1},16)]),_:1},16)}}},j=C;export{j as default};