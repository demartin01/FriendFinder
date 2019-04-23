// ==============================================================================
// DEPENDENCIES


var express = require("express");

// ==============================================================================
// EXPRESS 

// "express" server
var app = express();

//  port. 
var PORT = process.env.PORT || 8080;

//  Express app_data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER


// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
