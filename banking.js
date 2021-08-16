
function getInputValue(inputId){
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear input  
    inputFeild.value = '';
    return inputAmount;
}

function updateTotalField(totalFieldId, amount){
    // debugger;
    const totalEelement = document.getElementById(totalFieldId);
    const totalText = totalEelement.innerText;
    const perviousTotal = parseFloat(totalText);
    totalEelement.innerText = amount + perviousTotal;
}


// get current balance 
function getCurrentBalance (){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const perviousBalanceTotal = parseFloat(balanceTotalText);
    return perviousBalanceTotal;
}



function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    
    /* const balanceTotalText = balanceTotal.innerText;
    const perviousBalanceTotal = parseFloat(balanceTotalText);
     */
    //  = newBalanceTotal;
    const perviousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = perviousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = perviousBalanceTotal - amount;
    }
}
document.getElementById('deposit-btn').addEventListener('click', function(){
    /*
     const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
     */
    

    // get current deposit 
    /*
     const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const perviousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + perviousDepositTotal; 
    */
   
    // update balance

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const perviousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = perviousBalanceTotal + depositAmount;
    balanceTotal.innerText = newBalanceTotal; */
    
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0 ){
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);  
}

})

// handle withdraw 

document.getElementById('withdraw-btn').addEventListener('click', function(){
/* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
 */
   

    // update withdraw total 

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const perviousWithdrawTotal = parseFloat(withdrawTotalText)
    const newWithdrawTotal = withdrawAmount + perviousWithdrawTotal;
    withdrawTotal.innerText = newWithdrawTotal;
 */
   
    

   



    // update balanceTotal
    
   /*  const balanceTotal = document.getElementById('balance-total');
    const perviousBalanceText = balanceTotal.innerText;
    const perviousBalanceTotal = parseFloat(perviousBalanceText);
    const newBalanceTotal = perviousBalanceTotal -withdrawAmount;
    balanceTotal.innerText = newBalanceTotal; */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
    updateTotalField('withdraw-total', withdrawAmount)
    updateBalance(withdrawAmount, false)
    }
    if (withdrawAmount > currentBalance)[
        console.log('You can not withdraw more than what have your current')
    ]
})

 