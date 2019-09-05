var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Clients.findAll({}).then(function(dbClients) {
      res.render("index", {
        msg: "Welcome!",
        client: dbClients
      });
    });
  });

  // Load add client form
  app.get("/addClient", function(req, res) {
    db.Clients.findAll({}).then(function(dbClients) {
      res.render("addClient", {
        msg: "Add a client",
        client: dbClients
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Clients.findOne({ where: { id: req.params.id } }).then(function(dbClients) {
      res.render("example", {
        client: dbClients
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
