import{_ as n}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Ch6XY4Fe.js";import{o as k,c as r,k as a,l as o,m as p,q as d,s as c,B as t,e as s,aa as i}from"./modules/vue-9M24w38T.js";import{I as g}from"./slidev/default-Bxps8tHJ.js";import{u as y,f as _}from"./slidev/context-DrjLkDUn.js";import"./modules/unplugin-icons-Bmhb8--w.js";import"./index-apiDnJ6J.js";import"./modules/shiki-D165QSPi.js";const A=s("h1",null,"Introduzione",-1),m=s("p",null,"JavaScript fetch",-1),u=s("p",null,[i("Poiché "),s("code",null,"fetch()"),i(" restituisce una Promise, dobbiamo usare il metodo "),s("code",null,"catch()"),i(" per gestire eventuali situazioni di errore.")],-1),f=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Indirizzo dell'API ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," API_URL"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"https://pokeapi.co/api/v2/pokemon/8"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Esecuzione del metodo fetch")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"fetch"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"API_URL"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    ."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"then"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"response"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"        // Gestisci la risposta")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    })")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    ."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"catch"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"response"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"        // Ops, qualcosa è andato storto")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    });")])])],-1),D={__name:"fetch.md__slidev_1028",setup(B){const{$slidev:v,$nav:C,$clicksContext:e,$clicks:P,$page:$,$renderContext:x,$frontmatter:l}=y();return e.setup(),(I,z)=>{const h=n;return k(),r(g,d(c(t(_)(t(l),1027))),{default:a(()=>[A,m,u,o(h,p({},{ranges:[]}),{default:a(()=>[f]),_:1},16)]),_:1},16)}}},S=D;export{S as default};