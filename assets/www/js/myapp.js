'use strict';

function MyApp() {
	
	this.initFirebase();
	this.loadMessages();


}


MyApp.prototype.initFirebase = function() {
	console.log("init firebase")
  	// Shortcuts to Firebase SDK features.
  	this.auth = firebase.auth();
  	this.database = firebase.database();
  	this.storage = firebase.storage();
  };

// Saves a new message on the Firebase DB.
MyApp.prototype.saveMessage = function(lang, long, name) {
	
	// Add a new message entry to the Firebase Database.
	this.messagesRef.push({
		name: name,
		lang: lang,
		long: long,
	});

};

MyApp.prototype.loadMessages = function() {

  // Reference to the /messages/ database path.
  this.messagesRef = this.database.ref('messages');// users로 바꾸기
  // Make sure we remove all previous listeners.
  this.messagesRef.off();

  this.messegesRef.on('child_added',setMessage);

  this.messegesRef.on('child_added',);  // 익명함수 사용
   this.messegesRef.on('child_added', function(data));  // 익명함수 사용

  // Loads messages and listen for new ones.
  var setMessage = function(data) {  // set message 했을때 수행행

 	var val = data.val();
 	//this.userModule.add(val);

  	$('#visited').append('<li class="ui-li ui-li-static ui-btn-up-c">' + 
  		" lang : " + val.lang + "<br> long : " + val.long + "<br> name : "+ val.name + '</li>');

  }.bind(this);

  this.messagesRef.on('child_added', setMessage);
};