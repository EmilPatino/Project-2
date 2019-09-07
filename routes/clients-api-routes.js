var db = require("../models");

module.exports = function(app) {
  // app.get("/api/clients", function(req, res) {
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.Clients.findAll({
  //     include: [db.Post]
  //   }).then(function(dbClients) {
  //     res.json(dbClients);
  //   });
  // });

  // app.get("/api/clients/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.Clients.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Post]
  //   }).then(function(dbClients) {
  //     res.json(dbClients);
  //   });
  // });

  app.post("/api/clients", function(req, res) {
    db.Clients.create(req.body).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  app.delete("/api/clients/:id", function(req, res) {
    db.Clients.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbClients) {
      res.json(dbClients);
    });
  });

};

