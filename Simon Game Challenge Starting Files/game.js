var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var startGame = false
var level = 0


// keyboard press event
$(document).keydown(function () { 
    if (!startGame) {
        var levelMsg = "Level " + level
        nextSequence()
        startGame = true
    }
})

// button click event
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    playAudio(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userChosenColour.length - 1)
})

function checkAnswer(lastIndex) {
    if (gamePattern[lastIndex] === userClickedPattern[lastIndex]) {
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence()
            }, 1000);
        }
    } else {
        playAudio("wrong")
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        startOver()
    }
}

function nextSequence() {
    userClickedPattern = []
    level++
    $("#level-title").text("Level" + level)
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
    playAudio(randomChosenColour)
}

function animatePress(currentColour) {
    var timeoutValue = 100
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed")
    }, timeoutValue)
}

function playAudio(color) {
    var audio = new Audio("sounds/" + color + ".mp3")
    audio.play()
}

function startOver() {
    level = 0
    startGame = false
    gamePattern = []
}

