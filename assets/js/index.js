
const cambiartexto = document.querySelector('#cambiartexto')

const code = document.querySelector('#code')
const texto = document.querySelector('#nota');
console.log(nota)


cambiartexto.addEventListener('click', obtenerDatos);


function obtenerDatos() {
   
    fetch('https://api.adviceslip.com/advice') // URL
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(resultado => {           
            texto.innerHTML = resultado.slip.advice
            code.innerHTML = resultado.slip.id
        })
        .catch( error => {
            console.log(error);
        })
}