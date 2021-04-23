
init_timer = 100 
increment_timer = 1500	//1500
user_response = 0
user_options = ['shown_dialogue_option']
user_chosen_options = []
user_text_input = ""
how_many_agent_dialogue = 0
feature = ""
summary_tips = []

new_dialogue("agent",			"Hi " + person_name + ", I'm Roboto!")
new_dialogue("agent",			"I am your virtual feedback assistant.")
new_dialogue("user_option",		"Hello, Roboto!")

function node1(){
	console.log('node1');

	new_dialogue("agent",			"I will provide you with the information to improve conversational skills.")
	new_dialogue("agent",			"Let's walk through it, shall we?")
	new_dialogue("user_option",		"Sure, let's start!")
}


function node2(){	
	console.log('node2');



	user_options = ['1', '2']
	new_dialogue("agent",			"First, let's talk about balanced speaking.")
	new_dialogue("agent",			"Experts find that everyone participating equally is healthy for a group. Balance is the key!")
	new_dialogue("user_option",		"Got it!", user_options[0])

	new_dialogue("user_option",		"Why is this important?", user_options[1])
}



function node3(){	
	console.log('node3');
	user_options = ['shown_dialogue_option'];
	
	value = (user_chosen_options[user_chosen_options.length - 1])[0];


	if (value == "Why is this important?"){
		new_dialogue("agent",			"Speaking about your own opinion can add new perspective to the discussion.")
		new_dialogue("agent",			"Listening to teammates' viewpoints can remove any confusions you may have.")
	
	}
	else if (value == "Got it!"){		
		new_dialogue("agent",			"Okay then, let's see some tips.")
	}

	new_dialogue("user_option",		"Sounds good!")
}

function node4(){	
	console.log('node4');
	user_options = ['1', '2', '3']
	
	new_dialogue("agent",			"Sometimes it is difficult to get the speaker's floor. So, preparing some phrases can help.", 'shown_dialogue_option')
	new_dialogue("agent",			"One example can be politely interjecting with phrases like - 'If I can add something here, ____'", 'shown_dialogue_option')
	new_dialogue("agent",			"Does it sound useful?", 'shown_dialogue_option', 1)
	

	new_dialogue("user_option",		"Yes, a lot", user_options[0])
	new_dialogue("user_option",		"Maybe a little", user_options[1])
	new_dialogue("user_option",		"I don't see it", user_options[2])

}

function node5(){	
	user_options = ['1', '2']
	console.log('node5');
	value = (user_chosen_options[user_chosen_options.length - 1])[0];

	new_dialogue("agent",			"You see, sometimes without gentle interruptions, it can be dfficult to get the speaker's floor.", 'shown_dialogue_option')
	new_dialogue("agent",			"You just have to be respectful about the interruption.", 'shown_dialogue_option')


	if (value == "Yes, a lot"){
		new_dialogue("user_option",		"Agreed", user_options[0])
		new_dialogue("user_option",		"Not always agreed", user_options[1])
		
	}

	else {

		new_dialogue("user_option",		"I see it now", user_options[0])
		new_dialogue("user_option",		"Still unclear, but okay", user_options[1])
	

	}
	
	

}


function node6(){	//9
	console.log('node6');
	user_options = ['1']
	new_dialogue("agent",			"Okay then, moving onto how to express disagreements in a healthy way.")
	//new_dialogue("agent",			"Others needs to feel heard too. So, before disagreeing summarize their points, find a common ground, and then add your perspective.")
	new_dialogue("user_option",		"Alright!", user_options[0])
	//new_dialogue("user_option",		"Give me an example", user_options[0])


}

function node7(){	//9
	console.log('node7');
	user_options = ['1']
	//new_dialogue("agent",			"Okay then, moving onto how to express disagreements in a healthy way.")
	new_dialogue("agent",			"Others needs to feel heard too. So, before disagreeing summarize their points, find a common ground, and then add your perspective.")
	new_dialogue("user_option",		"Give me an example", user_options[0])


}

