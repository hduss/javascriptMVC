

function observable() {
	
	this.observers = [];

}



observable.prototype.addObserver = function(observer) {

	this.observers.push(observer);

}

observable.prototype.removeObserver = function(observer) {

	// renvoi l'index si il existe ou -1 
	var idx = this.obervers.indexOf(observer);

	//si l'observer existe dans le tableau observers
	if (idx != -1) {

		// on le supprime du tableau
		this.observers.splice(idx, 1);

	}

}

observable.prototype.notify = function(label, data) {

	// pour voir les données a chaque fois qu'une notif est envoyée
	console.log(label, data);

	// on parcours notre tableau d'observers
	this.observers.forEach(function(obs) {

		// et on fait un update sur chaque obervers
		obs.update(label, data);

	});


}