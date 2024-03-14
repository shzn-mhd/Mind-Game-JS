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

imageArray.sort(()=> 0.5 - Math.random());

//Select the grid
const gridDisplay = document.querySelector('#grid');
// console.log(gridDisplay);

console.log(imageArray);