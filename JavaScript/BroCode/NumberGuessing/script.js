const answer =  Math.floor(Math.random() * 10 + 1)
let guesses = 0;

document.getElementById('submit').onclick =  function () {
    let guess = document.getElementById('guess').value;

    guesses+=1;

    if(guess == answer){
    alert(`${guess} is the number. It took you ${guesses} to win.
    ` )
    }
    else if (guess < answer){
        alert('Too small')
    }
    else{
        alert('Too big')
    }
}

