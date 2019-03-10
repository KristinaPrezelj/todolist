var express = require("express"); //requiring module


var todoController = require("./controllers/todoController");

//seting the app
var app = express(); //spremamo u varijablu modul, odnosno fju kako bi mogli koristiti metode (druge fje od expressa)

app.set('view engine', 'ejs'); //setting up the view engine

//using static files/middleware-css, logo, w/e and getting it from the public foder
app.use(express.static("./public"));

//calling the module todoControllers
todoController(app);


//listening port
app.listen(3000);
console.log("na portu 3000");
