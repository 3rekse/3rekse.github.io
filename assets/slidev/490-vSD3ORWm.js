import{o as n,c as i,k as t,q as o,s as r,A as l,e as s,a6 as e}from"../modules/vue-DflCt9hH.js";import{I as p}from"./default-D8n-L-kp.js";import{hX as a}from"../index-BXbHHbuc.js";import{p as u,u as c,f as d}from"./context-CgID4z_0.js";import"../modules/shiki-Din2pWPP.js";const f=s("h2",null,"Osservatore logico",-1),h=s("p",null,[e("Un modo semplice per vedere quali sono gli output del nostro PLD è utilizzare il pin "),s("strong",null,"A6"),e(" come input dell’osservatore logico e visualizzare i pixel verdi quando un output del PLD è "),s("code",null,"true"),e(" e i pixel gialli quando è "),s("code",null,"false"),e(".")],-1),m=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"forever(function () {")]),e(`
`),s("span",{class:"line"},[s("span",null,"    if (pins.A6.digitalRead()) {")]),e(`
`),s("span",{class:"line"},[s("span",null,"        light.setAll(0x00ff00)")]),e(`
`),s("span",{class:"line"},[s("span",null,"    } else {")]),e(`
`),s("span",{class:"line"},[s("span",null,"        light.setAll(0xffff00)")]),e(`
`),s("span",{class:"line"},[s("span",null,"    }")]),e(`
`),s("span",{class:"line"},[s("span",null,"    pause(100)")]),e(`
`),s("span",{class:"line"},[s("span",null,"})")])])],-1),q={__name:"490",setup(g){return u(a),c(),(_,k)=>(n(),i(p,o(r(l(d)(l(a),489))),{default:t(()=>[f,h,m]),_:1},16))}};export{q as default};
