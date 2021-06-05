function checkVisit(height, width, array) {
  let count = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (array[i][j] === 1) {
        count++;
      }
    }
  }

  return count;
}

function checkNeighbours(array, coord, step) {
  const allNeighbours = [
    { x: coord.x, y: coord.y + step },
    { x: coord.x, y: coord.y - step },
    { x: coord.x + step, y: coord.y },
    { x: coord.x - step, y: coord.y },
  ];
  let neighbours = [];

  for (let i = 0; i < 4; i++) {
    if (
      allNeighbours[i].x > 0 &&
      allNeighbours[i].x < width &&
      allNeighbours[i].y > 0 &&
      allNeighbours[i].y < height
    ) {
      if (array[allNeighbours[i].y][allNeighbours[i].x] !== 2) {
        neighbours.push(allNeighbours[i]);
      }
    }
  }

  if (neighbours.length != 0) {
    return neighbours[Math.floor(Math.random() * neighbours.length)];
  } else {
    return null;
  }
}

function checkWayEn(array, character) {
  const positionBuff = character.position;
  let rotateBuff = character.rotation + Math.PI / 2;
  let characterBuff = character;

  let X = positionBuff.x + Math.round(1 * Math.sin(rotateBuff));
  let Y = positionBuff.y + Math.round(1 * Math.cos(rotateBuff) * -1);

  if (
    positionBuff.y >= 0 &&
    positionBuff.y < array.length &&
    positionBuff.x >= 0 &&
    positionBuff.x < array[0].length
  ) {
    if (array[Y][X] === 4) {
      positionBuff.x = X;
      positionBuff.y = Y;

      characterBuff.position = positionBuff;
      characterBuff.rotation = 0;
      clearInterval(timer);
      return characterBuff;
    } else {
      X = positionBuff.x + Math.round(1 * Math.sin(character.rotation));
      Y = positionBuff.y + Math.round(1 * Math.cos(character.rotation) * -1);

      if (array[Y][X] === 4) {
        positionBuff.x = X;
        positionBuff.y = Y;

        characterBuff.position = positionBuff;
        clearInterval(timer);
        return characterBuff;
      } else {
        rotateBuff = character.rotation - Math.PI / 2;

        X = positionBuff.x + Math.round(1 * Math.sin(rotateBuff));
        Y = positionBuff.y + Math.round(1 * Math.cos(rotateBuff) * -1);

        if (array[Y][X] === 4) {
          positionBuff.x = X;
          positionBuff.y = Y;

          characterBuff.position = positionBuff;
          characterBuff.rotation = 0;
          clearInterval(timer);
          return characterBuff;
        }
      }
    }
  }

  if (
    positionBuff.y >= 0 &&
    positionBuff.y < array.length &&
    positionBuff.x >= 0 &&
    positionBuff.x < array[0].length
  ) {
    // console.log("ok");
    if (array[Y][X] === 2) {
      positionBuff.x = X;
      positionBuff.y = Y;

      characterBuff.position = positionBuff;
      characterBuff.rotation = rotateBuff;
      return characterBuff;
    } else {
      X = positionBuff.x + Math.round(1 * Math.sin(character.rotation));
      Y = positionBuff.y + Math.round(1 * Math.cos(character.rotation) * -1);

      if (array[Y][X] === 2) {
        positionBuff.x = X;
        positionBuff.y = Y;

        characterBuff.position = positionBuff;
        return characterBuff;
      } else {
        rotateBuff = character.rotation - Math.PI / 2;

        X = positionBuff.x + Math.round(1 * Math.sin(rotateBuff));
        Y = positionBuff.y + Math.round(1 * Math.cos(rotateBuff) * -1);

        if (array[Y][X] === 2) {
          positionBuff.x = X;
          positionBuff.y = Y;

          characterBuff.rotation = rotateBuff;
          characterBuff.position = positionBuff;
          return characterBuff;
        }
      }
    }
  }

  return null;
}

function newMaze(array, coord1, coord2) {
  let newArray = array;
  let xBuff = coord2.x - coord1.x;
  let yBuff = coord2.y - coord1.y;

  addX = xBuff != 0 ? xBuff / Math.abs(xBuff) : 0;
  addY = yBuff != 0 ? yBuff / Math.abs(yBuff) : 0;

  newArray[coord1.y][coord1.x] = 2;
  newArray[coord2.y][coord2.x] = 2;
  newArray[coord1.y + addY][coord1.x + addX] = 2;

  return newArray;
}

function addStartEnd(array, height, width) {
  let newArray = array;
  let startEnd = Math.floor(Math.random() * width);

  while (array[1][startEnd] !== 2) {
    startEnd = Math.floor(Math.random() * width);
  }
  newArray[0][startEnd] = 3;

  startEnd = Math.floor(Math.random() * width);
  while (array[height - 2][startEnd] !== 2) {
    startEnd = Math.floor(Math.random() * width);
  }
  newArray[height - 1][startEnd] = 4;

  return newArray;
}

function findStart(array, height, width) {
  let point = {
    x: 0,
    y: 0,
  };

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (array[i][j] === 3) {
        point.x = j;
        point.y = i;

        return point;
      }
    }
  }
}

function findEnd(array, height, width) {
  let point = {
    x: 0,
    y: 0,
  };

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (array[i][j] === 4) {
        point.x = j;
        point.y = i;

        return point;
      }
    }
  }
}

function checkWay(array, character) {
  let positionBuff = character.position;

  let X = positionBuff.x + Math.round(1 * Math.sin(character.rotation));
  let Y = positionBuff.y + Math.round(1 * Math.cos(character.rotation) * -1);

  if (
    positionBuff.y >= 0 &&
    positionBuff.y < array.length &&
    positionBuff.x >= 0 &&
    positionBuff.x < array[0].length
  ) {
    if (array[Y][X] === 2) {
      positionBuff.x = X;
      positionBuff.y = Y;
      return positionBuff;
    } else if (array[Y][X] === 4) {
      let masField = document.querySelectorAll(".field>div");

      for (let i = 0; i < masField.length; i++) {
        masField[i].remove();
      }

      height += 4;
      width += 4;
      Draw();

      character.position = findStart(fieldArray, height, width);
    }
  }
  return null;
}
