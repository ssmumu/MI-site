



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

function parse_userinput_summary(input_text_by_user){


	var find_and = input_text_by_user.toLowerCase();

	if ((input_text_by_user.toLowerCase().includes(","))){

		find_and = input_text_by_user.split(',')[0];
		
	}
	else if ((input_text_by_user.toLowerCase().includes(" and"))){
		find_and = input_text_by_user.split(' and')[0];
		
	}
	else if((input_text_by_user.toLowerCase().includes(" because"))){
		find_and = input_text_by_user.split(' because')[0];
		
	}
	else if ((input_text_by_user.toLowerCase().includes(" so ")))
	{
		find_and = input_text_by_user.split(' so ')[0];
	}

	if (find_and.includes(' i ')){
		find_and = find_and.replace(' i ', ' you ');
	}
	if (find_and.includes(' my ')){
		find_and = find_and.replace(' my ', ' your ');
	}

	if (find_and.includes(' me ')){
		find_and = find_and.replace(' me ', ' you ');
	}


	return find_and;



}