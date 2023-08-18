// Step-1: ) So .value jekhane jekhane use kortesi sob gulo value amra
// Ei function er maddhome peye jacchi!! for example deposit input field er value
// tarpor withdraw input field er value

function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}

// Step-2: ) So InnerText jekhane jekhane use kortesi sob gulo value amra
// Ei function er maddhome peye jacchi!! for example dashboard e show kora value of deposit,withdraw and balance

function getTextElementValueByID(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;

  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

// Step-3) Dashboard e show korar jonno innerText use kore deposit value ta show kortesi!
// Ekhane 2ta parameter nicche first er ta jekhane set kortesi second ta jei notun value ta set korte chacchi!!!
function setTextElementById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
