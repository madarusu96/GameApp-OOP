const apiFetch = new FetchApi('https://games-app-siit.herokuapp.com');
 

 async function showGame(){

    const getRequest = await apiFetch.getGamesList();
    const container = document.querySelector('.container')
    for(let i = getRequest.length-1; i >= 0 ; i--) {
    const request = getRequest[i];
    const game = new Game(
        request._id,
        request.title,
        request.imageUrl,
        request.description
        )
    const newGame = game.createSimpleDomElement()
    console.log(' game'+game);
    container.appendChild(newGame);
    }
   
}
showGame();

function removeDeletedElementFromDOM(domElement){
    domElement.remove();
};

document.querySelector(".submitBtn").addEventListener("click", function(event){
    event.preventDefault();
    const gameNew = new CreateForm(
    document.getElementById("gameTitle"),
    document.getElementById("gameDescription"),
    document.getElementById("gameGenre"),
    document.getElementById("gamePublisher"),
    document.getElementById("gameImageUrl"),
    document.getElementById("gameRelease"),
    )
    gameNew.validateFormElement(gameTitle, "The title is required!");
    gameNew.validateFormElement(gameGenre, "The genre is required!");
    gameNew.validateFormElement(gameImageUrl, "The image URL is required!");
    gameNew.validateFormElement(gameRelease, "The release date is required!");

    gameNew.validateReleaseTimestampElement(gameRelease, "The release date you provided is not a valid timestamp!");

    if(gameTitle.value !== "" && gameGenre.value !== "" && gameImageUrl.value !== "" && gameRelease.value !== "") {
        console.log('in if')
        var urlencoded = new URLSearchParams();
        urlencoded.append("title", gameTitle.value);
        urlencoded.append("releaseDate", gameRelease.value);
        urlencoded.append("genre", gameGenre.value);
        urlencoded.append("publisher", gamePublisher.value);
        urlencoded.append("imageUrl", gameImageUrl.value);
        urlencoded.append("description", gameDescription.value);
        console.log('urlencoded    '+urlencoded);
        gameCreate(urlencoded)
        async function gameCreate(urlencoded){
            const request = await apiFetch.createGameRequest(urlencoded)
           console.log('game created with urlencoded'+request);
            const newGameDom=gameNew.displayCreatedGame(request);
            document.querySelector('.container').appendChild(newGameDom);
            console.log('jocul nou creat'+newGameDom);
        }
    }
})
