import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Ch6XY4Fe.js";import{o,c as d,k as s,l as a,m as h,q as p,s as g,B as l,e as i,aa as t}from"./modules/vue-9M24w38T.js";import{I as c}from"./slidev/default-Bxps8tHJ.js";import{u as m,f as y}from"./slidev/context-DrjLkDUn.js";import"./modules/unplugin-icons-Bmhb8--w.js";import"./index-apiDnJ6J.js";import"./modules/shiki-D165QSPi.js";const _=i("h1",null,"Una nota sull’annidamento",-1),f=i("p",null,"Le basi",-1),u=i("p",null,"Puoi inserire elementi all’interno di altri elementi. Questo è chiamato annidamento. A volte ci riferiamo anche a questi elementi come aventi una relazione genitore-figlio.",-1),D=i("p",null,"Ricorda che gli elementi devono essere annidati correttamente.",-1),B=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-html"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"p"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"text-red"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Buster è "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"strong"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"molto"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"strong"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," affamato"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"p"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),A=i("p",null,"L’elemento sopra funzionerà correttamente.",-1),E=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-html"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"p"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"text-red"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Buster è "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"strong"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"molto affamato"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"p"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"></"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"strong"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),C=i("p",null,[t("L’elemento sopra non è strutturato correttamente perché il tag "),i("code",null,"<p>"),t(" viene chiuso prima del tag "),i("code",null,"<strong>"),t(".")],-1),v={__name:"essentials.md__slidev_755",setup(x){const{$slidev:$,$nav:F,$clicksContext:k,$clicks:b,$page:P,$renderContext:L,$frontmatter:n}=m();return k.setup(),(z,N)=>{const e=r;return o(),d(c,p(g(l(y)(l(n),754))),{default:s(()=>[_,f,u,D,a(e,h({},{ranges:[]}),{default:s(()=>[B]),_:1},16),A,a(e,h({},{ranges:[]}),{default:s(()=>[E]),_:1},16),C]),_:1},16)}}},Q=v;export{Q as default};