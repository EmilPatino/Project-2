var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Client.findAll({}).then(function(dbClient) {
      res.render("index", {
        msg: "Welcome!",
        client: dbClient
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Client.findOne({ where: { id: req.params.id } }).then(function() {
      res.render("example", {
        client: dbClient
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
