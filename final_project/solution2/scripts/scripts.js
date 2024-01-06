let pTags = document.getElementsByTagName('p'); 
let xmlhttp = new XMLHttpRequest(); 
let file = "json.txt";
let url = "http://localhost:8000/getweights";
async function getData(){
	const response = await fetch(url);
	const json = await response.json();
	displayData(json);
}
//
function displayData(arr) { 
	let outHTML = "";
	for(let i=0; i < arr.length; i++){
		outHTML+="<p>"+arr[i].empName + " weighed " + arr[i].empWeight + " Kgs</p>";
	}
	document.getElementById("records").innerHTML = outHTML; 
}
//
for(let i = 0; i < pTags.length; i++) { 
	pTags[i].addEventListener('mouseover', function(){ 
			this.style.backgroundColor='lightyellow';
	}, false); 
	pTags[i].addEventListener('mouseout', function(){ 
			this.style.backgroundColor='';
	}, false); 
};
//
let inputTags = document.getElementsByTagName('input'); 
for(let i = 0; i < inputTags.length; i++) { 
	inputTags[i].addEventListener('focus', function(){ 
			this.style.backgroundColor='lightyellow';
	}, false); 
	inputTags[i].addEventListener('blur', function(){ 
			this.style.backgroundColor='';
	}, false); 
};
//
function validateForm(){
	document.getElementById("nameMessage").innerHTML="";  
	document.getElementById("weightMessage").innerHTML="";  
	let empName = document.forms["frmCollectWeights"]["empName"];  
    let empWeight = document.forms["frmCollectWeights"]["empWeight"];
	let badName = /^([^0-9]*)$/; 
	if (empName.value == "") {   
		document.getElementById("nameMessage").innerHTML="Name cannot be empty!";  
        empName.focus();   
        return false;   
    }   
// 
    if (!empName.value.match(badName)) {   
        document.getElementById("nameMessage").innerHTML="Name cannot contain numbers!";  
        empName.focus();   
        return false;   
    } 
//
	if (empName.value.length < 3 && empName.value != "") {   
		document.getElementById("nameMessage").innerHTML="Name too short!";  
		empName.focus();   
		return false;   
    } 
//
    if (empWeight.value == "") {   
		document.getElementById("weightMessage").innerHTML="Weight cannot be empty!";  
        empWeight.focus();   
        return false;   
    } 
//
    if (isNaN(empWeight.value)) {   
        document.getElementById("weightMessage").innerHTML="Weight must be a number";  
        empWeight.focus();   
        return false;   
    }  
//
	return true;
}
//