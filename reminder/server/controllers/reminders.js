var mongoose = require('mongoose');
var reminder = mongoose.model('reminderlistdatabase');
var namedatabase = mongoose.model('userDb');

module.exports = (function() {
	return {
		addItem: function(req,res){
			item = new reminder(req.body);
			item.save(function(err, item){
				if(err){
					console.log(err);
				} else {
					res.json(item);
				}
			})
		},

		loginName: function(req,res){
			name = new namedatabase(req.body);
			name.save(function(err, item){
				if(err){
					console.log(err);
					res.json(item);
				} else {
					res.json(item);
				}
			})
		},
		getItems: function(req, res){
			reminder.find({name: req.params.name}, function(err, mongooses){
				if(err){
					console.log(err);
				} else {
					res.json(mongooses);
				}
			})
		},

		getItemsDone: function(req, res){
			reminder.find({$and:[{name: req.params.name}, {done:true}]}, function(err, mongooses){
				if(err){
					console.log(err);
				} else {
					console.log("got items!");
					res.json(mongooses);
				}
			})
		},

		getItemsNotDone: function(req, res){
			reminder.find({$and:[{name: req.params.name}, {done:false}]}, function(err, mongooses){
				if(err){
					console.log(err);
				} else {
					res.json(mongooses);
				}
			})
		},

		getNames: function(req, res){
			namedatabase.find({name:{$ne: req.params.name}}, function(err, mongooses){
				if(err){
					console.log(err);
				} else {
					res.json(mongooses);
				}
			})
		},

		// logout: function(req, res){
		// 	req.session.destroy();
		// 	res.redirect('/')
		// },
		done: function(req, res){
			reminder.findOne({_id: req.params.id}, function(err, reminder){
				if(err){
					console.log(err);
				} else {
					reminder.done = true;
					reminder.save(function(err,data){
						if(err){
							console.log(err);
						} else {
							console.log("updated successfully");
						}
					})

				}
			})
		}
	}
})();
