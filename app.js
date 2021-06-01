const express = require("express")
const path = require('path');
const fs = require('fs');

// create an express app
const app = express()

const directoryPath = path.join(__dirname, 'public/img/teargas/');

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
	

})

//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, dirs) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    dirs.forEach(function (dir) {
        fs.readdir(directoryPath + dir, function (err, files) {
    		//handling error
	    	if (err) {
		        return console.log('Unable to scan directory: ' + err);
		    } 
		    //listing all files using forEach
		    files.forEach(function (file) {
		        // Do whatever you want to do with the file
		        console.log(file); 
		    });
		});
    });
});

// start the server listening for requests
app.listen(process.env.PORT || 80, 
	() => console.log("Server is running..."));

