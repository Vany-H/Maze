let characterEnemy = {
    obj:document.querySelector(".enemyTank"),
    position:findStart(fieldArray, height, width),
    rotation: Math.PI
};

characterEnemy.obj.style.top = (characterEnemy.position.y * sizeBlock)+"px";
characterEnemy.obj.style.left = (characterEnemy.position.x * sizeBlock)+"px";
characterEnemy.obj.style.rotate = ((360*characterEnemy.rotation) / (Math.PI*2))+"deg";

function enemyMove(event, character){

    switch (event.key){
        case "w" || "W":
            let checkPoint = checkWay(fieldArray, character);

            if(checkPoint !== null){
                character.position = checkPoint;
            }
        break;

        case "a" || "A":
            character.rotation += ((Math.PI/2));
        break;

        case "d" || "D":
            character.rotation -= ((Math.PI/2));
        break;
    }

    character.obj.style.top = (character.position.y * sizeBlock)+"px";
    character.obj.style.left = (character.position.x * sizeBlock)+"px";
    character.obj.style.transform = "rotate("+((360*character.rotation) / (Math.PI*2))+"deg)";
}

function autoMove(){
    let point;
    
    characterEnemy.position = point;
    characterEnemy.obj.style.top = (characterEnemy.position.y * sizeBlock)+"px";
    characterEnemy.obj.style.left = (characterEnemy.position.x * sizeBlock)+"px";
}

setInterval(autoMove, 500);