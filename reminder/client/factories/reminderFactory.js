myApp.factory('reminderFactory', function($http){

	var user = [];

	var items = [];

	var factory = {};

	factory.loginUser = function(data, callback){
		user.push(data);
		callback(console.log(user));
	}

	factory.logoutUser = function(callback){
		user = "";
		callback();
	}

	factory.getUser = function(callback){
		console.log("user in getUser", user);
		callback(user);
	}

	factory.getNames = function(name, callback){
		$http.get('/names/'+name).then(function(data){
			callback(data.data);
		});
	}

	factory.getItems = function(name, callback){
		console.log("getItems reminderFactory", name);
		$http.get('/items/'+name).then(function(data){
			callback(data);
		});
	}

	factory.getItemsDone = function(name, callback){
		console.log("getItemsDone reminderFactory", name);
		$http.get('/itemsdone/'+name).then(function(data){
			callback(data);
		});
	}

	factory.getItemsNotDone = function(name, callback){
		console.log("getItemsNotDone reminderFactory", name);
		$http.get('/itemsnotdone/'+name).then(function(data){
			callback(data);
		});
	}

	factory.done = function(id, callback){
		console.log("done reminderFactory", id);
		$http.get('/done/'+id).then(function(data){
			callback(data);
		});
	}


	factory.addItem = function(info, callback){
		console.log("got to reminderFactory addItem");
		$http.post('/item', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				items.push(data);
				callback(items);
			}
		})
	}

	factory.addItem2 = function(info, callback){
		console.log("got to reminderFactory addItem2");
		$http.post('/item2', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				items.push(data);
				callback(items);
			}
		})
	}

	return factory;
})
