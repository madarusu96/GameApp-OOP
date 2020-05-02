//aici punem tot ce este legat de fetch
//- FetchApi: aici aveam doar call-uri catre api nostru, 
//fiecare va fi o metoda separata. De exemplu: getGameById, updateGame, deleteGame etc
console.log('intra in fetchapi');
function FetchApi(apiURL){
    this.apiURL=apiURL;
    //console.log('apiURL'+apiURL)
}
FetchApi.prototype.getGamesList= function(){
     return fetch(`${this.apiURL}/games`,{
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function(response){
        console.log('aduce jocurile ')
        return response.json();
    });

}

FetchApi.prototype.deleteGame= function(gameID){
    return fetch(`${apiURL}/games/${gameID}`, {
        method: "DELETE"
    }).then(function(r){
        return r.text();
    });

}

FetchApi.prototype.createGameRequest = function (gameObject){
    return  fetch(`${this.apiURL}/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: gameObject
    }).then(function(response){
        return response.json();
    });

}

FetchApi.prototype.updateGameRequest = function (updatedGameObj,callbackCreateGame){
    return fetch(`${this.apiURL}/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: gameObject
    }).then(function(response){
        return response.json();
    });

}