

var express = require("express")
var app = express()
app.get('/', function(request, response){
    response.send("Hello Express World")
})

app.listen(8000, function(){
    console.log("listening on port 8000")
})
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views")
app.set('view engine', 'ejs')

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {fname: "Michael", lname: "Choi", email: "michael@codingdojo.com"},
        {fname: "Jay", lname: "Jay", email: "jay@codingdojo.com"},
        {fname: "Brendan", lname: "Brendan", email: "brendan@codingdojo.com"},
        {fname: "Andrew",lname:"Andr", email: "andrew@codingdojo.com"},
        {fname: "Esmat", lname: "Moh", email: "esmat@gmail.com"},

    ];
    response.render('users', {users: users_array});
})
