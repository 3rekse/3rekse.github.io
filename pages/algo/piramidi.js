let livello1= 4;
let livello2= 3;
let piramide1 =  (livello1 * (livello1 + 1)) / 2;
let piramide2 = (livello2 * (livello2 + 1)) / 2;
let piramideL1 = piramide1;
let piramideL2 = piramide2;
let base = false;
/*
l'algoritmo più veloce per risolvere 
 si basa sul semplice schema in R 
   0 1 2 3 4 5
 0 p v p v p v
 1 v v v v v v
 2 p v p v p v
 3 v v v v v v
 4 p v p v p v
 e controlla se n e m sono entrambi pari, 
 nel qual caso il giocatore perde (vedi tabella sopra)
*/

function  controlla() {
let line = '';
let j = 1;
let kx = 0;
for (let i = 1; i < 36; i++) {
    line += i + ' ' + ((350 - 25 * j) +(i-kx)*50)+ ' ';
    if (i == (j * (j + 1)) / 2) {
        kx = (j * (j + 1)) / 2; 
        line += 'kx='+kx;
        console.log(line.trim());
        line = '';
        j++;
         }
}
}

function  livelli() {
    let line = '';
    
    for (let j = 1; j < 36; j++) {
            kx = (j * (j + 1)) / 2; 
            line = 'liv:'+j+' kx='+kx;
            console.log(line.trim());
            
    }
    }
function renderPiramidi() {
    const piramide1Div = document.getElementById('piramide1');
    const piramide2Div = document.getElementById('piramide2');
    piramide1Div.innerHTML = '';
    piramide2Div.innerHTML = '';
    let j= 1;
    let kx = 0;
    let top=130;
    let centro= window.innerWidth/3;


    for (let i = 1  ; i <= piramideL1;i++ ) {
        const mattone = document.createElement('div');
        mattone.className = 'mattone';
        mattone.style.top = top+(j * 34) + 'px';
        mattone.style.left = ((centro - 25 * j) +(i-kx)*50)+ 'px';  
        mattone.innerText = String.fromCodePoint(Math.floor(Math.random() * (0x13083 - 0x13000 + 1)) + 0x13000);        
        if (i<=(piramideL1-piramide1))   {
           mattone.style.backgroundColor = "transparent";
        } else { mattone.style.backgroundColor = "#ffcc00";}
        piramide1Div.appendChild(mattone);    
        if (i == (j * (j + 1)) / 2) {
            kx = (j * (j + 1)) / 2;
            j++;
        }

    }
    centro += window.innerWidth/3;
    top+=j * 34 +70 ;
    j= 1;
    kx = 0;
    
    for (let i = 1  ; i <= piramideL2;i++ ) {
        const mattone = document.createElement('div');
        mattone.className = 'mattone';
        mattone.style.top = top+(j * 34) + 'px';
        mattone.style.left = ((centro - 25 * j) +(i-kx)*50)+ 'px';
        mattone.innerText = String.fromCodePoint(Math.floor(Math.random() * (0x13083 - 0x13000 + 1)) + 0x13000);       
        if (i<=(piramideL2-piramide2))   {
           mattone.style.backgroundColor = "transparent";
        } else { mattone.style.backgroundColor = "#ffcc00";}
        piramide2Div.appendChild(mattone);    
        if (i == (j * (j + 1)) / 2) {
            kx = (j * (j + 1)) / 2;
            j++;
        }

    }

}

function checkWin(vinto) {

    if (piramide1 === 0 && piramide2 === 0) {
        document.getElementById('message').innerText = (vinto? "HAI":"NON HAI")+' vinto!';
       // disableButtons();
        if (vinto)
          (livello1>livello2? livello2++: livello1++);
        else 
        (livello1>livello2? livello1--: livello2--);
        if (livello1<0)
            livello1++;
        piramide1 =  (livello1 * (livello1 + 1)) / 2;
        piramide2 = (livello2 * (livello2 + 1)) / 2;
        piramideL1 = piramide1;
        piramideL2 = piramide2;
        return true;
    }
    return false;
}

function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}

function opponentMove() {
    // Simple AI for opponent move
    let dec = true ;
    if (base){
    if (piramide1 > 0 && (piramide1%2))
        {  piramide1--; dec= false ;}
    if (piramide2 > 0 && (piramide2%2))
        {piramide2--; dec= false ;}
    }
    if (dec){
        if (piramide1 > 0) {
            piramide1--;
        } else if (piramide2 > 0) {
            piramide2--;
        } else {
            return;
        }
    }
  
    if (checkWin(false) && (livello1+livello2)<6 ) 
        base = false;

    renderPiramidi();
}

function playerMove(choice) {
    if (choice === 1 && piramide1 > 0) {
        piramide1--;
    } else if (choice === 2 && piramide2 > 0) {
        piramide2--;
    } else if (choice === 3 && piramide1 > 0 && piramide2 > 0) {
        piramide1--;
        piramide2--;
    } else {
        alert('Mossa non valida!');
        return;
    }
    if (checkWin(true) && (livello1+livello2)>8 ) 
        base = true;

    renderPiramidi();
    opponentMove();
}
livelli();
controlla();
renderPiramidi();
if (Math.round(Math.random())){opponentMove();}

    
