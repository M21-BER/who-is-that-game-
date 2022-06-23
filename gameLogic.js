var img = ["a.jpg","b.png","c.png","d.png","e.png","f.png","g.jpg","h.jpeg","i.png","j.jpg","k.jpg","l.jpg","m.jpg"];
var sounds = ['a.mp3','b.mp3','c.mp3','d.mp3','e.mp3','f.mp3','g.mp3','h.mp3','i.mp3','j.mp3','k.mp3','l.mp3','m.mp3'];
var names  = ["Abraham Afewerki","Ephrem Tamiru","Eyob Mekonnen","Mehamud Ahmed","Meles Zenawi","Mengistu Haile Mariam","Muluken Melesse","Shewanday Hailu","Teddy Afro","Tewodros Tadesse","Aster Aweke","Haileye Tadesse","Alem Kebede"];
var player;
playerName();
const randomSounds = ()=>{
  return (Math.floor(Math.random() * 13)); 
};

document.querySelector(".btn").addEventListener("click",()=>{
   const ran = randomSounds();
   startMusic(ran);
   showChoice(ran); 
 
});

function startMusic(ran){
  const  playSound = new Audio('sounds/'+sounds[ran]);
  playSound.play();
  document.querySelector('.btn').classList.add('disabledContent');
  
  setTimeout(()=>{
  playSound.pause();
  document.querySelector('.btn').classList.remove('disabledContent');
  location.reload();
 },9000);
}
function showChoice(ran){
var answerIndex = ran;
var answer = names[answerIndex];

var choices = document.querySelectorAll('h2');
for(var i = 0;i< choices.length;i++){
  choices[i].innerHTML = names[randomSounds()];
}

// answer prob
 var di = Math.floor(Math.random()*2) +1;
 if(di == 1){
  choices[Math.floor(Math.random()*5)].innerHTML = answer;
 }else{
  choices[Math.floor(Math.random()*5)].innerHTML = "None";
 }

for(var i = 0;i< choices.length;i++){
  choices[i].addEventListener("click",function(event){
  if((answer == this.innerHTML)||(this.innerHTML == "None")){
    document.querySelector('.result').innerHTML ="Status: Correct ✔️";
    document.querySelector('.answer').innerHTML = "Answer: "+answer;
    document.querySelector('.soundLogo').setAttribute('src','images/'+img[answerIndex]);
    document.querySelector("."+this.classList).classList.add('correct_pressed');
    setTimeout(()=>{  
    document.querySelector('.result').innerHTML ="Status:";  
    document.querySelector('.soundLogo').setAttribute('src','images/sound.png');
    document.querySelector("."+this.classList[0]).classList.remove('correct_pressed');
    location.reload();
    },6000);
  }else{
    document.querySelector('.result').innerHTML ="Status: Wrong ❌";
    document.querySelector('.answer').innerHTML = "Answer: "+answer;
    document.querySelector('.soundLogo').setAttribute('src','images/'+img[answerIndex]);
    document.querySelector("."+this.classList).classList.add('wrong_pressed');
    setTimeout(()=>{
    document.querySelector('.result').innerHTML ="Status:";  
    document.querySelector('.soundLogo').setAttribute('src','images/sound.png');
    document.querySelector("."+this.classList[0]).classList.remove('wrong_pressed');
    location.reload();
    },6000);
  }
  });
  }

}

function playerName (){
  player =  prompt("Whats your name?");
  document.querySelector('.player_name').innerHTML = player;
}