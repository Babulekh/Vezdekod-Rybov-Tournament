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
        winnerNumber = +this.dataset["roundNumber"]/2 + 8;
    } else {
        rivalNumber = +this.dataset["roundNumber"] + 1;
        winnerNumber = (+this.dataset["roundNumber"] + 1)/2 + 8;
    }

    console.log(+this.dataset["roundNumber"], winnerNumber);

    rival = teams.find((element) => {
        return element.dataset["roundNumber"] == rivalNumber;
    });

    winner = teams.find((element) => {
        return element.dataset["roundNumber"] == winnerNumber;
    });

    teams[+this.dataset["roundNumber"]]

    this.style.background = greenColor;
    this.style.borderColor = greenColor;

    rival.style.background = redColor;
    rival.style.borderColor = redColor;

    winner.innerHTML = this.innerHTML;
}

const redColor = "rgb(88, 31, 31)";
const greenColor = "rgb(31, 88, 38)";

const makeBracketButton = document.querySelector(".makeBracket");
const bracket = document.querySelector(".bracket");

const teamNames = document.querySelectorAll(".teamName");
const teams = Array.from(document.querySelectorAll(".team"));

let bracketData = location.search.substring(9, location.search.length);
console.log(bracketData);

window.addEventListener("keypress", function (event) {
    if (event.code == "Enter") {
        makeBracket();
    }
});

makeBracketButton.addEventListener("click", makeBracket);

for (let team of teams) {
    team.addEventListener("click", teamClicked.bind(team));
}
