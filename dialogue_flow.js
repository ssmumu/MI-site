


function add_dialogue(el, cl, txt, highlight=0, box='chatbox', iid='id=dummy', button_active = 1) {
	   var elem = document.createElement(el);
	   var keyvalue = cl.split('='); 
	   elem.setAttribute(keyvalue[0], keyvalue[1]); 
	   var keyvalue2 = iid.split('='); 
	   elem.setAttribute(keyvalue2[0], keyvalue2[1]); 
	   

	   if(keyvalue[1].includes("button_userDialogue")){
	   	console.log("found user button", txt, txt.length);
	   	if(txt.length > 60){
	   		console.log('more than 60');
	   		elem.style.height = "auto";

	   	}
	   }



	   // height_value_now =  elem.style.height;
	   // if height_value_now < 
	   


	   if(highlight == 1){
		//	elem.style.backgroundColor = "#32bfbd";
		//	elem.style.after.borderColor = "transparent  #32bfbd";
			


			if (txt.includes("BREAK")){
				console.log('checking highlight!!! --> ', txt);

				txt_sections = txt.split("BREAK");
				console.log(txt_sections);
				
				t = document.createTextNode(txt_sections[0]);
			    elem.appendChild(t);
			    var linebreak = document.createElement('br');
				elem.appendChild(linebreak);
				t = document.createTextNode(txt_sections[1]);
				elem.appendChild(t);
				var linebreak = document.createElement('br');
				elem.appendChild(linebreak);
				t = document.createTextNode(txt_sections[2]);
			    elem.appendChild(t);
			    var linebreak = document.createElement('br');
				elem.appendChild(linebreak);
				t = document.createTextNode(txt_sections[4]);
				elem.appendChild(t);
				var linebreak = document.createElement('br');
				elem.appendChild(linebreak);
				t = document.createTextNode(txt_sections[5]);
			    elem.appendChild(t);

			  //  elem.style.backgroundColor = "#00a8a5";	 
			//    elem.childNodes[0].setAttribute("style", "background-color: 00a8a5");
				elem.style.height = "25%";
			   
			}

			else {

				t = document.createTextNode(txt);
		  		 elem.appendChild(t);
		  		// elem.style.backgroundColor = "#00a8a5";	 

			}

		    

		    document.getElementById(box).appendChild(elem); 
		    var objDiv = document.getElementById("chatbox");
		    objDiv.scrollTop = objDiv.scrollHeight;
			
	
	   }
	   else
	   {
	   	   t = document.createTextNode(txt);
		   elem.appendChild(t);
		   document.getElementById(box).appendChild(elem); 
		   var objDiv = document.getElementById("chatbox");
		   objDiv.scrollTop = objDiv.scrollHeight;

	   }
	   
	   if(button_active == 0){
	   		elem.setAttribute("disabled", "");
	   		elem.style.backgroundColor = "#b8b9ba";	 
	   }

	   
}


function add_textbox(start_string) {
	var container = document.getElementById("replybox");
	var input = document.createElement("input");
	input.type = "text";
	input.setAttribute("id", "input_textbox"); 
	input.style.marginTop = "10px";
	input.style.height = "40px";
	input.style.width = "600px";
	input.style.fontSize = "15px";
	input.style.fontFamily = "Tahoma";
	user_text_input = start_string;
	t = document.createTextNode(start_string);
	input.setAttribute("value", t.nodeValue); 
	
	container.appendChild(input);

	input.setAttribute("onKeypress", "textinput_to_dialogue(event)"); 
}

function textinput_to_dialogue(e) { 
	//user_text_input = user_text_input + String.fromCharCode(e.keyCode);
	user_text_input = e.target.value;

	if (e.keyCode == 13) { 
		console.log(user_text_input);
		add_dialogue("button", "class=button button_userDialogue", user_text_input)
		user_chosen_options.push([user_text_input]);
		remove_optionDialogue("input_textbox");
		new_dialogueNode_flow();
		user_text_input ="";
	} 

} 

function remove_optionDialogue(elementID) {
	var element = document.getElementById(elementID);
	element.parentNode.removeChild(element);
}

function new_dialogue(says_who, txt, iid = 'shown_dialogue_option', highlight=0, button_active=1){
	init_timer = init_timer + increment_timer
	// console.log(init_timer);
	if(says_who === "agent"){
		how_many_agent_dialogue = how_many_agent_dialogue + 1;
		elemTimer = setTimeout( function() { add_dialogue("button", "class=button button_agentDialogue", txt, highlight); }, init_timer);
	}
	// else if(says_who === "user_spoken")
	// 	elemTimer = setTimeout( function() { add_dialogue("button", "class=button button_userDialogue", txt); }, init_timer);
	else if(says_who === "user_option"){
		elemTimer = setTimeout( function() { add_dialogue("button", "class=button button_userDialogue_option", txt, highlight, 'replybox', 'id='+iid, button_active); }, init_timer);
		init_timer = 100 + increment_timer * how_many_agent_dialogue; //100 + increment_timer * how_many_agent_dialogue;
	}
}


function new_dialogueNode_flow(){
	init_timer = 100;	
	user_response = user_response + 1;
	fname = 'node'+ user_response.toString();
	eval(fname)();
	how_many_agent_dialogue = 0;
}

function new_topic_flow(){
	// var objDiv = document.getElementById("chatbox");
	// console.log(objDiv.scrollHeight);
	// objDiv.scrollTop = objDiv.scrollHeight * 3;
	add_dialogue("button", "class=button button_blankDialogue", "")
}

document.addEventListener('click',function(e){
	// if(e.target && e.target.id== 'shown_dialogue_option'){
	if(e.target && e.target.type == "submit"){
		  var txt = document.getElementById(e.target.id).innerHTML;
		  user_chosen_options.push([txt]);
		  for (i = 0; i < user_options.length; i++)
				remove_optionDialogue(user_options[i]);
		  add_dialogue("button", "class=button button_userDialogue", txt);
		  new_dialogueNode_flow();
	 }
 });





