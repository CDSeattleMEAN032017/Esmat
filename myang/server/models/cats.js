var mongoose = require("mongoose")
var Schema = mongoose.Schema
var CatSchema = new Schema({
    name:{type: String, required: true, minlength: 1},
    age:{type: Number, required: true},
})

mongoose.model("Cat", CatSchema)
