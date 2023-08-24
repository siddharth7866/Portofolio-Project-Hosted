var sid=document.getElementsByTagName('h1')[0];
var advice = document.getElementById("sid");

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
