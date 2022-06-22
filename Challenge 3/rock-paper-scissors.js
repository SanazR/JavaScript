function rpsGame(userChoice){
    console.log(userChoice);

    var user,bot;
    user=userChoice.id;
    bot=numberToChoice(randomToRPSint());
    console.log('botChoice: ', bot);
    result=decideWinner(user,bot);
    console.log(result);
    message=finalMessage(result); //This actually returnsan object which has the messageas weel as the color of the message.
    console.log(message);
    rpsFrontend(userChoice.id,bot,message);
}

function randomToRPSint(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(userChoice,computer){
    var rpsDatabase={
        'rock':{'scissors': 1, 'rock': 0.5, 'paper':0},
        'scissors':{'scissors':0.5, 'rock': 0, 'paper':1},
        'paper':{'scissors':0, 'rock':1 , 'paper':0.5},
    }
    var userScore=rpsDatabase[userChoice][computer];
    var botScore=rpsDatabase[computer][userChoice];

    return[userScore,botScore];
}

function finalMessage([userScore, botScore]){
    if (userScore===0){
        return {'message':'You Lost!', 'color':'red'};
    }
    else if (userScore===0.5){
        return {'message':'You Tied!', 'color':'yellow'};
    }
    else{
        return {'message':'You Won!', 'color':'green'};
    }
}

function rpsFrontend(userImgChoice,botImgChoice,finalMessage){
    var imageDatabase={
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src
    }
    
    //Let'sremove all the img
    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();

    var userDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    userDiv.innerHTML= "<img src='" + imageDatabase[userImgChoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(94, 52, 52);'>"
    messageDiv.innerHTML= "<h2 style='color: "+ finalMessage['color'] + "; font-size:50px; padding:30px; '>" + finalMessage['message']+ "</h2>"
    botDiv.innerHTML= "<img src='" + imageDatabase[botImgChoice]+ "'height=150 width=150 style='box-shadow: 0px 10px 50px rgb(37, 50, 233);'>"
   
    document.getElementById('flex-box-rps-div').appendChild(userDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}
