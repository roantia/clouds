// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("Hello World!")
})

// start the server listening for requests
app.listen(process.env.PORT || 80, 
	() => console.log("Server is running..."));
