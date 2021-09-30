
var nxtBtn = document.querySelector("#nextButton");
var chkBtn = document.querySelector("#checkButton");
var errMsg = document.querySelector("#errorMsg");
var opArea = document.querySelector("#output-area");
var chArea = document.querySelector("#cash-area");
var bAinput = document.querySelector("#billAmount");
var bAreq = document.querySelector("#bA-req");
var cGinput = document.querySelector("#cashGiven");
var cGreq = document.querySelector("#cG-req");

nxtBtn.addEventListener("click", showCashArea);
chkBtn.addEventListener("click", showOpArea);

var noOfNotes = document.querySelectorAll(".noOfNotes");
const noteArr = [2000, 500, 100, 20, 10, 5, 1];

function calculateChange(chng) {
  opArea.style.display = "flex";
  errMsg.style.display = "none";
  for (let i = 0; i < noteArr.length; i++) {
    const numberOfNotes = Math.trunc(chng / noteArr[i]);
    chng %= noteArr[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function validate() {
  var bill = Number(bAinput.value);
  var cash = Number(cGinput.value);
  if (bill > cash) {
    errMsg.style.display = "flex";
    opArea.style.display = "none";
  } else {
    var chng = cash - bill;
    calculateChange(chng);
  }
}

function showCashArea() {
  if (bAinput.value === null || bAinput.value.length < 1 || bAinput.value < 0) {
    bAreq.style.display = "flex";
  } else {
    chArea.style.display = "flex";
    bAreq.style.display = "none";
  }
}

function showOpArea() {
  if (cGinput.value === null || cGinput.value.length < 1 || cGinput.value < 0) {
    cGreq.style.display = "flex";
  }
  if (bAinput.value === null || bAinput.value.length < 1 || bAinput.value < 0) {
    bAreq.style.display = "flex";
  }
  if (
    cGinput.value !== null &&
    cGinput.value.length > 0 &&
    cGinput.value > 0 &&
    bAinput.value !== null &&
    bAinput.value.length > 0 &&
    bAinput.value > 0
  ) {
    validate();
  }
}
