var sec = 0;
var sc = 0;
var mm = 0;
var msc = 0;
var x = 0;
var interval = 0;
var checkstart=0;
function startbtn() {
    if(checkstart==0){
        interval = setInterval(() => {
            document.getElementById("second").style.transform = `rotate(${sec}deg)`;
            sec = sec + 0.06;
            document.getElementById("m").innerHTML = mm;
            document.getElementById("s").innerHTML = sc;
            document.getElementById("ms").innerHTML = msc;
            msc = msc + 1;
            if (msc == 100) {
                msc = 0;
                sc += 1;
            }
            if (sc == 60) {
                sc = 0;
                mm += 1;
            }
        }, 10);
        checkstart=1;
    }
}
function pausebtn() {
    if (x == 1) {
        startbtn();
        x = 0;
        document.getElementById("pause").innerHTML = "Pause";
    }
    else if (x == 0) {
        clearInterval(interval);
        document.getElementById("pause").innerHTML = "Resume";
        x = 1;
        checkstart=0;
    }

}
function resetbtn() {
    sec = 0;
    sc = 0;
    mm = 0;
    msc = 0;
    x = 0;
    clearInterval(interval);
    document.getElementById("second").style.transform = `rotate(${sec}deg)`;
    document.getElementById("m").innerHTML="0"+mm;
    document.getElementById("s").innerHTML="0"+sc;
    document.getElementById("ms").innerHTML="0"+msc;
}
