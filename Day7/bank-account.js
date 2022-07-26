var accountInfo = [];

var bankApp = (function () {
  var name = "";
  var balance = 0;
  var y;

  function showData() {
    var dataText = "";
    for (let i = 0; i < accountInfo.length; i++) {
      dataText +=
        "Account name: " +
        accountInfo[i].name +
        " Balance: " +
        accountInfo[i].balance +
        "\n";
    }
    document.getElementById("ouput").value = dataText;
  }

  return {
    createAccount: function () {
      name = document.getElementById("name").value;
      balance = document.getElementById("depose").value;

      accountInfo.push({ name: name, balance: balance });
      showData();
      document.getElementById("name").value = "";
      document.getElementById("depose").value = "";
    },
  };
})();

document.getElementById("submitbtn").onclick = bankApp.createAccount;
myFunction2();
myFunction3();
document.getElementById("depositBtn").onclick = deposit;
document.getElementById("debitBtn").onclick = debit;
document.getElementById("deposit1").onclick = deposit1;
document.getElementById("debit1").onclick = debit1;
document.getElementById("submitDeposit").onclick = recordDeposit;
document.getElementById("submitDebit").onclick = recordDebit;

function recordDeposit() {
  myFunction();
  depositAdder();
  myFunction2();
  showData2();
}
function recordDebit() {
  myFunction();
  debitAdder();
  myFunction3();
  showData2();
}

function deposit() {
  myFunction();
  myFunction2();
  depositAdder();
}

function debit() {
  myFunction();
  myFunction3();
  debitAdder();
}

function showData2() {
  var dataText = "";
  for (let i = 0; i < accountInfo.length; i++) {
    dataText +=
      "Account name: " +
      accountInfo[i].name +
      " Balance: " +
      accountInfo[i].balance +
      "\n";
  }
  document.getElementById("ouput").value = dataText;
}

function depositAdder() {
  var select = document.getElementById("depositSelect");
  for (var i = 0; i < accountInfo.length; i++) {
    var opt = accountInfo[i].name;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
}
function debitAdder() {
  var select = document.getElementById("debitSelect");
  for (var i = 0; i < accountInfo.length; i++) {
    var opt = accountInfo[i].name;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
}

function myFunction() {
  var x = document.getElementById("homeView");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementById("depositView");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction3() {
  var x = document.getElementById("debitView");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function deposit1() {
  for (var i = 0; i < accountInfo.length; i++) {
    if (
      accountInfo[i].name === document.getElementById("depositSelect").value
    ) {
      var modifiedBal =
        parseInt(accountInfo[i].balance) +
        parseInt(document.getElementById("depositAmount").value);
      accountInfo[i].balance = modifiedBal;
    }
  }
  document.getElementById("depositAmount").value = "";
  alert(modifiedBal + " is the updated balance");
}

function debit1() {
  for (var i = 0; i < accountInfo.length; i++) {
    if (accountInfo[i].name === document.getElementById("debitSelect").value) {
      var updatedBal =
        accountInfo[i].balance - document.getElementById("debitAmount").value;
      accountInfo[i].balance = updatedBal;
    }
  }
  document.getElementById("debitAmount").value = "";
  alert(updatedBal + " is the updated balance");
}
