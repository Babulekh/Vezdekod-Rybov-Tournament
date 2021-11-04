// function getTeamsQuantity() {
//     return document.querySelector("#teams").value;
// };

// function buildBracket(teamsQuantity) {
//     let round = 1;
//     let stage = 1;
//     let stagesQuantity = Math.log2(teamsQuantity);

//     document.querySelector(".bracket").style.gridTemplateColumns = `repeat(${2 * stagesQuantity - 1}, 200px 15px 15px)`;
//     document.querySelector(".bracket").style.gridTemplateRows = `repeat(${2 * (teamsQuantity - 1)}, 50px)`;

//     for (stage; stage <= stagesQuantity; stage++) {
//         for (round = 1; round <= Math.pow(2, (stagesQuantity - stage)); round++) {
//             console.log(stage, round);
//         }
//     }
// };

// const builderButton = document.querySelector(".builder");

// builderButton.addEventListener("click", () => {
//     let teamsQuantity = getTeamsQuantity();
//     buildBracket(teamsQuantity);
// });

// window.addEventListener("keypress", function (event) {
//     if (event.code == "Enter") {
//         let teamsQuantity = getTeamsQuantity();
//         buildBracket(teamsQuantity);
//     };
// });

// buildBracket(4);