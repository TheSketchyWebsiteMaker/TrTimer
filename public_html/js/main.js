var sessionStarted = false;

function getTime(){
    var t = new Date();
    document.getElementById("curTime").innerHTML= t.toString().substring(0,24);;
}
setInterval(getTime, 1000);

function startTimer(){
    var t = new Date();
    var hours = t.getHours();
    var minutes = t.getMinutes();
    if(hours==16&&minutes==54&&sessionStarted == false){
        document.getElementById("sessionStart").innerHTML+="hi";
        sessionStarted = true;
        clearInterval(sessStart);
    }
}
var sessStart = setInterval(startTimer,1000);