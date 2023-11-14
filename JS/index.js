
let stringInput = document.querySelector('[data-temp]');
let numberInput = parseInt(stringInput)



let btnToFahrenheit = document.querySelector('[data-convertToF]');
let btnToCelsius = document.querySelector('[data-convertToC]');
btnToFahrenheit.addEventListener('click', ()=> celsiusTofahrenheit(stringInput.value))
    function celsiusTofahrenheit(a){
        let fahrenheit =  eval(`${a}*9/5`)+32;
        document.getElementById("fahrenheit").textContent = "The temperature is " + fahrenheit.toFixed(2) + " degrees fahrenheit";
    }

btnToCelsius.addEventListener('click', ()=> fahrenheitToCelsius(stringInput.value))
    function fahrenheitToCelsius(a){
        let celsius =  eval(`${a} - 32`)*(5/9);
        document.getElementById("celsius").textContent = "The temperature is " + celsius.toFixed(2) + " degrees celsius";
    }






