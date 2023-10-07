const board = [ 
[2, 0, 2, 0, 2, 0, 2, 0],
[0, 2, 0, 2, 0, 2, 0, 2],
[2, 0, 2, 0, 2, 0, 2, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[1, 0, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0],
]

const player1 = {
    pieces: 12
}

const player2 = {
    pieces: 12
}


function player1() {
//   move up and diagonal 
//   if player 2 piece is in the way and there is no piece behind that piece, player 1 can jump over and that piece will dissapear
//   cannot jump over its own piece or jump over two at a time
//   if king is true, then piece can move up AND down diagonally
}

function player2() {
//   move down and diagonal 
//   if player 1 piece is in the way and there is no piece behind that piece, player 2 can jump over and that piece will dissapear 
//   cannot jump over its own piece or jump over two at a time
//   if king is true, then piece can move up AND down diagonally
}


// timeInterval = setInterval(function() {
//    if player 1 pieces = 0 then player 2 wins
//    if player 2 pieces = 0 then player 1 wins
// }, 1000)

