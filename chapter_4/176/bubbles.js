
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

var highScore = 0;
var highestScores = [];

for(var i = 0; i < scores.length; i++) {

    document.write("Bubble solution #" + i + " score: " + scores[i] + "<br>");

    if(scores[i] > highScore) {
        highScore = scores[i];
    }

}

for(var i = 0; i < scores.length; i++) {

    if(highScore == scores[i]) highestScores.push(i);

}

document.write("<br>Bubbles tests: " + i);
document.write("<br>Highest bubble score: " + highScore);
document.write("<br>Solutions with highest score: " + highestScores

);