
init_timer = 100 
increment_timer = 1500	//400
user_response = 0
user_options = ['shown_dialogue_option']
user_chosen_options = []
user_text_input = ""
how_many_agent_dialogue = 0
feature = ""
summary_tips = []

new_dialogue("agent",			"Hi, I'm Mia. Welcome to the motivational interview session!")
new_dialogue("user_option",		"Hello!")

function node1(){
	console.log('node1');
	new_dialogue("agent",			"We will work together to set your conversational skill development goals.")
	new_dialogue("agent",			"My capabilities can be limited sometimes, but I’m here with you to help as much as possible.")
	new_dialogue("user_option",		"Got it.")
}


function node2(){
	console.log('node2');
	new_dialogue("agent",			"Learning to be better at team discussion needs effort.")
	new_dialogue("agent",			"You've already taken the first step by being in this session.")
	new_dialogue("user_option",		"Thanks!")
}

function node3(){
	console.log('node3');
	user_options = ['shown_dialogue_option_1', 'shown_dialogue_option_2', 'shown_dialogue_option_3', 'shown_dialogue_option_4']
	new_dialogue("agent",			"First, can you please tell me approximately how many meetings do you attend per week?")
	new_dialogue("user_option",		"1 to 2", user_options[0])
	new_dialogue("user_option",		"3 to 5", user_options[1])
	new_dialogue("user_option",		"5 to 10", user_options[2])
	new_dialogue("user_option",		"More than 10", user_options[3])
}

function node4(){
	console.log('node4');
	user_options = ['1', '2', '3', '4', '5']
	new_dialogue("agent",			"And how satisfied are you with those meetings, on a range of 1 (Highly Dissatisfied) to 5 (Highly Satisfied)?")
	new_dialogue("user_option",		"1", user_options[0])
	new_dialogue("user_option",		"2", user_options[1])
	new_dialogue("user_option",		"3", user_options[2])
	new_dialogue("user_option",		"4", user_options[3])
	new_dialogue("user_option",		"5", user_options[4])
}

function node5(){
	console.log('node5');
	new_dialogue("agent",			"Can you tell me about the last group discussion you were dissatisfied with? What made you feel that way? ")
	new_dialogue("agent",			"The more detail that you can provide, the better I would be understand your situation.")
	
	init_timer = init_timer + increment_timer
	setTimeout(function(){ add_textbox(); }, init_timer);
}


function node6(){
	console.log('node6');
	user_options = ['0','1', '2', '3', '4', '5','6','7','8','9']
	new_dialogue("agent",			"On a scale of 0 (low) to 9 (high), how would you evaluate your conversational performance during the meetings?") 
	new_dialogue("user_option",		"0", user_options[0])
	new_dialogue("user_option",		"1", user_options[1])
	new_dialogue("user_option",		"2", user_options[2])
	new_dialogue("user_option",		"3", user_options[3])
	new_dialogue("user_option",		"4", user_options[4])
	new_dialogue("user_option",		"5", user_options[5])
	new_dialogue("user_option",		"6", user_options[6])
	new_dialogue("user_option",		"7", user_options[7])
	new_dialogue("user_option",		"8", user_options[8])
	new_dialogue("user_option",		"9", user_options[9])
}


function node7(){
	console.log('node7');
	user_options = ['shown_dialogue_option'];
	value = Number(user_chosen_options[user_chosen_options.length - 1]);
	if( value < 5 )
		new_dialogue("agent",			"You selected " + value.toString()+". It is valuable to be able to identify the room for improvement.")
	if( value > 4 )
		new_dialogue("agent",			"You selected " + value.toString()+". We are off to a strong start!")
	//new_dialogue("agent",			"Let's dive deeper, shall we?")
	new_dialogue("user_option",		"Good to hear that!")
}

function node8(){
	console.log('node8');
	new_dialogue("agent",			"If you DON'T make any changes in ways you participate in discussions, how will that affect your productivity and performance?")
	
	init_timer = init_timer + increment_timer
	setTimeout(function(){ add_textbox(); }, init_timer);
}

function node9(){
	console.log('node9');
	user_options = ['0','1', '2', '3', '4', '5','6','7','8','9']
	new_dialogue("agent",			"In that case, how much does it worry or concern you?")
	new_dialogue("user_option",		"0", user_options[0])
	new_dialogue("user_option",		"1", user_options[1])
	new_dialogue("user_option",		"2", user_options[2])
	new_dialogue("user_option",		"3", user_options[3])
	new_dialogue("user_option",		"4", user_options[4])
	new_dialogue("user_option",		"5", user_options[5])
	new_dialogue("user_option",		"6", user_options[6])
	new_dialogue("user_option",		"7", user_options[7])
	new_dialogue("user_option",		"8", user_options[8])
	new_dialogue("user_option",		"9", user_options[9])
}


