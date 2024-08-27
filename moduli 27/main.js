for(var i=0; i<5;i++){
    console.log("vlera e i-se eshte:"+i);
}
console.log("____________");

var personat ={ emri:"Agon", mbiemri:"Ramadani", mosha:18};
var text = '';
var z;
for(z in personat){
    text += personat[z];
}
console.log(text);

console.log("____________");

var emrat=['Altina','Andi', 'Anila'];
var y;
for(y of emrat){
    console.log(y);
}
console.log("____________");

var f=0;
do{
    f=f+1;
    console.log(f);
} while(f<5);

console.log("____________");

var x=0;
while(x<17){
    x=x+1;
    console.log(x);
}
console.log("____________");

var l=0;
var c=0;
while(l<3){
    l++;
    c+=l;
    console.log(l);
    console.log(c);
}

var mbiemra=['Gashi','Krasniqi','Berisha'];
var d;
for(d of mbiemra){
    console.log(d);
}


var us=['une','ti','ai'];
var names_input= document.getElementById(names_input);
var button=document.getElementById("button");
var button=document.getElementById("button1");


button.onclick= function(){
    us.push(names_input.value);
}
button1.onclick=function(){
    for(i=0; i<us.length; i++){
        document.write(us[i]+'<br>');
    }
}



