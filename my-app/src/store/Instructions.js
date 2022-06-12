const instructions = `
On the gameplay, you will have 1 (one) main card on the top and 3 (three) smaller cards on the bottom.
Your goal is to find the correct card from three bottom cards. How exactly?

Each card has a number of elements. On the correct bottom card, a certain amount of elements are matching to elements on the main top card. 
You have to click on the correct bottom card that has those matching elements.

Keep playing and the number of matching elements will increase. Also, colors will become more similar over time.

Levels
Game is divided into rounds of 5 to 10 levels. 
Each round has the same amount of matching elements – you will see this number when playing. Total amount of elements on cards may vary.

When you click on the correct card, you go level up.
When you click on a wrong card, you lose a life, but can keep guessing.

Lives
You have 3 lives in total. When you lose all lives, the game is over.

Score
Each correct card gives you 1 point.
You don’t lose points when you click on a wrong card.

Time
Each round starts with 30 seconds on the clock.
When you click on the correct card, you get 5 extra seconds.
When you click on a wrong card, you lose 3 seconds. Be careful not to click on wrong cards!
When you run out of time, the game is over.

Bonus
Each level has bonus timer. If you find the correct card within 3 seconds, you get 3 points instead of 1!

End of the game
Game ends when you run out of lives or time.
`

export default instructions;
