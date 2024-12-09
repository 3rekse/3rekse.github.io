import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-D9m7I9Sg.js";import{o as c,c as u,k as n,e as a,l,m as t,aa as s,q as m,s as f,B as o}from"./modules/vue-DBgDjl02.js";import{I as h}from"./slidev/default-DMRSES_J.js";import{u as k,f as g}from"./slidev/context-DxVOX3A7.js";import"./modules/unplugin-icons-CvBUBcCb.js";import"./index-b2i9Emyj.js";import"./modules/shiki-CR29Tdxk.js";const v={__name:"virtualMachine.md__slidev_637",setup(C){const{$slidev:_,$nav:z,$clicksContext:r,$clicks:P,$page:x,$renderContext:$,$frontmatter:p}=k();return r.setup(),(V,e)=>{const i=d;return c(),u(h,m(f(o(g)(o(p),636))),{default:n(()=>[e[2]||(e[2]=a("h3",null,"Flusso della Chiamata di Sistema Senza Virtualizzazione",-1)),l(i,t({},{ranges:[]}),{default:n(()=>e[0]||(e[0]=[a("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[a("code",{class:"language-text"},[a("span",{class:"line"},[a("span",null,"Processo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   1. Esegue le istruzioni (add,load,etc)   ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   2. Chiamata di sistema: Trap al sistema operativo")]),s(`
`),a("span",{class:"line"},[a("span",null,"HardWare switch a kernel mode ")]),s(`
`),a("span",{class:"line"},[a("span",null,"Sistema operativo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   3. Gestore di trap del sistema operativo ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   4. Decodifica trap ed esegue la routine di sistema appropriata; ")]),s(`
`),a("span",{class:"line"},[a("span",null,"   5. Quando finito: ritorno dal trap")]),s(`
`),a("span",{class:"line"},[a("span",null,"HardWare switch a user mode ")]),s(`
`),a("span",{class:"line"},[a("span",null,"Processo")]),s(`
`),a("span",{class:"line"},[a("span",null,"   6. Riprendi l'esecuzione (@PC dopo il trap)")])])],-1)])),_:1},16),e[3]||(e[3]=a("h3",null,"Flusso della Chiamata di Sistema Con Virtualizzazione",-1)),l(i,t({},{ranges:[]}),{default:n(()=>e[1]||(e[1]=[a("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[a("code",{class:"language-text"},[a("span",{class:"line"},[a("span",null,"Processo")]),s(`
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
`),a("span",{class:"line"},[a("span",null,"    7. Riprendi l'esecuzione (@PC dopo il trap)")])])],-1)])),_:1},16)]),_:1},16)}}},F=v;export{F as default};
