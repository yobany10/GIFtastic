//intial heroes//
var heroesArray = ["captain america", "superman", "thor", "flash", "ironman"];

$(document).ready(function() {
    for (var i = 0; i < heroesArray.length; i++) {
        $(".gifButtons").append("<button type='button' onclick='searchGif(\"" + heroesArray[i] + "\")' class='btn btn-info' value=' " + heroesArray[i] + "'> " + heroesArray[i] + " </button>");
    }
});