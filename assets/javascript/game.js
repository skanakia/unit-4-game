var charHP = 0;
var oppHp = 0;
var attPow = 0;
var attPowBase = 0;
var countAttPow = 0; 
var charSelected = false;
var oppSelected = false;
var allSelected = false;
var force = "";
var charName = "";
var defDiv = "";
var gameLost = false;
var oppDown = 0;
var gameWon = false;

function isSelected(){
    if (charSelected === false) {
        return "please select your character.";
    } else if (oppSelected === false) {
        return "please select your opponent.";
    } else {
        allSelected = true;
    }
}


$(document).ready(function() {
    $(".char").on("mouseenter", function() {
        $(this).css("border-color", "red");
    });

    $(".char").on("mouseleave", function() {
        $(this).css("border-color", "green");
    });

    $(".characters").on("click", ".char", function() {
        $(this).appendTo($("#char-box"));
        if ($(this).attr('id') === "fighter1") {
            $("#fighter2").appendTo($("#opp-box"));
            $("#fighter3").appendTo($("#opp-box"));
            $("#fighter4").appendTo($("#opp-box"));
            charName = "Obi-Wan Kenobi";
            charHP = 120;
            attPowBase = 8;
            force = "light";

        } else if ($(this).attr('id') === "fighter2") {
            $("#fighter1").appendTo($("#opp-box"));
            $("#fighter3").appendTo($("#opp-box"));
            $("#fighter4").appendTo($("#opp-box"));
            charName = "Luke Skywalker";
            charHP = 100;
            attPowBase = 10;
            force = "light";

        } else if ($(this).attr('id') === "fighter3") {
            $("#fighter1").appendTo($("#opp-box"));
            $("#fighter2").appendTo($("#opp-box"));
            $("#fighter4").appendTo($("#opp-box"));
            charName = "Darth Insidious";
            charHP = 150;
            attPowBase = 7;
            force = "dark";

        } else if ($(this).attr('id') === "fighter4") {
            $("#fighter1").appendTo($("#opp-box"));
            $("#fighter2").appendTo($("#opp-box"));
            $("#fighter3").appendTo($("#opp-box"));
            charName = "Darth Maul";
            charHP = 180;
            attPowBase = 6;
            force = "dark";

        } else {

        }

        charSelected = true;

        console.log("working");
    });

    $("#opp-box").on("click", ".char", function(){
        console.log("working");
        defDiv = $(this);
        if (oppSelected === false) {
            $(this).appendTo("#defender-box");
            if ($(this).attr('id') === "fighter1") {
                oppName = "Obi-Wan Kenobi";
                oppHp = 120;
                if (force === "light") {
                    countAttPow = 6;
                } else {
                    countAttPow = 60;
                }
            } else if ($(this).attr('id') === "fighter2") {
                oppName = "Luke Skywalker";
                oppHp = 100;
                if (force === "light") {
                    countAttPow = 5;
                } else {
                    countAttPow = 40;
                }
            } else if ($(this).attr('id') === "fighter3") {
                oppName = "Darth Insidious";
                oppHp = 150;
                if (force === "dark") {
                    countAttPow = 5;
                } else {
                    countAttPow = 25;
                }
            } else {
                oppName = "Darth Maul";
                oppHp = 180;
                if (force === "dark") {
                    countAttPow = 5;
                } else {
                    countAttPow = 25;
                }
            }
        } else {

        }
        oppSelected = true;
    });

    $("#fightButton").on("click", function() {
        $("#fight-dialog").empty();
        isSelected();
        if (allSelected === true && gameLost === false) {
            console.log("true");
            var newP = $("<p>");
            var newP2 = $("<p>");
            attPow = attPow + attPowBase;
            oppHp = oppHp - attPow;
            if (oppHp <= 0) {
                $("#defender-box").empty()
                oppSelected = false;
                allSelected = false;
                oppDown++;
                if (oppDown === 3) {
                    gameWon = true;
                    var newDiv = $("<div>");
                    $(newDiv).text("You Won. Please hit the Reset Button to Play Again.");
                    $("#fight-dialog").append(newDiv);
                }                
                var newP7 = $("<p>");
                $(newP7).text("You killed " + oppName);
                $("#fight-dialog").append(newP7);
            } else {

            }
            
            if (allSelected === true) {
                charHP = charHP - countAttPow; 
            } else {
                charHP = charHP;
            }

            if (charHP <= 0) {
                var newP5 = $("<p>");
                $(newP5).text("You Lose, press restart to play again.");
                $("#fight-dialog").append(newP5);
                gameLost = true;
            } else {

            }
            $(newP).text("You attacked " + oppName + " for " + attPow + " damage.");
            $(newP2).text(oppName + " attacked you for " + countAttPow + " damage.");
            $("#fight-dialog").append(newP);
            $("#fight-dialog").append(newP2);
            if (oppName === "Obi-Wan Kenobi") {
                $("#hp120").text(oppHp);
            } else if (oppName === "Luke Skywalker") {
                $("#hp100").text(oppHp);
            } else if (oppName === "Darth Insidious") {
                $("#hp150").text(oppHp);
            } else if (oppName === "Darth Maul") {
                $("#hp180").text(oppHp);
            } else {

            }
            if (charName === "Obi-Wan Kenobi") {
                $("#hp120").text(charHP);
            } else if (charName === "Luke Skywalker") {
                $("#hp100").text(charHP);
            } else if (charName === "Darth Insidious") {
                $("#hp150").text(charHP);
            } else if (charName === "Darth Maul") {
                $("#hp180").text(charHP);
            } else {

            }
        } else if (gameLost === true) {
            var newP3 = $("<p>");
            $(newP3).text("You Lose, press restart to play again.");
            $("#fight-dialog").append(newP3);
        } else if (gameWon === true) {
            var newDiv2 = $("<div>");
            $(newDiv2).text("You Won. Please hit the Reset Button to Play Again.");
            $("#fight-dialog").append(newDiv2);
        } else {
            var error = isSelected();
            var newP4 = $("<p>");
            $(newP4).text(error);
            $("#fight-dialog").append(newP3);
        }
    });

    $("#resetButton").on("click", function() {
        var charHP = 0;
        var oppHp = 0;
        attPow = 0;
        attPowBase = 0;
        countAttPow = 0; 
        charSelected = false;
        oppSelected = false;
        allSelected = false;
        force = "";
        charName = "";
        defDiv = "";
        gameLost = false;
        oppDown = 0;
        gameWon = false;

        location.reload();
    });

   
});