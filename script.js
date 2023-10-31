const blocks = document.querySelectorAll(".game-blocks .block")

let wrongTries = 0
const wrongTriesCounter = document.querySelector('.wrong-tries-counter')

let firstGuess = null
let secondGuess = null

const startGame = (e) => {
    document.querySelector('.start').classList.add('hidden')

    const username = prompt("username: ")
    document.querySelector('.username span').textContent = username
}
document.querySelector('.start .start-btn').addEventListener('click', startGame)


// listening for click event for each game block
blocks.forEach(block => {
    block.addEventListener('click', (e) => { guess(e.target, block) })
})

const guess = (target, block) => {
    if (block == firstGuess || block == secondGuess) return
    if (! target.classList.contains('front')) return

    flipFace(block)

    checkChoise(block)
        
}

const flipFace = (block, toOriginal = false) => {
    const frontFace = block.children[0]
    const backFace = block.children[1]

    // flip the block
    if (!toOriginal) {
        frontFace.classList.add('flip-front');
        backFace.classList.remove('flip-back');
        return
    }

    frontFace.classList.remove('flip-front');
    backFace.classList.add('flip-back');
}

const checkChoise = (block) => {
    const frontFace = block.children[0]
    const backFace = block.children[1]

    const guess = backFace.children[0].src
    if (!firstGuess) 
        firstGuess = block
    else  {
        secondGuess = block

        if (firstGuess.children[1].children[0].src != secondGuess.children[1].children[0].src) {
            wrongTries++
            wrongTriesCounter.textContent = wrongTries
            setTimeout((firstGuess, secondGuess) => {
               flipFace(firstGuess, true)
               flipFace(secondGuess, true)
            }, 2000, firstGuess, secondGuess)
        }
        firstGuess = secondGuess = null
    }
}