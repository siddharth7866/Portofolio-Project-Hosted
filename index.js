var sid=document.getElementsByTagName('h1')[0];
var advices = document.getElementById("sid");

async function getAdvice() {
  const url = await fetch("https://api.adviceslip.com/advice");
  const data = await url.json();
  console.log(data);
  var advice = data.slip.advice;
  //   var count = count + 1;

  advices.textContent = advice;
}

setInterval(getAdvice, 5000);

sid.style.color='red';


function changeColor() {
    
    
    var first='#';
    for (let index = 0; index < 6; index++) {
        var random=Math.floor(Math.random()*16);
        var pattern='0123456789ABCDEF';
        var ele=pattern[random];
        first=first+ele;
        
    }
    return first;
}


function color() {
    var funcinvoke=changeColor();
    sid.style.color=funcinvoke;
}



setInterval(color,600);
