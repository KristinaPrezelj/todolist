var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//connection to db
mongoose.connect(
  "mongodb+srv://klornakiselina:Mongodb89*@cluster0-rb7b9.mongodb.net/todo?retryWrites=true",
  { useNewUrlParser: true }
);

//creating schema-how data or objects will look like so the mDB knows what kind of data to expect
var todoSchema = new mongoose.Schema({
  item: String
});

//model which is going to be stored as a collection
var Todo = mongoose.model("Todo", todoSchema);

module.exports = function(app) {
  //GET REQUEST-GET DATA FROM DB AND PASS IT TO THE VIEW
  app.get("/todo", function(req, res) {
    Todo.find({}, function(err, data) {
      if (err) throw err;
      res.render("todo", { todos: data });
    });

    //POST REQUEST-GET DATA FROM VIEW AND ADD IT TO THE DB
    app.post("/todo", urlencodedParser, function(req, res) {
      var newTodo = Todo(req.body).save(function(err, data) {
        if (err) throw err;
        res.json(data);
      });
    });

    app.delete("/todo/:item", function(req, res) {
      console.log("Izbriši ovaj item: ", req.params.item.replace(/\:/g, "")); // TU SAM PROMJENIO
      //delete requested data from db
      Todo.findOneAndDelete(
        { item: req.params.item.replace(/\:/g, "") },
        function(err, data) {
          if (err) throw err;
          console.log("DAta: ", data)
          res.json(data);
        }
      ).then(console.log);
    });
  });
};
