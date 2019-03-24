// Score 119:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
//Score 300:
// var frames = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]

// var frames = [
//   [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]
// ]

// var frames = [
//   [0, 1], [9, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]
// ]

// var frames = [
//   [0, 1], [10, 0], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]
// ]

console.log('Total score:', scoreGame(frames))

function scoreGame(gameFrames){
  var totalScore = 0
  for(var i = 0; i < frames.length; i++) {
      var currentFrame = frames[i]

      if(i !== 9) {
        var nextFrame = frames[i+1]
      }

      totalScore += scoreFrame(currentFrame, nextFrame, i)


  }
  return totalScore
}

function scoreFrame(currentFrame, nextFrame, frameNumber) {
  var framesScore = 0

  var ballOne = currentFrame[0]
  var ballTwo = currentFrame[1]

  if(frameNumber !== 9) {
    var nextBallOne = nextFrame[0]
    var nextBallTwo = nextFrame[1]
  }

  if(isStrike(ballOne)) {
    framesScore = scoreStrike(ballOne, nextBallOne, nextBallTwo)
  } else if (isSpare(ballOne, ballTwo)) {
    framesScore = (ballOne + ballTwo + nextBallOne)
  } else {
    framesScore = (ballOne + ballTwo)
  }

  console.log('Frame', frameNumber)
  console.log(ballOne, ballTwo, "=", framesScore)
  console.log("")

  return framesScore
}

function isStrike(ballOne) {
  return ballOne == 10
}

function scoreStrike(ballOne, nextBallOne, nextBallTwo) {
  return ballOne + nextBallOne + nextBallTwo
}

function isSpare(ballOne, ballTwo) {
  return !isStrike(ballOne) && (ballOne + ballTwo) == 10
}
