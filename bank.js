// get input value in number
function getInputAmount(inputId) {

    const inputAmount = document.getElementById(inputId).value;
    const newAmount = parseFloat(inputAmount);
    document.getElementById(inputId).value = '';
    return newAmount;
}
function updateTotalAmount(totalId, amount) {
    const totalAmountInput = document.getElementById(totalId).innerText;
    const totalAmount = parseFloat(totalAmountInput);
    const previousBalance = previousTotalBalance();
    
        document.getElementById(totalId).innerText = totalAmount + amount;
    
   
    
}
function previousTotalBalance(){
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalance = parseFloat(balanceText);
    return previousBalance;
}
function updateBalance (amount, isAdd){
    const balance = document.getElementById('balance');
    const previousBalance = previousTotalBalance();
   if(isAdd === true ){
       balance.innerText = previousBalance + amount;
   }
   else{
      
       balance.innerText = previousBalance - amount;
   }
}



document.getElementById('diposit-btn').addEventListener('click', function () {
    const newDipositAmount = getInputAmount('diposit-amount');
    
    if(newDipositAmount > 0 ){
        updateTotalAmount('total-diposit', newDipositAmount);
    updateBalance(newDipositAmount, true);
    } else{
        alert('hello, we need positive number');
    }
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getInputAmount('withdraw-amount');
    const previousBalance = previousTotalBalance();
     if(newWithdrawAmount > 0 && newWithdrawAmount < previousBalance){
        updateTotalAmount('total-withdraw', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
     } 
     else if( newWithdrawAmount > previousBalance){
         alert ('you can not withdraw more than what you have in your account')
     }
      else{
        alert('hello, we need positive number');
    }
    
})