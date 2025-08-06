function atualizarRelogio() 

{
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    horas = String(horas).padStart(2, '0');
    minutos = String(minutos).padStart(2, '0');
    segundos = String(segundos).padStart(2, '0');

    const horaAtual = `${horas}:${minutos}:${segundos}`;
    document.getElementById('relogio').textContent = horaAtual;
    }

    setInterval(atualizarRelogio, 1000);
