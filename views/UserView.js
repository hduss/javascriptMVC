

function UserView() {

	//heritage
	observable.call(this);

	this.init();

}


//heritage de la classe observable
UserView.prototype = Object.create(observable.prototype);
UserView.prototype.constructor = UserView;


UserView.prototype.update = function(label, data) {


}


UserView.prototype.init = function() {

	// on selectionne le formulaire // on fait un onsubmit
	document.querySelector('#change-username').onsubmit = (function(e) {
		
		e.preventDefault();

		// on creer un notification -> on la nome en premier parametre et on lui donne des data en 2eme parametre
		this.notify('change-username', {

			//username: est la valeur de l'input #username
			username: document.getElementById('username').value 
		});

	// ici on bind la function car le this correspond au formulaire et non au userView -> probleme de contexte
	}).bind(this);


}


