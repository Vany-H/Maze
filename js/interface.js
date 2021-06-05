const textArea = document.querySelector(".text-area");
const interfaceBtn = document.querySelector(".interface-btn");

console.log(textArea);

interfaceBtn.addEventListener("click", (e) => {
  let scriptUser = document.createElement("script");
  let autoScript = document.createElement("script");

  scriptUser.innerHTML = `function userWayEn(array, character){${textArea.value}}`;
  autoScript.src = "./js/autoMove.js";

  document.body.append(scriptUser);
  document.body.append(autoScript);
});
