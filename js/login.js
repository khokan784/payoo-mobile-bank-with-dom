// step- 1 set event handler
document.getElementById('button-login')
    .addEventListener('click', function (event) {
        //step -2 prevent defult behavior (prevent reloading browser)
        event.preventDefault();
        // step -3 get the phone number and pin
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        // console.log(phoneNumber, pinNumber);
        if(phoneNumber === '555' && pinNumber === '1234'){
            console.log('You are login');
            window.location.href = 'home.html';
        }
        else{
            console.log('Wrong phone number or pin');
        }
    })