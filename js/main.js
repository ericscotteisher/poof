var fbRef = new Firebase("https://poof.firebaseio.com/");

// push number of characters in message to db
var charNumRef = fbRef.child("charNum");
function pushCharNum(){
	var charNum = $(".poofContent").val().length;
	charNumRef.push({
  		Character_Number: charNum
	});
};

// log how people want to destroy their message
var destroyActionRef = fbRef.child("destroyAction");
function destroyAction(){
	var destroyAction = $(".destroyAction").val();
	destroyActionRef.push({
		Destroy_Action: destroyAction
	});
};
