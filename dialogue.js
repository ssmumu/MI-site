
init_timer = 100	//100
increment_timer = 100	//400, 100
user_response = 0
user_options = ['shown_dialogue_option']
user_chosen_options = []
user_text_input = ""
how_many_agent_dialogue = 0
feature = ""
feature_all = ["Balanced Speaking", "Handling Disagreement", "Being Collaborative"]
feature_seen = []
summary_tips = []
summary_tips_together = []

new_dialogue("agent",			"Hi " + person_name + ", I'm Mia!")
new_dialogue("agent",			"Welcome to the motivational interview session.")
new_dialogue("user_option",		"Hello, Mia!")

function node1(){
	console.log('node1');
	new_dialogue("agent",			"We will work together to set your conversational skill development goals.")
	new_dialogue("agent",			"My capabilities can be limited sometimes, but I’m here with you to help as much as possible.")
	new_dialogue("user_option",		"Let's begin!")
}


function node2(){	/*apprisal*/
	console.log('node2');
	new_dialogue("agent",			"Learning to be better at group discussion needs effort.")
	new_dialogue("agent",			"You've already taken the first step by being in this session.")
	new_dialogue("user_option",		"Thanks!")
}

// function node3(){ // not needed
// 	console.log('node3');
// 	// user_options = ['shown_dialogue_option_1', 'shown_dialogue_option_2', 'shown_dialogue_option_3', 'shown_dialogue_option_4']
// 	// new_dialogue("agent",			"First, can you please tell me approximately how many meetings do you attend per week?")
// 	// new_dialogue("user_option",		"1 to 2", user_options[0])
// 	// new_dialogue("user_option",		"3 to 5", user_options[1])
// 	// new_dialogue("user_option",		"5 to 10", user_options[2])
// 	// new_dialogue("user_option",		"More than 10", user_options[3])
// 	new_dialogue("agent",		"SKIP")
// 	new_dialogue("user_option",		"SKIP")
// }

// function node4(){ 
// 	console.log('node4');
// 	// user_options = ['1', '2', '3', '4', '5']
// 	// new_dialogue("agent",			"And how satisfied are you with those meetings, on a range of 1 (Highly Dissatisfied) to 5 (Highly Satisfied)?")
// 	// new_dialogue("user_option",		"1", user_options[0])
// 	// new_dialogue("user_option",		"2", user_options[1])
// 	// new_dialogue("user_option",		"3", user_options[2])
// 	// new_dialogue("user_option",		"4", user_options[3])
// 	// new_dialogue("user_option",		"5", user_options[4])
// 	new_dialogue("agent",		"SKIP")
// 	new_dialogue("user_option",		"SKIP")
// }

function node3(){	
	console.log('node3');
	new_dialogue("agent",			"Can you tell me about the last group discussion you were dissatisfied with? What made you feel that way?")
	//new_dialogue("agent",			"The more detail that you can provide, the better I would be understand your situation.")
	
	init_timer = init_timer + increment_timer
	setTimeout(function(){ add_textbox(""); }, init_timer);
}

// function node4(){	//change talk: desire(past)
// 	console.log('node4');
// 	new_dialogue("agent",			"Seems like things can be improved. How do you imagine addressing such situations?")
// 	//new_dialogue("agent",			"The more detail that you can provide, the better I would be understand your situation.")
	
// 	init_timer = init_timer + increment_timer
// 	setTimeout(function(){ add_textbox("I wish I could "); }, init_timer);
// }

function node4(){	//
	console.log('node4');
	user_options = ['0','1', '2']
	new_dialogue("agent",			"Seems like things can be improved. Have you ever noticed other attendees suffer too?");
	new_dialogue("user_option",		"Yes", user_options[0])
	new_dialogue("user_option",		"No", user_options[1])
	new_dialogue("user_option",		"I didn't notice", user_options[2])
}

function node5(){
	console.log('node5');
	user_options = ['1', '2', '3', '4', '5','6','7','8','9','10'];
	new_dialogue("agent",			"On a scale of 1 (low) to 9 (high), to you how important is to improve conversational skills in order to help yourself or others in a discussion?");
	new_dialogue("user_option",		"1", user_options[0])
	new_dialogue("user_option",		"2", user_options[1])
	new_dialogue("user_option",		"3", user_options[2])
	new_dialogue("user_option",		"4", user_options[3])
	new_dialogue("user_option",		"5", user_options[4])
	new_dialogue("user_option",		"6", user_options[5])
	new_dialogue("user_option",		"7", user_options[6])
	new_dialogue("user_option",		"8", user_options[7])
	new_dialogue("user_option",		"9", user_options[8])
	new_dialogue("user_option",		"10", user_options[9])
}

