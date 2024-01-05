![2fa3644183cca3ee528392eb34bb8267](https://github.com/rixiobarrios/skillsoft-practice-lab-full-stack-developer/assets/55994508/2f7fb2bf-6664-4088-b2b0-e95ceb8286a2)

# Skillsoft Practice Lab

## Full Stack Developer

### Practice Lab:  5 Hours

Use this lab to hone your full stack development skills by working with HTML, CSS, JavaScript, jQuery, AngularJS, Node.js and MongoDB. 
This lab can be used as a sandbox for practicing full stack development skills and for completing exercises aligned to the Full Stack Developer (FSD) Bootcamp.

### Working with HTML and CSS

Introduction

Your assignment for this exercise, is to apply the skills you have learned from the bootcamp to complete key steps of the full stack application.

Setup Instructions

Open the VS Code Editor

Open the Documents/starter_project/exercise1 folder.

You can then begin your task assignments.

Task List

1. In the file: index.html, give an id name to each of the 4 div tags to correspond to the four major parts of the page

2. In the file: styles/style.css, complete the code to add styles for the following:

nav
#maincontent
#footer
#aside

3. In the file: enterweight.html, add code to include:

A label and input for "empName"
A label and input for "empWeight"

Final Steps:

- Launch the application in your browser and take a screenshot of the results.
- Compare your results with the provided solution.

### Solution

Checkpoints

1. To ensure that the div elements have an id name correspond to the four major parts of the page, Include the following code in index.html

Line 16, 24
```
nav
```  

Line 25
```
id="maincontainer"
```  

Line 26
```
id="maincontent"
```  

Line 50
```
id="footer"
```  

2. To ensure that the styles have been added, include the following code in styles/style.css

Line 23
```
text-align:left;
background-color:lightgray;
border-bottom:1px solid gray;
```  

Line 40
```
float:left;
width:560px;
border-right: 1px solid #eeeeee;
Line 48

clear:both;
text-align:center;
font-size:.8em;
padding-top:50px;  
Line 52

float:left;
width:200px;
padding-bottom:10px;
padding-left: 4px;
```

3. To insure we include fields for "empName" and "empWeight", in the enterweight.html, add the following code:

Line 28
```
<label for="empName">Your Name</label>
<input id="empName" type="text" />
```

Line 31
```
<label for="empWeight">Your Weight Today</label>
<input id="empWeight" type="text" />
```  
### Working with Javascript

Introduction

Your assignment for this exercise, is to apply the skills you have learned from the bootcamp to complete key steps of the full stack application.

Setup Instructions

Open the VS Code Editor

Open the Documents/starter_project/exercise2 folder.

You can then begin your task assignments.

Task List

1. In the file index.html, complete the code link to an external JavaScript file.

2. In the file scripts/scripts.js complete JavaScript code to:

Refer to all paragraph tags
Add an event listener for on mouse
Add an event listener for out mouse

3. In the file scripts/scripts.js complete JavaScript code to check if empName is empty and display error message using innerHTML.

4. In the file scripts/scripts.js complete JavaScript code to use the Fetch API to wait for the response of an asynchronous request.

Final Steps:

Launch the application in your code editor and take a screenshot of the results.
Compare your results with the provided solution.

### Solution

Checkpoints

1. To ensure that we can link to the external JavaScript file, in the file index.html add the following code:

Line 7
```
<script src="scripts/scripts.js"></script>
```

2. To ensure that we can refer to all paragraph elements, in the file scripts/scripts.js add the following code:Line 1
```
document.getElementsByTagName('p');
```  
Then, to add event listeners for the mouse events in scripts/scripts.js , include the following code:

Line 8
```
pTags[i].addEventListener('mouseover', function () {
    this.style.backgroundColor = 'lightyellow';
  }, false);
```

Line 9
```
pTags[i].addEventListener('mouseout', function () {
    this.style.backgroundColor = '';
  }, false);
```

3. In scripts/scripts.js , we can check if "empName" is empty by including the following code:

Line 20
```
if (empName.value == "") {
document.getElementById("nameMessage").innerHTML = "Name cannot be empty!";
empName.focus();
return false;
}
```

4. In the file scripts/scripts.js to complete JavaScript code to use the Fetch API to wait for the response of an asynchronous request, include the following code:

Line 50
```
await fetch(url);
```  

### Working with jQuery

Introduction

Your assignment for this exercise, is to apply the skills you have learned from the bootcamp to complete key steps of the full stack application.

Setup Instructions

Open the VS Code Editor

Open the Documents/starter_project/exercise3/jQuery folder.

You can then begin your task assignments.

Task List

1. In the file index.html, complete the code to use the jQuery library in our page.

2. In the file scripts/scripts.js complete code to use jQuery to validate the form named "frmCollectWeights".

3. In the file scripts/scripts.js complete code to ensure that the form calls the validate method.

4. In the file scripts/scripts.js complete code to add an additional method to the jQuery validation.

Final Steps:

- Launch the application in your code editor and take a screenshot of the results.
- Compare your results with the provided solution.

### Solution

Checkpoints

1. To ensure that we can use the jQuery library in our page, in the file index.html, add the following codeLine 7
```
<script src= "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
</script>
```

2. In the file scripts/scripts.js to use jQuery to validate the form named "frmCollectWeights", we can add the following code

Line 31
```
$("form[name='frmCollectWeights']").validate({
```

3. Then to ensure that the form calls the validate method, in the file scripts/scripts.js we can add the following code

Line 54
```
submitHandler:{
```

4. In the file scripts/scripts.js, we can add an additional method to the jQuery validation by including the following code

Line 63
```
jQuery.validator.addMethod(
```
### Working with Angular

Introduction

Your assignment for this exercise, is to apply the skills you have learned from the bootcamp to complete key steps of the full stack application.

Setup Instructions

Open the VS Code Editor

Open the Documents/starter_project/exercise3/AngularJS folder.

You can then begin your task assignments.

Task List

1. In the file teamWeights.html, complete the code to use the AngularJS in our page.

2. In the file teamWeights.html, complete code to use the AngularJS ng-repeat directive to display all the results for employee weights.

3. In the file scripts/scripts.js complete code to ensure that the form data for the fields empName and empWeight are posted as data.

Final Steps:

- Launch the application in your code editor and take a screenshot of the results.
- Compare your results with the provided solution.

### Solution

Checkpoints

1. To ensure that we can use the AngularJS in our page, in the file teamWeights.html, add the following codeLine 7
```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js"></script>
```  
2. In the file teamWeights.html to use the AngularJS ng-repeat to display all the weight loss data, we can add the following code

Line 29
```
<div id="records" ng-repeat="emp in allWeights">{{emp.empName}} weighed in at {{emp.empWeight}} Kgs</div>
```  
3. Then to ensure that the form data is posted properly, and the correct fields are submitted, in the scripts/scripts.js we can add the following code

Line 16
```
data    : 'empName='+$scope.empName + '&empWeight='+$scope.empWeight
```

### Working with Node.js

Introduction

Your assignment for this exercise, is to apply the skills you have learned from the bootcamp to complete key steps of the full stack application.

Setup Instructions

Open the VS Code Editor

Open the Documents/starter_project/exercise4 folder.

You can then begin your task assignments.

Task List

1. In the file models/models.js, complete the code to use the mongoose to allow us to interact with MongoDB more easily.

2. In the file models/models.js, complete the code to the MongoDB database Weights, assuming it is running locally and using the default port of 27017.

3. In the file models/models.js, complete the code to create a schema representing empName and empWeight as strings.

4. vIn the file routes/routes.js, complete code to let this file know that there is a controller handling each route in the controllers directory

5. In the file controllers/controller.js, complete the code to retrieve an individual employees weight by name.

6. In the file controllers/controller.js, complete the code to delete an individual record by name.

7. In the file controllers/controller.js, complete the code to add a new record to the database

8. In the file controllers/controller.js, complete the code to update a record in the database

9. In the file http_server.js, complete the code to include the routes and register them with the Express app.

Final Steps:

- Launch the application in your code editor and take a screenshot of the results.
- Compare your results with the provided solution.

### Solution

Checkpoints

1. To ensure that we can use mongoose to allow us to interact with MongoDB more easily, in models/models.js add the following code

Line 1
```
require('mongoose');
```

2. To ensure that we can use mongoose to allow us to connect with MongoDB, in models/models.js add the following code

Line 3
```
connect('mongodb://localhost:27017/Weights', { useNewUrlParser: true })
```

3. Then to create a new schema, we can use the following code in the models/models.js file

Line 5
```
new mongoose.Schema({
  empName: String,
  empWeight: String
```

4. To let the routes know where the corresponding controllers are, in the file routes/routes.js we should add the following code

Line 2
```
 require('../controllers/controller');
```

5. In the file controllers/controller.js, we can find an individual record by name, buy using the find method of the Weight object. To do this include the following codeLine 24
```
 Weight.find({empName:req.params.byname}, function(err, getByName)
```

6. In the file controllers/controller.js, we can delete an individual record by name, buy using the deleteOne method of the Weight object. To do this include the following codeLine 33
```
 Weight.deleteOne({empName:delName}, function(err, result)
```

7. In the file controllers/controller.js, we can add a new record , buy using the save method of the Weight object. To do this include the following codeLine 46
```
 weight.save({}, function(err, result)
```

8. Then in the file controllers/controller.js, we can update a record , buy using the updateOne method of the Weight object. To do this include the following codeLine 58
```
 Weight.updateOne(query, data, function(err, obj)
```

9. Finally, in the file http_server.js, to include the routes and register them with the Express app, add the following code

Line 7
```
const routes = require('./routes/routes');
routes(app);
```  

