const express= require('express');
const bodyParser = require("body-parser");
const port = 8000;
const app = express();
app.use(bodyParser.urlencoded( {extended:false}));
const router = express.Router();
MISSING_CODE1:  
//
app.use('/', router);
//
app.listen(port, function(){
	console.log("Listening on port " + port);
});
