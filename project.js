fetch('https://raw.githubusercontent.com/Brelee2222/My-current-projects/main/projects.txt').then(function (res) {
    return res.text()
  }).then(function (text) {
    document.getElementById("disp").innerHTML = text
  });