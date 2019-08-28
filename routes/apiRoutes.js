var db = require("../models");

module.exports = function(app) {
  // Get all clients
  app.get("/", function(req, res) {
    db.Client.findAll({}).then(function(dbClient) {
      res.json(dbClient);
    });
  });

  // Create a new example
  app.post("/api/client", function(req, res) {
    db.Client.create(req.body).then(function(dbClient) {
      res.json(dbClient);
    });
  });

  // Delete an example by id
  //app.delete("/api/examples/:id", function(req, res) {
    //db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      //res.json(dbExample);
    //});
  //});
};
