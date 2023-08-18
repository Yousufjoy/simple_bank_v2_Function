// Main body, here we are calling the function and passing the arguments
document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  const previousDepositTotal = getTextElementValueByID("deposit-total");

  // calculate new deposit total
  const newDepositTotal = newDepositAmount + previousDepositTotal;
  // set deposit total value
  setTextElementById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueByID("balance-total");

  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  // Set new balance after depositing
  setTextElementById("balance-total", newBalanceTotal);
});
