var myArray = 
    [
        "images/mekonghouse.jpeg", 
        "images/oldtown.jpg", 
        "images/Starbucks.png", 
        "images/pizza_cottage_logo.png", 
        "images/Subway_Logo_OG.png", 
        "images/Temptations Logo.jpeg", 
        "images/zhia.png",
        "images/arisan.jpg"
    ];

var rand = myArray[Math.floor(Math.random() * myArray.length)];

var button = document.querySelector(".btn");
//var myImage = document.slide.src;

//button.addEventListener("click", function(){
//    document.slide.src = rand;
//})


function changeImage() {
//    document.querySelector(".square").style.backgroundImage = "url(" + rand + ")"
    document.querySelector(".square").style.cssText = "background-image: url(" + rand + ");";
}