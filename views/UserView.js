

function UserView() {

	//heritage
	observable.call(this);

}


//heritage de la classe observable
UserView.prototype = Object.create(observable.prototype);
UserView.prototype.constructor = UserView;


UserView.prototype.update = function(label, data) {



}


