/*
1.add event handler withdraw button
2. get the withdraw amount 
3. clear the withdraw input field
4.get previous withdraw total

5.calculate total withdraw amount and set it to


*/
 

//step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
      //step-2

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithrawAmount = parseFloat(newWithdrawAmountString);

    //step-3
    withdrawField.value= '';

    //step-4

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalstring = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalstring);

    //step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;


    //step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotalAmount = parseFloat(previousbalanceTotalString);

    //step-7

    const newBalanceTotal = previousbalanceTotalAmount - newWithrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})