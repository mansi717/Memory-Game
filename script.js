document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.jpg'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg'
      },
      {
        name: 'pizza',
        img: 'images/pizza.jpg'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
      },
      {
        name: 'fries',
        img: 'images/fries.jpg'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg'
      },
      {
        name: 'pizza',
        img: 'images/pizza.jpg'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    //rules
    document.getElementById("button").onclick = abc;
  
    function abc() {
    document.getElementById("content").innerHTML="<ul><li>You will start by flipping over one card</li><br><li>If the next card you flip matches, a pop up alert notifies you and you get +1 to your score</li><br><li>These cards then disspear</li><br><li>If the next card you flip does not match, a pop up alert notifies you of ths and the cards flip back</li><br><li>The game continues until you match all the cards on the board</li></ul>";
    document.querySelector(".grid").style.marginTop = "300px";
    }
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('style','border: 2px solid white;')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.innerText = ' Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 900)
      }
    }
  
    createBoard()
  });
  
  