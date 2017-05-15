

// on instancie un model, une view et un controller


var user = new User('petitPoisson');

var userView = new UserView();

var userController = new UserController(user);



// on ajoute un observeur view au model
user.addObserver(userView);


// on ajoute un observeur controller a la view
userView.addObserver(userController);




