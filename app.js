let hr = document.querySelector('#hr');
let mn = document.querySelector('#mm');
let sc = document.querySelector('#sc');

let day = new Date();
let hh = day.getDate()*30;
let mm = day.getMinutes()*6;
let ss = day.getSeconds()*6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;