function node6(){	//reasons
	console.log('node6', user_chosen_options);
	user_options = ['shown_dialogue_option'];
	value = Number((user_chosen_options[user_chosen_options.length -1])[0]);
	if( value < 5 ){
		new_dialogue("agent",			"You selected " + value.toString()+ ". It sounds like improving conversational skills is somewhat important to you.");
		new_dialogue("agent",			"If you *don't* improve anymore, how do you think it will affect your productivity and performance?");
	
		init_timer = init_timer + increment_timer
		setTimeout(function(){ add_textbox(""); }, init_timer);
	}

	if( value > 4 ){
		new_dialogue("agent",			"You selected " + value.toString()+". It sounds like improving conversational skills has value to you.")
		new_dialogue("agent",			"Can you give a reason why it is important to you?")

		init_timer = init_timer + increment_timer
		setTimeout(function(){ add_textbox("If I improve my conversational skills, then "); }, init_timer);
	}

}



function node7(){	//ability

	new_dialogue("agent",			"Alright, so what I'm hearing you say is that you would like to reduce some concerns. Having the desire to bring changes helps us grow!") 
	new_dialogue("agent",			"So if you decide to improve those skills, how would you do it?");


	init_timer = init_timer + increment_timer
	setTimeout(function(){ add_textbox("I can "); }, init_timer);
}


function node8(){
	user_options = ['shown_dialogue_option'];
	value = (user_chosen_options[user_chosen_options.length - 1])[0];

	new_dialogue("agent",			"So you would try to " + value.split("I can ")[1].split("\r")[0] + " to make progress." )
	new_dialogue("agent",			"I can help with finding tips and tricks to improve conversational skills. Let's dive deeper, shall we?")

	new_dialogue("user_option",		"I'm ready")
}


// function node6(){
// 	console.log('node6');
// 	user_options = ['0','1', '2', '3', '4', '5','6','7','8','9']
// 	new_dialogue("agent",			"It seems like you understand that the situation can be improved.");
// 	new_dialogue("agent",			"On a scale of 0 (low) to 9 (high), how important is meeting satisfaction/productivity to you?") 
// 	new_dialogue("user_option",		"0", user_options[0])
// 	new_dialogue("user_option",		"1", user_options[1])
// 	new_dialogue("user_option",		"2", user_options[2])
// 	new_dialogue("user_option",		"3", user_options[3])
// 	new_dialogue("user_option",		"4", user_options[4])
// 	new_dialogue("user_option",		"5", user_options[5])
// 	new_dialogue("user_option",		"6", user_options[6])
// 	new_dialogue("user_option",		"7", user_options[7])
// 	new_dialogue("user_option",		"8", user_options[8])
// 	new_dialogue("user_option",		"9", user_options[9])
// }


// function node8(){
// 	console.log('node8');
// 	user_options = ['shown_dialogue_option'];
// 	value = Number(user_chosen_options[user_chosen_options.length - 1]);
// 	if( value < 5 )
// 		new_dialogue("agent",			"Sounds like conversational skill development" + value.toString()+". It is valuable to be able to identify the room for improvement.")
// 	if( value > 4 )
// 		new_dialogue("agent",			"You selected " + value.toString()+". We are off to a strong start!")
// 	//new_dialogue("agent",			"Let's dive deeper, shall we?")
// 	new_dialogue("user_option",		"Good to hear that!")
// }


// function node5(){
// 	console.log('node5');
// 	user_options = ['1', '2', '3', '4', '5','6','7','8','9', '10']
// 	new_dialogue("agent",			"Having the desire to bring changes helps us grow.");
// 	new_dialogue("agent",			"If you *don't* improve your conversational skills anymore, how do you think it will affect your productivity and performance?")
	
