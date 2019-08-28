module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("clients", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Client;
};
