import{o as n,c as l,k as t,q as o,s as r,A as e,e as a,a6 as s}from"../modules/vue-DflCt9hH.js";import{I as p}from"./default-D8n-L-kp.js";import{k3 as i}from"../index-BXbHHbuc.js";import{p as c,u as d,f as u}from"./context-CgID4z_0.js";import"../modules/shiki-Din2pWPP.js";const m=a("h3",null,"Flusso della Chiamata di Sistema Senza Virtualizzazione",-1),h=a("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[a("code",{class:"language-text"},[a("span",{class:"line"},[a("span",null,"Processo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   1. Esegue le istruzioni (add,load,etc)   ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   2. Chiamata di sistema: Trap al sistema operativo")]),s(`
`),a("span",{class:"line"},[a("span",null,"HardWare switch a kernel mode ")]),s(`
`),a("span",{class:"line"},[a("span",null,"Sistema operativo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   3. Gestore di trap del sistema operativo ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   4. Decodifica trap ed esegue la routine di sistema appropriata; ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   5. Quando finito: ritorno dal trap")]),s(`
`),a("span",{class:"line"},[a("span",null,"HardWare switch a user mode ")]),s(`
`),a("span",{class:"line"},[a("span",null,"Processo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   6. Riprendi l'esecuzione (@PC dopo il trap)")])])],-1),f=a("h3",null,"Flusso della Chiamata di Sistema Con Virtualizzazione",-1),k=a("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[a("code",{class:"language-text"},[a("span",{class:"line"},[a("span",null,"Processo")]),s(`
`),a("span",{class:"line"},[a("span",null,"    1. Chiamata di sistema: Trap al sistema operativo")]),s(`
`),a("span",{class:"line"},[a("span",null,"Virtaul Machine Monitor ")]),s(`
`),a("span",{class:"line"},[a("span",null,"    2. Processo trappato: Chiamata al gestore di trap del sistema operativo (con privilegi ridotti)")]),s(`
`),a("span",{class:"line"},[a("span",null,"Sistema operativo")]),s(`
`),a("span",{class:"line"},[a("span",null,"    3. Gestore di trap del sistema operativo: Decodifica trap ed esegue la chiamata di sistema; ")]),s(`
`),a("span",{class:"line"},[a("span",null,"    4. Quando finito: emetti ritorno dal trap")]),s(`
`),a("span",{class:"line"},[a("span",null,"Virtaul Machine Monitor ")]),s(`
`),a("span",{class:"line"},[a("span",null,"    5. Il sistema operativo ha cercato di ritornare dal trap")]),s(`
`),a("span",{class:"line"},[a("span",null,"    6. Fai il vero ritorno dal trap ~~~~")]),s(`
`),a("span",{class:"line"},[a("span",null,"Processo")]),s(`
`),a("span",{class:"line"},[a("span",null,"    7. Riprendi l'esecuzione (@PC dopo il trap)")])])],-1),S={__name:"624",setup(g){return c(i),d(),(v,_)=>(n(),l(p,o(r(e(u)(e(i),623))),{default:t(()=>[m,h,f,k]),_:1},16))}};export{S as default};