// 	init_timer = init_timer + increment_timer
// 	setTimeout(function(){ add_textbox(""); }, init_timer);
// 	// new_dialogue("agent",			"On a scale of 1 (low) to 10 (high), how would you evaluate your conversational skill in group discussions?") 
// 	// new_dialogue("user_option",		"1", user_options[0])
// 	// new_dialogue("user_option",		"2", user_options[1])
// 	// new_dialogue("user_option",		"3", user_options[2])
// 	// new_dialogue("user_option",		"4", user_options[3])
// 	// new_dialogue("user_option",		"5", user_options[4])
// 	// new_dialogue("user_option",		"6", user_options[5])
// 	// new_dialogue("user_option",		"7", user_options[6])
// 	// new_dialogue("user_option",		"8", user_options[7])
// 	// new_dialogue("user_option",		"9", user_options[8])
// 	// new_dialogue("user_option",		"10", user_options[9])
// }

// function node6(){
// 	console.log('node6');
// 	user_options = ['1', '2', '3', '4', '5','6','7','8','9','10']
// 	new_dialogue("agent",			"In that case, how much does it worry or concern you?")
// 	new_dialogue("user_option",		"1", user_options[0])
// 	new_dialogue("user_option",		"2", user_options[1])
// 	new_dialogue("user_option",		"3", user_options[2])
// 	new_dialogue("user_option",		"4", user_options[3])
// 	new_dialogue("user_option",		"5", user_options[4])
// 	new_dialogue("user_option",		"6", user_options[5])
// 	new_dialogue("user_option",		"7", user_options[6])
// 	new_dialogue("user_option",		"8", user_options[7])
// 	new_dialogue("user_option",		"9", user_options[8])
// 	new_dialogue("user_option",		"10", user_options[9])
// }

// function node7(){
// 	console.log('node7');
// 	user_options = ['shown_dialogue_option'];
// 	value = Number(user_chosen_options[user_chosen_options.length]);
// 	if( value < 8 )
// 		new_dialogue("agent",			"You selected " + value.toString()+". It is valuable to be able to identify the room for improvement.")
// 	else if( value > 7 )
// 		new_dialogue("agent",			"You selected " + value.toString()+". Recognizing self-strength is valuable!")
// 	//new_dialogue("agent",			"Let's dive deeper, shall we?")
// 	new_dialogue("user_option",		"Good to hear that!")
// }

// function node7(){
// 	console.log('node7');
// 	user_options = ['shown_dialogue_option'];
// 	value = Number(user_chosen_options[user_chosen_options.length]);
// 	if( value < 5 )
// 		new_dialogue("agent",			"You selected " + value.toString()+ "It seems like you have some concerns regarding conversational skills.")
// 	else if( value > )
// 		new_dialogue("agent",			"It sounds like Recognizing self-strength is valuable!")
// 	//new_dialogue("agent",			"Let's dive deeper, shall we?")
// 	new_dialogue("user_option",		"Good to hear that!")
// }


// function node6(){
// 	console.log('node6');
// 	user_options = ['1', '2', '3', '4', '5','6','7','8','9', '10']
// 	//new_dialogue("agent",			"It seems like you understand that the situation can be improved.");
// 	new_dialogue("agent",			"On a scale of 1 (low) to 10 (high), to you how important is improving your conversational skill?") 
// 	new_dialogue("user_option",		"1", user_options[0])
// 	new_dialogue("user_option",		"2", user_options[1])
// 	new_dialogue("user_option",		"3", user_options[2])
// 	new_dialogue("user_option",		"4", user_options[3])
// 	new_dialogue("user_option",		"5", user_options[4])
// 	new_dialogue("user_option",		"6", user_options[5])
// 	new_dialogue("user_option",		"7", user_options[6])
// 	new_dialogue("user_option",		"8", user_options[7])
// 	new_dialogue("user_option",		"9", user_options[8])
// 	new_dialogue("user_option",		"10", user_options[9])
// }

// function node8(){
// 	console.log('node8');
// 	new_dialogue("agent",			"If you *don't* improve your conversational skills anymore, how do you think it will affect your productivity and performance?")
	
// 	init_timer = init_timer + increment_timer
// 	setTimeout(function(){ add_textbox(""); }, init_timer);
// }

