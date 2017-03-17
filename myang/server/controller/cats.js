var mongoose = require("mongoose")
var Cat = mongoose.model("Cat")

module.exports = (function(){
    return {
        index:function(req, res){
            // res.render("index")

            Cat.find({}, function(err, data){
                res.render("index", {cats: data})
            })
        },
        add:function(req, res){
            var cat = new Cat(req.body)
            cat.save(function(err){
                if(err){
                    return res.json(err)
                }

                return res.redirect("/")
            })

        },
        delete:function(req, res){
            Cat.remove({_id: req.params.id}, function(err){
                res.redirect("/")
            })
        },
        edit:function(req, res){
            Cat.update({_id: req.params.id}, function(err){
                res.redirect("/edit.ejs/")
            })
        }

    }
})()
