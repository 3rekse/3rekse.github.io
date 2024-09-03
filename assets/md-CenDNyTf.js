import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Ch6XY4Fe.js";import{o as p,c,k as n,l as u,m as _,q as d,s as f,B as t,e as s,aa as e}from"./modules/vue-9M24w38T.js";import{I as h}from"./slidev/two-cols-header-D1Os_bup.js";import{u as m,f as g}from"./slidev/context-DrjLkDUn.js";import"./modules/unplugin-icons-Bmhb8--w.js";import"./index-apiDnJ6J.js";import"./modules/shiki-D165QSPi.js";const k="/logica/3_3.png",b="/logica/tt.png",v=s("h2",null,"Ora tocca a te",-1),P=s("p",null,"Progetto 3 Obiettivo 1 e 2",-1),$=s("p",null,[s("img",{src:k,alt:"dflipflop"})],-1),x=s("p",null,[e("Costruire 2 chips : "),s("a",{href:"https://nand2tetris.github.io/web-ide/chip/",target:"_blank"},"1-bit register e 16-bit register")],-1),C=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"/**")]),e(`
`),s("span",{class:"line"},[s("span",null," * 1-bit register:")]),e(`
`),s("span",{class:"line"},[s("span",null," * If load is asserted, the register's value is set to in;")]),e(`
`),s("span",{class:"line"},[s("span",null," * Otherwise, the register maintains its current value:")]),e(`
`),s("span",{class:"line"},[s("span",null," * if (load(t)) out(t+1) = in(t), else out(t+1) = out(t)")]),e(`
`),s("span",{class:"line"},[s("span",null," */")]),e(`
`),s("span",{class:"line"},[s("span",null,"CHIP Bit {")]),e(`
`),s("span",{class:"line"},[s("span",null,"    IN in, load;")]),e(`
`),s("span",{class:"line"},[s("span",null,"    OUT out;")]),e(`
`),s("span",{class:"line"},[s("span",null,"  }")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"CHIP Register {")]),e(`
`),s("span",{class:"line"},[s("span",null,"    IN in[16], load;")]),e(`
`),s("span",{class:"line"},[s("span",null,"    OUT out[16];")]),e(`
`),s("span",{class:"line"},[s("span",null,"}")])])],-1),I=s("p",null,[s("img",{src:b,alt:"dflipflop"})],-1),B={__name:"sequenziale.md__slidev_506",setup(N){const{$slidev:O,$nav:T,$clicksContext:a,$clicks:w,$page:V,$renderContext:q,$frontmatter:l}=m();return a.setup(),(y,z)=>{const i=r;return p(),c(h,d(f(t(g)(t(l),505))),{left:n(o=>[u(i,_({},{ranges:[]}),{default:n(()=>[C]),_:1},16)]),right:n(o=>[I]),default:n(()=>[v,P,$,x]),_:1},16)}}},A=B;export{A as default};
