import{o as n,c as r,k as l,e,q as s,s as p,B as i}from"./modules/vue-DBgDjl02.js";import{I as u}from"./slidev/default-5WlvNUCI.js";import{u as c,f as d}from"./slidev/context-DrNUMLnm.js";import"./index-CZq52PTC.js";import"./modules/shiki-CR29Tdxk.js";const m={__name:"virtualMachine.md__slidev_635",setup(v){const{$slidev:f,$nav:z,$clicksContext:o,$clicks:g,$page:_,$renderContext:b,$frontmatter:t}=c();return o.setup(),(h,a)=>(n(),r(u,s(p(i(d)(i(t),634))),{default:l(()=>a[0]||(a[0]=[e("p",null,"Quando viene eseguita un’istruzione di trap, come abbiamo discusso prima, essa di solito fa un numero di cose interessanti.",-1),e("p",null,"La più importante nel nostro esempio è che trasferisce il controllo (cioè cambia il PC) a un gestore di trap ben definito all’interno del sistema operativo.",-1),e("p",null,"Il sistema operativo, quando si avvia per la prima volta, stabilisce l’indirizzo di una tale routine con l’hardware (anche questa è un’operazione privilegiata) e quindi, durante i trap successivi, l’hardware sa dove iniziare a eseguire il codice per gestire il trap.",-1),e("p",null,"Allo stesso tempo del trap, l’hardware fa anche un’altra cosa cruciale: cambia la modalità del processore da modalità utente a modalità kernel.",-1),e("p",null,"In modalità utente, le operazioni sono limitate e i tentativi di eseguire operazioni privilegiate porteranno a un trap e probabilmente alla terminazione del processo offensivo.",-1),e("p",null,"In modalità kernel, invece, è disponibile tutta la potenza della macchina e quindi tutte le operazioni privilegiate possono essere eseguite.",-1),e("p",null,"Pertanto, in un contesto tradizionale (ancora, senza virtualizzazione), il flusso di controllo sarebbe come quello che vedi nella Figura B.1.",-1)])),_:1},16))}},C=m;export{C as default};