import{r as c,o as m,c as u,k as t,l,aa as i,q as f,s as p,B as n,e}from"./modules/vue-9M24w38T.js";import{I as d}from"./slidev/two-cols-header-k9HlMh0S.js";import{u as _,f as h}from"./slidev/context-BrpKgFPm.js";import"./index-CErdVrjL.js";import"./modules/shiki-D165QSPi.js";const g="/office/images/assoluti.png",B="/office/images/riferimenti.png",v=e("h2",null,"Riferimento",-1),$=e("p",null,"Se trascini delle celle in un foglio elettronico, il comportamento dei riferimenti relativi e assoluti sarà diverso:",-1),z=e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"Riferimenti assoluti"),i(": il riferimento rimarrà lo stesso, indipendentemente da dove trascini la cella. "),e("p",{style:{"font-size":"0.6em","line-height":"0.8",color:"lightgreen"}},[i("Ad esempio, se hai una formula in cella B2 che fa riferimento a B1 con un riferimento assoluto (come "),e("code",null,"=$B$1"),i(") e trascini la cella B2 in C2, il riferimento rimarrà a B1.")])])]),e("li",null,[e("p",null,[e("strong",null,"Riferimenti relativi"),i(": il riferimento cambierà in base alla nuova posizione della cella."),e("p",{style:{"font-size":"0.6em","line-height":"0.8",color:"lightgreen"}},[i(" Ad esempio, se hai una formula in cella B2 che fa riferimento a B1 (come "),e("code",null,"=B1"),i(") e trascini la cella B2 in C2, il riferimento cambierà automaticamente a C1.")])])])],-1),C=e("p",{style:{"font-size":"0.7em","line-height":"0.8",color:"lightblue"}},"Questo comportamento può essere molto utile quando si desidera copiare formule in altre celle o spostare celle senza modificare i riferimenti alle celle originali.",-1),x=e("h2",null,"riferimenti assoluti",-1),b=e("p",null,[e("img",{src:g,alt:"interlinea"})],-1),y=e("h2",null,"riferimenti relativi",-1),k=e("p",null,[e("img",{src:B,alt:"coding"})],-1),P={__name:"riferimenti.md__slidev_673",setup(R){const{$slidev:A,$nav:L,$clicksContext:r,$clicks:N,$page:V,$renderContext:q,$frontmatter:a}=_();return r.setup(),(I,S)=>{const o=c("spam");return m(),u(d,f(p(n(h)(n(a),672))),{left:t(s=>[x,l(o,{style:{"font-size":"0.6em","line-height":"0.8",color:"lightblue"}},{default:t(()=>[i("La cella B2 riporta il contenuto della cella B1 con riferimento Assoluto pertanto se")]),_:1}),b]),right:t(s=>[y,l(o,{style:{"font-size":"0.6em","line-height":"0.8",color:"lightblue"}},{default:t(()=>[i("La cella B2 riporta il contenuto della cella B1 con riferimento Relativo pertanto se")]),_:1}),k]),default:t(()=>[v,$,z,C]),_:1},16)}}},E=P;export{E as default};