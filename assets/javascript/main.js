//intial heroes//
var heroesArray = ["captain america", "superman", "thor", "flash", "ironman"];

//adds intial hero buttons at the top//
$(document).ready(function() {
    for (var i = 0; i < heroesArray.length; i++) {
        $(".gifButtons").append("<button type='button' onclick='searchGif(\"" + heroesArray[i] + "\")' class='btn btn-info' value=' " + heroesArray[i] + "'> " + heroesArray[i] + " </button>");
    }
});

function gifButtonClicked () {
    var userInput = $('#userInput').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#userInput').val();

    if (userInput) {
        $('#athlete-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-info' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

function searchGif(gifName) {
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=yIv7GlpxlU8oADBjlF8ixp7FLJg85rFw&limit=10",
        type: 'GET',
    })
    .done(function(response) {
        displayGif(response);
    })
}

function displayGif(response) {
    $('#gifArea').empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating: " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url + 
        ' " data-still=" ' + response.data[i].images.fixed_height_still.url +
        ' "data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';

        image = '<div class="col-md-4">' + image + "</div>";
        $('#athletes').append(image);
    }

    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }
    });
}