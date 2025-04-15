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

let bTurn = false;
let pTurn = false;

function myFunction(){
    document.getElementById('board-base').ariaDisabled = false;
}

function bTrue(selectedDiv){
    bTurn = true;
        let randNum = Math.floor((Math.random() * 5) + 1);
        let imgSrc = selectedDiv.querySelector('img');
        console.log(randNum);
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
    bTurn = false;
}

function pTrue(selectedDiv){
    pTurn = true;
    let randNum = Math.floor((Math.random() * 5) + 1);
    let imgSrc = selectedDiv.querySelector('img');
    console.log(randNum);
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
pTurn = false;
}

function whoseTurn(i){
    count++;
    let selectedDiv = document.getElementById(i);
    if(count % 2 == 1 && count <=9){
        bTrue(selectedDiv);
    }
    else if(count % 2 == 0 && count <= 9){
        pTrue(selectedDiv);
    }
    else{
        scratchOrWin();
    }
}

function clearBoard(){
    for(let i = 1; i < 10; i++){
        let selectDiv = document.getElementById(i);
        selectDiv.querySelector("img").src = "Images/Blank_TTT_Sprite.jpg";
        selectDiv.style.pointerEvents = 'auto';
    }
    count = 0;
}

function win(){}

function scratchOrWin(){}