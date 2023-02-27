document.querySelector(".player-0-score").innerHTML=0;
document.querySelector(".player-0-sum").innerHTML=0;
document.querySelector(".player-1-score").innerHTML=0;
document.querySelector(".player-1-sum").innerHTML=0;
var sum = 0
var activeplayer = 0;
var scores= [0 , 0];




document.querySelector(".role").addEventListener("click" , function(){
    var dice = 1 + Math.floor(Math.random() * 6);
    var diceimg =  document.querySelector(".dice");
   diceimg.style.display ="block";
    diceimg.src = "picture-"+dice+".png"
    if(dice !=1 ){
        sum = sum + dice
        document.querySelector(".player-"+activeplayer+"-sum").innerHTML = sum;
    }else{
        
        alert("change player")
        nextplayer();
    }
    
})

function nextplayer(){
    
    (activeplayer== 0) ? activeplayer = 1 : activeplayer = 0;
    
    sum = 0;
    document.querySelector(".player-0-sum").innerHTML= 0 ;
    document.querySelector(".player-1-sum").innerHTML= 0 ;
    document.getElementById("dice-id").style.display="none";
    document.querySelector(".player-0").classList.toggle("active");
    document.querySelector(".player-1").classList.toggle("active");    
}

document.querySelector(".hold").addEventListener("click" , function(){
    scores[activeplayer] = scores[activeplayer] + sum;
    document.querySelector(".player-"+activeplayer+"-score").innerHTML = scores[activeplayer];
    if( scores[activeplayer] > 25){
        document.querySelector(".player-"+activeplayer+"").classList.add("winner");
        document.querySelector(".player-"+activeplayer+"-score").innerHTML = "your winner" + scores[activeplayer];
    }else{
        nextplayer();
    }
    
})

document.querySelector(".new").addEventListener("click" , function(){
    
    document.querySelector(".player-0-score").innerHTML=0;
    document.querySelector(".player-0-sum").innerHTML=0;
    document.querySelector(".player-1-score").innerHTML=0;
    document.querySelector(".player-1-sum").innerHTML=0;
    scores[activeplayer] = 0;
})









