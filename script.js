const blocks = document.querySelectorAll(".game-blocks .block")


let firstGuess = null
let secondGuess = null

// listening for click event for each game block
blocks.forEach(block => {
    block.addEventListener('click', e => {
        if (block == firstGuess || block == secondGuess)
            return
        // getting the front and back and flip them
        const front = block.children[0]
        const back = block.children[1]
        front.classList.add('flip-front');
        back.classList.remove('flip-back');

        const guess = back.children[0].src
        if (!firstGuess) 
            firstGuess = block
        else  {
            secondGuess = block

            
            if (firstGuess.children[1].children[0].src != secondGuess.children[1].children[0].src) {
                setTimeout((firstGuess, secondGuess) => {
                    firstGuess.children[0].classList.remove('flip-front');
                    firstGuess.children[1].classList.add('flip-back');

                    secondGuess.children[0].classList.remove('flip-front');
                    secondGuess.children[1].classList.add('flip-back');
                }, 2000, firstGuess, secondGuess)
            }
            firstGuess = secondGuess = null
        }
            
        

    })
})