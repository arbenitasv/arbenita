var wakeuptime;
var ds_time;
var sleeptime;
var noon=12;
function showCurrentTime(){
    var clock = document.getElementById('clock')
    var currentTime= new Date()

    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
     
    var meridian = "AM"
    if (hours>=noon){
        meridian="PM"}
        var clockTime=hours +":"+ minutes +":"+ seconds +" "+ meridian;
clock.innerText=clockTime  
changeImage()
  }

setInterval(showCurrentTime,1000)

function changeImage(){
    var time = new Date().getHours()
    console.log(time)

var image="img/ds_clock.png"
var imageHtml=  document.getElementById("timeImage")

if( time==wakeuptime){
     var image ="img/morning.gif"
     console.log(image)
    }
    else if(time==ds_time){
        image="img/class.gif"
    }
    else if(time==sleeptime){
        image="img/night.gif"
    }
    imageHtml.src=image
    console.log(imageHtml.src)
}

function updateClock(){
    var wakeUpTimeSelector= document.getElementById("wakeUpTimeSelector")
    wakeuptime=wakeUpTimeSelector.value;

    var dsTimeSelector =document.getElementById("dsTimeSelector")
    dstime=dsTimeSelector.value

    var sleepTimeSelector= document.getElementById("sleepTimeSelector")
    sleeptime=sleepTimeSelector.value
}
var saveButton= document.getElementById("saveButton")
saveButton.addEventListener("click",updateClock)
