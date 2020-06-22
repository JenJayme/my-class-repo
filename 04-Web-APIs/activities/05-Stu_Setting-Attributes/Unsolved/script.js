//select all images
var images = document.querySelectorAll("img");
//set attributes

for (var i=0; i <images.length;i++) {
    images[i].setAttribute("src", "https://placeimg.com/640/480/any");
    images[i].setAttribute("alt", "here's a random picture");
    images[i].setAttribute("href", "https://www.youtube.com/channel/UCOe_y6KKvS3PdIfb9q9pGug");
}