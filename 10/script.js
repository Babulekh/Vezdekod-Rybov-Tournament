// Functions-----------------------------

function makeBracket() {
    for (let i = 0; i < teamNames.length; i++) {
        teams[i].innerHTML = teamNames[i].value;
    }

    bracket.style.opacity = 1;
}

function teamClicked() {
    if (!this.innerHTML) return;
    let rivalNumber;
    let winnerNumber;
    let rival;
    let winner;

    if (this.dataset["roundNumber"] % 2 == 0) {
        rivalNumber = +this.dataset["roundNumber"] - 1;
        winnerNumber = +this.dataset["roundNumber"] / 2 + 8;
    } else {
        rivalNumber = +this.dataset["roundNumber"] + 1;
        winnerNumber = (+this.dataset["roundNumber"] + 1) / 2 + 8;
    }

    console.log(+this.dataset["roundNumber"], winnerNumber);

    rival = teams.find((element) => {
        return element.dataset["roundNumber"] == rivalNumber;
    });

    winner = teams.find((element) => {
        return element.dataset["roundNumber"] == winnerNumber;
    });

    teams[+this.dataset["roundNumber"]];

    this.style.background = greenColor;
    this.style.borderColor = greenColor;

    rival.style.background = redColor;
    rival.style.borderColor = redColor;

    winner.innerHTML = this.innerHTML;
}

function bracketToString() {
    let result = "";

    for (let team of teams) {
        result += team.innerHTML + ",";
    }

    return result;
}

function copyURL() {
    let bracket = bracketToString();

    navigator.clipboard.writeText(location.host + location.pathname + "?bracket=" + encodeURI(bracket));
}
// Variables-----------------------------

const redColor = "rgb(88, 31, 31)";
const greenColor = "rgb(31, 88, 38)";

const makeBracketButton = document.querySelector(".makeBracket");
const copyURLButton = document.querySelector(".copy");

const bracket = document.querySelector(".bracket");
const teamNames = document.querySelectorAll(".teamName");
const teams = Array.from(document.querySelectorAll(".team"));
// Event listeners-----------------------------

window.addEventListener("keypress", function (event) {
    if (event.code == "Enter") {
        makeBracket();
    };
});

makeBracketButton.addEventListener("click", makeBracket);
copyURLButton.addEventListener("click", copyURL);

for (let team of teams) {
    team.addEventListener("click", teamClicked.bind(team));
};
// Main-----------------------------

if (location.search) {
    let bracketData = location.search.substring(9).split(",");
    
    for (let teamNumber = 0; teamNumber < bracketData.length - 1; teamNumber++) {
        console.log(teams.find((element) => {
            return element.dataset["roundNumber"] == teamNumber + 1;
        }));
        teams.find((element) => {
            return element.dataset["roundNumber"] == teamNumber + 1;
        }).innerHTML = bracketData[teamNumber];
    };

    bracket.style.opacity = 1;
};
