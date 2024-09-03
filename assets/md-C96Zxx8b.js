import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-uDhOKYWm.js";import{o as c,c as d,k as e,l as i,m as l,q as u,s as m,B as t,e as a,aa as s}from"./modules/vue-9M24w38T.js";import{I as h}from"./slidev/default-C3klLF9E.js";import{u as f,f as _}from"./slidev/context-mWja_fIZ.js";import"./modules/unplugin-icons-Bmhb8--w.js";import"./index-l2FSSgYu.js";import"./modules/shiki-D165QSPi.js";const k=a("h3",null,"Flusso della Chiamata di Sistema Senza Virtualizzazione",-1),g=a("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[a("code",{class:"language-text"},[a("span",{class:"line"},[a("span",null,"Processo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   1. Esegue le istruzioni (add,load,etc)   ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   2. Chiamata di sistema: Trap al sistema operativo")]),s(`
`),a("span",{class:"line"},[a("span",null,"HardWare switch a kernel mode ")]),s(`
`),a("span",{class:"line"},[a("span",null,"Sistema operativo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   3. Gestore di trap del sistema operativo ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   4. Decodifica trap ed esegue la routine di sistema appropriata; ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   5. Quando finito: ritorno dal trap")]),s(`
`),a("span",{class:"line"},[a("span",null,"HardWare switch a user mode ")]),s(`
`),a("span",{class:"line"},[a("span",null,"Processo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   6. Riprendi l'esecuzione (@PC dopo il trap)")])])],-1),v=a("h3",null,"Flusso della Chiamata di Sistema Con Virtualizzazione",-1),C=a("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[a("code",{class:"language-text"},[a("span",{class:"line"},[a("span",null,"Processo")]),s(`
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
`),a("span",{class:"line"},[a("span",null,"    7. Riprendi l'esecuzione (@PC dopo il trap)")])])],-1),z={__name:"virtualMachine.md__slidev_624",setup(P){const{$slidev:x,$nav:$,$clicksContext:o,$clicks:V,$page:b,$renderContext:S,$frontmatter:r}=f();return o.setup(),(B,M)=>{const n=p;return c(),d(h,u(m(t(_)(t(r),623))),{default:e(()=>[k,i(n,l({},{ranges:[]}),{default:e(()=>[g]),_:1},16),v,i(n,l({},{ranges:[]}),{default:e(()=>[C]),_:1},16)]),_:1},16)}}},W=z;export{W as default};
