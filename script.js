const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function formatTime(time){
   return time < 10 ? `0${time}` : time;
}

function countDown(){
const data = new Date();
const auxNewYear = data.getFullYear() + 1;
const dataAnoNovo = new Date(`1 jan ${auxNewYear}`);
const dataAtual = new Date();


const totalSeconds = (dataAnoNovo - dataAtual) / 1000;
const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds / 3600) % 24;
const mins = Math.floor(totalSeconds / 60) % 60;
const seconds = Math.floor(totalSeconds) % 60;

dias.innerHTML = days
horas.innerHTML = formatTime(hours)
minutos.innerHTML = formatTime(mins)
segundos.innerHTML = formatTime(seconds)
}

setInterval(countDown,1000)