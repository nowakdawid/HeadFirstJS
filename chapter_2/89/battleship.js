var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {

    guess = prompt("Enter a number from 0 to 6: ");

    if(guess == null) { break; }

    if (guess < 0 || guess > 6) {

        alert("This number is invalid. Please enter a valid number.");

    }

    else {

        guesses++;

        if (guess == location1 || guess == location2 || guess == location3) {

            hits++;

            if (hits == 3) {

                isSunk = true;
                alert("You have sunk the ship, congratulations!");

            }

            else {

                alert("That is a hit!");

            }

        }

        else { alert("You missed! Try again."); }

    }

}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3/guesses);
alert(stats);