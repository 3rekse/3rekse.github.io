import{o as l,c as n,k as i,q as r,s as p,A as o,e as t,a6 as e}from"./modules/vue-DflCt9hH.js";import{I as c}from"./slidev/two-cols-header-Dm9WaQ7t.js";import{hY as a}from"./index-BXbHHbuc.js";import{p as d,u as g,f as u}from"./slidev/context-CgID4z_0.js";import"./modules/shiki-Din2pWPP.js";const m="/internet/images/logic-lab/pld/not-gate-pins.png",_="/internet/images/logic-lab/pld/not-gate-pld.png",h=t("h2",null,"Porta NOT programmabile",-1),f=t("p",null,[e("La porta "),t("strong",null,"NOT"),e(" prende il valore logico dell’input e lo inverte all’output. Questa è una porta con un solo input che utilizza solo il pin "),t("strong",null,"A4"),e(" per l’input.")],-1),k=t("p",null,[e("La porta "),t("strong",null,"NOT"),e(" è cablata utilizzando clip di prova alligatore come mostrato nel seguente diagramma. Il pin di output "),t("strong",null,"A1"),e(" è collegato all’osservatore al pin "),t("strong",null,"A6"),e(".")],-1),v=t("p",null,[e("Lo script per programmare la porta "),t("strong",null,"NOT"),e(" è semplicemente un inverso logico di "),t("code",null,"||pins:digital read pin||"),e(" all’interno di un "),t("code",null,"||pins:digital write pin||"),e(".")],-1),N=t("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[t("code",{class:"language-text"},[t("span",{class:"line"},[t("span",null,"pins.A1.digitalWrite((!pins.A4.digitalRead()))")])])],-1),T=t("p",null,[t("img",{src:m,alt:"NOT gate with pin assignments"})],-1),b=t("p",null,[t("img",{src:_,alt:"NOT gate wiring diagram"})],-1),I={__name:"491",setup(x){return d(a),g(),(A,O)=>(l(),n(c,r(p(o(u)(o(a),490))),{left:i(s=>[f,k,v,N]),right:i(s=>[T,b]),default:i(()=>[h]),_:1},16))}};export{I as default};