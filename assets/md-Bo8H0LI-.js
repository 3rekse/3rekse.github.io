import{_ as i}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-uDhOKYWm.js";import{o as r,c as p,k as e,l as c,m as u,q as d,s as m,B as n,e as a,aa as s}from"./modules/vue-9M24w38T.js";import{_}from"./slidev/cover.vue_vue_type_script_setup_true_lang-DVid9LhZ.js";import{u as f,f as h}from"./slidev/context-mWja_fIZ.js";import"./modules/unplugin-icons-Bmhb8--w.js";import"./index-l2FSSgYu.js";import"./modules/shiki-D165QSPi.js";const b=a("h2",null,"Esempio:",-1),g=a("p",null,"Supponiamo di dover verificare se tre variabili a 1 bit a, b, c hanno lo stesso valore.",-1),k=a("p",null,"Un modo per verificare questa uguaglianza a 3 vie è valutare la funzione booleana ¬((a ≠ b) ∨ (a ≠ c)).",-1),v=a("p",null,"Notando che l’operatore binario diverso da può essere realizzato utilizzando un gate Xor, possiamo implementare questa funzione utilizzando il programma HDL mostrato.",-1),z=a("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[a("code",{class:"language-text"},[a("span",{class:"line"},[a("span",null,"CHIP TreUguali {")]),s(`
`),a("span",{class:"line"},[a("span")]),s(`
`),a("span",{class:"line"},[a("span",null,"    IN a,b,c;")]),s(`
`),a("span",{class:"line"},[a("span",null,"    OUT out;")]),s(`
`),a("span",{class:"line"},[a("span")]),s(`
`),a("span",{class:"line"},[a("span",null,"    PARTS:")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Xor(a = a, b = b, out = ab);")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Xor(a = a, b = c, out = ac);")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Or (a=ab, b=ac, out=on);")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Nand(a=on,b=on , out=out );")]),s(`
`),a("span",{class:"line"},[a("span",null,"    }")])])],-1),$={__name:"algebra.md__slidev_440",setup(x){const{$slidev:C,$nav:N,$clicksContext:o,$clicks:P,$page:B,$renderContext:T,$frontmatter:l}=f();return o.setup(),(q,S)=>{const t=i;return r(),p(_,d(m(n(h)(n(l),439))),{default:e(()=>[b,g,k,v,c(t,u({},{ranges:[]}),{default:e(()=>[z]),_:1},16)]),_:1},16)}}},w=$;export{w as default};