// function node7(){
// 	console.log('node7');
// 	user_options = ['1', '2', '3', '4', '5','6','7','8','9','10']
// 	new_dialogue("agent",			"In that case, how much does it worry or concern you?")
// 	new_dialogue("user_option",		"1", user_options[0])
// 	new_dialogue("user_option",		"2", user_options[1])
// 	new_dialogue("user_option",		"3", user_options[2])
// 	new_dialogue("user_option",		"4", user_options[3])
// 	new_dialogue("user_option",		"5", user_options[4])
// 	new_dialogue("user_option",		"6", user_options[5])
// 	new_dialogue("user_option",		"7", user_options[6])
// 	new_dialogue("user_option",		"8", user_options[7])
// 	new_dialogue("user_option",		"9", user_options[8])
// 	new_dialogue("user_option",		"10", user_options[9])
// }


// function node8(){
// 	console.log('node8');
// 	user_options = ['shown_dialogue_option'];
// 	value = Number(user_chosen_options[user_chosen_options.length]);
// 	if( value < 3 )
// 		new_dialogue("agent",			"You selected " + value.toString()+". It is valuable to be able to identify the room for improvement.")
// 	else if( value > 7 )
// 		new_dialogue("agent",			"You selected " + value.toString()+". Recognizing self-strength is valuable!")
// 	//new_dialogue("agent",			"Let's dive deeper, shall we?")
// 	new_dialogue("user_option",		"Good to hear that!")
// }














// function node11(){
// 	console.log('node11');
// 	user_options = ['shown_dialogue_option'];
// 	value = Number(user_chosen_options[user_chosen_options.length - 1]);
// 	console.log(user_chosen_options);
// 	if( value < 5 )
// 		new_dialogue("agent",			"You selected " + value.toString()+". Great confidence! Knowing the strengths is important.")
// 	if( value > 4 ){
// 		new_dialogue("agent",			"You selected " + value.toString()+". Recognizing the need is an important step towards bringing changes.")
// 		//new_dialogue("agent",			"Let's set up some goals to bring positive changes.")
// 	}
// 	new_dialogue("agent",			"Let's dive deeper, shall we?")
// 	new_dialogue("user_option",		"I'm ready")
// 	//new_dialogue("user_option",		"Show me the suggestions", user_options[0])
// 	//new_dialogue("user_option",		"Tell me why I need it", user_options[1])
// }

//////////// NEW TOPIC

function node9(){	//9
	console.log('node9');
	new_topic_flow();
	user_options = ['1', '2', '3']
	new_dialogue("agent",			"Which one is the most challenging to you in a meeting?")
	new_dialogue("user_option",		"Balanced Speaking", user_options[0])
	new_dialogue("user_option",		"Handling Disagreement", user_options[1])
	new_dialogue("user_option",		"Being Collaborative", user_options[2])
}

// function node13(){
// 	console.log('node13');
// 	//new_topic_flow();
// 	user_options = ['0', '1']
// 	new_dialogue("agent",			"With refined word choices and argument structres, we can deliver our thoughts in a clear and powerful manner.")
// 	new_dialogue("user_option",		"Show me the suggestions", user_options[0])
// 	new_dialogue("user_option",		"Tell me why I need it", user_options[1])
// }



//////////// NEW TOPIC



