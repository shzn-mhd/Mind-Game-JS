const imageArray = [
    {
        name:'bird',
        url:'images/bird.png',
    },

    {
        name:'bunny',
        url:'images/bunny.png',
    },

    {
        name:'fox',
        url:'images/fox.png',
    },

    {
        name:'lion',
        url:'images/lion.png',
    },

    {
        name:'mouse',
        url:'images/mouse.png',
    },

    {
        name:'owl',
        url:'images/owl.png',
    },

    {
        name:'bird',
        url:'images/bird.png',
    },

    {
        name:'bunny',
        url:'images/bunny.png',
    },

    {
        name:'fox',
        url:'images/fox.png',
    },

    {
        name:'lion',
        url:'images/lion.png',
    },

    {
        name:'mouse',
        url:'images/mouse.png',
    },

    {
        name:'owl',
        url:'images/owl.png',
    },

];

let numberOfCardsSelected = 0;
let cardChoosen = [];

imageArray.sort(()=> 0.5 - Math.random());

//Select the grid
const gridDisplay = document.querySelector('#grid');
// console.log(gridDisplay);


function createBoard(){
    imageArray.forEach((img,index)=>{
        // console.log(img,index);
        //Create Image Element
        const card = document.createElement('img');
        card.setAttribute('src','images/question.jpeg');
        card.setAttribute('data-id',index);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    });
}

createBoard();
console.log(imageArray)

function flipCard(){
    const cardId = this.getAttribute('data-id');
    
    this.setAttribute('src',imageArray[cardId].url);
    cardChoosen.push({...imageArray[cardId], id: cardId});

    if(cardChoosen.length === 2){
        setTimeout(checkMatch, 500);
    }
    // console.log(cardChoosen);
}

function checkMatch(){
    const optioOne = cardChoosen[0];
    const optionTwo = cardChoosen[1];

    const allCards =document.querySelectorAll('img');

    if(optioOne.name === optionTwo.name){
        // console.log('match');
        //if element match
        allCards[optioOne.id].src = 'images/tick.jpg';
        allCards[optionTwo.id].src = 'images/tick.jpg';
    } else {
        allCards[optioOne.id].src = 'images/question.jpeg';
        allCards[optionTwo.id].src = 'images/question.jpeg';
    }
}

// console.log(imageArray);