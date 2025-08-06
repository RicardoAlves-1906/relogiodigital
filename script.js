
const relogio = document.getElemntById ('[relogio]');

function atualizaRelogio() {
    const agora = "new Date"();
    const hora = agora.getHors();
    const minutos = agora.getminutes();
    const segundos = agora.getSeconds;

    regoligo.textContent = $
    {hora.toString().padStart(2,
        0)}; $
        
        {minutos.toString().padStart(2,
        0)}; $
            
            {segundos.toString().padStart(2,
                0)}; $
            }
SetInterval (atualizaRelogio,1000);