const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const fivePercent = document.getElementById("5");
const tenPercent = document.getElementById("10");
const fifteenPercent = document.getElementById("15");
const twentyPercent = document.getElementById("20");
const fiftyPercent = document.getElementById("50");
const customPercent = document.getElementById("custom");
const customInstruction = document.getElementById("custom-instruction");
const sumbitBtn = document.getElementById("submit-btn");

const totalPerPerson = document.getElementById("total-per-person");
const tipPerPerson = document.getElementById("tip-per-person");

let data = {
 bill: null,
 tip: null,
 people: null,
};

const getBillAmount = () => {
 data.bill = billInput.value;
};

billInput.onchange = getBillAmount;
billInput.oninput = getBillAmount;

const getPeopleAmount = () => {
 data.people = peopleInput.value;
};

peopleInput.onchange = getPeopleAmount;
peopleInput.oninput = getPeopleAmount;

const getTipAmount = (event) => {
 if (customPercent.classList.contains("custom-active")) {
  customInstruction.classList.remove("display");
  customInstruction.classList.add("hidden");
  customPercent.classList.remove("custom-active");
  customPercent.value = "Custom";
 }

 let tip = parseFloat(event.target.value.replace("%", ""));
 tip = tip / 100 + 1;
 data.tip = tip;
};

const handleCustomTip = () => {
 customInstruction.classList.remove("hidden");
 customInstruction.classList.add("display");
 customPercent.setAttribute("value", "");
 customPercent.classList.add("custom-active");
};

const getCustomTip = (event) => {
 data.tip = parseFloat(event.target.value / 100 + 1);
 console.log(parseFloat(event.target.value / 100 + 1));
};

fivePercent.onclick = getTipAmount;
tenPercent.onclick = getTipAmount;
fifteenPercent.onclick = getTipAmount;
twentyPercent.onclick = getTipAmount;
fiftyPercent.onclick = getTipAmount;
customPercent.onclick = handleCustomTip;
customPercent.oninput = getCustomTip;
customPercent.onchange = getCustomTip;

const displayInfo = (tip, total) => {
 tipPerPerson.innerHTML = `$${parseFloat(tip).toFixed(2)}`;
 totalPerPerson.innerHTML = `$${parseFloat(total).toFixed(2)}`;
};

const calculate = () => {
 const totalBill = data.tip * data.bill;
 const splitTotal = totalBill / data.people;
 const splitTip = (totalBill - data.bill) / data.people;

 displayInfo(splitTip, splitTotal);
};

sumbitBtn.onclick = calculate;
