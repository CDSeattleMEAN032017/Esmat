var express = require("express")
var app = express()
var path = require("path")
var bp = require("body-parser")
app.use(express.static(path.join(__dirname +"/client")))
app.use(bp.urlencoded())
app.set("views", path.join(__dirname + "/client/views"))
app.set("view engine", "ejs")

require("./server/config/mongoose.js")
require("./server/config/routes.js")(app)


app.listen(8000, function(){
    console.log("listening")
})
