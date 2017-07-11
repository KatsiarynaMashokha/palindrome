$(document).ready(function() {
  $("#palindrome").submit(function(event) {
    var userInput = $("#word").val();
    var palindromeArray = [];

    for (var i = userInput.length - 1; i >= 0; i--) {
      palindromeArray += userInput[i];
    }
    if (userInput === palindromeArray) {
      alert(userInput + " is a palindrome");
    }
    else {
      alert(userInput + " is not a palindrome");
    }
});
});
