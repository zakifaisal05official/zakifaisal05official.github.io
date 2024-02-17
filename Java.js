var codeInput = document.getElementById("code-input");
var codeButton = document.getElementById("code-button");
var codeMessage = document.getElementById("code-message");

var codes = [
  ["ZF132", "https://example.com"],
  ["YT_ZAKIFAISAL_05", "https://example.net"],
  ["halo bang", "https://example.org"],
  ["developemen", "https://example.edu"],
  ["ZAKI", "https://example.biz"],
  ["FAISAL", "https://example.info"],
  ["gimana kabarnya", "https://example.io"],
  ["Studio", "https://example.co"]
];

codeButton.addEventListener("click", redeemCode);

function redeemCode() {
  var code = codeInput.value;
  var found = false;
  var url = "";
  for (var i = 0; i < codes.length; i++) {
    if (code == codes[i][0]) {
      found = true;
      url = codes[i][1];
      break;
    }
  }
  if (found) {
    codeMessage.style.color = "green";
    codeMessage.textContent = "Code ridem bentar";
    window.open(url);
    codeInput.value = "";
  } else {
    codeMessage.style.color = "red";
    codeMessage.textContent = "Kamu salah masukin code nya";
    codeInput.value = "";
  }
}
