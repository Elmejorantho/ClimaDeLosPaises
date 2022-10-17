const inputBuscador = document.querySelector('#paises-input');
const informaPaises = document.querySelector('#informaPaises')

let paisSelected = [];



const getCountries = async () => {

    paisSelected = await (await fetch( ('https://restcountries.com/v3.1/all'), {method: 'GET'})).json(); 
    informaPaises.innerHTML = `<div class="lds-hourglass"></div>`
};

getCountries();

inputBuscador.addEventListener('input', e => {
    let filtroPaises = paisSelected.filter(element => element.name.common.toLowerCase().startsWith(e.target.value.toLowerCase()))


if(inputBuscador === ''){
alert = 'el input esta vacio'
}
        filtroPaises.forEach(element => {
            informaPaises.innerHTML = `
         <img src="${element.flags.svg}" style="size: 200px;">
         <p>Pais:${element.name.common}</p>
         <p>Capital:${element.capital}</p>
         <p>Habitantes:${element.population}</p>
         <p>Clima:C</p>
         <p>Region:${element.region}</p>
            
            `
        })});


    
