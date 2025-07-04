//var button = document.querySelector('button');
//var rock = document.getElementById("ChangeMe");

/*function changeBG(){
    document.body.backgroundImage = pictures[currendIndex];
    currentIndex = (currentIndex + 1) % pictures.length;
}*/

// this is to make a button that changes the background into these images with each click//
const pictures = [
    'url("images/birdman.png")',
    'url("images/rengoku.jpg")',
    'url("images/sassy.png")',
    'url("images/sanji.png")',
    'url("images/zoro.png")',
    'url("images/vegapunklilth.png")',
    'url("images/birdmanfriend.png")',
    'url("images/birdmanfriend3.png")',
    'url("images/chopper.webp")',
    'url("images/goku.webp")',
    'url("images/luffy.jpg")'
];
let currentIndex = 0;
function changeBG(){
    //changes the background image of the body
    document.body.style.backgroundImage = pictures[currentIndex];
    //moves to the next image and loops back to the start if at end
    currentIndex = (currentIndex + 1) % pictures.length;
}

console.log('hi my name is  joe and i work at a button factory!');
