const myGameModule = (()=>{
    const userName = prompt('please enter your name: ')

const user = /\S/.test(userName) ? userName : "Player"

const player = {
    level: 1,
    name: user,
    isGameOn : true
}
function guess(max = 2){
    const correctNum = randonNum(max)
    let isCorrect = false

    while(!isCorrect){
        const input = prompt(`please enter your guess between 1 - ${max}`)
        const playerGuess = parseInt(input)
        if(Number.isNaN( playerGuess) ){
            if(/exit/i.test(input.trim())){
                console.log('game over')
                return player.isGameOn = false
            }
            continue
        }
        if(playerGuess === correctNum){
            isCorrect = true
            player.level = player.level + 1
            console.log(`${player.name}, you got the number correct, the correct number is ${correctNum}`)
            return;
        }
        console.log(`${player.name}, Your guess was wrong, please try again...`)
    }
}

function randonNum(range) { 
    return Math.floor(Math.random() * range) + 1
}

function playGame(){
    console.log('enter "exit" in the prompt to quit')
    while( player.isGameOn ) {
        console.log(`you are playing level ${player.level}`)
        guess(player.level + 1)
    }
    alert(`you reached level ${player.level}`)

    // reset player level
    player.level = 1
    player.isGameOn = true
}

return { playGame }
})()

document.querySelector('button').addEventListener('click', ()=>{
    myGameModule.playGame()
})

