function game(yourchoice)
{
    let humanchoice;
    let botchoice;
    let winner;
    let winnerinformation;
    humanchoice=yourchoice.id;
    botchoice=botoption(botchooseinnumber());
    winner=decidewinner(humanchoice,botchoice);
    winnerinformation=message(winner);
    frontend(humanchoice,botchoice,winnerinformation);

}

function botchooseinnumber()
{
    return Math.floor(Math.random()*3);
}

function botoption(number)
{
    let choicearray=["rock","paper","scissor"];
    return choicearray[number];
}

function decidewinner(human,bot)
{
    let ruledatabase={
        "rock":{"rock":0.5 , "paper":0 , "scissor": 1},
        "paper":{"rock":1 , "paper":0.5 , "scissor": 0},
        "scissor":{"rock":0 , "paper":1 , "scissor": 0.5},
    }

    let humanscore=ruledatabase[human][bot];
    let botscore=ruledatabase[bot][human];

    return [humanscore,botscore];
}


function message([humanscore, botscore])
{
    if(humanscore === 0)
    {
        return{"message": "You Lost", "color":"red"};
    }
    else if(humanscore === 0.5)
    {
        return{"message": "Tied", "color":"yellow"};

    }
    else if(humanscore === 1)
    {
        return{"message": "You Win", "color":"green"};
    }
}

function frontend(humanchoice,botchoice,msg)
{

    let humandiv=document.createElement("div");
    humandiv.setAttribute("id","humansection");
    let botdiv=document.createElement("div");
    botdiv.setAttribute("id","botsection");
    let resultdiv=document.createElement("div");
    resultdiv.setAttribute("id","messagesection");
    let imagedatabase=
    {
        "rock" : document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissor": document.getElementById("scissor").src,
        
    }
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    humandiv.innerHTML="<img src='" + imagedatabase[humanchoice] + "' width='150' height='150'>";
    resultdiv.innerHTML="<h2 style='color: "+ msg["color"] + "'>" + msg["message"] + "</h3>";
    botdiv.innerHTML="<img src='" + imagedatabase[botchoice] + "' width='150' height='150'>";
    document.getElementById("rps").appendChild(humandiv);
    document.getElementById("rps").appendChild(resultdiv);
    document.getElementById("rps").appendChild(botdiv);
    

}

function resetgame()
{
    document.getElementById("humansection").remove();
    document.getElementById("botsection").remove();
    document.getElementById("messagesection").remove();
    let rpsdiv=document.getElementById("rps");
    let img1=document.createElement("img");
    let img2=document.createElement("img");
    let img3=document.createElement("img");

    img1.src="Rock.png";
    img1.setAttribute("id","rock");
    img1.height="150";
    img1.widgh="150";
    img1.setAttribute("onclick","game(this)");
    rpsdiv.appendChild(img1);
    
    img2.src="paper.png";
    img2.setAttribute("id","paper");
    img2.height="150";
    img2.widgh="150";
    img2.setAttribute("onclick","game(this)");
    rpsdiv.appendChild(img2);
    
    img3.src="scissor.png";
    img3.setAttribute("id","scissor");
    img3.height="150";
    img3.widgh="150";
    img3.setAttribute("onclick","game(this)");
    rpsdiv.appendChild(img3);
    
}