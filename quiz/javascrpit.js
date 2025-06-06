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
    
    if(--tot_time<0){
        clearInterval(interval);
        document.getElementById("myform").submit();
    }
}
//for restricting copying
document.oncontextmenu =() => {
    alert("Right click is not Allowed");
    return false;
}
document.onkeydown = e => {
    if(e.key =="F12"){
        alert("You can't inspect my page");
        return false;
    }
    if(e.ctrlKey && e.key == "c"){
        alert("You can't copy");
        return false;
    }
    
}
let form1= document.getElementById('myform');
if (form1.action=="http://localhost:8080/quiz"){
    document.getElementById("myform").submit();
}
else{
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            console.log("The page is now hidden!");
            document.documentElement.requestFullscreen();
            window.location.replace("error.html");
        } else {
            console.log("The page is visible again!");
        }
        });
        window.addEventListener("beforeunload", function (event) {
        event.preventDefault();
        
        event.returnValue = ""; // This shows a confirmation dialog in most browsers
        });
        window.addEventListener("hashchange", function () {
        console.log("User navigated to a new page within the app: " + location.hash);
        });
}
//for restricting switch window
