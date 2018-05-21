var charHp = 0;
var oppHp = 0;
var attPow = 0;
var countAttPow = 0; 
var charSelected = false;
var oppSelected = false;
var allSelected = false;
var force = "";
var enemiesDown = 0;

function isSelected(){
    if (charSelected === false) {
        return "please select your character."
    } else if (oppSelected === false) {
        return "please select your opponent."
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
            charHP = 120;
            attPow = 8;
            force = "light";

        } else if ($(this).attr('id') === "fighter2") {
            $("#fighter1").appendTo($("#opp-box"));
            $("#fighter3").appendTo($("#opp-box"));
            $("#fighter4").appendTo($("#opp-box"));
            charHP = 100;
            attPow = 10;
            force = "light";

        } else if ($(this).attr('id') === "fighter3") {
            $("#fighter1").appendTo($("#opp-box"));
            $("#fighter2").appendTo($("#opp-box"));
            $("#fighter4").appendTo($("#opp-box"));
            charHP = 150;
            attPow = 7;
            force = "dark";

        } else if ($(this).attr('id') === "fighter4") {
            $("#fighter1").appendTo($("#opp-box"));
            $("#fighter2").appendTo($("#opp-box"));
            $("#fighter3").appendTo($("#opp-box"));
            charHP = 180;
            attPow = 6;
            force = "dark";

        } else {

        }

        charSelected = true;

        console.log("working");
    });

    $("#opp-box").on("click", ".char", function(){
        console.log("working");
        if (oppSelected === false) {
            $(this).appendTo("#defender-box");
        } else {

        }
        oppSelected = true;
    });

    $("#fightButton").on("click", function() {
        console.log("working");
    });

});