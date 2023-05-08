function displayTime()
{
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes(); 
    var sec = d.getSeconds();
    var day=d.getDate();
    var moi=d.getMonth();
    var anne=d.getFullYear();
    var amOrPm = "AM";
    if(hour >= 12)
    {
      amOrPm = "PM";
    }
    if(hour > 12)
    {
      hour = hour - 12;
    }
    if(hour < 10)
      {hour = "0" + hour;}
    if(min < 10)
      {min = "0" + min;}
    if(sec < 10)
      {sec = "0" + sec;}
    if(day < 10)
      {day = "0" + day;}
    if(moi < 10)
      {moi = moi+1;
      moi = "0"+moi
    }
    
      
        document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + " " + amOrPm;
        document.getElementById("date").innerHTML = day + "/" + moi + "/" + anne;
}
setInterval(displayTime, 1000);