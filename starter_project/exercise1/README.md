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