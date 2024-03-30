let butt = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newGameBut = document.querySelector("#new")
let winnerconatainer = document.querySelector(".winner")
let msg = document.querySelector("#winn")


let turn0 = true
let count = 0

const winning_set = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


const resetgame = () => {
    turn0 = true
    for (let i of butt) {
        i.disabled = false
        i.innerText = ""
        winnerconatainer.classList.add("winner")

    }
    count = 0
}

const showwinner = (winner) => {
    msg.innerText = (`Congratulations,🎉🎉 Winner is ${winner}`)
    winnerconatainer.classList.remove("winner")
    for (let i of butt) {
        i.disabled = true
    }
    count = 0
}

const draw = () => {
    msg.innerText = (`Draw`)
    winnerconatainer.classList.remove("winner")
    for (let i of butt) {
        i.disabled = true
    }
    count = 0
}

const checkwinner = () => {
    for (let pattern of winning_set) {
        // console.log(pattern)
        // console.log(butt[pattern[0]],butt[pattern[1]],butt[pattern[2]])
        let pos1 = butt[pattern[0]].innerText
        let pos2 = butt[pattern[1]].innerText
        let pos3 = butt[pattern[2]].innerText

        if (count == 9) {
            draw()
        }
        else if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1)
                showwinner(pos1)
            }
        }
    }
}

butt.forEach(box => {
    box.addEventListener("click", () => {
        console.log("Button cliked")
        if (turn0) {
            box.innerText = "O"
            box.classList.remove("boxX")
            box.classList.add("boxO")
            turn0 = false
        }
        else {
            box.innerText = "X"
            box.classList.remove("boxO")
            box.classList.add("boxX")
            turn0 = true
        }
        count++;
        box.disabled = true
        checkwinner()
    })

});

reset.addEventListener("click", resetgame)
newGameBut.addEventListener("click", resetgame)