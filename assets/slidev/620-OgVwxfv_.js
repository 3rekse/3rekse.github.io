import{o,c as r,k as t,q as s,s as n,A as a,e}from"../modules/vue-DflCt9hH.js";import{_ as c}from"./intro-CPq_o4ug.js";import{j$ as i}from"../index-BXbHHbuc.js";import{p as u,u as p,f as m}from"./context-CgID4z_0.js";import"../modules/shiki-Din2pWPP.js";const l=e("p",null,"Un semplice esempio di come un VMM deve interporsi su alcune operazioni sorge quando un processo in esecuzione su un dato sistema operativo cerca di fare una chiamata di sistema.",-1),d=e("p",null,"Ad esempio, il processo potrebbe cercare di chiamare open() su un file, o potrebbe chiamare read() per ottenere dati da esso, o potrebbe chiamare fork() per creare un nuovo processo.",-1),_=e("p",null,"In un sistema senza virtualizzazione, una chiamata di sistema viene eseguita con un’istruzione speciale; su MIPS, è un’istruzione di trap, e su x86, è l’istruzione int (un interrupt) con l’argomento 0x80.",-1),f=e("p",null,"Ecco la chiamata di libreria open su FreeBSD [B00] (ricorda che il tuo codice C prima fa una chiamata di libreria nella libreria C, che poi esegue la sequenza di assembly appropriata per effettivamente emettere l’istruzione di trap e fare una chiamata di sistema)",-1),C={__name:"620",setup(h){return u(i),p(),(z,b)=>(o(),r(c,s(n(a(m)(a(i),619))),{default:t(()=>[l,d,_,f]),_:1},16))}};export{C as default};