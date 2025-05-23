chessboard = document.getElementById('chessboard');
chessboard.style.width = '400px';
chessboard.style.height = '400px';
chessboard.style.border = '3px solid black';
chessboard.style.position = 'relative';
chessboard.style.display = 'grid';
chessboard.style.gridTemplateColumns = 'repeat(8, 1fr)';
chessboard.style.gridTemplateRows = 'repeat(8, 1fr)';
chessboard.style.gridGap = '0px';

const pieces = {
    'r': '/ChessPieces/pieces-svg/rook-b.svg',
    'n': '/ChessPieces/pieces-svg/knight-b.svg',
    'b': '/ChessPieces/pieces-svg/bishop-b.svg',
    'q': '/ChessPieces/pieces-svg/queen-b.svg',
    'k': '/ChessPieces/pieces-svg/king-b.svg',
    'p': '/ChessPieces/pieces-svg/pawn-b.svg',
    'R': '/ChessPieces/pieces-svg/rook-w.svg',
    'N': '/ChessPieces/pieces-svg/knight-w.svg',
    'B': '/ChessPieces/pieces-svg/bishop-w.svg',
    'Q': '/ChessPieces/pieces-svg/queen-w.svg',
    'K': '/ChessPieces/pieces-svg/king-w.svg',
    'P': '/ChessPieces/pieces-svg/pawn-w.svg'
};
const initialBoard = [
    'rnbqkbnr',
    'pppppppp',
    '........',
    '........',
    '........',
    '........',
    'PPPPPPPP',
    'RNBQKBNR'
];
function drawBoard() {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.style.width = '50px';
        square.style.height = '50px';
        square.style.boxSizing = 'border-box';
        square.style.border = '1px solid black';
        square.style.backgroundColor = (Math.floor(i / 8) + i) % 2 === 0 ? 'green' : 'white';
        chessboard.appendChild(square);
    }
};
drawBoard();
function drawPieces() {
    const squares = chessboard.children;
    for (let i = 0; i < 64; i++) {
        const piece = initialBoard[Math.floor(i / 8)][i % 8];
        if (piece !== '.') {
            const square = squares[i];
            const img = document.createElement('img');
            img.src = pieces[piece];
            img.alt = piece;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'contain';
            square.style.position = 'relative';
            square.appendChild(img);
        }
    }
};
drawPieces();
function movePiece(from, to) {
    const fromSquare = chessboard.children[from];
    const toSquare = chessboard.children[to];
    if (fromSquare.firstChild) {2
        toSquare.appendChild(fromSquare.firstChild);
        fromSquare.removeChild(fromSquare.firstChild);
    }
};
addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'IMG') {
        const from = Array.from(chessboard.children).indexOf(target.parentElement);
        const to = Array.from(chessboard.children).indexOf(target.parentElement.nextElementSibling);
        if (to >= 0 && to < 64) {
            movePiece(from, to);
        }
    }
});
function resetBoard() {
    const squares = chessboard.children;
    for (let i = 0; i < 64; i++) {
        const square = squares[i];
        for (let x=0; x < square.childElementCount; x++) {
            // Remove all child elements from the square
            square.removeChild(square.firstChild);

        }
    }
    drawPieces();
}
document.getElementById('resetButton').addEventListener('click', resetBoard);