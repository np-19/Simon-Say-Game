let gameSeq = [];
let userSeq = [];
let level = 0;
let highscore = level;
let started = false;
let btns = ['red','green','yellow','blue'];
document.addEventListener('keyup',function(){
    if(started==false){
        console.log("Game started.")
         started = true;
         levelUp();

    }

})
h3 = document.querySelector('h3');

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText = `Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randCol=btns[randIdx];
    let randBtn =  document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq)
    Flash(randBtn);
}
function Flash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },300);
}
function btnFlash(btn){
    btn.classList.add('user');
    setTimeout(function(){
        btn.classList.remove('user')
    },300);
}

function btnPress(){
    if(started==true){
    btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute('id');
    userSeq.push(userColor)
    checkSeq(userSeq.length-1);
    }
    function checkSeq(idx){
        console.log(`Current level : ${level}`);
        if(userSeq[idx]===gameSeq[idx]){
            if(userSeq.length==gameSeq.length){
                setTimeout(levelUp,1000)
                
            }
        }
        else{
            h3.innerHTML = `Game Over! &nbsp;&nbsp;&nbsp;Your Score was <b> ${level} </b> <br>
            Highest Score was ${highscore} <br> Press any key to start again.`;
            document.querySelector('body').style.backgroundColor= 'red';
            setTimeout(function(){
                document.querySelector('body').style.backgroundColor= 'white';
            },100)
            if(level > highscore){
                highscore = level;

                h3.innerHTML = `Game Over! &nbsp;&nbsp;&nbsp;You achieved
            Highest Score of ${highscore} <br> Press any key to start again.`;
            }

            reset();
        }

    }
    
    


}

let allBtns = document.querySelectorAll('.color');
for (btn of allBtns) {
    btn.addEventListener('click',btnPress) 
}
function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}
    

