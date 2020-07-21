// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
  // Create a function which handles incoming requests and sends responses
  function handleRequest(req, res) {
  
    // Capture the url the request is made to
    var path = req.url;
  
    // Depending on the URL, display a different HTML file.
    switch (path) {
  
    case "/":
      return displayRoot(res);
  
    case "/movies":
      return displayMovies(res);

    case "/foods":
        return displayFoods(res);
    
    case "/css":
        return displayCss(res);
      
    default:
      return display404(path, res);
    }
  }
//==================  

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(res) {
    var myHTML = "<html>" +
      "<body><h1>Home Page</h1>" +
      "<a href='/home'>home</a>" +
      "</body></html>";
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }

  //==============================================
  
  // When someone visits the "http://localhost:8080/movies" path, this function is run.
  function displayMovies(res) {
    var myHTML = "<html>" +
      "<body><h1>My Movies</h1>" +
      "<ul><li>Shawshank Redemption</li>" +
    "<li>Harold & Maude</li></ul>"
      "<a href='/'>Go Home</a>" +
      "</body></html>";

      //fs.readfile movies.html
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }
  
    //==============================================
  
  // When someone visits the "http://localhost:8080/foods" path, this function is run.
  function displayFoods(res) {
    var myHTML = "<html>" +
      "<body><h1>Favorite Foods</h1>" +
      "<ul><li>Pasta</li>" +
    "<li>Short Ribs</li></ul>"
      "<a href='/'>Go Home</a>" +
      "</body></html>";
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }

    //==============================================
  
  // When someone visits the "http://localhost:8080/movies" path, this function is run.
  function displayCss(res) {
    var myHTML = "<html>" +
      "<body><h1>My Favorite CSS Frameworks</h1>" +
      "<ul><li>Materialize</li>" +
    "<li>Bootstrap</li></ul>"
      "<a href='/'>Go Home</a>" +
      "</body></html>";
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }

  // When someone visits any path that is not specifically defined, this function is run.
  function display404(url, res) {
    var myHTML = "<html>" +
      "<body><h1>404 Not Found </h1>" +
      "<p>The page you were looking for: " + url + " can not be found</p>" +
      "</body></html>";
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }

//==============================================

  
