console.log('intra in game');



function Game(gameObj){
    this.createDomElement();
    this.removeDeletedElementFromDOM();
    this.validateFormElement();
    this.gameObj= gameObj;

}

Game.prototype.createDomElement = function (gameObj){

    var container1 = document.querySelector('.container');
    const gameELement = document.createElement("div");
    gameELement.innerHTML = `<h1>${gameObj.title}</h1> 
                        <img src="${gameObj.imageUrl}" />
                        <p>${gameObj.description}</p> 
                        <button class="delete-btn" id="${gameObj._id}">Delete Game</button>
                        <button class="update-btn" id="${gameObj._id}">Edit Game</button>`;    

    container1.appendChild(gameELement);

    document.getElementById(`${gameObj._id}`).addEventListener("click", function(event){
        deleteGame(event.target.getAttribute("id"), function(apiResponse){
            console.log(apiResponse);
            removeDeletedElementFromDOM(event.target.parentElement);
        })
    });
}
Game.prototype.removeDeletedElementFromDOM = function(){
    domElement.remove();
}
Game.prototype.validateFormElement = function(){
    if(inputElement.value === "") {
        if(!document.querySelector('[rel="' + inputElement.id + '"]')){
            buildErrorMessage(inputElement, errorMessage);
        }
    } else {
        if(document.querySelector('[rel="' + inputElement.id + '"]')){
            console.log("the error is erased!");
            document.querySelector('[rel="' + inputElement.id + '"]').remove();
            inputElement.classList.remove("inputError");
        }
    }
}
Game.prototype.validateReleaseTimestampElement = function(){
    if(isNaN(inputElement.value) && inputElement.value !== "") {
        buildErrorMessage(inputElement, errorMessage);
    }
}
Game.prototype.buildErrorMessage = function(){
    inputEl.classList.add("inputError");
    const errorMsgElement = document.createElement("span");
    errorMsgElement.setAttribute("rel", inputEl.id);
    errorMsgElement.classList.add("errorMsg");
    errorMsgElement.innerHTML = errosMsg;
    inputEl.after(errorMsgElement);

}