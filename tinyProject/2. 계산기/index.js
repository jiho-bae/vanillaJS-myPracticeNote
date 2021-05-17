const $result = document.querySelector("#jsResult");
let operandA = "";
let operandB = "";
let operator = "";
$result.value = "";

function handleClickClear() {
  operandA = "";
  operandB = "";
  operator = "";
  $result.value = "";
}

function handleClickHundredth() {
  if (operator) {
    operandB /= 100;
  } else {
    operandA /= 100;
  }
  $result.value /= 100;
}

function handleClickSign() {
  if (operator) {
    operandB = -operandB;
  } else {
    operandA = -operandA;
  }
  $result.value = -$result.value;
}
function handleClickDot() {
  if (operator) {
    operandB += ".";
  } else {
    operandA += ".";
  }
  $result.value += ".";
}

function handleClickCalculate() {
  if (!operandB) {
    alert("피연산자를 모두 입력하세요.");
    return;
  }
  if (operator === "+") operandA = Number(operandA) + Number(operandB);
  else if (operator === "-") operandA = operandA - operandB;
  else if (operator === "x") operandA = operandA * operandB;
  else if (operator === "/") operandA = operandA / operandB;
  $result.value = operandA;
  operandB = "";
  operator = "";
}

function handleClickOperator(event) {
  if (!operandA) {
    alert("숫자를 먼저 입력하세요.");
    return;
  }
  const {
    target: { innerHTML: op },
  } = event;
  if (operandB) handleClickCalculate();
  operator = op;
}

function handleClickNumber(event) {
  if ($result.value === "" && num === "0") return;

  const {
    target: { innerHTML: num },
  } = event;

  if (!operator) {
    operandA += num;
    $result.value += num;
    return;
  }

  if (!operandB) $result.value = "";
  operandB += num;
  $result.value += num;
}

function createEventListeners() {
  document
    .getElementById("jsNum0")
    .addEventListener("click", handleClickNumber);
  document
    .getElementById("jsNum1")
    .addEventListener("click", handleClickNumber);
  document
    .getElementById("jsNum2")
    .addEventListener("click", handleClickNumber);
  document
    .getElementById("jsNum3")
    .addEventListener("click", handleClickNumber);
  document
    .getElementById("jsNum4")
    .addEventListener("click", handleClickNumber);
  document
    .getElementById("jsNum5")
    .addEventListener("click", handleClickNumber);
  document
    .getElementById("jsNum6")
    .addEventListener("click", handleClickNumber);
  document
    .getElementById("jsNum7")
    .addEventListener("click", handleClickNumber);
  document
    .getElementById("jsNum8")
    .addEventListener("click", handleClickNumber);
  document
    .getElementById("jsNum9")
    .addEventListener("click", handleClickNumber);

  document.getElementById("jsDot").addEventListener("click", handleClickDot);
  document.getElementById("jsSign").addEventListener("click", handleClickSign);
  document
    .getElementById("jsHundredth")
    .addEventListener("click", handleClickHundredth);

  document
    .getElementById("jsPlus")
    .addEventListener("click", handleClickOperator);
  document
    .getElementById("jsMinus")
    .addEventListener("click", handleClickOperator);
  document
    .getElementById("jsMultiply")
    .addEventListener("click", handleClickOperator);
  document
    .getElementById("jsDivide")
    .addEventListener("click", handleClickOperator);

  document
    .getElementById("jsClear")
    .addEventListener("click", handleClickClear);
  document
    .getElementById("jsCalculate")
    .addEventListener("click", handleClickCalculate);
}

function init() {
  createEventListeners();
}

init();
