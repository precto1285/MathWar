//Add Date to footer
$('#year').text(new Date().getFullYear());

$(document).ready(function() {
  // Global Variables
  var player1 = '';
  var player2 = '';
  var number1 = '';
  var number2 = '';
  var randomOp = '';
  var operatorArray = ['+', '-', '*', '/'];
  var hiddenAnswer = 0;
  // Add player One's name to scoreboard
  $('#p-one-submit').on('click', function() {
    console.log('hello world');
    player1 = $('#p-one-name').val();
    $('#playerOne').text(player1);
  });

  // Add player Two's name to scoreboard
  $('#p-two-submit').on('click', function() {
    console.log('hello world');
    player2 = $('#p-two-name').val();
    $('#playerTwo').text(player2);
  });

  // Start Game
  $('#gameStart').on('click', function() {
    console.log('Hello World');

    if (player1 === '' && player2 === '') {
      console.log('no name');
      return console.error('Please enter 2 names');
      alert('You need 2 names to start the game');
    } else {
      // Create Random 1st Number
      number1 = Math.floor(Math.random() * 10);
      $('#numberOne').text(number1);

      // Create Random Operators
      randomOp =
        operatorArray[Math.floor(Math.random() * operatorArray.length)];
      $('#operator').text(randomOp);

      // Create Random 2nd Number
      number2 = Math.floor(Math.random() * 10);
      $('#numberTwo').text(number2);

      // Create Hidden Answer

      // Player Answer
      $('#playerAnswer').val(function(e) {
        var answer = e.this;
      });
    }
  });
});
