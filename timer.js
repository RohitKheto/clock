var sec = 0;
var total=0;
var x = 0;
var y=0;
var z=0;
var interval = 0;
var pausech=0;
var st=0;
var hh=0;
var mm=0;
var ss=0;
var total=0;
function startbtn() {
    if(st==0){
        hh=parseInt(document.getElementById("hset").value);
        mm=parseInt(document.getElementById("mset").value);
        ss=parseInt(document.getElementById("sset").value);
        total=(hh*60*60)+(mm*60)+(ss);
    }
    interval = setInterval(() => {
        x=x+1;
        if(x==100){
            ss=ss-1;
            x=0;
        }
            else if(ss==0 && mm>0){
                y=1;
            }
            else if(y==1){
                mm=mm-1;
                ss=59;
                y=0;
            }
            else if(ss==0 && mm==0 &hh>0){
                z=1;
            }
            else if(z==1){
                hh=hh-1;
                mm=59;
                z=0;
            }
            document.getElementById("second").style.transform = `rotate(-${sec}deg)`;
            sec = sec + 0.06*(60/total);
            document.getElementById("m").innerHTML = hh;
            document.getElementById("s").innerHTML = mm;
            document.getElementById("ms").innerHTML = ss;
            if(ss==0 && mm==0 && hh==0){
                clearInterval(interval)
                document.getElementById("audio").play();
            }
        },10);
}
function pausebtn() {
    if (pausech == 1) {
        startbtn();
        pausech = 0;
        document.getElementById("pause").innerHTML = "Pause";
    }
    else if (pausech== 0) {
        clearInterval(interval);
        document.getElementById("pause").innerHTML = "Resume";
        pausech = 1;
        st=1;
    }

}
function resetbtn() {
    sec = 0;
    hh = 0;
    mm = 0;
    ss = 0;
    clearInterval(interval);
    document.getElementById("second").style.transform = `rotate(${sec}deg)`;
    document.getElementById("m").innerHTML="0"+hh;
    document.getElementById("s").innerHTML="0"+mm;
    document.getElementById("ms").innerHTML="0"+ss;
    document.getElementById("hset").value="00";
    document.getElementById("mset").value="00";
    document.getElementById("sset").value="00";
    document.getElementById("audio").pause();
}
