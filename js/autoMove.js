let characterEnemy = {
  obj: document.querySelector(".enemyTank"),
  position: findStart(fieldArray, height, width),
  rotation: Math.PI,
};

let way = [];

characterEnemy.obj.style.top = characterEnemy.position.y * sizeBlock + "px";
characterEnemy.obj.style.left = characterEnemy.position.x * sizeBlock + "px";
characterEnemy.obj.style.rotate =
  (360 * characterEnemy.rotation) / (Math.PI * 2) + "deg";

function autoMove() {
  let checkChar = userWayEn(fieldArray, characterEnemy);

  if (checkChar !== null && checkChar !== 0) {
    // console.log(characterEnemy);
    characterEnemy = checkChar;
  } else {
    characterEnemy.rotation += Math.PI / 2;
  }

  console.log(characterEnemy.obj.style.rotate);

  characterEnemy.obj.style.top = characterEnemy.position.y * sizeBlock + "px";
  characterEnemy.obj.style.left = characterEnemy.position.x * sizeBlock + "px";
  characterEnemy.obj.style.transform =
    "rotate(" + (360 * characterEnemy.rotation) / (Math.PI * 2) + "deg)";
}

var timer = setInterval(autoMove, 500);
