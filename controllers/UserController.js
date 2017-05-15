
function UserController(user) {

	this.model = user;

}



UserController.prototype.update = function(label, data) {

	// on verify si la notif est la bonne
	if (label === 'change-username') {

		//si vrai, on set le username
		this.model.setUsername(data.username);

	};


}


