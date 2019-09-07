// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/newclient", function(req, res) {
    var query = {};
    if (req.query.clients_id) {
      query.ClientsId = req.query.clients_id;
    }
    db.Post.findAll({
      include: [db.Clients],
      where: query
    }).then(function(data) {
      var hbsObject = { clients: data };
      res.render("index", hbsObject);
      console.log(JSON.stringify(db))
    });
  });



  // POST route for saving a new post
  app.post("/newclient", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });


  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/charts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};

