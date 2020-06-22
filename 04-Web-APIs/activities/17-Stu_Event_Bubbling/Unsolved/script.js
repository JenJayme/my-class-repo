//select the image in the buttons using querySelector
var next = document.querySelector(".next")
var prev = document.querySelector(".prev")
var carouselBox = document.querySelection(".carouselbox")

//create an array of urls to use for images
var imgArray = [
    "https://www.fodors.com/wp-content/uploads/2019/05/20BestBeachesFlorida__HERO_shutterstock_314299406.jpg",
    "https://www.thetopvillas.com/blog/wp-content/uploads/2017/02/Best-beaches-in-Barbados-1140x760.jpg",
    "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/12845%20%281%29.jpg?itok=LlF1h_ZD"
]

//create an event listener for onclick for both buttons
next.addEventListener ("onclick")
prev.addEventListener ("onclick")
carouselbos.addEventListener ("onclick")

//create a function to change the style of the carousel box background image
//stop propagation inside functions for prev and next
