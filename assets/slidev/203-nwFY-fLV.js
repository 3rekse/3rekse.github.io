import{o,c as l,k as i,q as t,s as r,A as e,e as a,a6 as s}from"../modules/vue-CzHRG3tJ.js";import{I as p}from"./cover-BiD6vy-U.js";import{_ as c,dp as n}from"../index-Bxv0B-Cu.js";import{p as u,u as d,f as m}from"./context-BRdP0yFI.js";import"../modules/shiki-C5i64R19.js";const _=a("h1",null,"Esempio:",-1),f=a("p",null,"Supponiamo di dover verificare se tre variabili a 1 bit a, b, c hanno lo stesso valore.",-1),h=a("p",null,"Un modo per verificare questa uguaglianza a 3 vie è valutare la funzione booleana ¬((a ≠ b) ∨ (a ≠ c)).",-1),b=a("p",null,"Notando che l’operatore binario diverso da può essere realizzato utilizzando un gate Xor, possiamo implementare questa funzione utilizzando il programma HDL mostrato.",-1),v=a("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[a("code",{class:"language-"},[a("span",{class:"line"},[a("span",null,"CHIP TreUguali {")]),s(`
`),a("span",{class:"line"},[a("span")]),s(`
`),a("span",{class:"line"},[a("span",null,"    IN a,b,c;")]),s(`
`),a("span",{class:"line"},[a("span",null,"    OUT out;")]),s(`
`),a("span",{class:"line"},[a("span")]),s(`
`),a("span",{class:"line"},[a("span",null,"    PARTS:")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Xor(a = a, b = b, out = ab);")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Xor(a = a, b = c, out = ac);")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Or (a=ab, b=ac, out=on);")]),s(`
`),a("span",{class:"line"},[a("span",null,"    Nand(a=on,b=on , out=out );")]),s(`
`),a("span",{class:"line"},[a("span",null,"    }")])])],-1),g={__name:"203",setup(k){return u(n),d(),(z,x)=>(o(),l(p,t(r(e(m)(e(n),202))),{default:i(()=>[_,f,h,b,v]),_:1},16))}},B=c(g,[["__file","/@slidev/slides/203.md"]]);export{B as default};
