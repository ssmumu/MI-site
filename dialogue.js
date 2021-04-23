
init_timer = 100	//100
increment_timer = 1500	//400, 100
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



function node3(){	
	console.log('node3');
	new_dialogue("agent",			"Can you tell me about the last group discussion you were dissatisfied with? What made you feel that way?")
	//new_dialogue("agent",			"The more detail that you can provide, the better I would be understand your situation.")
	
	init_timer = init_timer + increment_timer
	setTimeout(function(){ add_textbox(""); }, init_timer);
}



function node4(){	//
	console.log('node4');
	user_options = ['0','1', '2']
	new_dialogue("agent",			"Seems like things can be improved. Have you ever noticed other attendees being dissatisfied too?");
	new_dialogue("user_option",		"Yes", user_options[0])
	new_dialogue("user_option",		"No", user_options[1])
	new_dialogue("user_option",		"I didn't notice", user_options[2])
}

function node5(){
	console.log('node5');
	user_options = ['1', '2', '3', '4', '5','6','7','8','9','10'];
	new_dialogue("agent",			"On a scale of 1 (low) to 10 (high), how important is it to you to improve conversational skills in order to help yourself or others in a discussion?");
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

	//new_dialogue("agent",			"So you would try to " + value.split("I can ")[1].split("\r")[0] + " to make progress." )
	new_dialogue("agent",			"So you would " + parse_userinput_summary(value.split("I can ")[1].split("\r")[0]) + " and do much more to make progress." )
	
	new_dialogue("agent",			"Awesome! I can help with finding tips and tricks to improve conversational skills. Let's dive deeper, shall we?")

	new_dialogue("user_option",		"I'm ready")
}





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





function node10(){
	console.log('node10');

	user_options = ['0', '1'];
	value = (user_chosen_options[user_chosen_options.length - 1])[0];
	feature = value;
	feature_seen.push(value);
//	console.log(feature_seen);

//	console.log(value);

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
		new_dialogue("agent",			"1. Respectful disagreement is possible through active listening. Summarize others' points, find common ground, then add your perspective.")
		new_dialogue("agent",			"For example, 'I agree with your point about ___ , I would also like to point out that ___'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Upon being interrupted, acknowledge it and clarify your timing needs. For example: 'If I can quickly finish up my thoughts, ___'.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"Are these suggestions helpful?")
		new_dialogue("user_option",		"Yes", user_options[0])
		new_dialogue("user_option",		"No", user_options[1])

		summary_tips.push("Disagree -> 'I agree with your point-X, but want to add point-Y'.")	
		summary_tips.push("If get interrupted -> 'Let me quickly finish up my point-X, ___'.")			
	}

	else if(feature === "Being Collaborative"){
		new_dialogue("agent",			"1. Studies show that collaborative pronouns bring a sense of togetherness. For example, using 'We' instead of 'I'.", 'shown_dialogue_option', 1)
		//new_dialogue("agent",			"Add to it, avoiding negative adjectives ('Can be better' instead of 'Bad') keeps up a positive vibe.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Also, Keeping an eye on whether others are able to express their opinions establishes a safe space.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"For example, 'Samantha got interrupted before, let's hear her ideas on this.")
		
		new_dialogue("user_option",		"Useful tips!", user_options[0])
		new_dialogue("user_option",		"I don't quite see the usefulness, but thanks!", user_options[1])

		summary_tips.push("Pronouns -> More 'We' instead of 'I'.")
		summary_tips.push("Offer help -> 'Let attendee-A finish up the thought.'")
	}


}



