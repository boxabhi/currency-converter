var inputValue = document.getElementById('input');
var usd = document.getElementById('usd');
var euro = document.getElementById('euro');
var quait = document.getElementById('quait');
var money = document.getElementById('money');
var curr_one = document.getElementById('curr_one');
var curr_two = document.getElementById('curr_two');
var curr_three = document.getElementById('curr_three');
input.addEventListener('input', convert);


var options = document.getElementById('option');
options.addEventListener('click' , convert);

function OptionSelected(){
    var valueSelected = options.selectedIndex;
    //convert(valueSelected);
    return valueSelected;
}

function convert(selected){
    var currency = ['INR' , 'USD' , 'EURO' , 'KUWAITI']
    var selected = OptionSelected();

    // FOR CONVERTING TO INR
    if(selected === 0){
        curr_one.innerHTML = 'USD';
    
    var convertedUsd = (inputValue.value * .015).toFixed(3);
    usd.innerHTML = convertedUsd;
    var convertedEuro = (inputValue.value * .013).toFixed(3);
    euro.innerHTML = convertedEuro;
    var convertKuwaiti = (inputValue.value * .0044).toFixed(3);
    quait.innerHTML = convertKuwaiti;
    }
    // FOR CONVERTING TO USD
    else if(selected === 1){
        curr_one.innerHTML = 'INR';
        var convertedUsd = (inputValue.value * 68.3).toFixed(3);
        usd.innerHTML = convertedUsd;
        var convertedEuro = (inputValue.value * .89).toFixed(3);
        euro.innerHTML = convertedEuro;
        var convertKuwaiti = (inputValue.value * .30).toFixed(3);
        quait.innerHTML = convertKuwaiti;
    }
    // FOR CONVERTING TO EURO
    else if (selected === 2){
        curr_one.innerHTML = 'INR';
        curr_two.innerHTML = 'USD';
        var convertedUsd = (inputValue.value * 77.1).toFixed(3);
        usd.innerHTML = convertedUsd;
        var convertedEuro = (inputValue.value * 1.12).toFixed(3);
        euro.innerHTML = convertedEuro;
        var convertKuwaiti = (inputValue.value * .34).toFixed(3);
        quait.innerHTML = convertKuwaiti;
    }
    else{
        curr_one.innerHTML = 'INR';
        curr_two.innerHTML = 'USD';
        curr_three.innerHTML = 'EURO';
        var convertedUsd = (inputValue.value * 225.67).toFixed(3);
        usd.innerHTML = convertedUsd;
        var convertedEuro = (inputValue.value * 3.29).toFixed(3);
        euro.innerHTML = convertedEuro;
        var convertKuwaiti = (inputValue.value * 2.29).toFixed(3);
        quait.innerHTML = convertKuwaiti;
    }
    money.innerHTML = currency[selected]+ ' ' + inputValue.value ;
    console.log(selected);
}