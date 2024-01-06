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