function node10(){
	console.log('node10');
	user_options = ['shown_dialogue_option'];
	value = Number(user_chosen_options[user_chosen_options.length - 1]);
	if( value < 5 )
		new_dialogue("agent",			"You selected " + value.toString()+". Great confidence! Knowing the strengths is important.")
	if( value > 4 ){
		new_dialogue("agent",			"You selected " + value.toString()+". Recognizing the need is an important step towards bringing changes.")
		//new_dialogue("agent",			"Let's set up some goals to bring positive changes.")
	}
	new_dialogue("agent",			"Let's dive deeper, shall we?")
	new_dialogue("user_option",		"I'm ready")
	//new_dialogue("user_option",		"Show me the suggestions", user_options[0])
	//new_dialogue("user_option",		"Tell me why I need it", user_options[1])
}

//////////// NEW TOPIC

function node11(){
	console.log('node11');
	new_topic_flow();
	user_options = ['1', '2', '3', '4', '5']
	new_dialogue("agent",			"Which one is the most challenging to you in a meeting?")
	new_dialogue("user_option",		"Speaking more/less", user_options[0])
	new_dialogue("user_option",		"Interrupting others/Getting interrupted", user_options[1])
	new_dialogue("user_option",		"Shouting/Being shouted at", user_options[2])
	new_dialogue("user_option",		"Language usage", user_options[3])
	new_dialogue("user_option",		"Expressing emotion", user_options[4])
}

function node12(){
	console.log('node12');
	//new_topic_flow();
	user_options = ['0', '1']
	new_dialogue("agent",			"With refined word choices and argument structres, we can deliver our thoughts in a clear and powerful manner.")
	new_dialogue("user_option",		"Show me the suggestions", user_options[0])
	new_dialogue("user_option",		"Tell me why I need it", user_options[1])
}



//////////// NEW TOPIC


function node13(){
	console.log('node13');
	//new_topic_flow();

	user_options = ['0', '1'];
	value = user_chosen_options[user_chosen_options.length - 1];
	console.log(value);
	console.log(user_chosen_options);
	if( value === "Show me the suggestions" ){
		feature = "Language usage";
		console.log(feature);
		if(feature === "Language usage"){
			new_dialogue("agent",			"Study shows that collaborative pronouns ('We' instead of 'I') bring a sense of togetherness.", 'shown_dialogue_option', 1)
			new_dialogue("agent",			"Add to it, avoiding negative adjectives ('Can be improved' instead of 'Bad') keeps the focus on positive growth.", 'shown_dialogue_option', 1)
			new_dialogue("agent",			"Are the suggestions helpful?")
			new_dialogue("user_option",		"Yes", user_options[0])
			new_dialogue("user_option",		"No", user_options[1])

			summary_tips.push("1. Study shows that collaborative pronouns ('We' instead of 'I') bring a sense of togetherness.")
			summary_tips.push("2. Add to it, avoiding negative adjectives ('Can be improved' instead of 'Bad') keeps the focus on positive growth.")

		}

	}
	if( value === "Tell me why I need it" )
		new_dialogue("agent",			"X")
}

function node14() {
	console.log('node14');
	user_options = ['0','1', '2', '3', '4', '5','6','7','8','9']
	new_dialogue("agent",			"We can set a goal to apply these tips in the next meeting.")
	new_dialogue("agent",			"How confident are you that you can carry out this plan for the next week? Provide a rating from 0 (not at all confident) to 9 (really confident).")
	new_dialogue("user_option",		"0", user_options[0])
	new_dialogue("user_option",		"1", user_options[1])
	new_dialogue("user_option",		"2", user_options[2])
	new_dialogue("user_option",		"3", user_options[3])
	new_dialogue("user_option",		"4", user_options[4])
	new_dialogue("user_option",		"5", user_options[5])
	new_dialogue("user_option",		"6", user_options[6])
	new_dialogue("user_option",		"7", user_options[7])
	new_dialogue("user_option",		"8", user_options[8])
	new_dialogue("user_option",		"9", user_options[9])
}

function node15() {
	console.log('node15');
	user_options = ['shown_dialogue_option'];
	new_dialogue("agent",			"You don't have to be 100% confident to get started, you just need enough confidence to take the first step. Give it a go!")
	new_dialogue("user_option",		"Awesome!")
}

//////////// NEW TOPIC

function node16(){
	console.log('node16');
	new_topic_flow();

	user_options = ['shown_dialogue_option'];
	new_dialogue("agent",			"As a final step, let's summarize the plan.")
	new_dialogue("agent",			"We discussed about " + feature + ". You received two tips to be used in your next meeting.", 'shown_dialogue_option', 1)
	new_dialogue("agent",			summary_tips[0], 'shown_dialogue_option', 1)
	new_dialogue("agent",			summary_tips[1], 'shown_dialogue_option', 1)
	new_dialogue("user_option",		"Sounds like a plan!")
}

function node17(){
	console.log('node17');
	user_options = ['shown_dialogue_option'];
	new_dialogue("agent",			"Fantastic! Can't wait to hear how the next meetings goes. Good luck!")
	new_dialogue("user_option",		"Thanks! Bye")
}


function node18(){
	console.log('node17');
}

















// new_dialogue("user_spoken",		"Hi!")
// new_dialogue("user_spoken",		"Hi, I'm Roboto, your personal feedback assistant.")

// new_dialogue("user_option",		"Participation: Want to speak more")
	
