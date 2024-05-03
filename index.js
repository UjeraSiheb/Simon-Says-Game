let gameSeq=[];
let userSeq=[];
 let btns=['yellow','red','purple','green'];
let started=false;
let level=0;
let highest=0;
let h2=document.querySelector('h2');
document.addEventListener('keypress',function(){
    if(started==false){
        started=true;
        levelup();
    }
})
 function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove("flash")
    },200);
 }
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randominx=Math.floor(Math.random()*3);
    let randcolor=btns[randominx];
    let randombtn=document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log("gameseq",gameSeq);
    gameFlash(randombtn);
}
function checkbtn(index){
    if(userSeq[index]===gameSeq[index]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelup,1000);
       }
    }else{
        if(highest<level){
            highest=level;
        }
        h2.innerHTML=`game is over Your score was <b> ${level}<b><br> !Press key to start Highest score is ${highest} highest ${highest}`;
        document.querySelector("body").style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor='white';
        },150);
        reset();
    }
}
function btnpress() {
    let btn=this;
    console.log(this);
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },200);
    userColr=btn.getAttribute("id");
    userSeq.push(userColr);
    console.log("user",userSeq);
    checkbtn(userSeq.length-1);

}

let allbtns = document.querySelectorAll(".btn");
for (button of allbtns) {
    button.addEventListener("click", btnpress);
}
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;

}