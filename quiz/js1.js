//Timer
const s_min = 20;
let tot_time = s_min * 60;
const element=document.getElementById('timer');
const interval=setInterval(caltimer,1000);
function caltimer(){
    let min = Math.floor(tot_time / 60);
    let second = tot_time % 60;
    second = second<10 ? '0' + second : second;
    element.innerHTML=min +':'+second;
    let rtime=--tot_time;
    if(rtime<0){
        clearInterval(interval);
        document.getElementById("myform").submit();
    }
    else if(rtime<780 && rtime>300){
        let colour=document.getElementById('timer');
        colour.style.backgroundColor = "yellow";
        colour.style.color= "black";
    }
    else if(rtime<300){
        let colour=document.getElementById('timer');
        colour.style.backgroundColor = "red";
        colour.style.color="white";
    }
}
