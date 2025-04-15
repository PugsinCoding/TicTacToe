function myFunction(){
    document.getElementById('board-base').ariaDisabled = false;
}

function showPaw(i){
    console.log("showPaw("+i+") activated");
    let selectedDiv = document.getElementById(i);
    let divVal = selectedDiv.getAttribute('value');
    console.log(divVal);
    if(divVal == "unclicked"){
        let randNum = Math.floor((Math.random() * 4) + 1);
        console.log(randNum);
    switch(randNum){
        case 1:
            selectedDiv.querySelector('img').src = "Images/BP/Blue_Paw_Normal.jpg";
            break;
        case 2:
            selectedDiv.querySelector('img').src = "Images/PP/Pink_Paw_Normal.jpg";
            break;
        case 3:
            selectedDiv.querySelector('img').src = "Images/BP/Blue_Paw_UR.jpg";
            break;
        case 4:
            selectedDiv.querySelector('img').src = "Images/PP/Pink_Paw_UR.jpg";
            break;
        default:
            break;
    }
    selectedDiv.setAttribute("value", "clicked");
    console.log(selectedDiv.getAttribute('value'));
    }
    else{
        console.log("already clicked");
    }
}

function setBlank(i){
    
}

function clearBoard(){
    for(let i = 1; i < 10; i++){
        let selectDiv = document.getElementById(i);
        selectDiv.querySelector("img").src = "Images/Blank_TTT_Sprite.jpg";
        selectDiv.setAttribute("value", "unclicked");
    }
    
}