function node8(){	//9
	console.log('node8');
	user_options = ['1', '2']
	new_dialogue("agent",			"For example, 'I agree with your point about ___ , I would also like to point out that ___'.")
	
	new_dialogue("user_option",		"I understand", user_options[0])
	new_dialogue("user_option",		"Show me another example", user_options[1])

}

function node9(){	
	console.log('node9');
	user_options = ['1']
	value = (user_chosen_options[user_chosen_options.length - 1])[0];

	if (value == "Show me another example"){
		new_dialogue("agent",			"Another example can be - 'I value your idea on this, if I can share a different perspective ___'")
	
	}
	else if (value == "I understand"){		
		new_dialogue("agent",			"Great! Next, we can discuss about handling interruptions.")
	}

	new_dialogue("user_option",		"Sounds good!", user_options[0])
}


function node10(){	//9
	console.log('node10');
	user_options = ['1', '2']
	new_dialogue("agent",			"If you get interrupted, acknowledge that you heard them and indicate your timing needs.", 'shown_dialogue_option', 1)
	new_dialogue("agent",			"You can say things like - 'If I can quickly finish up my thoughts, ___'.", 'shown_dialogue_option', 1)

	new_dialogue("user_option",		"I will try to remember that", user_options[0])
	new_dialogue("user_option",		"I don't think it works", user_options[1])

}





function node11(){	//9
	console.log('node11');
	//new_topic_flow();
	user_options = ['1', '2']
	new_dialogue("agent",			"I hear you. I have some suggestions on being more collaborative.", 'shown_dialogue_option', 1)
	new_dialogue("agent",			"Through our word usage and sentence structure, we can work as a teamplayer.", 'shown_dialogue_option', 1)
		
	new_dialogue("user_option",		"Show some examples", user_options[0])
	new_dialogue("user_option",		"I already know", user_options[1])

}

function node12(){	//9
	console.log('node12');
	//new_topic_flow();
	user_options = ['1', '2']
	new_dialogue("agent",			"Nice! A small but efficient suggestion is to try using more 'We' instead of 'I'.", 'shown_dialogue_option', 1)
		
	new_dialogue("user_option",		"I will definitely give it a try!", user_options[0])
	new_dialogue("user_option",		"Not sure if I will use it", user_options[1])

}

function node13(){	//9
	console.log('node13');
	//new_topic_flow();
	user_options = ['1', '2']
	new_dialogue("agent",			"Another way to be collaborative is to notice if any other teammate is having trouble conveing their opinions.", 'shown_dialogue_option', 1)
	new_dialogue("agent",			"You may notice such a thing, for example someone getting interrupted a lot.")
	new_dialogue("agent",			"In such a case, you can say things like - 'John got interrupted before, let's hear his ideas on this.'")
		

	new_dialogue("user_option",		"Okay got this too", user_options[0])
	new_dialogue("user_option",		"Not sure, but okay", user_options[1])

}

function node14(){	//9
	console.log('node14');

	user_options = ['1', '2', '3']
	new_dialogue("agent",			"Do all these suggestions seem important to you?", 'shown_dialogue_option', 1)
	

	new_dialogue("user_option",		"Yes, a lot", user_options[0])
	new_dialogue("user_option",		"Maybe some of them", user_options[1])
	new_dialogue("user_option",		"Not much", user_options[2])

}





function node15(){
	console.log('node15');
	//new_topic_flow();

	user_options = ['shown_dialogue_option'];
	new_dialogue("agent",			"I hope you will try to apply some of the suggestions in your future discussions.", 'shown_dialogue_option', 1)
	new_dialogue("user_option",		"Sounds like a plan!")
}

function node16(){
	console.log('node16');
	user_options = ['shown_dialogue_option'];
	new_dialogue("agent",			"All right then! Good luck with all your discussions, " + person_name+ "!")
	new_dialogue("user_option",		"Thanks, Roboto! Bye.")
}


function node17(){
	console.log('node17');
	save_userinfo("_roboto_intro.json", user_chosen_options);
}

















// new_dialogue("user_spoken",		"Hi!")
// new_dialogue("user_spoken",		"Hi, I'm Roboto, your personal feedback assistant.")

// new_dialogue("user_option",		"Participation: Want to speak more")
	
