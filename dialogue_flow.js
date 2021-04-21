


function add_dialogue(el, cl, txt, highlight=0, box='chatbox', iid='id=dummy') {
	   var elem = document.createElement(el);
	   var keyvalue = cl.split('='); 
	   elem.setAttribute(keyvalue[0], keyvalue[1]); 
	   var keyvalue2 = iid.split('='); 
	   elem.setAttribute(keyvalue2[0], keyvalue2[1]); 
	   if(highlight == 1){
		//	elem.style.backgroundColor = "#32bfbd";
		//	elem.style.after.borderColor = "transparent  #32bfbd";
		console.log('check');
	   }
	   t = document.createTextNode(txt);
	   elem.appendChild(t);
	   document.getElementById(box).appendChild(elem); 
	   var objDiv = document.getElementById("chatbox");
	   objDiv.scrollTop = objDiv.scrollHeight;
}


function add_textbox() {
	var container = document.getElementById("replybox");
	t = document.createTextNode("Your thoughts here: ");
	var input = document.createElement("input");
    input.type = "text";
    input.setAttribute("id", "input_textbox"); 
    input.style.marginTop = "10px";
    input.style.height = "40px";
    input.style.width = "600px";
    input.style.fontSize = "15px";
    input.style.fontFamily = "Tahoma";
	container.appendChild(input);
    input.setAttribute("onKeypress", "textinput_to_dialogue(event)"); 
}

function textinput_to_dialogue(e) { 
	user_text_input = user_text_input + String.fromCharCode(e.keyCode);
	if (e.keyCode == 13) { 
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

function new_dialogue(says_who, txt, iid = 'shown_dialogue_option', highlight=0){
	init_timer = init_timer + increment_timer
	console.log(init_timer);
	if(says_who === "agent"){
		how_many_agent_dialogue = how_many_agent_dialogue + 1;
		elemTimer = setTimeout( function() { add_dialogue("button", "class=button button_agentDialogue", txt, highlight); }, init_timer);
	}
	// else if(says_who === "user_spoken")
	// 	elemTimer = setTimeout( function() { add_dialogue("button", "class=button button_userDialogue", txt); }, init_timer);
	else if(says_who === "user_option"){
		elemTimer = setTimeout( function() { add_dialogue("button", "class=button button_userDialogue_option", txt, highlight, 'replybox', 'id='+iid); }, init_timer);
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





