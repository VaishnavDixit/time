let timeElement = document.getElementById("time");
if (timeElement != null) {
    timeElement.innerHTML = getTime();
}
setInterval(function() {
    timeElement = document.getElementById("time");
    if (timeElement != null) {
        timeElement.innerHTML = getTime();
    }
}, 1000);

function getTime(){
    time = new Date();
    timeElement = document.getElementById("time");
    hrs=time.getHours();
    min=time.getMinutes();
    var AM_PM;
    if(time.getHours()>12){
        AM_PM="pm";
        hrs=hrs-12;
    }
    else{
        if(time.getHours()==0){
            hrs=12;
        }
        AM_PM="am";
    }
    if(min<10){
        min="0"+min;
    }
    if(hrs<10){
        hrs="0"+hrs;
    }
    return `${hrs}:${min} ${AM_PM}`;
}
