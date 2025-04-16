let count = 0;

let bluePaw = [
    "Images/BP/Blue_Paw_Normal.jpg",
    "Images/BP/Blue_Paw_UR.jpg",
    "Images/BP/Blue_Paw_UL.jpg",
    "Images/BP/Blue_Paw_DR.jpg",
    "Images/BP/Blue_Paw_DL.jpg"
]

let pinkPaw = [
    "Images/PP/Pink_Paw_Normal.jpg",
    "Images/PP/Pink_Paw_UR.jpg",
    "Images/PP/Pink_Paw_UL.jpg",
    "Images/PP/Pink_Paw_DR.jpg",
    "Images/PP/Pink_Paw_DL.jpg"
]
let index = [
    '','','','','','','','',''
];

let bTurn = false;
let pTurn = false;

function disableBoard(){
    for(let i = 1; i < 10; i++){
        let selectedDiv = document.getElementById(i);
        selectedDiv.style.pointerEvents = 'none';
        selectedDiv.hidden = true;
    }
    let base = document.getElementById("board-base");
    let buttonY = document.getElementById("yes");
    let buttonN = document.getElementById("no");
    base.hidden = true;
    buttonY.hidden = true;
    buttonN.hidden = true;
    document.getElementById("decision").innerHTML = "";
}

function startGame(){
    for(let i = 1; i < 10; i++){
        let selectedDiv = document.getElementById(i);
        selectedDiv.style.pointerEvents = 'auto';
        selectedDiv.hidden = false;
    }
    let base = document.getElementById("board-base");
    base.hidden = false;
}

function bTrue(selectedDiv, i){
    bTurn = true;
        let randNum = Math.floor((Math.random() * 5) + 1);
        let imgSrc = selectedDiv.querySelector('img');
    switch(randNum){
        case 1:
            imgSrc.src = bluePaw[0];
            break;
        case 2:
            imgSrc.src = bluePaw[1];
            break;
        case 3:
            imgSrc.src = bluePaw[2];
            break;
        case 4:
            imgSrc.src = bluePaw[3];
            break;
        case 5:
            imgSrc.src = bluePaw[4];
            break;
        default:
            break;
    }
    selectedDiv.setAttribute("value", "clicked");
    selectedDiv.style.pointerEvents = 'none';
    index[i] = 'b';
    bTurn = false;
}

function pTrue(selectedDiv, i){
    pTurn = true;
    let randNum = Math.floor((Math.random() * 5) + 1);
    let imgSrc = selectedDiv.querySelector('img');
switch(randNum){
    case 1:
        imgSrc.src = pinkPaw[0];
        break;
    case 2:
        imgSrc.src = pinkPaw[1];
        break;
    case 3:
        imgSrc.src = pinkPaw[2];
        break;
    case 4:
        imgSrc.src = pinkPaw[3];
        break;
    case 5:
        imgSrc.src = pinkPaw[4];
        break;
    default:
        break;
}
selectedDiv.setAttribute("value", "clicked");
selectedDiv.style.pointerEvents = 'none';
index[i] = 'p';
pTurn = false;
}

function whoseTurn(i){
    count++;
    console.log(count);
    let selectedDiv = document.getElementById(i);
    let adjusted = i - 1;
    if(count % 2 == 1 && count < 9){
        if(count >=5){
            let character = 'b';
            bTrue(selectedDiv, adjusted);
            win(character);
        }
        else{
            bTrue(selectedDiv, adjusted);
        }
    }
    else if(count % 2 == 0 && count < 9){
        if(count >=5){
            let character= 'p';
            pTrue(selectedDiv, adjusted);
            win(character);
        }
        else{
            pTrue(selectedDiv, adjusted);
        }
    }
    else{
        if(count == 9){
            bTrue(selectedDiv, adjusted);
            scratchOrWin();
        }
    }
}

function win(character){
    let winner = false;
    if((index[0] == character && index[1] == character && index[2] == character) || (index[3] == character && index[4] == character && index[5] == character) || (index[6] == character && index[7] == character && index[8] == character)){
        winner = true;
    }
    else if((index[0] == character && index[3] == character && index[6] == character) || (index[1] == character && index[4] == character && index[7] == character) || (index[2] == character && index[5] == character && index[8] == character)){
        winner = true;
    }
    else if((index[0] == character && index[4] == character && index[8] == character) || (index[6] == character && index[4] == character && index[2] == character)){
        winner = true;
    }
    if(winner == true){
        for(let i = 1; i < 10; i++){
            let selectedDiv = document.getElementById(i);
            selectedDiv.style.pointerEvents = 'none';
        }
        if(character == 'b'){
            document.getElementById("decision").innerHTML = "Blue Paw Wins! Wanna Try Again?";
            let buttonY = document.getElementById("yes");
            let buttonN = document.getElementById("no");
            buttonY.hidden = false;
            buttonN.hidden = false;
        }
        else if(character == 'p'){
            document.getElementById("decision").innerHTML = "Pink Paw Wins! Wanna Try Again?";
            let buttonY = document.getElementById("yes");
            let buttonN = document.getElementById("no");
            buttonY.hidden = false;
            buttonN.hidden = false;
        }
    }
    return winner;
}



function scratchOrWin(){
    if(win('b') == true){
        document.getElementById("decision").innerHTML = "Blue Paw Wins! Wanna Try Again?";
            let buttonY = document.getElementById("yes");
            let buttonN = document.getElementById("no");
            buttonY.hidden = false;
            buttonN.hidden = false;
    }
    else if(win('p') == true){
        console.log("Pink is Winner!");
        document.getElementById("decision").innerHTML = "Pink Paw Wins! Wanna Try Again?";
            let buttonY = document.getElementById("yes");
            let buttonN = document.getElementById("no");
            buttonY.hidden = false;
            buttonN.hidden = false;
    }
    else{
        document.getElementById("decision").innerHTML = "Scratch! Wanna Try Again?";
            let buttonY = document.getElementById("yes");
            let buttonN = document.getElementById("no");
            buttonY.hidden = false;
            buttonN.hidden = false;
    }
}

function yesNo(character){
    if(character == 'y'){
        clearBoard();
    }
    else{
        disableBoard();
    }
}

function clearBoard(){
    for(let i = 1; i < 10; i++){
        let selectDiv = document.getElementById(i);
        selectDiv.querySelector("img").src = "Images/Blank_TTT_Sprite.jpg";
        selectDiv.style.pointerEvents = 'auto';
    }
    for(let i = 0; i < 9; i++){
        console.log(index[i]);
        index[i] = '';
    }
    count = 0;
    document.getElementById("decision").innerHTML = "";
    let buttonY = document.getElementById("yes");
            let buttonN = document.getElementById("no");
            buttonY.hidden = true;
            buttonN.hidden = true;
}