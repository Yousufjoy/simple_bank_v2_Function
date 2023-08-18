document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Show withdraw amount on the dashboard
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  const withdrawInput = getTextElementValueByID("withdraw-input");

  const withdrawAmountCalculated = newWithdrawAmount + withdrawInput;

  setTextElementById("withdraw-input", withdrawAmountCalculated);

  const newBalanceTotal = getTextElementValueByID("balance-total");
  const newBalanceAfterWithdraw = newBalanceTotal - newWithdrawAmount;

  setTextElementById("balance-total", newBalanceAfterWithdraw);
});
