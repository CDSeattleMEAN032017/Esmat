var reminderlist = require('./../controllers/reminders.js');

module.exports = function(app){
	app.post('/login', function(req, res){
		reminderlist.loginName(req, res);
	})
	app.post('/item', function(req, res){
		reminderlist.addItem(req, res);
	})

	app.post('/item2', function(req, res){
		reminderlist.addItem(req, res);
	})

	app.get('/items/:name', function(req, res){
		reminderlist.getItems(req, res);
	})

	app.get('/itemsdone/:name', function(req, res){;
		reminderlist.getItemsDone(req, res);
	})

	app.get('/itemsnotdone/:name', function(req, res){
		reminderlist.getItemsNotDone(req, res);
	})

	app.get('/names/:name', function(req, res){
		reminderlist.getNames(req, res);
	})
	// app.get('/logout', function(req, res){
	// session.logout(req, res)
	// })

	app.get('/done/:id', function(req, res){
		reminderlist.done(req, res);
	})
}
