import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BkNJ_BlK.js";import{b as c,o as u,w as n,g as a,e as l,m as t,C as s,v as m,x as f,B as o}from"./modules/vue-BXqLZby3.js";import{I as h}from"./slidev/default-CgjpOQvn.js";import{u as g,f as k}from"./slidev/context-_s_nlYTD.js";import"./modules/unplugin-icons-CQIbxMDS.js";import"./index-CKoLJ0an.js";import"./modules/shiki-D1VZkxQz.js";const B={__name:"virtualMachine.md__slidev_715",setup(v){const{$clicksContext:r,$frontmatter:p}=g();return r.setup(),(_,e)=>{const i=d;return u(),c(h,m(f(o(k)(o(p),714))),{default:n(()=>[e[2]||(e[2]=a("h3",null,"Flusso della Chiamata di Sistema Senza Virtualizzazione",-1)),l(i,t({},{ranges:[]}),{default:n(()=>e[0]||(e[0]=[a("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[a("code",{class:"language-text"},[a("span",{class:"line"},[a("span",null,"Processo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   1. Esegue le istruzioni (add,load,etc)   ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   2. Chiamata di sistema: Trap al sistema operativo")]),s(`
`),a("span",{class:"line"},[a("span",null,"HardWare switch a kernel mode ")]),s(`
`),a("span",{class:"line"},[a("span",null,"Sistema operativo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   3. Gestore di trap del sistema operativo ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   4. Decodifica trap ed esegue la routine di sistema appropriata; ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   5. Quando finito: ritorno dal trap")]),s(`
`),a("span",{class:"line"},[a("span",null,"HardWare switch a user mode ")]),s(`
`),a("span",{class:"line"},[a("span",null,"Processo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   6. Riprendi l'esecuzione (@PC dopo il trap)")])])],-1)])),_:1,__:[0]},16),e[3]||(e[3]=a("h3",null,"Flusso della Chiamata di Sistema Con Virtualizzazione",-1)),l(i,t({},{ranges:[]}),{default:n(()=>e[1]||(e[1]=[a("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[a("code",{class:"language-text"},[a("span",{class:"line"},[a("span",null,"Processo")]),s(`
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
`),a("span",{class:"line"},[a("span",null,"    7. Riprendi l'esecuzione (@PC dopo il trap)")])])],-1)])),_:1,__:[1]},16)]),_:1,__:[2,3]},16)}}};export{B as default};
