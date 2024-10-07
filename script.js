let gameResult = document.getElementById('game-result')
let gameScores = document.getElementById('game-scores')
let userDisplay = document.getElementById('user-display')
let aiDisplay = document.getElementById('ai-display')
let displayGame = document.getElementById('display-game')
let win = document.getElementById('win')
let loss = document.getElementById('loss')
let tie = document.getElementById('tie')
let icons = [`icons/Rock-emoji.png`, `icons/Paper-emoji.png`, `icons/Scissors-emoji.png`]
let scores = {
  Wins: 1,
  Losses: 1,
  Ties: 1
}

displayGame.style.display = "none"
gameScores.style.display = "none"

let aiRandom = Math.floor(Math.random() *3) + 1

        function aiGamePlay(){
            aiRandom = Math.floor(Math.random() *3) + 1
          if(aiRandom === 1){
            aiDisplay.src = icons[0]
          }else if(aiRandom === 2){
            aiDisplay.src = icons[1]
          }else if(aiRandom === 3){
            aiDisplay.src = icons[2]
          }
        }   


     function rock(){
        userDisplay.src = icons[0]
        aiGamePlay()
        displayGame.style.display = "block"
        gameScores.style.display = "block"
         if(userDisplay.src = icons[0] && aiRandom === 1){
        gameResult.textContent = "Tie"
        tie.textContent = "Ties: " + scores.Ties++
      } else if(userDisplay.src = icons[0] && aiRandom === 2){
        gameResult.textContent = "You Lose"
        loss.textContent = "Losses: " + scores.Losses++
      } else if(userDisplay.src = icons[0] && aiRandom === 3){
        gameResult.textContent = "You Win"
         win.textContent = "Wins: " + scores.Wins++
      }
      return userDisplay.src = icons[0]
    }
    function paper(){
        userDisplay.src = icons[1]
        aiGamePlay()
         displayGame.style.display = "block"
        gameScores.style.display = "block"
         if(userDisplay.src = icons[1] && aiRandom === 1){
        gameResult.textContent = "You Win"
        win.textContent =  "Wins: " + scores.Wins++
      } else if(userDisplay.src = icons[1] && aiRandom === 2){
        gameResult.textContent = "Tie"
        tie.textContent = "Ties: " + scores.Ties++
      } else if(userDisplay.src = icons[1] && aiRandom === 3){
        gameResult.textContent = "You Lose"
        loss.textContent = "Losses: " + scores.Losses++
      }
      return userDisplay.src = icons[1]
    }
    function scissors(){
        userDisplay.src = icons[2]
        aiGamePlay()
         displayGame.style.display = "block"
        gameScores.style.display = "block"
          if(userDisplay.src = icons[2] && aiRandom === 1){
        gameResult.textContent = "You Lose"
        loss.textContent = "Losses: " + scores.Losses++
      } else if(userDisplay.src = icons[2] && aiRandom === 2){
        gameResult.textContent = "You Win"
        win.textContent =  "Wins: " + scores.Wins++
      } else if(userDisplay.src = icons[2] && aiRandom === 3){
        gameResult.textContent = "Tie"
        tie.textContent = "Ties: " + scores.Ties++
      }
      return userDisplay.src = icons[2]
    }

function reset(){
  displayGame.style.display = "none"
  gameScores.style.display = "none"
  gameResult.textContent = "Click any icon to start"
scores = {
  Wins: 1,
  Losses: 1,
  Ties: 1
}
tie.textContent = "Ties: " + 0
win.textContent = "Wins: "  + 0
loss.textContent = "Losses: " + 0
}




  
  