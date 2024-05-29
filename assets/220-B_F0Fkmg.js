import{o as i,c as o,k as e,q as p,s as r,A as a,e as s,a6 as n}from"./modules/vue-CzHRG3tJ.js";import{I as c}from"./slidev/two-cols-header-Bsb5_QQ0.js";import{_ as u,dG as t}from"./index-Bxv0B-Cu.js";import{p as d,u as _,f as h}from"./slidev/context-BRdP0yFI.js";import"./modules/shiki-C5i64R19.js";const f="/logica/3_3.png",g="/logica/tt.png",m=s("h2",null,"Ora tocca a te",-1),k=s("p",null,"Progetto 3 Obiettivo 1 e 2",-1),b=s("p",null,[s("img",{src:f,alt:"dflipflop"})],-1),v=s("p",null,[n("Costruire 2 chips : "),s("a",{href:"https://nand2tetris.github.io/web-ide/chip/",target:"_blank",rel:"noopener"},"1-bit register e 16-bit register")],-1),P=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-"},[s("span",{class:"line"},[s("span",null,"/**")]),n(`
`),s("span",{class:"line"},[s("span",null," * 1-bit register:")]),n(`
`),s("span",{class:"line"},[s("span",null," * If load is asserted, the register's value is set to in;")]),n(`
`),s("span",{class:"line"},[s("span",null," * Otherwise, the register maintains its current value:")]),n(`
`),s("span",{class:"line"},[s("span",null," * if (load(t)) out(t+1) = in(t), else out(t+1) = out(t)")]),n(`
`),s("span",{class:"line"},[s("span",null," */")]),n(`
`),s("span",{class:"line"},[s("span",null,"CHIP Bit {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    IN in, load;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    OUT out;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"CHIP Register {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    IN in[16], load;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    OUT out[16];")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")])])],-1),I=s("p",null,[s("img",{src:g,alt:"dflipflop"})],-1),x={__name:"220",setup(C){return d(t),_(),(O,B)=>(i(),o(c,p(r(a(h)(a(t),219))),{left:e(l=>[P]),right:e(l=>[I]),default:e(()=>[m,k,b,v]),_:1},16))}},R=u(x,[["__file","/@slidev/slides/220.md"]]);export{R as default};
