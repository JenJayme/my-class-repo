$(document).ready(function() {

  var animals = [
    "dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
    "bird", "ferret", "turtle", "sugar glider", "chinchilla",
    "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
    "capybara", "teacup pig", "serval", "salamander", "frog"
  ];

  // function to make buttons and add to page
  function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
//empties spot in html where we want to put images

    for (var i = 0; i < arrayToUse.length; i++) {
      var newButton = $("<button>"); //<adds button tag
      newButton.addClass(classToAdd); //adds class to new button
      newButton.attr("data-type", arrayToUse[i]); //arrayToUse not yet defined, later it will be animals
      newButton.text(arrayToUse[i]); //puts the element from the array as text for button
      $(areaToAddTo).append(newButton); //appends the new button to the designated spot on the page
    }

  }
//this creates an event listener to search for any buttons with the class animal button after the document is rendered. That way any new buttons will be included.
  $(document).on("click", ".animal-button", function() { //event listener
    $("#animals").empty(); //clears out the spot on html where we put animals
    $(".animal-button").removeClass("active"); //removes active class from button so that it's static rather than dynamic. Clear everything and only show this one button as active. 
    $(this).addClass("active"); //"this" refers to whatever you just clicked on, in this case animal button

    var type = $(this).attr("data-type"); //
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    //this section requests the images
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var animalDiv = $("<div class=\"animal-item\">");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var animated = results[i].images.fixed_height.url;
          var still = results[i].images.fixed_height_still.url;

          var animalImage = $("<img>");
          animalImage.attr("src", still);
          animalImage.attr("data-still", still);
          animalImage.attr("data-animate", animated);
          animalImage.attr("data-state", "still");
          animalImage.addClass("animal-image");

          animalDiv.append(p);
          animalDiv.append(animalImage);

          $("#animals").append(animalDiv);
        }
      });
  });

  
    //this section determines whether images are set to active class or not, which determines whether gif or static image
  $(document).on("click", ".animal-image", function() {

    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

  $("#add-animal").on("click", function(event) {
    event.preventDefault();
    var newAnimal = $("input").eq(0).val();

    if (newAnimal.length > 2) {
      animals.push(newAnimal);
    }
// ( arraytoUse, class to add, id where you add it)
    populateButtons(animals, "animal-button", "#animal-buttons");

  });

  populateButtons(animals, "animal-button", "#animal-buttons");
});
