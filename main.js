let cells = document.querySelectorAll('.cell') 
cells = Array.from(cells)

let currentPlayer = "X"

let winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkForWinner(){
    winningCombination.forEach(function(Combination){
    let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
    if(check){
        hightlightCells(combination)
    }
    })
}

function hightlightCells(combination){
    combination.forEach(function(idx){
        cells[idx].classList.add("hight")
    })
}

cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        if(cells.innerText.trim() != "") return
        cell.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})