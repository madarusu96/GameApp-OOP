//aici punem tot ce este legat de fetch
//- FetchApi: aici aveam doar call-uri catre api nostru, 
//fiecare va fi o metoda separata. De exemplu: getGameById, updateGame, deleteGame etc
console.log('intra in fetchapi');
function FetchApi(url){
    this.url=apiURL;
    this.getGamesList();
    this.deleteGame();
    this.createGameRequest();
 

}
FetchApi.prototype.getGamesList= function(callbackFunction){
    fetch(apiURL + "/games", {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function(response){
        console.log('aduce jocurile ')
        return response.json();
    }).then(function(arrayOfGames){
        callbackFunction(arrayOfGames);
    });

}

FetchApi.prototype.deleteGame= function(gameID,callbackFunction){
    fetch(apiURL + "/games/" + gameID, {
        method: "DELETE"
    }).then(function(r){
        return r.text();
    }).then(function(apiresponse){
        callbackFunction(apiresponse);
    });

}

FetchApi.prototype.createGameRequest = function (gameObject,callbackCreateGame){
    fetch(apiURL + "/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: gameObject
    }).then(function(response){
        return response.json();
    }).then(function(createdGame){
        console.log(createdGame);
        callbackCreateGame(createdGame);
    });

}

FetchApi.prototype.updateGameRequest = function (updatedGameObj,callbackCreateGame){
    fetch(apiURL + "/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: gameObject
    }).then(function(response){
        return response.json();
    }).then(function(updatedGame){
        console.log(updatedGame);
        callbackCreateGame(updatedGame);
    });

}