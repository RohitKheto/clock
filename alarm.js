var al=0;
function alarmring(e){
    e.preventDefault();
    al=1;
}
function stopring(e){
    e.preventDefault();
    al=0;
    document.getElementById("audio").pause();
}
document.getElementsByTagName("button")[0].addEventListener("click",alarmring);
setInterval(() => {
    let time=new Date();
    let secondt=time.getSeconds()*6;
    let minutet=time.getMinutes()*6;
    let hourt=(time.getHours()*30)+(time.getMinutes()/2);
    document.getElementById("hour").style.transform=`rotate(${hourt}deg)`;
    document.getElementById("minute").style.transform=`rotate(${minutet}deg)`;
    document.getElementById("second").style.transform=`rotate(${secondt}deg)`;
    if(al==1){
        let hv=parseInt(document.getElementById("h").value);
        let mv=document.getElementById("m").value;
        let ap=document.getElementById("ampm").value;
        if(ap=="am" && hv==12)
            hv=0;
        if(ap=="pm" && hv!=12)
            hv+=12;
        if(hv==time.getHours() && mv==time.getMinutes())
        {
            document.getElementById("audio").play();
        }
    }
}, 100);