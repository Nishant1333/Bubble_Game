var timer = 20;
var score=0;



function increaseScore() {
   score+=10;
    document.querySelector("#scoreVal").textContent=score;
}
function makeBubble() {
    var clutter = "";


    for (var i = 1; i <= 160; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#p-bottom").innerHTML = clutter;
}

function runTime() {
    var timer2 = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(timer2);
            document.querySelector("#p-bottom").innerHTML = `<h1 class="popup">Game Over</h1>`;
        }
    }, 1000);

}
function getNweHit(){
   var rn=Math.floor(Math.random() * 10);
   document.querySelector("#hitVal").textContent=rn; 
}
document.querySelector("#p-bottom").addEventListener("click",function(e){
    if(e.target.classList.contains("bubble")){
        var hitVal=document.querySelector("#hitVal").textContent;
        if(e.target.textContent==hitVal){
            e.target.classList.add("hide");
            getNweHit();
            increaseScore();
           
        }
    }
    else{

    }
})
runTime();
makeBubble(); 
getNweHit();

