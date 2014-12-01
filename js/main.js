var fbRef = new Firebase("https://poof.firebaseio.com/");
var counterNum;

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

// Pull number of poofs from the database to display in counter
var counterRef = new Firebase("https://poof.firebaseio.com/charNum");
counterRef.on("value", function(snapshot) {
	counterNum = Object.keys(snapshot.val()).length;
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});

// Hide first section and display second section on poof
function swapSections(){
	$('#first').hide();
	$('#second').fadeIn();
	document.getElementById('counter').innerHTML = counterNum;
	$("#counter").counter({
	  countFrom: 0,
	  countTo: counterNum,        // count to this number, default: 0
	});
};
