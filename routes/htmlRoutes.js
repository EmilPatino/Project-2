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


  // attempting to load add client handlebars
  app.get("/addclient", function(req, res) {
    db.Clients.findAll({}).then(function(dbClients) {
      res.render("addClient", {
        msg: "Add a client",
        client: dbClients
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
