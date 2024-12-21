function speakText() {
    alert('Leggi la slide');
    const text = document.querySelector('h1').innerText + ' ' + document.querySelector('p').innerText;
    const speech = new SpeechSynthesisUtterance('text');
    speech.lang = 'it-IT'; // Imposta la lingua italiana
    window.speechSynthesis.speak(speech);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.innerText = 'Leggi la questa Slide';
    button.onclick = speakText;
    button.style.position = 'fixed';
  button.style.bottom = '10px';
  button.style.right = '10px';
  button.style.zIndex = '1000';
  document.body.appendChild(button);

    document.body.appendChild(button);
  });