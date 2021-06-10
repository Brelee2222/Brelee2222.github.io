0.5+(5^0.5)*0.5
const KonamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var Konamicode = 0
setTimeout(function rickroll() {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}, 15000);
    

window.onkeydown = function(key) {
    console.log(key.keyCode);
    if (key.keyCode == KonamiCode[Konamicode]) {
      if (Konamicode == 9) {
        alert('I can\'t Brelee-ve you two two two tried cheating. ཥ।^•ω•^।')
        window.open('https://i.imgur.com/1mRhKCY.jpg')

      } else {
        Konamicode +=1;
        console.log(Konamicode);
      };

    } else {
      Konamicode = 0;
    
      
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      
    };
    
  };
function rickrolls() {
  setTimeout(function rickroll() {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }, 30000);
};

var angle = 0;
var angl = 0;
var id = null;
function turnhead() {
  var elem = document.getElementById("e");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    
      pos++; 
      
      
      elem.style.transform = 'rotate(' + ((Math.cos(angle)*25) + 45) + 'deg)'; 
      h.style.transform = 'rotate(' + ((Math.cos(angl)*5)) + 'deg)'; 
      angl +=0.005
      angle +=0.01
      
    }
  
}
