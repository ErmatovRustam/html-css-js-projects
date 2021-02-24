document.addEventListener('click', clickTile)

var theTile
var tileX
var tileY
var gameOver = false
var currentPlayer = 'X'

var tileMatrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

document.querySelector('.restart').addEventListener('click', clearTiles)

function clearTiles() {
  document.querySelectorAll('td').forEach(function (aTile) {
    return (aTile.innerHTML = '')
  })
  document.querySelector('.winner-sign').style.top = '-50px'
  gameOver = false
  currentPlayer = 'X'
  tileMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]
}

function clickTile(e) {
  if (
    e.target.nodeName === 'TD' &&
    e.target.innerHTML.length === 0 &&
    !gameOver
  ) {
    theTile = e.target
    drawOnTile(theTile)
  } else {
    return
  }
}

function drawOnTile() {
  theTile.innerHTML = currentPlayer

  tileX = theTile.className[0]
  tileY = theTile.className[1]

  tileMatrix[tileX][tileY] = currentPlayer

  if (checkWinner()) {
    gameOver = true
    document.querySelector('.winner-sign').innerHTML =
      'The winner is ' + currentPlayer
    document.querySelector('.winner-sign').style.top = 'calc(50% - 25px)'
    return
  }

  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }

  document.querySelector('.current-player').innerHTML = currentPlayer
}

function checkWinner() {
  var rowWin = tileMatrix[tileX].every(function (tile) {
    return tile === currentPlayer
  })

  var colWin = tileMatrix.every(function (rowOfTiles) {
    return rowOfTiles[tileY] === currentPlayer
  })

  var leftToRightDiagWin = tileMatrix.every(function (rowTiles, index) {
    return rowTiles[index] === currentPlayer
  })

  var rightToLeftDiagWin = tileMatrix.every(function (rowTiles, index) {
    return rowTiles[rowTiles.length - index - 1] === currentPlayer
  })

  return rowWin || colWin || leftToRightDiagWin || rightToLeftDiagWin
}
