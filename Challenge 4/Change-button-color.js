var allButtons= document.getElementsByTagName('button');

var copyAllButtons=[];
for (let i=0;i<allButtons.length;i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonthingy){
    if(buttonthingy.value==='red'){
        buttonsRed();
    }
    else if(buttonthingy.value==='green'){
        buttonsGreen();
    }
    else if(buttonthingy.value==='yellow'){
        buttonsYellow();
    }
    else if(buttonthingy.value==='blue'){
        buttonsBlue();
    }
    else if(buttonthingy.value==='reset'){
        buttonsReset();
    }
    else if(buttonthingy.value==='random'){
        randomColor();
    }
}

function buttonsRed(){
    for (let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonsYellow(){
    for (let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-warning');
    }
}

function buttonsBlue(){
    for (let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-primary');
    }
}

function buttonsReset(){
    for (let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColor(){
    let choices=['btn-primary', 'btn-danger','btn-success','btn-warning']
   
    for(let i=0; i<allButtons.length; i++){
        let randomNum= Math.floor(Math.random()*4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNum]);
    }
}