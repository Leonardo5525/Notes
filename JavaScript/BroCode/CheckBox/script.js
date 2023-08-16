
document.getElementById('submit').onclick =  function() {
    const mycheckbox =  document.getElementById ('checkbox')
    const myVisa = document.getElementById('visaBtn')
    const myMaster = document.getElementById('masterBtn')
    const myPaypal = document.getElementById('paypaBtn')

    if (mycheckbox.checked){
        console.log('You are subscribed');
    }

    else {
        console.log('You are NOT subcribed');
    }

    if (myVisa.checked){
        console.log('You have Visa Card');
    }
    else if (myMaster.checked){
        console.log('You have Master Card');
    }
    else if (myPaypal.checked){
        console.log('You have Paypal Card');
    }
    
}