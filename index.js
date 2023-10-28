setInterval(() => {
    let time=new Date();
    let second=time.getSeconds()*6;
    let minute=time.getMinutes()*6;
    let hour=(time.getHours()*30)+(time.getMinutes()/2);
    document.getElementById("hour").style.transform=`rotate(${hour}deg)`;
    document.getElementById("minute").style.transform=`rotate(${minute}deg)`;
    document.getElementById("second").style.transform=`rotate(${second}deg)`;
    if(time.getHours()<10)
        document.getElementById("h").innerHTML="0"+time.getHours();
    if(time.getMinutes()<10)
        document.getElementById("m").innerHTML="0"+time.getMinutes();
    if(time.getSeconds()<10)
    document.getElementById("s").innerHTML="0"+time.getSeconds();
    if(time.getSeconds()>=10){
        document.getElementById("s").innerHTML=time.getSeconds();
    }
    if(time.getMinutes()>=10){
        document.getElementById("m").innerHTML=time.getMinutes();
    }
    if(time.getHours()>=10){
        document.getElementById("h").innerHTML=time.getHours();
    }
}, 100);