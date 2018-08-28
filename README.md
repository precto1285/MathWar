# MathWar

A timed mathematics game where 2 players square off against each other by solving simple single-digits Adding, Subtracting, Multiplying &amp; Dividing in a timed setting.

To start game, users will enter their names into an input. The entered text will mark player one & two in the game. Once both players enter their names, the game starts after a 5000 (5 sec.) pop-up window appears signaling the players to get ready.

This is the flow of the App when game begins:

1.  Game Starts

2.  Player 1 goes first.

3.  The browser will post 3 containers. A "#timer-Container", a "#Game-Container with 2 numbers and "randomOperator", and a #player-Container" with "#answer", "#result", and #"scoreboard".

4.  Each player gets 4 at random sets of ["#randomNumber1","#randomOperator","#randomNumber2", equal operator(=),"#HiddenCorrectAnswer";].

5.  Each question will use a each of the 4 operators once(+,-,\*,/).

6.  After each question, the timer, starting at 10000 (10 sec.), will decrease by 2000 (2 sec.) (10000, 8000, 6000, 4000).

7.  Player types in a numeric answer in an "#answer" input and presses enter. (Only numeric keys can operate).

8.  Each time "#answer" === "#HiddenCorrectAnswer", the scoreboard adds 1 point and resets the clock to the next attempt with the timer decreased by 2000.

9.  Each time the player gets the answer incorrect, no points are added and the timer resets to the next decreased seconds.

10. After all 4 questions, the game stops and the tally of the points are saved under that player's scoreboard container.

11. Player 2 goes next and repeats steps 3 to 9.

12. After both players go their rounds, the scoreboard will compare each player's score and determine who won the round.

13. The game resets for 2 more times for a total of 3 rounds.

14. The player who wins 2 or 3 games is determined the winner.

15. Game Over.
