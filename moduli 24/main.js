//var button1 = document.getElementById("btn1");
//button1.onclick = function() {
//    alert("hello world");
//}
//var button1= document.getElementById('button');
var button2= document.getElementById('btn2');
var button3= document.getElementById('btn3');
var button4= document.getElementById('btn4');

var v_button =document.getElementById("btn1");
var btnhide = document.getElementById("btnHide");


btnhide.onclick = function(){
    btnhide.setAttribute("class","test2");
}




v_button.onclick =function(){
   // v_button.style.color="red";
    //v_button.style.backgroundColor="blue";
    //v_button.style.textAlign="center";
    //v_button.style.fontSize="100px"
    //v_button.style.padding="20px";
    //v_button.style.cssText="color:red; background-color:blue; text-align:center; font-size:100px; padding:20px"
v_button.setAttribute("class", "test")
}


//var button1 = document.querySelector("button");
//button1.addEventListener('click', function(){
 //   alert("hello guys")
//})

button2.onmouseover = function(){
    alert("une jom button 2shi");
}
button3.onmouseleave =function(){
    alert("une jom filan fisteku");
}
button4.onmouseenter = function(){
    alert("une jom baba");
}

square.onclick=function(){
square.setAttribute("class","square");}