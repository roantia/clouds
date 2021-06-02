const express = require("express")
const path = require('path');
const fs = require('fs');

// create an express app
const app = express()



// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
	

})


//passsing directoryPath and callback function
const directoryPath = path.join(__dirname, 'public/img/');

function readDir(directoryPath){
	let database = []
	fs.readdir(directoryPath, function (err, dirs_key) {
	    if (err) {
	        return console.log('Unable to scan directory: ' + err)
	    } 
	    dirs_key.forEach(function (dir_key) {
	    	if (dir_key !== 'database.js' && '.DS_Store') {
	    		let dk = []
		    	fs.readdir(directoryPath + dir_key, function (err, dirs_month) {
		    	
				    if (err) {
				        return console.log('Unable to scan directory: ' + err)
				    } 
				    dirs_month.forEach(function (dir_month) {
				    	let dm = []
				        fs.readdir(directoryPath + dir_key + '/' + dir_month, function (err, files) {
					    	if (err) {
						        return console.log('Unable to scan directory: ' + err)
						    } 
						    files.forEach(function (file) {
								let file_path = dir_key + '/' + dir_month + '/' + file
						    	dm.push(file_path)
						    })
						})
				    	dk.push(dm)
				    })
				})
				database.push(dk)
			}	
	    })
	})
	setTimeout(function(){ 
		fs.writeFile(directoryPath +'database.js', 'database = ' + JSON.stringify(database),function(err, result) {
	    	if(err) console.log('error', err);
	   	});
	}, 65);
}

readDir(directoryPath)

// start the server listening for requests
app.listen(process.env.PORT || 80, 
	() => console.log("Server is running..."));

