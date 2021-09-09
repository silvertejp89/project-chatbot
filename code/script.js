// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const startButton = document.getElementById('start-btn')
const form = document.getElementById('name-form')
const inputValue = document.getElementById('name-input')


// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log("Det här är bot")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆

}

const ageQuestion = () => {
  showMessage('How old are you?', 'bot')
}

const handleNameInput = (event) => {
  event.preventDefault()

  const name = inputValue.value



  console.log('The name is:', name)
  showMessage (`My name is ${name}`, 'user')
//note the difference between the single quotation in row 48 vs. the bacticks in 49.
  inputValue.value = ''

  setTimeout(ageQuestion, 1000)

}

// Set up your eventlisteners here
startButton.addEventListener('click', greeting)
form.addEventListener('submit', handleNameInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// setTimeout(greeting, 1000)
