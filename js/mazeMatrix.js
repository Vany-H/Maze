let fieldArray = [];
let checkArray = [];
const field = document.querySelector(".field");

let height = 21;
let width = 21;
const sizeBlock = 15;

function Draw(){
    for(let i=0; i<height; i++){
        fieldArray.push([]);
        for(let j=0; j<width; j++){
            if((i%2 != 0 && j%2 != 0) && (i < height-1 && j < width-1)){
                fieldArray[i][j] = 1;
            } else{
                fieldArray[i][j] = 0;
            }
        }
    }

    let coord = {
        x:1,
        y:1
    };

    let l = 0;
    // checkVisit(height, width, fieldArray)
    while (checkVisit(height, width, fieldArray) > 0){
        let buff = checkNeighbours(fieldArray, coord, 2);
        if(buff != null){
            checkArray.push(buff);
            fieldArray = newMaze(fieldArray, coord, buff);
            coord = buff;
        } else if(checkArray.length != 0){
            coord = checkArray.pop();
        } else{

        }
    }

    fieldArray = addStartEnd(fieldArray, height, width);


    let elem;
    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            elem = document.createElement("div");
            field.append(elem);
            if(fieldArray[i][j] === 1){
                elem.classList.add("white");
                elem.style.top = i*sizeBlock + "px";
                elem.style.left = j*sizeBlock + "px";
            }else if(fieldArray[i][j] === 2){
                elem.classList.add("pink");
                elem.style.top = i*sizeBlock + "px";
                elem.style.left = j*sizeBlock + "px";
            }else{
                if(fieldArray[i][j] === 0){
                    elem.classList.add("black");
                    elem.style.top = i*sizeBlock + "px";
                    elem.style.left = j*sizeBlock + "px";
                }else if(fieldArray[i][j] === 3){
                    elem.classList.add("start");
                    elem.style.top = i*sizeBlock + "px";
                    elem.style.left = j*sizeBlock + "px";
                } else{
                    elem.classList.add("end");
                    elem.style.top = i*sizeBlock + "px";
                    elem.style.left = j*sizeBlock + "px";
                }
            }
        }
    }
}

Draw();