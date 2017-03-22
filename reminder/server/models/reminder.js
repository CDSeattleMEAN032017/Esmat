var mongoose = require('mongoose');
var reminderlistSchema = new mongoose.Schema({
    name: String,
    title: {type:String, required:true, minlength:5},
    description: {type:String, required:true, minlength:10},
    friend: String,
    done: Boolean
}, {timestamps:true});

mongoose.model('reminderlistdatabase', reminderlistSchema);
