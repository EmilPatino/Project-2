var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/clients", function(req, res) {
    db.Client.findAll({}).then(function(clientData) {
      res.json(clientData);
    });
  });

  // Create a new example
  app.post("/api/clients", function(req, res) {
    db.Client.create(req.body).then(function(clientData) {
      res.json(clientData);
    });
  });

  // Delete an example by id
  app.delete("/api/clients/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Client.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
