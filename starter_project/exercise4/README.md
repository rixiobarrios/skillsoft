
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

