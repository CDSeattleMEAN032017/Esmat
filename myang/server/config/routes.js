var cats = require("./../controller/cats.js")
console.log(cats)
module.exports = function(app){
    app.get("/", function(req, res){
        cats.index(req, res)
    })
    app.post("/cat/add", function(req, res){
        cats.add(req, res)
    })
    app.get('/cat/delete/:id', function(req, res){
        cats.delete(req, res)
    })
    app.post('/cat/edit/:id', function(req, rest){
        cats.findOne({_id: req.params.id}, function(err, data){
            var cat = data;
            cat.name = req.body.name;
            cat.age = req.body.age;
            cat.save(function(err, data){
                if(err)
                throw err;
                res.json(data);
            })

        })
    })
}
