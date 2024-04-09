const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let DateToday = new Date();
    let hr = DateToday.getHours();
    let min = DateToday.getMinutes();
    let s = DateToday.getSeconds ();

    horas.textContent = hr.toString().padStart(2, '0');
    minutos.textContent = min.toString().padStart(2, '0')
    segundos.textContent = s.toString().padStart(2, '0');

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})
