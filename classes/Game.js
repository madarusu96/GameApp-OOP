console.log('intra in game');



function Game(id,title,imageUrl,description){
   this.id=id;
   this.title=title;
   this.imageUrl=imageUrl;
   this.description=description;

}

Game.prototype.createSimpleDomElement = function (){

   // var container1 = document.querySelector('.container');
    const gameELement = document.createElement("div");
    gameELement.innerHTML = `<h1>${this.title}</h1> 
                        <img src="${this.imageUrl}" />
                        <p>${this.description}</p> 
                        <button class="delete-btn" id="${this._id}">Delete Game</button>
                        <button class="update-btn" id="${this._id}">Edit Game</button>`;    

    // container1.appendChild(gameELement);
return gameELement;
    
}
