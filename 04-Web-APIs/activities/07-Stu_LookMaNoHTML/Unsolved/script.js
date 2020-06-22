// Add centered h1

// Create h1 element
h1Element = document.createElement("h1");

// Set text content of h1
h1Element.textContent = "Favorite Foods";

// Center h1 element
h1Element.style.textAlign = "center";

// Add h1 element to the body
document.body.appendChild(h1Element);

// Add centered h2
h2Element = document.createElement("h2");
h2Element.textContent = "Entrees";
h2Element.style.textAlign = "center";
document.body.appendChild(h2Element);

// Add a centered image
imgElement = document.createElement("img");
imgElement.setAttribute("src", "https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg?fit=1000%2C665&ssl=1")
imgElement.style.width = "500px";
imgElement.style.margin = "0 auto";
imgElement.style.display = "block";
document.body.appendChild(imgElement);

// Ad a centered caption

// Add a list of favorite foods

// Add some extra styling to all elements