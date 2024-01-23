const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipInputs = [
 {
  label: "5%",
  id: "1.05",
  value: 1.05,
 },
 {
  label: "10%",
  id: "1.1",
  value: 1.1,
 },
 {
  label: "15%",
  id: "1.15",
  value: 1.15,
 },
 {
  label: "20%",
  id: "1.2",
  value: 1.2,
 },
 {
  label: "50%",
  id: "1.5",
  value: 1.5,
 },
 {
  label: "Custom",
  id: "custom",
  value: "custom",
 },
];

let billAmount;
let tipAmount;
let peopleAmount;

const getBillAmount = () => {
 billAmount = billInput.value;
};

billInput.onchange = getBillAmount;
billInput.oninput = getBillAmount;

const getPeopleAmount = () => {
 peopleAmount = peopleInput.value;
};

peopleInput.onchange = getPeopleAmount;
peopleInput.oninput = getPeopleAmount;

const getTipAmount = () => {};
