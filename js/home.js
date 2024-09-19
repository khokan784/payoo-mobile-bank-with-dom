// step 1
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    // step 2
    const addMoney = document.getElementById('input-add-money').value;
    console.log(addMoney);
    // added pin num
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);
})