function node10(){
	console.log('node10');
	//new_topic_flow();

	user_options = ['0', '1'];
	value = (user_chosen_options[user_chosen_options.length - 1])[0];
	feature = value;
	feature_seen.push(value);
	console.log(feature_seen);

	console.log(value);

	if(feature === "Balanced Speaking"){
		new_dialogue("agent",			"Both speaking and listening are important for a productive discussion. Be mindful of your speaking duration.")
		new_dialogue("agent",			"1. To get the speaker's floor, politely interject with sentences like - 'If I can add something here, ____'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. To release the speaker's floor, one way is to ask an engaging question - 'What do you all think about this idea?'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"Do these make sense?")
		new_dialogue("user_option",		"Yes, a lot", user_options[0])
		new_dialogue("user_option",		"Not much", user_options[1])

		summary_tips.push("Take speaker's floor  -> 'If I can add something here'")
		summary_tips.push("Release speaker's floor -> 'What do you all think about this?'")
	}
	else if(feature === "Handling Disagreement"){
		new_dialogue("agent",			"1. Respectful disagreement is possible through active listening. Summarize other's point, find a common ground, and then add your perspective.")
		new_dialogue("agent",			"For example, 'I agree with your point about ___ , I would also like to point out that ___'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Upon being interrupted, acknowledge and address ('If I can quickly finish up my thoughts, ___').", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"Are these suggestions helpful?")
		new_dialogue("user_option",		"Yes", user_options[0])
		new_dialogue("user_option",		"No", user_options[1])

		summary_tips.push("Disagree -> 'I agree with your point-X, but want to add point-Y'.")	
		summary_tips.push("If get interrupted -> 'Let me quickly finish up my point-X, ___'.")			
	}

	else if(feature === "Being Collaborative"){
		new_dialogue("agent",			"1. Study shows that collaborative pronouns ('We' instead of 'I') bring a sense of togetherness.", 'shown_dialogue_option', 1)
		//new_dialogue("agent",			"Add to it, avoiding negative adjectives ('Can be better' instead of 'Bad') keeps up a positive vibe.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Keeping an eye on whether others are able to express their opinions or not establishes a safe space.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"(For example, 'Samantha got interrupted before, let's hear her ideas on this.)")
		
		new_dialogue("user_option",		"Useful tips!", user_options[0])
		new_dialogue("user_option",		"I don't quite see the usefulness, but thanks!", user_options[1])

		summary_tips.push("Pronous -> More 'We' instead of 'I'.")
		summary_tips.push("Offer help -> 'Let attendee-A finish up the thought.'")
	}


}

function node11(){
	console.log('node200', feature_seen);
	//new_topic_flow();
	user_options = ['1', '2', '3'];
	//value = (user_chosen_options[user_chosen_options.length - 1])[0];
	//feature = value;
	//feature_seen.push(value);



	new_dialogue("agent",			"Which one would you like to review now?")
	console.log('check features seen ', feature_seen)

	if (feature_seen.includes("Balanced Speaking")){
		console.log('seen');
		new_dialogue("user_option",		"Balanced Speaking", user_options[0], 0, 0)
	}
	else {
		new_dialogue("user_option",		"Balanced Speaking", user_options[0])
	}
	
	if (feature_seen.includes("Handling Disagreement")){
		new_dialogue("user_option",		"Handling Disagreement", user_options[1], 0, 0)
	}
	else{
		new_dialogue("user_option",		"Handling Disagreement", user_options[1])
	}
	
	if (feature_seen.includes("Being Collaborative")){
		new_dialogue("user_option",		"Being Collaborative", user_options[2], 0, 0)
	}
	else{
		new_dialogue("user_option",		"Being Collaborative", user_options[2])
	}

}

function node12(){
	user_options = ['0', '1'];
	value = (user_chosen_options[user_chosen_options.length - 1])[0];
	feature = value;
	feature_seen.push(value);

	if(feature === "Balanced Speaking"){
		new_dialogue("agent",			"Both speaking and listening are important for a productive discussion. Be mindful of your speaking duration.")
		new_dialogue("agent",			"1. To get the speaker's floor, politely interject with sentences like - 'If I can add something here, ____'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. To release the speaker's floor, one way is to ask an engaging question - 'What do you all think about this idea?'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"Do these make sense?")
		new_dialogue("user_option",		"Yes, a lot", user_options[0])
		new_dialogue("user_option",		"Not much", user_options[1])

		summary_tips.push("Take speaker's floor  -> 'If I can add something here'")
		summary_tips.push("Release speaker's floor -> 'What do you all think about this?'")
	}
	else if(feature === "Handling Disagreement"){
		new_dialogue("agent",			"1. Respectful disagreement is possible through active listening. Try to summarize other's point of view, find a common ground, and then add your perspective.")
		new_dialogue("agent",			"For example, 'I agree with your point about ___ , I would also like to point out that ___'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Upon being interrupted, acknowledge and address ('If I can quickly finish up my thoughts, ___').", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"Are these suggestions helpful?")
		new_dialogue("user_option",		"Yes", user_options[0])
		new_dialogue("user_option",		"No", user_options[1])

		summary_tips.push("Disagree -> 'I agree with your point-X, but want to add point-Y'.")	
		summary_tips.push("If get interrupted -> 'Let me quickly finish up my point-X, ___'.")	
	}

	else if(feature === "Being Collaborative"){
		new_dialogue("agent",			"1. Study shows that collaborative pronouns ('We' instead of 'I') bring a sense of togetherness.", 'shown_dialogue_option', 1)
		//new_dialogue("agent",			"Add to it, avoiding negative adjectives ('Can be better' instead of 'Bad') keeps up a positive vibe.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Keeping an eye on whether others are able to express their opinions or not establishes a safe space.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"(For example, 'Samantha got interrupted before, let's hear her ideas on this.)")
		
		new_dialogue("user_option",		"Useful tips!", user_options[0])
		new_dialogue("user_option",		"I don't quite see the usefulness, but thanks!", user_options[1])

		summary_tips.push("Pronous -> More 'We' instead of 'I'.")
		summary_tips.push("Offer help -> 'Let attendee-A finish up the thought.'")
	}
}



function node13(){
	console.log('node200', feature_seen);
	//new_topic_flow();
	user_options = ['1', '2', '3'];

	// value = (user_chosen_options[user_chosen_options.length - 1])[0];
	// feature = value;
	// feature_seen.push(value);



	new_dialogue("agent",			"Almost there! Let's review the final one.")
	console.log('check features seen ', feature_seen)

	if (feature_seen.includes("Balanced Speaking")){
		console.log('seen');
		new_dialogue("user_option",		"Balanced Speaking", user_options[0], 0, 0)
	}
	else {
		new_dialogue("user_option",		"Balanced Speaking", user_options[0])
	}
	
	if (feature_seen.includes("Handling Disagreement")){
		new_dialogue("user_option",		"Handling Disagreement", user_options[1], 0, 0)
	}
	else{
		new_dialogue("user_option",		"Handling Disagreement", user_options[1])
	}
	
	if (feature_seen.includes("Being Collaborative")){
		new_dialogue("user_option",		"Being Collaborative", user_options[2], 0, 0)
	}
	else{
		new_dialogue("user_option",		"Being Collaborative", user_options[2])
	}
}

function node14(){

	user_options = ['0', '1'];
	value = (user_chosen_options[user_chosen_options.length - 1])[0];
	feature = value;
	feature_seen.push(value);

	if(feature === "Balanced Speaking"){
		new_dialogue("agent",			"Both speaking and listening are important for a productive discussion. Be mindful of your speaking duration.")
		new_dialogue("agent",			"1. To get the speaker's floor, politely interject with sentences like - 'If I can add something here, ____'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. To release the speaker's floor, one way is to ask an engaging question - 'What do you all think about this idea?'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"Do these make sense?")
		new_dialogue("user_option",		"Yes, a lot", user_options[0])
		new_dialogue("user_option",		"Not much", user_options[1])

		summary_tips.push("Take speaker's floor  -> 'If I can add something here'")
		summary_tips.push("Release speaker's floor -> 'What do you all think about this?'")
	}
	else if(feature === "Handling Disagreement"){
		new_dialogue("agent",			"1. Respectful disagreement is possible through active listening. Try to summarize other's point of view, find a common ground, and then add your perspective.")
		new_dialogue("agent",			"For example, 'I agree with your point about ___ , I would also like to point out that ___'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Upon being interrupted, acknowledge and address ('If I can quickly finish up my thoughts, ___').", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"Are these suggestions helpful?")
		new_dialogue("user_option",		"Yes", user_options[0])
		new_dialogue("user_option",		"No", user_options[1])

		summary_tips.push("Disagree -> 'I agree with your point-X, but want to add point-Y'.")	
		summary_tips.push("If get interrupted -> 'Let me quickly finish up my point-X, ___'.")	
	}

	else if(feature === "Being Collaborative"){
		new_dialogue("agent",			"1. Study shows that collaborative pronouns ('We' instead of 'I') bring a sense of togetherness.", 'shown_dialogue_option', 1)
		//new_dialogue("agent",			"Add to it, avoiding negative adjectives ('Can be better' instead of 'Bad') keeps up a positive vibe.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Keeping an eye on whether others are able to express their opinions or not establishes a safe space.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"(For example, 'Samantha got interrupted before, let's hear her ideas on this.)")
		
		new_dialogue("user_option",		"Useful tips!", user_options[0])
		new_dialogue("user_option",		"I don't quite see the usefulness, but thanks!", user_options[1])

		summary_tips.push("Pronous -> More 'We' instead of 'I'.")
		summary_tips.push("Offer help -> 'Let attendee-A finish up the thought.'")
	}
}


// function node10(){
// 	console.log('node10');
// 	//new_topic_flow();

// 	user_options = ['0', '1'];
// 	value = (user_chosen_options[user_chosen_options.length - 1])[0];

// 	feature_seen.push([value]);
// 	console.log(feature_seen)

// 	console.log(value);
// 	if( value === "Show me the suggestions" ){
// 		feature = "Language usage";
// 		console.log(feature);
// 		if(feature === "Language usage"){
// 			new_dialogue("agent",			"Study shows that collaborative pronouns ('We' instead of 'I') bring a sense of togetherness.", 'shown_dialogue_option', 1)
// 			new_dialogue("agent",			"Add to it, avoiding negative adjectives ('Can be improved' instead of 'Bad') keeps the focus on positive growth.", 'shown_dialogue_option', 1)
// 			new_dialogue("agent",			"Are the suggestions helpful?")
// 			new_dialogue("user_option",		"Yes", user_options[0])
// 			new_dialogue("user_option",		"No", user_options[1])

// 			summary_tips.push("1. Study shows that collaborative pronouns ('We' instead of 'I') bring a sense of togetherness.")
// 			summary_tips.push("2. Add to it, avoiding negative adjectives ('Can be improved' instead of 'Bad') keeps the focus on positive growth.")

// 		}

// 	}
// 	if( value === "Tell me why I need it" )
// 		new_dialogue("agent",			"X")
// }

function node15() {
	console.log('node12');
	user_options = ['0','1', '2', '3', '4', '5','6','7','8','9']
	new_dialogue("agent",			"We can set a goal to apply these tips in the next meeting.")
	new_dialogue("agent",			"On a scale of 1 (low) to 10 (high), how confident are you that you can carry out this plan for the next week?")
	new_dialogue("user_option",		"1", user_options[0])
	new_dialogue("user_option",		"2", user_options[1])
	new_dialogue("user_option",		"3", user_options[2])
	new_dialogue("user_option",		"4", user_options[3])
	new_dialogue("user_option",		"5", user_options[4])
	new_dialogue("user_option",		"6", user_options[5])
	new_dialogue("user_option",		"7", user_options[6])
	new_dialogue("user_option",		"8", user_options[7])
	new_dialogue("user_option",		"9", user_options[8])
	new_dialogue("user_option",		"10", user_options[9])
}

function node16() {
	console.log('node13');
	user_options = ['shown_dialogue_option'];
	new_dialogue("agent",			"You don't have to be 100% confident to get started, you just need enough confidence to take the first step. Give it a go!")
	new_dialogue("user_option",		"Awesome!")
}

//////////// NEW TOPIC

function node17(){
	console.log('node14');
	new_topic_flow();

	user_options = ['shown_dialogue_option'];
	new_dialogue("agent",			"So, as a final step, let's summarize the plan.")
	new_dialogue("agent",			"You expressed that conversational skill development is important to you. The tips we have discussed to apply are:", 'shown_dialogue_option', 1)
	new_dialogue("agent",			summary_tips[0] + "BREAK"  + summary_tips[1] + "BREAK" + summary_tips[2] + "BREAK" + summary_tips[3] + "BREAK" + summary_tips[4] + "BREAK" +summary_tips[5], 'shown_dialogue_option', 1)
	//new_dialogue("agent",			summary_tips[2] + "BREAK" + summary_tips[3], 'shown_dialogue_option', 1)
	//new_dialogue("agent",			summary_tips[4] + "BREAK" +summary_tips[5], 'shown_dialogue_option', 1)
	//new_dialogue("agent",			, 'shown_dialogue_option', 1)
	new_dialogue("user_option",		"Sounds like a plan!")
}

function node18(){
	console.log('node14');
	user_options = ['shown_dialogue_option'];
	new_dialogue("agent",			"Fantastic! Can't wait to hear how the next meetings goes. Good luck, " + person_name+ "!")
	new_dialogue("user_option",		"Thanks, Mia! Bye.")
}


function node19(){
	console.log('node15');
	save_userinfo("_mi_intro.json", user_chosen_options);
}

















// new_dialogue("user_spoken",		"Hi!")
// new_dialogue("user_spoken",		"Hi, I'm Roboto, your personal feedback assistant.")

// new_dialogue("user_option",		"Participation: Want to speak more")
	
