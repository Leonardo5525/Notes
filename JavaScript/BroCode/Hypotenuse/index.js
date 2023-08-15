let a;
let b;
let c;


document.getElementById('button').onclick = function(){
    a = document.getElementById('sideA').value;
    a = Number(a)
    console.log(a);

    b = document.getElementById('sideB').value;
    b = Number(b)
    console.log(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))

    document.getElementById('sideC').innerHTML =  'SideC: ' + c
}

