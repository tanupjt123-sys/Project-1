let gameSeq = [];
let userSeq = [];
let btns = ["orange", "red", "blue", "green"];
let start = false;
let level = 0;
let h3 = document.querySelector('h3');
document.addEventListener("keypress", function(){
    if(start == false){
        console.log("Game started");
        start = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash")
    }, 250);
}

function userFlash(userbtn){
    userbtn.classList.add("userFlash");
    setTimeout(function(){
        userbtn.classList.remove("userFlash")
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor= btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}

function checkIdx(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length ==gameSeq.length){
            setTimeout(levelUp, 1000)
        }
    }else{
        h3.innerHTML = `GAME OVER. Your score <b>${level}<b><br> Press any to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        reset();
    }
}
function btnPress() {
    let btn = this;
    //console.log(this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);

    checkIdx(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    length = 0;
    start = false;
    userSeq = [];
    gameSeq = [];
}