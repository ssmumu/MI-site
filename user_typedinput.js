



var person_name = prompt("Hello! Please enter your name", "");

if (person_name.replace(/\s/g, "") != "") {	/* checks if whitespace included as name input, if not then ok. else reload page*/
  console.log("Hello " + person_name)
}
else {
	location.reload()
}


function save_userinfo(flname, saved_output){
	var json_output = JSON.stringify(saved_output);
	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI([json_output]);
	hiddenElement.target = '_blank';
	hiddenElement.download = person_name+flname;
	hiddenElement.click();
	 
}