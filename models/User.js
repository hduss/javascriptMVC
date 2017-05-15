

function User(username) {

	//heritage
	observable.call(this);
	
	this.username = username;
}

//heritage de la classe Observable cat le model est un observable
User.prototype = Object.create(observable.prototype);
User.prototype.constructor = User;



User.prototype.setUsername = function(username) {



}