const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const fivePercent = document.getElementById("5");
const tenPercent = document.getElementById("10");
const fifteenPercent = document.getElementById("15");
const twentyPercent = document.getElementById("20");
const fiftyPercent = document.getElementById("50");
const customPercent = document.getElementById("custom");

const totalPerPerson = document.getElementById("total-per-person");
const tipPerPerson = document.getElementById("tip-per-person");

let data = {
 bill: 0,
 tip: 0,
 people: 0,
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
 let tip = parseFloat(event.target.value.replace("%", ""));
 tip = tip / 100 + 1;
 data.tip = tip;

 calculate();
};

fivePercent.onclick = getTipAmount;
tenPercent.onclick = getTipAmount;
fifteenPercent.onclick = getTipAmount;
twentyPercent.onclick = getTipAmount;
fiftyPercent.onclick = getTipAmount;
customPercent.onclick = getTipAmount;

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
