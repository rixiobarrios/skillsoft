//
let file = "json.txt";
let url = "http://localhost:8000/getweights";
$(function() { 
    $("#getData").click(function(){ 
        $.ajax({
			url:"json.txt",
			type:"GET",
			dataType:"json",
			success:function(result){
				displayData(result);
			},
			error:function(err){
				console.log(err);
			}
		});
    }); 
}); 
 //
$(function(){
	//alert("ready to rock!")
	$("p").mouseover(function(){
		$(this).addClass("liYellow");
	});
	$("p").mouseout(function(){
		$(this).removeClass("liYellow");
	});
});
//
$(function(){	
	MISSING_CODE2
		rules:{
			empName:
			{
				required:true,
				minlength:3,
				lettersOnly:true
			},			
			empWeight:{
				required:true,
				digits:true
			}
		},
		messages:{
			empName:{
				required:"Name is required", 
				minlength:"Name should be longer"
			},
			empWeight:{
				required:"Weight is required" ,
				digits:"Weight must be a number"
			}
		},
		MISSING_CODE3
			function(form){
				form.submit();
			}
		}
	});
});
//
$(function(){	
	MISSING_CODE4"lettersOnly", function (value, element) {
		return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
	}, "Please enter letters only.");
});
//
function displayData(dataArray){
	let htmlOut = "";
	for(let i=0; i<dataArray.length; i++){
		htmlOut+=dataArray[i].empName + " weighed " + dataArray[i].empWeight + " Kgs<br />";
	}
	document.getElementById("records").innerHTML=htmlOut;
}