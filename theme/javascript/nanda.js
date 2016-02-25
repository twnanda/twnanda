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

var fl = document.getElementById("font-larger");
fl.onclick = function() {
  var contents = document.querySelectorAll(".main-content");
  for (var i = 0; i < contents.length; i++) {
    var content = contents[i];
    if (content.style.fontSize == "") {
      content.style.fontSize = "1.0em";
    }
    content.style.fontSize = (parseFloat(content.style.fontSize) + 0.25) + "em";
  }
}

var fs = document.getElementById("font-smaller");
fs.onclick = function() {
  var contents = document.querySelectorAll(".main-content");
  for (var i = 0; i < contents.length; i++) {
    var content = contents[i];
    if (content.style.fontSize == "") {
      content.style.fontSize = "1.0em";
    }
    content.style.fontSize = (parseFloat(content.style.fontSize) - 0.25) + "em";
  }
}
