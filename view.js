
console.log('intra in view');
var apiURL = "https://games-app-siit.herokuapp.com";
const fetchh = new FetchApi(apiURL);
 const game = new Game();


fetchh.getGamesList(function(arrayOfGames){
    for(var i = 0; i < arrayOfGames.length; i++) {
        game.createDomElement(arrayOfGames[i]);
    }
});



document.querySelector(".submitBtn").addEventListener("click", function(event){
    event.preventDefault();

    const gameTitle = document.getElementById("gameTitle");
    const gameDescription = document.getElementById("gameDescription");
    const gameGenre = document.getElementById("gameGenre");
    const gamePublisher = document.getElementById("gamePublisher");
    const gameImageUrl = document.getElementById("gameImageUrl");
    const gameRelease = document.getElementById("gameRelease");

    game.validateFormElement(gameTitle, "The title is required!");
    game.validateFormElement(gameGenre, "The genre is required!");
    game.validateFormElement(gameImageUrl, "The image URL is required!");
    game.validateFormElement(gameRelease, "The release date is required!");

    game.validateReleaseTimestampElement(gameRelease, "The release date you provided is not a valid timestamp!");

    if(gameTitle.value !== "" && gameGenre.value !== "" && gameImageUrl.value !== "" && gameRelease.value !== "") {
        var urlencoded = new URLSearchParams();
        urlencoded.append("title", gameTitle.value);
        urlencoded.append("releaseDate", gameRelease.value);
        urlencoded.append("genre", gameGenre.value);
        urlencoded.append("publisher", gamePublisher.value);
        urlencoded.append("imageUrl", gameImageUrl.value);
        urlencoded.append("description", gameDescription.value);

        fetchh.createGameRequest(urlencoded,createDomElement);
    }
})