window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('hide'),900));

const weddingDate = new Date('2027-01-25T16:30:00+05:30').getTime();
function updateCountdown(){
  const now=Date.now(), diff=weddingDate-now;
  const d=Math.max(0,Math.floor(diff/86400000));
  const h=Math.max(0,Math.floor(diff/3600000)%24);
  const m=Math.max(0,Math.floor(diff/60000)%60);
  const s=Math.max(0,Math.floor(diff/1000)%60);
  document.getElementById('days').textContent=d;
  document.getElementById('hours').textContent=String(h).padStart(2,'0');
  document.getElementById('minutes').textContent=String(m).padStart(2,'0');
  document.getElementById('seconds').textContent=String(s).padStart(2,'0');
}
updateCountdown(); setInterval(updateCountdown,1000);

const musicBtn=document.getElementById('musicBtn');
const bgMusic=document.getElementById('bgMusic');
// Add a local MP3 named "music.mp3" to this folder if you want background music.
bgMusic.src='music.mp3';
let playing=false;
musicBtn.addEventListener('click',async()=>{
  try{
    if(playing){bgMusic.pause(); musicBtn.textContent='♪';}
    else{await bgMusic.play(); musicBtn.textContent='❚❚';}
    playing=!playing;
  }catch(e){
    alert('Add a music.mp3 file to the website folder to enable background music.');
  }
});
