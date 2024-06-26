// Using Wizard Orpheus JS library to make this AI game

var myGame = new WizardOrpheus('', `You're daughter's birthday is in the upcoming week! She really wants a Nintendo Switch, however, it's a bit costly. Therefore, think twice before buying her a Nintendo Switch!`)

myGame.createUserAction({
  
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
  
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    
    let userInput = document.getElementById('input').value
    
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})

myGame.createUserAction({
  
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
  
})

// adding horizontal lines between the messages to make the conversation more easy to understand

myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
 
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>' + '<hr></hr>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
  
})

