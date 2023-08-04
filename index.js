var name=document.getElementsByTagName('h1')[0];


name.style.color='red';


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

console.log(changeColor());