function node11(){
	console.log('node11');
	//new_topic_flow();
	user_options = ['1', '2', '3'];
	//value = (user_chosen_options[user_chosen_options.length - 1])[0];
	//feature = value;
	//feature_seen.push(value);



	new_dialogue("agent",			"Which one would you like to review now?")
//	console.log('check features seen ', feature_seen)

	if (feature_seen.includes("Balanced Speaking")){
//		console.log('seen');
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
		//new_dialogue("agent",			"To summarize: Take speaker's floor  -> 'If I can add something here', Release speaker's floor -> 'What do you all think about this?'")
		new_dialogue("agent",			"Do these make sense?")
		


		new_dialogue("user_option",		"Yes, a lot", user_options[0])
		new_dialogue("user_option",		"Not much", user_options[1])

		summary_tips.push("Take speaker's floor  -> 'If I can add something here'")
		summary_tips.push("Release speaker's floor -> 'What do you all think about this?'")
	}
	else if(feature === "Handling Disagreement"){
		new_dialogue("agent",			"1. Respectful disagreement is possible through active listening. Summarize others' points, find a common ground, and then add your perspective.")
		new_dialogue("agent",			"For example, 'I agree with your point about ___ , I would also like to point out that ___'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Upon being interrupted, acknowledge it and clarify your timing needs. For example: 'If I can quickly finish up my thoughts, ___'.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"Are these suggestions helpful?")
		new_dialogue("user_option",		"Yes", user_options[0])
		new_dialogue("user_option",		"No", user_options[1])

		summary_tips.push("Disagree -> 'I agree with your point-X, but want to add point-Y'.")	
		summary_tips.push("If get interrupted -> 'Let me quickly finish up my point-X, ___'.")	
	}

	else if(feature === "Being Collaborative"){
		new_dialogue("agent",			"1. Studies show that collaborative pronouns bring a sense of togetherness. For example, using 'We' instead of 'I'.", 'shown_dialogue_option', 1)
		//new_dialogue("agent",			"Add to it, avoiding negative adjectives ('Can be better' instead of 'Bad') keeps up a positive vibe.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Also, Keeping an eye on whether others are able to express their opinions establishes a safe space.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"For example, 'Samantha got interrupted before, let's hear her ideas on this.")
		
		new_dialogue("user_option",		"Useful tips!", user_options[0])
		new_dialogue("user_option",		"I don't quite see the usefulness, but thanks!", user_options[1])

		summary_tips.push("Pronouns -> More 'We' instead of 'I'.")
		summary_tips.push("Offer help -> 'Let attendee-A finish up the thought.'")
	}
}



function node13(){
	console.log('node13', feature_seen);
	//new_topic_flow();
	user_options = ['1', '2', '3'];

	// value = (user_chosen_options[user_chosen_options.length - 1])[0];
	// feature = value;
	// feature_seen.push(value);



	new_dialogue("agent",			"Almost there! Let's review the final one.")
	//console.log('check features seen ', feature_seen)

	if (feature_seen.includes("Balanced Speaking")){
	//	console.log('seen');
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
		new_dialogue("agent",			"1. Respectful disagreement is possible through active listening. Summarize others' points, find a common ground, and then add your perspective.")
		new_dialogue("agent",			"For example, 'I agree with your point about ___ , I would also like to point out that ___'", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Upon being interrupted, acknowledge it and clarify your timing needs. For example: 'If I can quickly finish up my thoughts, ___'.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"Are these suggestions helpful?")
		new_dialogue("user_option",		"Yes", user_options[0])
		new_dialogue("user_option",		"No", user_options[1])

		summary_tips.push("Disagree -> 'I agree with your point-X, but want to add point-Y'.")	
		summary_tips.push("If get interrupted -> 'Let me quickly finish up my point-X, ___'.")	
	}

	else if(feature === "Being Collaborative"){
		new_dialogue("agent",			"1. Studies show that collaborative pronouns bring a sense of togetherness. For example, using 'We' instead of 'I'.", 'shown_dialogue_option', 1)
		//new_dialogue("agent",			"Add to it, avoiding negative adjectives ('Can be better' instead of 'Bad') keeps up a positive vibe.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"2. Also, Keeping an eye on whether others are able to express their opinions establishes a safe space.", 'shown_dialogue_option', 1)
		new_dialogue("agent",			"For example, 'Samantha got interrupted before, let's hear her ideas on this.")
		
		new_dialogue("user_option",		"Useful tips!", user_options[0])
		new_dialogue("user_option",		"I don't quite see the usefulness, but thanks!", user_options[1])

		summary_tips.push("Pronouns -> More 'We' instead of 'I'.")
		summary_tips.push("Offer help -> 'Let attendee-A finish up the thought.'")
	}
}




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
	new_dialogue("agent",			"You expressed that conversational skill development is important to you.", 'shown_dialogue_option', 1)
	new_dialogue("agent",			"Summary of the tips we disucssed are:", 'shown_dialogue_option', 1)

	new_dialogue("agent",			summary_tips[0] + "BREAK"  + summary_tips[1] + "BREAK" + summary_tips[2] + "BREAK" + summary_tips[3] + "BREAK" + summary_tips[4] + "BREAK" +summary_tips[5], 'shown_dialogue_option', 1)
	//new_dialogue("agent",			summary_tips[2] + "BREAK" + summary_tips[3], 'shown_dialogue_option', 1)
	//new_dialogue("agent",			summary_tips[4] + "BREAK" +summary_tips[5], 'shown_dialogue_option', 1)
	//new_dialogue("agent",			, 'shown_dialogue_option', 1)
	new_dialogue("user_option",		"Sounds like a plan to apply!")
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
	
