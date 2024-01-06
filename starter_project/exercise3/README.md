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
