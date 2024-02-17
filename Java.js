var codeInput = document.getElementById("code-input");
var codeButton = document.getElementById("code-button");
var codeMessage = document.getElementById("code-message");

var codes = [
  ["ZF132", "https://www.tiktok.com/@yt_zakifaisal_05"],
  ["YT_ZAKIFAISAL_05", "https://zakifaisal24.github.io"],
  ["halo bang", "dzakifaisal11@gmail.com"],
  ["developemen", "https://wa.me/message/PJA2BQ6SUPVXI1"],
  ["ZAKI", "https://example.biz"],
  ["FAISAL", "https:zakifaisal05official.github.io"],
  ["gimana kabarnya", "https://youtube.com/@ZAKI_FAISAL_05_OFFICIAL?si=g3HDMwEWOD3S9uWG"],
  ["Studio", "https://www.instagram.com/zaki_faisal_official"]
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
