function hideAndAppear(className) {
    var elements = document.getElementsByClassName(className); // Get elements by class name

    for (let index = 0; index < elements.length; index++) {
        let element = elements[index];

        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "block";
            element.style.color = "green";
        } else {
            element.style.display = "none"; 
            element.style.color = "red";
        }
    }
} // End of hideAndAppear

// Select all buttons with the class "hidden_button"
var buttons = document.querySelectorAll(".hidden_button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        hideAndAppear("hidden_div"); // my awesome function
    });
}

// Select all buttons with the class "hidden_button1" and the div with the class "hidden_div"
var buttons1 = document.querySelectorAll(".hidden_button1");
var checker1 = document.querySelector(".hidden_div");

for (let i = 0; i < buttons1.length; i++) {
    buttons1[i].addEventListener("click", function() {
        if (checker1.style.display === "none" || checker1.style.display === "") {
            hideAndAppear("hidden_div1");
        } else {
            alert("Please click the first button to hide the first div before clicking the second button to hide the second div.");
        }
    });
}

// Select all buttons with the class "hidden_button2" and the div with the class "hidden_div1"
var buttons2 = document.querySelectorAll(".hidden_button2");
var checker2 = document.querySelector(".hidden_div1");

for (let i = 0; i < buttons2.length; i++) {
    buttons2[i].addEventListener("click", function() {
        if (checker2.style.display === "none" || checker2.style.display === "") {
            hideAndAppear("hidden_div2"); // my awesome function
        } else {
            alert("Please click the second button to hide the second div before clicking the third button to hide the third div.");
        }
    });
}

// Start with XO game
// start variables
var currentPlayer = "X";
var gameOver = false;
var board = ["", "", "", "", "", "", "", "", ""];
var winCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6] // Diagonal
];

var cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
    var cell = event.target;
    var cellIndex = cell.getAttribute("data-index");
    if (cell.innerText === "X" || cell.innerText === "O") {
        alert("This cell is already taken");
        return;
    } else {
        cell.innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    for (var i = 0; i < winCombination.length; i++) {
        var [a, b, c] = winCombination[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            alert(currentPlayer + " wins!");
            return;
        }
    }

    if (!board.includes("")) {
        gameOver = true;
        alert("It's a draw!");
    }


}