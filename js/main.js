let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

setInterval(()=>{
  let date = new Date();
  
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hr = 30 * hh + mm / 2;
  let mr = 6 * mm;
  let sr = 6 * ss;
  
  hours.style.transform = `rotate(${hr}deg)`;
  minutes.style.transform = `rotate(${mr}deg)`;
  seconds.style.transform = `rotate(${sr}deg)`;
  
  let sound = new Audio('sound.mp3');
  sound.play();
  
},1000);