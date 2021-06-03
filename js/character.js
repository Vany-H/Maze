let character = {
    obj:document.querySelector(".field>img"),
    position:findStart(fieldArray, height, width),
    rotation: Math.PI
};

let endPoint = findEnd(fieldArray, height, width)

character.obj.style.top = (character.position.y * sizeBlock)+"px";
character.obj.style.left = (character.position.x * sizeBlock)+"px";
character.obj.style.rotate = ((360*character.rotation) / (Math.PI*2))+"deg";

function onKeyDown(event){
    let minus = (Math.round(1*Math.sin(character.rotation)) === 0) ? (Math.round(1*Math.cos(character.rotation))) : (Math.round(1*Math.sin(character.rotation)));
    
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

document.onkeypress = onKeyDown;