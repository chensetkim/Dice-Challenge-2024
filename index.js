
var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    rotate();   
});

function refresh(){
    var numberImg1 = Math.floor(Math.random()*6+1);
    var numberImg2 = Math.floor(Math.random()*6+1);
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice"+numberImg1+".png");
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice"+numberImg2+".png");
    if (numberImg1>numberImg2){
        document.querySelector("h1").innerHTML="Player1 Win!"
    } else if (numberImg1 === numberImg2){
        document.querySelector("h1").innerHTML="Player1 = Player2"
    } else {
        document.querySelector("h1").innerHTML="Player2 Win!"
    }
}

 async function rotate(){
    var dice1 = document.getElementsByClassName("img1")[0];
    var dice2 = document.getElementsByClassName("img2")[0];

    dice1.setAttribute("src","./images/dice_1.png");
    dice2.setAttribute("src","./images/dice_2.png");

    for (var i = 1; i<1000;i+=10){
        dice1.style.transform = 'rotate('+i+'deg)';
        dice2.style.transform = 'rotate('+i+'deg)';
        await delay(40);
    }

    refresh();
    makesound()
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function makesound(){
    var dice_sound = new Audio("sounds/dice_wine.wav");
    dice_sound.play();
}