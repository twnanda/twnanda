var zhconvert = document.getElementById("zh-convert");

zhconvert.onclick = function() {
  if (zhconvert.dataset.zh == "tw") {
    TongWen.trans2Simp(document);
    zhconvert.dataset.zh = "cn";
    setTimeout(function() {zhconvert.textContent = "繁體";}, 500);
  } else {
    TongWen.trans2Trad(document);
    zhconvert.dataset.zh = "tw";
    setTimeout(function() {zhconvert.textContent = "简体";}, 500);
  }
}
