var apikey = "iahLnjJYxHRtijMRov2GFqFCTLa6ykxR";
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+gifSearch+"&api_key="+apikey;
var gifSearch = "funny+cats";

var gifCategories= ["Happy", "Sad","Cats", "Dogs", "Confetti", "Sunglasses"];

// Function for displaying movie data
function renderButtons() {

  //cache movies view div
  var gifBtns = $(".gifButtons");
  //clear div
  gifBtns.empty();

  //loop through array
  for(var i = 0; i < gifCategories.length; i++){

    //create movies button
    console.log(gifCategories[i]);
    gifBtns.append('<button type = "button" class = "btn btn-secondary" id = "' + gifCategories[i] 
    + '">' + gifCategories[i] + '</button>');
  }

}

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

  //FOR THE REST OF THE CODE HERE:
  // PLEASE REFERENCE THE PROGRAM YOU BUILT IN
  // FOLDER 0703 TUE 6.2 AJAX
  // ACTIVITY 07-MOVIEBUTTONLAYOUT UNSOLVED 
  //     MOVIE-BUTTON-LAYOUT-HARDER.HTML


});

renderButtons();