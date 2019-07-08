

var inputValue = document.getElementById('input');
var usd = document.getElementById('usd');
var euro = document.getElementById('euro');
var quait = document.getElementById('quait');
var money = document.getElementById('money');

input.addEventListener('input', convert);


function convert(){
    money.innerHTML = inputValue.value + ' INR';
    var convertedUsd = (inputValue.value * .015).toFixed(3);
    usd.innerHTML = convertedUsd;
    var convertedEuro = (inputValue.value * .013).toFixed(3);
    euro.innerHTML = convertedEuro;
    var convertKuwaiti = (inputValue.value * .0044).toFixed(3);
    quait.innerHTML = convertKuwaiti;
}