document.getElementById('submitBtn').onclick = function(){
    let temp;

    if (document.getElementById('cButton').checked){
        temp = document.getElementById('enterTemp').value
        temp = Number(temp)
        temp = toCelsius(temp)
        document.getElementById('result').innerHTML = temp + 'ºC'
    }

    else if (document.getElementById('fButton').checked){
        temp = document.getElementById('enterTemp').value
        temp = Number(temp)
        temp = toFarenheit(temp)
        document.getElementById('result').innerHTML = temp + 'ºF'
    }

    else{
        document.getElementById('enterTemp').innerHTML = 'select a unit'
    }

}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFarenheit(temp){
    return (temp * (9/5)) + 32
}