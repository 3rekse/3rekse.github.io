import{o,c as l,k as i,q as t,s as r,A as n,e as a,a6 as s}from"../modules/vue-DflCt9hH.js";import{_ as p}from"./cover.vue_vue_type_script_setup_true_lang-DpHAQHhR.js";import{h9 as e}from"../index-BXbHHbuc.js";import{p as c,u,f as d}from"./context-CgID4z_0.js";import"../modules/shiki-Din2pWPP.js";const m=a("h2",null,"Esempio:",-1),f=a("p",null,"Supponiamo di dover verificare se tre variabili a 1 bit a, b, c hanno lo stesso valore.",-1),_=a("p",null,"Un modo per verificare questa uguaglianza a 3 vie è valutare la funzione booleana ¬((a ≠ b) ∨ (a ≠ c)).",-1),h=a("p",null,"Notando che l’operatore binario diverso da può essere realizzato utilizzando un gate Xor, possiamo implementare questa funzione utilizzando il programma HDL mostrato.",-1),b=a("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[a("code",{class:"language-text"},[a("span",{class:"line"},[a("span",null,"CHIP TreUguali {")]),s(`
`),a("span",{class:"line"},[a("span")]),s(`
`),a("span",{class:"line"},[a("span",null,"    IN a,b,c;")]),s(`
`),a("span",{class:"line"},[a("span",null,"    OUT out;")]),s(`
`),a("span",{class:"line"},[a("span")]),s(`
`),a("span",{class:"line"},[a("span",null,"    PARTS:")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Xor(a = a, b = b, out = ab);")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Xor(a = a, b = c, out = ac);")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Or (a=ab, b=ac, out=on);")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Nand(a=on,b=on , out=out );")]),s(`
`),a("span",{class:"line"},[a("span",null,"    }")])])],-1),q={__name:"440",setup(g){return c(e),u(),(v,k)=>(o(),l(p,t(r(n(d)(n(e),439))),{default:i(()=>[m,f,_,h,b]),_:1},16))}};export{q as default};
