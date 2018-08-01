let options = [
    {
        name: "rock",
        number: 0,
        beats: 2
    }, 
    {
        name: "paper",
        number: 1,
        beats: 0
    },
    {
        name: "scissors",
        number: 2,
        beats: 1
    }
]


function play(num) {
    let computerChoice = options[Math.floor(Math.random()*3)];
    let playerChoice = options[num];
    let result = `${playerChoice.name} vs ${computerChoice.name} = `

    if(playerChoice.name == computerChoice.name) {
        result += "Tie"
    }
    else if(playerChoice.beats == computerChoice.number) {
        result += "Win"
    }
    else {
        result += "Lose"
    }
    document.getElementById('result').textContent = result;
};



