let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let seconds = document.getElementById('seconds');

let setClock = setInterval(function clock(){
    let datess = new Date();
    let hr = datess.getHours();
    let min = datess.getMinutes();
    let sec = datess.getSeconds();

    let calhr = hr * 30 + min/2;
    let calmin = min * 6 ;
    let calsec = sec * 6;

    hour.style.transform = `rotate(${calhr}deg)`;
    minute.style.transform = `rotate(${calmin}deg)`;
    seconds.style.transform = `rotate(${calsec}deg)`;
}, 1000)